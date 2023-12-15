// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/forgot-password`
  | `/login`
  | `/maintenance`
  | `/register`
  | `/reset-password`
  | `/user-activity`
  | `/user-app-installed`
  | `/user-connect-safe`
  | `/user-guardian`
  | `/user-have-guardian`

export type Params = {}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
