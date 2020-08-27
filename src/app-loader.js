window.__loadedScripts = [];
window.__loadedStyles = [];

const addScript = (name) => {
  if (!window.__loadedScripts.includes(name)) {
    window.__loadedScripts.push(name);
  }
};

const addStyle = (name) => {
  if (!window.__loadedStyles.includes(name)) {
    window.__loadedStyles.push(name);
  }
};

const loadScript = ({ src, componentName }) => {
  if (window.__loadedScripts.includes(componentName)) {
    return Promise.resolve({
      message: `[microapp-shell] ${componentName} app had been loaded before`,
    });
  }

  const scriptElement = document.createElement("script");

  scriptElement.setAttribute("src", src);
  scriptElement.setAttribute("id", componentName);

  return new Promise((resolve, reject) => {
    const onLoad = () => {
      scriptElement.removeEventListener("load", onLoad);
      addScript(componentName);
      resolve({
        message: `[microapp-shell] ${componentName} app has been just loaded`,
      });
    };

    const onError = () => {
      scriptElement.removeEventListener("error", onError);
      reject({
        message: `[microapp-shell] ${componentName} app has not been loaded`,
      });
    };

    scriptElement.addEventListener("load", onLoad);
    scriptElement.addEventListener("error", onError);

    document.body.appendChild(scriptElement);
  });
};

const loadStyle = ({ src, componentName }) => {
  if (window.__loadedStyles.includes(componentName)) {
    return Promise.resolve({
      message: `[microapp-shell] ${componentName} stylesheet had been loaded before`,
    });
  }

  const linkElement = document.createElement("link");

  linkElement.setAttribute("type", "text/css");
  linkElement.setAttribute("rel", "stylesheet");
  linkElement.setAttribute("href", src);

  return new Promise((resolve, reject) => {
    const onLoad = () => {
      linkElement.removeEventListener("load", onLoad);
      addStyle(componentName);
      resolve({
        message: `[microapp-shell] ${componentName} stylesheet has been just loaded`,
      });
    };

    const onError = () => {
      linkElement.removeEventListener("error", onError);
      reject({
        message: `[microapp-shell] ${componentName} stylesheet has not been loaded`,
      });
    };

    linkElement.addEventListener("load", onLoad);
    linkElement.addEventListener("error", onError);

    document.head.appendChild(linkElement);
  });
};

const loadMicroApp = (config) => {
  const { host } = config;

  if (!host) {
    throw { message: "Source host is not specified" };
  }

  const { componentName } = config;

  const promises = [];

  const loadedScriptPromise = loadScript({
    src: `${host}/${config.sources.js}`,
    componentName,
  });

  promises.push(loadedScriptPromise);
  if (config.sources.styles) {
    const loadedStylePromise = loadStyle({
      src: `${host}/${config.sources.styles}`,
      componentName,
    });

    promises.push(loadedStylePromise);
  }

  return Promise.all(promises).then((responses) => {
    responses.forEach((response) => console.info(response.message));
    return config;
  });
};

export default loadMicroApp;
