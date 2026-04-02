/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY: string;
  readonly VITE_CONTACT_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  grecaptcha: {
    execute: (
      siteKey: string,
      options: { action: string }
    ) => Promise<string>;
  };
}
