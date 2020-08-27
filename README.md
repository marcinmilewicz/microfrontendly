# Microfrontendly

Small in size but great in action microfrontend library
* Run frameworks (e.g Angular, React, Vue) in one application easily
* Divide your framework monolith into smaller, independent and technology-agnostic parts
* Release your changes in an application without rebuilding and redeployment the entire application

## Try it in action 

Install all dependencies for the library project
```bash
npm install
```

Install dependencies for microfrontend example
```bash
npx lerna bootstrap
```

Build example microapps
```bash
npm run build:microapp
```

Serve example microapps
```bash
npm run serve:microapp
```

Serve  microfrontend shell
```bash
npm run serve:shell
```

```bash
Go to http://localhost:9000/
```

### Description and plans for the future

The library design is in early development, but the most important features are working properly. The library uses WebComponents as a microfrontend interface, thanks to which the micro-application shell is able to run micro-applications written in either Angular or React or pure WC.

A big advantage and difference from Module Federation (or other solutions) is the fact that the location of the sources and their configuration are provided in runtime. This allows for release of individual functionality in micro-applications without rebuilding and redeployment entire application.

## License
[MIT](https://choosealicense.com/licenses/mit/)
