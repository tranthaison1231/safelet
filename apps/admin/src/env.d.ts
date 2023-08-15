interface ImportMetaEnv {
  readonly VITE_BASE_API: string
  readonly VITE_SENTRY_DSN: string
  readonly VITE_NODE_ENV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
