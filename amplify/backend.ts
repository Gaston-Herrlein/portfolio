import { defineBackend } from "@aws-amplify/backend";
import { Stack, Duration } from "aws-cdk-lib";
import { Cors, LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Effect, Policy, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

const backend = defineBackend({});

const apiStack = backend.createStack("api-stack");

const contactLambda = new NodejsFunction(apiStack, "ContactLambda", {
  entry: "./amplify/functions/contact/handler.ts",
  handler: "handler",
  runtime: Runtime.NODEJS_20_X,
  timeout: Duration.seconds(30),
  environment: {
    RESEND_API_KEY: process.env.RESEND_API_KEY || "",
    TO_EMAIL: process.env.TO_EMAIL || "herrleingaston@gmail.com",
    FROM_EMAIL: process.env.FROM_EMAIL || "onboarding@resend.dev",
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY || "",
  },
});

const contactApi = new RestApi(apiStack, "ContactApi", {
  restApiName: "contact-api",
  deploy: true,
  deployOptions: {
    stageName: "dev",
  },
  defaultCorsPreflightOptions: {
    allowOrigins: Cors.ALL_ORIGINS,
    allowMethods: ["POST", "OPTIONS"],
    allowHeaders: ["Content-Type"],
  },
});

const lambdaIntegration = new LambdaIntegration(contactLambda);

const contactResource = contactApi.root.addResource("contact");
contactResource.addMethod("POST", lambdaIntegration);

new Policy(apiStack, "ContactApiPolicy", {
  statements: [
    new PolicyStatement({
      actions: ["execute-api:Invoke"],
      resources: [`${contactApi.arnForExecuteApi("*")}`],
      effect: Effect.ALLOW,
    }),
  ],
});

backend.addOutput({
  custom: {
    API: {
      contactApi: {
        endpoint: contactApi.url,
        region: Stack.of(contactApi).region,
        apiName: "contact-api",
      },
    },
  },
});