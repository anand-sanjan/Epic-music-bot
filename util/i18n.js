const { LOCALE } = require("./Util");
const { join } = require("path");
const i18n = require("i18n");

i18n.configure({
  locales: [
    "ar",
    "de",
    "el",
    "en",
    "es",
    "fr",
    "id",
    "it",
    "ja",
    "ko",
    "nl",
    "pl",
    "pt_br",
    "ru",
    "sv",
    "th",
    "tr",
    "uk",
    "vi",
    "zh_cn",
    "zh_sg",
    "zh_tw"
  ],
  directory: join(__dirname, "..", "locales"),
  defaultLocale: "en",
  retryInDefaultLocale: true,
  objectNotation: true,
  register: global,

  logWarnFn: function (msg) {
    console.log(msg);
  },

  logErrorFn: function (msg) {
    console.log(msg);
  },

  missingKeyFn: function (locale, value) {
    return value;
  },

  mustacheConfig: {
    tags: ["{{", "}}"],
    disable: false
  }
});

i18n.setLocale(LOCALE);

module.exports = i18n;
