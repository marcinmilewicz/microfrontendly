export type MicroAppLocationTarget = {
  id: string;
  container: string;
};

export type PageConfiguration = {
  path: string;
  apps: MicroAppLocationTarget[];
};

export type MicroAppSources = {
  entryJs: string;
  entryStyle: string;
};

export type MicroAppRoute = {
  id: string;
  path: string;
};

export type MicroAppConfig<Properties = { [key: string]: any }> = {
  selector: string;
  sources: Partial<MicroAppSources>;
  host: string;
  name?: string;
  routes?: MicroAppRoute[];
  properties?: Properties;
};

export type MicroAppsManifest = {
  pages: PageConfiguration[];
  apps: MicroAppConfig[];
};

export const extractRootPath = (pathname: string): string => {
  if (!pathname || typeof pathname !== 'string') {
    throw new Error('Targeted url should be a string.');
  }

  const paths = pathname.split('/');

  if (paths.length < 2) {
    throw new Error('Targeted url is not valid pathname');
  }

  return `/${paths[1]}`;
};

const getByRootPath = (configuration: MicroAppConfig[], pathId: string) => configuration.find((app) => app.selector === pathId);

const getAppBySelector = (configuration: MicroAppConfig[], selector: string) => configuration.find((app) => app.selector === selector);

const getRouteByFullPath = (microAppConfig: MicroAppConfig, fullPath: string) => {
  if (!microAppConfig.routes) {
    return undefined;
  }

  return microAppConfig.routes.find((app) => app.path === fullPath);
};

export const asMicroAppMap = (apps: MicroAppConfig[]): { [key: string]: MicroAppConfig } =>
  apps.reduce((result, app) => {
    if (app.selector) {
      result[app.selector] = app;
    }

    return result;
  }, {});

export const asAppPerMap = (pages: PageConfiguration[]): { [key: string]: MicroAppLocationTarget[] } =>
  pages.reduce((result, page) => {
    if (page.path) {
      result[page.path] = page.apps;
    }

    return result;
  }, {});

export const getMicroAppConfigByPath = (pathname: string, configuration: MicroAppConfig[]): MicroAppConfig => {
  const paths = pathname.split('/');
  if (!paths || !paths[1]) {
    return undefined;
  }

  const resultAfterPrimaryPath = getByRootPath(configuration, paths[1]);
  if (paths.length === 2 || resultAfterPrimaryPath === undefined) {
    return resultAfterPrimaryPath;
  }

  const resultInRoutes = getRouteByFullPath(resultAfterPrimaryPath, pathname);
  return resultInRoutes ? resultAfterPrimaryPath : undefined;
};

export const getAllAppsForRootPath = (path: string, manifest: MicroAppsManifest) => {
  const page: PageConfiguration = manifest.pages.find((page) => page.path === path);

  if (!page || !page.apps) {
    return undefined;
  }

  return page.apps.map((locationTarget) => locationTarget.container);
};
