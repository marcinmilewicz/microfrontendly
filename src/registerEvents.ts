import { ROUTE_CHANGED_EVENT_NAME, RouteChangedEvent } from './events/index';
import { handleWindowLocation } from './utils/browser.utils';

export const registerEvents = (renderForPath: (path: string) => void) => {
  window.addEventListener('popstate', (e) => {
    renderForPath(window.location.pathname);
  });

  document.addEventListener(ROUTE_CHANGED_EVENT_NAME, (event: RouteChangedEvent) => {
    const { route } = event.detail;

    if (!route || !route.path) {
      return;
    }

    handleWindowLocation(route.path);
    renderForPath(route.path);
  });
};
