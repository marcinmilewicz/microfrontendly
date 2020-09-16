export {};

declare global {
  interface Window {
    __microfrontendly: { registeredApps?: {}; registeredPages?: {} };
  }

  namespace jest {
    interface Matchers<R> {
      toBeMicroAppWithSelector: (expected: string) => CustomMatcherResult;
    }
  }
}
