import React from 'react';

const Header = () => {
  const pages = [
    {
      name: 'Foo MicroApp: ',
      app: 'foo-microapp',
      path: '/foo-microapp',
      children: [
        {
          name: '| First |',
          path: '/foo-microapp/first'
        },
        {
          name: '| Second |',
          path: '/foo-microapp/second'
        }
      ]
    },
    {
      name: 'Bar Micro App: ',
      app: 'bar-microapp',
      path: '/bar-microapp',
      children: [
        {
          name: '| First |',
          path: '/bar-microapp/first'
        },
        {
          name: '| Second |',
          path: '/bar-microapp/second'
        }
      ]
    }
  ];
  const getLinksForApp = ({ name, children, app, path }) => {
    const result = [ { className: 'link-parent', name, key: name, path } ];
    const childrenLinks = children.map((child) => ({
      className: 'link-children',
      name: child.name,
      path: child.path,
      key: `${name}-${child.name}`,
      app
    }));
    return result.concat(childrenLinks);
  };

  const chooseChild = ({ app, path }) => document.dispatchEvent(new CustomEvent('routeChanged', {
    detail: {
      route: {
        app,
        path
      }
    }
  }));

  return (
    <div className="toolbar" role="banner">
      <div className="shell-nav">
        <ul id="shell-nav-links">
          {pages.map((appConfig) =>
            getLinksForApp(appConfig).map(({ key, className, name, path, app }) => (
              <li key={key} className={className} role="menuitem" onClick={() => chooseChild({ app, path })}
                  onKeyDown={() => chooseChild({ app, path })}>
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
