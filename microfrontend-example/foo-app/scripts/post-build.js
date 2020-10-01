const concat = require('concat');
const cpx = require('cpx');

(async function() {
  const dist = './dist/foo-microapp';
  const outputDirectory = './gen';
  const outputFile = 'foo-microapp.js';

  const filesToConcat = [ `${dist}/runtime.js`, `${dist}/polyfills.js`, `${dist}/scripts.js`, `${dist}/main.js` ];
  const filesToCopy = [ '[0-9]*.js', 'styles.css', 'common.js' ];

  filesToCopy.forEach(filePattern => cpx.copySync(`${dist}/${filePattern}`, outputDirectory));
  await concat(filesToConcat, `${outputDirectory}/${outputFile}`);
})();
