import { registerApps, registerPaths } from './registerApps';
import { extractRootPath, MicroAppConfig, MicroAppLocationTarget, MicroAppsManifest } from './manifest';
import renderIntoContainer from './renderer';
import { registerEvents } from './registerEvents';

export interface MicrofrontendlyContext {
  configUri: string;
  container: HTMLElement;
  withContainer: (container: HTMLElement) => MicrofrontendlyContext;
  listen: () => Promise<MicroAppsManifest>;
}

export const Microfrontendly = (configUri: string): MicrofrontendlyContext => {
  window.__microfrontendly = {};
  const renderForPath = (path: string) => {
    const rootPath = extractRootPath(path);
    const targets: MicroAppLocationTarget[] = window.__microfrontendly.registeredPages[rootPath];

    targets.forEach((target) => {
      const { container, id } = target;
      const app: MicroAppConfig = window.__microfrontendly.registeredApps[id];
      const element = document.getElementById(container);

      renderIntoContainer(element, app);
    });
  };

  const initializeMicrofrontendEngine = (configuration: MicroAppsManifest) => {
    registerApps(configuration.apps);
    registerPaths(configuration.pages);

    renderForPath(window.location.pathname);
    registerEvents(renderForPath);

    return configuration;
  };

  const withContainer = (container) => {
    context.container = container;
    return context;
  };

  const listen = () =>
    fetch(context.configUri)
      .then((resp) => resp.json())
      .then(initializeMicrofrontendEngine);

  const context = {
    configUri,
    container: document.body,
    withContainer,
    listen,
  };

  return context;
};
