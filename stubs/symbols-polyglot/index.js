// Empty stand-in for the translation plugin.
// smbls only uses the plugin when context.polyglot is set, and this site never sets it.
const noop = () => {}

export const polyglotPlugin = {}
export const translate = noop
export const setLang = noop
export const getActiveLang = noop
export const getLanguages = noop
export const loadTranslations = noop
export const upsertTranslation = noop
export const initPolyglot = noop
export const getLocalStateLang = noop
