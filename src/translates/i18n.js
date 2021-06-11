import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './en.json'
import vn from './vn.json'

const detectionOptions = {
  order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  lookupFromPathIndex: 0,
  lookupQuerystring: 'lng',
  lookupCookie: 'meine_nanny_i18next',
  // cache user language on
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'KT_DOMAIN',
  cookieOptions: { path: '/', sameSite: 'strict' }

}
const resources = {
  en,
  vn
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    detection: detectionOptions
    // lng: 'vn', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  })
i18n.languages = ['vn', 'en']

export default i18n
