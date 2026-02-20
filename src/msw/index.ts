import { setupWorker } from 'msw/browser'
import { signInHandler } from './handlers/signInHandler'

export const worker = setupWorker(signInHandler)
