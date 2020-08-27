import render from './renderer';
import { ROUTE_CHANGED_EVENT_NAME } from './globals';

const Microfrontendly = (configURI) => {
    const renderContainer = (configuration, context) => {
        context.rootElement = document.createElement('div');
        context.rootElement.setAttribute('id', configuration.containerId);
        context.container.appendChild(context.rootElement);
        render(context.rootElement, window.location.pathname, configuration);
    };

    const listenerFactory = (rootElement, configuration) => (route) => {
        window.location.href = `${window.location.href}#`;
        const pathname = `${route.path}`;
        // eslint-disable-next-line no-restricted-globals
        if (history && history.pushState) {
            // eslint-disable-next-line no-restricted-globals
            history.pushState({}, pathname, pathname);

            render(rootElement, window.location.pathname, configuration);
        }
    };

    const listenOnRoutes = (listener) => {
        document.addEventListener(ROUTE_CHANGED_EVENT_NAME, (event) => {
            const { route } = event.detail;
            if (route) {
                listener(route);
            }
        });
    };

    const context = {
        configURI,
        container: document.body,
    };

    context.withContainer = (container) => {
        context.container = container;
        return context;
    };

    context.render = () => fetch(context.configURI)
        .then((resp) => resp.json())
        .then((configuration) => {
            renderContainer(configuration, context);

            const listener = listenerFactory(context.rootElement, configuration);
            listenOnRoutes(listener);

            return configuration;
        });

    return context;
};

export default Microfrontendly;
