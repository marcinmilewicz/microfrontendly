import './styles/main.scss';
import { Microfrontendly } from './../../../lib/microfrontendly.min';

(function shell() {
  Microfrontendly('assets/manifest.json').listen();
})();
