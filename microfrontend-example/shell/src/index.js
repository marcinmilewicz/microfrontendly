import './styles/main.scss';
import { Microfrontendly } from './../../../lib/microfrontendly';

(function shell() {
  Microfrontendly('assets/manifest.json').listen();
})();
