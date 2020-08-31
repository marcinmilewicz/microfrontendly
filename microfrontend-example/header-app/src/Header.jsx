import React from 'react';

const Header = ({ configuration }) => {
  const { apps } = configuration;

  console.log(configuration);

  const getLinksForApp = (appConfig) => {
    return appConfig.routes.reduce((result, { name, path, children }) => {
      const app = appConfig.componentName;
      result.push({ className: 'link-parent', name, key: name, path });
      const childrenLinks = children.map((child) => ({ className: 'link-children', name: child.name, path: child.path, key: `${name}-${child.name}`, app }));
      return result.concat(childrenLinks);
    }, []);
  };

  const chooseChild = ({ app, path }) => document.dispatchEvent(new CustomEvent('routeChanged', { detail: { route: { app, path } } }));

  return (
    <div className="toolbar" role="banner">
      <div className="shell-nav">
        <ul id="shell-nav-links">
          {apps
            .filter((appConfig) => appConfig.routes && Array.isArray(appConfig.routes))
            .map((appConfig) =>
              getLinksForApp(appConfig).map(({ key, className, name, path, app }) => (
                <li key={key} className={className} role="menuitem" onClick={() => chooseChild({ app, path })} onKeyDown={() => chooseChild({ app, path })}>
                  {name}
                </li>
              ))
            )}
        </ul>
      </div>
      <div className="spacer" />
    </div>
  );
};

export default Header;
