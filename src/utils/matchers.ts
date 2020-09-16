import { MicroAppConfig } from '../manifest';

const isMicroAppConfig = (microAppConfig: MicroAppConfig): microAppConfig is MicroAppConfig => {
  return !!(microAppConfig as MicroAppConfig).selector;
};

expect.extend({
  toBeMicroAppWithSelector(received, selector) {
    if (typeof selector !== 'string') {
      throw new Error('expected selector to be a string');
    }

    if (!isMicroAppConfig(received)) {
      throw new Error('expected received to be a MicroAppConfig');
    }

    return received.selector === selector
      ? {
          pass: true,
          message: () => `Expected ${received.selector} selector has correct ${selector} value`,
        }
      : {
          pass: false,
          message: () => `Expected ${received.selector} selector has not correct ${selector} value`,
        };
  },
});
