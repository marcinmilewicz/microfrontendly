import { hasElementRenderedChild, isElementEmpty } from './utils/index';
import loadMicroApp from './app-loader';
import { MicroAppConfig } from './manifest';

const renderIntoContainer = (rootElement: HTMLElement, microAppConfig: MicroAppConfig): void => {
  if (!rootElement || !microAppConfig) {
    return undefined;
  }

  loadMicroApp(microAppConfig)
    .then((config) => {
      const { selector } = config;

      if (isElementEmpty(rootElement)) {
        const renderedElement = document.createElement(selector);

        if (config.properties) {
          Object.keys(config.properties).map((key) => {
            renderedElement[key] = config.properties[key];
          });
        }

        rootElement.append(renderedElement);

        return config;
      }

      if (hasElementRenderedChild(rootElement, selector)) {
        return config;
      }

      rootElement.removeChild(rootElement.firstChild);
      rootElement.appendChild(document.createElement(selector));

      return config;
    })
    .catch(() => {
      if (rootElement.hasChildNodes()) {
        rootElement.removeChild(rootElement.firstChild);
      }
    });
};

export default renderIntoContainer;
