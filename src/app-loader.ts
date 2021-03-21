import { log } from 'util';
import { MicroAppConfig } from './manifest';

(window as any).__loadedScripts = [];
(window as any).__loadedStyles = [];

const addScript = (name) => {
  if (!(window as any).__loadedScripts.includes(name)) {
    (window as any).__loadedScripts.push(name);
  }
};

const addStyle = (name) => {
  if (!(window as any).__loadedStyles.includes(name)) {
    (window as any).__loadedStyles.push(name);
  }
};

const loadScript = ({ src, selector }) => {
  if ((window as any).__loadedScripts.includes(selector)) {
    return Promise.resolve({
      message: `[microapp-shell] ${selector} app had been loaded before`,
    });
  }

  const scriptElement = document.createElement('script');

  scriptElement.setAttribute('src', src);
  scriptElement.setAttribute('id', selector);

  return new Promise((resolve, reject) => {
    const onLoad = () => {
      scriptElement.removeEventListener('load', onLoad);
      addScript(selector);
      resolve({
        message: `[microapp-shell] ${selector} app has been just loaded`,
      });
    };

    const onError = () => {
      scriptElement.removeEventListener('error', onError);
      reject({
        message: `[microapp-shell] ${selector} app has not been loaded`,
      });
    };

    scriptElement.addEventListener('load', onLoad);
    scriptElement.addEventListener('error', onError);

    document.body.appendChild(scriptElement);
  });
};

const loadStyle = ({ src, selector }) => {
  if ((window as any).__loadedStyles.includes(selector)) {
    return Promise.resolve({
      message: `[microapp-shell] ${selector} stylesheet had been loaded before`,
    });
  }

  const linkElement = document.createElement('link');

  linkElement.setAttribute('type', 'text/css');
  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.setAttribute('href', src);

  return new Promise((resolve, reject) => {
    const onLoad = () => {
      linkElement.removeEventListener('load', onLoad);
      addStyle(selector);
      resolve({
        message: `[microapp-shell] ${selector} stylesheet has been just loaded`,
      });
    };

    const onError = () => {
      linkElement.removeEventListener('error', onError);
      reject({
        message: `[microapp-shell] ${selector} stylesheet has not been loaded`,
      });
    };

    linkElement.addEventListener('load', onLoad);
    linkElement.addEventListener('error', onError);

    document.head.appendChild(linkElement);
  });
};

const loadMicroApp = (config: MicroAppConfig) => {
  const { host } = config;

  if (!host) {
    throw { message: 'Source host is not specified' };
  }

  const { selector } = config;

  const promises = [];

  const loadedScriptPromise = loadScript({
    src: `${host}/${config.sources.entryJs}`,
    selector,
  });

  promises.push(loadedScriptPromise);
  if (config.sources.entryStyle) {
    const loadedStylePromise = loadStyle({
      src: `${host}/${config.sources.entryStyle}`,
      selector,
    });

    promises.push(loadedStylePromise);
  }

  return Promise.all(promises).then((responses) => {
    responses.forEach((response) => console.info(response.message));
    return config;
  });
};

export default loadMicroApp;
