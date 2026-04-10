import type { Handler, APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

const ResendApiKey = process.env.RESEND_API_KEY || "";
const TO_EMAIL = process.env.TO_EMAIL || "destinatario@example.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev";
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || "";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
  recaptchaToken: string | null;
}

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const parseBody = (event: APIGatewayProxyEvent): ContactPayload => {
  let body: string = event.body || "{}";
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return JSON.parse("{}");
    }
  }
  return body;
};

export const handler: Handler<APIGatewayProxyEvent, APIGatewayProxyResult> = async (event) => {
  const httpMethod = event.httpMethod || (event.requestContext as any)?.http?.method || "POST";

  if (httpMethod === "OPTIONS" || httpMethod === "HEAD") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    const body = parseBody(event);
    const { name, email, message, recaptchaToken } = body;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Faltan campos requeridos" }),
      };
    }

    if (!recaptchaToken || !RECAPTCHA_SECRET_KEY) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Token de reCAPTCHA requerido" }),
      };
    }

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: "POST" }
    );
    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Validación reCAPTCHA fallida" }),
      };
    }

    if (!ResendApiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Resend API Key no configurada" }),
      };
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ResendApiKey}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `Nuevo mensaje de contacto: ${name}`,
        html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f62fe;">Nuevo mensaje desde el portfolio</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong style="color: #333;">Nombre:</strong> ${name}</p>
          <p><strong style="color: #333;">Email:</strong> <a href="mailto:${email}" style="color: #0f62fe;">${email}</a></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong style="color: #333;">Mensaje:</strong></p>
          <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
      }),
    });

    if (!res.ok) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Error interno del servidor" }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Error interno del servidor" }),
    };
  }
};