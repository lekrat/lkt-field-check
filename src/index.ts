import { App } from 'vue';

import { default as checkField } from './lib-components/LktFieldCheck.vue';

const LktFieldCheck = {
  install: (app: App) => {
    app.component('lkt-field-check', checkField);
  },
};

export default LktFieldCheck;
