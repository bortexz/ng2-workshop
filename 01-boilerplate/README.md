# Boilerplate

This example is a minimum boilerplate to get angular 2 up and running.

File structure:

- `webpack.config.js` Webpack configuration to bundle our scripts. See comment files for more info.
- `tsconfig.json` TypeScript configuration.
- `app/` is where the files of our app will be.
    - `vendor.ts` imports the angular 2 and rxjs modules.
    - `polyfills.ts` imports the core-js and zone.js polyfills
    - `main.ts` This file will bootstrap our application to use it in the browser.
    - `app.module.ts` Entry point of our app. Bootstraps the main app component.
    - `app.component.ts` The main component code.
    - `app.component.html` HTML template for our main component.
