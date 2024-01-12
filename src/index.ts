import { App } from 'vue';

import { default as checkField } from './lib-components/LktFieldCheck.vue';

import "./../lkt-field-check.css";

const LktFieldCheck = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-field-check') === undefined) app.component('lkt-field-check', checkField);
  },
};

export default LktFieldCheck;
