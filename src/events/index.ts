export type Route = {
  app: string;
  path: string;
};

export type RouteChangedDetail = {
  route: Route;
};

export type RouteChangedEvent = CustomEvent<RouteChangedDetail>;

export const ROUTE_CHANGED_EVENT_NAME = 'routeChanged';
