export const getMicroAppConfigByPath = (pathname, configuration) => {
  const paths = pathname.split('/');

  if (!paths || !paths[1]) return undefined;

  return configuration.apps.find((app) => app.componentName === paths[1]);
};

export const getMicroAppConfigByName = (name, configuration) => configuration.apps.find((app) => app.componentName === name);

export const isElementEmpty = (element) => !element.hasChildNodes();

export const hasElementRenderedChild = (element, componentName) => element.firstChild.nodeName.toUpperCase() === componentName.toUpperCase();
