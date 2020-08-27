import React from 'react';

const Header = () => {
  const configuration = {
    containerId: 'shell-container',
    apps: [
      {
        componentName: 'foo-microapp',
        sources: {
          js: 'foo-microapp.js',
          styles: 'styles.css',
        },
        host: 'http://localhost:6001',
        routes: [
          {
            name: 'Foo MicroApp: ',
            path: '/foo-microapp',
            children: [
              {
                name: '| First |',
                path: '/foo-microapp/first',
              },
              {
                name: '| Second |',
                path: '/foo-microapp/second',
              },
            ],
          },
        ],
      },
      {
        componentName: 'bar-microapp',
        sources: {
          js: 'bar-microapp.js',
          styles: 'styles.css',
        },
        host: 'http://localhost:6002',
        routes: [
          {
            name: 'Bar Micro App: ',
            path: '/bar-microapp',
            children: [
              {
                name: '| First |',
                path: '/bar-microapp/first',
              },
              {
                name: '| Second |',
                path: '/bar-microapp/second',
              },
            ],
          },
        ],
      },
    ],
  };

  const { apps } = configuration;

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
          {apps.map((appConfig) =>
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
