const { REACT_APP_API_ROOT } = process.env;

const config = {
  API_ROOT: REACT_APP_API_ROOT,
  DEFAULT_LANGUAGE: 'en',
  THEMES: [
    { id: 1, theme: "light" },
    { id: 2, theme: "dark" }
  ],
  API_LANGUAGES: [
    {id: 1, code: 'ru', title: 'Русский'},
    {id: 2, code: 'uz', title: 'Узбекский'},
    {id: 3, code: 'en', title: 'Английский'},
  ]

};

export default config;