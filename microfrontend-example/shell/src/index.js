import "./styles/main.scss";
import {
  loadMicroApp,
  Microfrontendly,
  getMicroAppConfigByName,
} from "./../../../lib/microfrontendly";

(function shell() {
  console.log(Microfrontendly("sdsd"))
  console.log('Du[aaaa')
  const container = document.body;

  const renderHeader = (configuration) => {
    const headerConfig = getMicroAppConfigByName(
      "header-microapp",
      configuration
    );

    loadMicroApp(headerConfig).then(() => {
      const header = document.getElementById("shell-header");
      header.appendChild(document.createElement(headerConfig.componentName));
    });
  };

  Microfrontendly("assets/configuration.json")
    .withContainer(document.body)
    .render()
    .then((configuration) => {
      renderHeader(configuration, container);
    });
})();
