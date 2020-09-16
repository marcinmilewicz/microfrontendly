import { asAppPerMap, asMicroAppMap, MicroAppConfig, PageConfiguration } from './manifest';

export const registerApps = (apps: MicroAppConfig[], global = window): void => {
  global.__microfrontendly.registeredApps = asMicroAppMap(apps);
};

export const registerPaths = (pages: PageConfiguration[], global = window): void => {
  global.__microfrontendly.registeredPages = asAppPerMap(pages);
};
