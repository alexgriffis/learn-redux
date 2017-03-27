import Raven from 'raven-js'

const sentry_key = '47ab172f67674d309d81f4536f4a0cd7'
const sentry_app = '152484'
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`

export function logException (ex, context) {
  // Raven.context(context)
  Raven.captureException(ex, {
    extra: context
  })
  /* eslint no-console:0 */
  window && window.console && console.error && console.error(ex)
}
