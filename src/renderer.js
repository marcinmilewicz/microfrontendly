import { getMicroAppConfigByPath, isElementEmpty, hasElementRenderedChild } from './utils';
import loadMicroApp from './app-loader';

const render = (rootElement, pathname, configuration) => {
  const microAppConfig = getMicroAppConfigByPath(pathname, configuration);

  if (!rootElement || !pathname || !microAppConfig) {
    return undefined;
  }

  return loadMicroApp(microAppConfig)
    .then((config) => {
      const componentName = config.componentName || 'div';

      if (isElementEmpty(rootElement)) {
        rootElement.append(document.createElement(componentName));
        return config;
      }

      if (hasElementRenderedChild(rootElement, componentName)) {
        return config;
      }

      rootElement.removeChild(rootElement.firstChild);
      rootElement.appendChild(document.createElement(componentName));

      return config;
    })
    .catch(() => {
      if (rootElement.hasChildNodes()) {
        rootElement.removeChild(rootElement.firstChild);
      }
    });
};

export default render;
