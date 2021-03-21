import React from 'react';
import PropTypes from 'prop-types';
import AngularLogo from './logos/AngularLogo';
import ReactLogo from './logos/ReactLogo';

const Header = ({ routes }) => {
  const getLinksForApp = ({ name, children, app, path }) => {
    const result = [{ className: 'link-parent', name, key: name, path }];
    const childrenLinks = children.map((child) => ({
      className: 'link-children',
      name: child.name,
      path: child.path,
      key: `${name}-${child.name}`,
      app,
    }));
    return result.concat(childrenLinks);
  };

  const chooseChild = ({ app, path }) =>
    document.dispatchEvent(
      new CustomEvent('routeChanged', {
        detail: {
          route: {
            app,
            path,
          },
        },
      })
    );

  const renderLink = (className, app, path, name, key) => (
    <li
      key={key}
      className={className}
      role="menuitem"
      onClick={() => chooseChild({ app, path })}
      onKeyDown={() => chooseChild({ app, path })}
    >
      {className === 'link-parent' ? (
        <>
          <AngularLogo />
          Application: <span className="link">{name}</span>
          Modules:
        </>
      ) : (
        <>
          | <span className="link">{name}</span> |
        </>
      )}
    </li>
  );

  return (
    <div className="toolbar" role="banner">
      <ReactLogo /> React application: Header
      <ul id="shell-nav-links">
        {routes.map((appConfig) =>
          getLinksForApp(appConfig).map(({ key, className, name, path, app }) => renderLink(className, app, path, name, key))
        )}
      </ul>
    </div>
  );
};

const RouteShapeType = PropTypes.shape({
  name: PropTypes.string,
  path: PropTypes.string,
});

RouteShapeType.children = PropTypes.arrayOf(RouteShapeType);

Header.propTypes = {
  routes: PropTypes.arrayOf(RouteShapeType),
};

Header.defaultProps = {
  routes: [],
};

export default Header;
