import { useEffect } from 'react'
import { RewriteFrames } from '@sentry/integrations'
import * as Sentry from '@sentry/react'
import type { BrowserOptions } from '@sentry/react'
import {
  createBrowserRouter,
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType
} from 'react-router-dom'

export const SentryCredentials: BrowserOptions = {
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.VITE_NODE_ENV,
  ignoreErrors: [/Failed to fetch dynamically imported module/g],
  integrations: [
    new RewriteFrames(),
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes
      )
    })
  ],
  tracesSampleRate: 1.0
}

export const sentryCreateBrowserRouter = Sentry.wrapCreateBrowserRouter(createBrowserRouter)
