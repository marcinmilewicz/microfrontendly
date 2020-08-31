import './styles/main.scss';
import { loadMicroApp, Microfrontendly, getMicroAppConfigByName } from './../../../lib/microfrontendly';

(function shell() {
  const container = document.body;

  const renderHeader = (configuration) => {
    const headerConfig = getMicroAppConfigByName('header-microapp', configuration);

    loadMicroApp(headerConfig).then(() => {
      const header = document.createElement(headerConfig.componentName);
      header.configuration = configuration;
      document.getElementById('shell-header').appendChild(header);
    });
  };

  Microfrontendly('assets/configuration.json')
    .render()
    .then((configuration) => {
      renderHeader(configuration, container);
    });
})();
