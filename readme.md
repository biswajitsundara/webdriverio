## Webdriver IO Demo
* update to the latest `chromedriver`
* To execute test use the command `npm run test`
* The result file is in json format under `Results/MyReport.json`


## Start with WDIO
1. Check the node js is installed. `node -v`
2. Check the npm is installed `npm -v`
3. Create a new directory `mkdir wdiov7`
4. Open the directory `cd wdiov7`
5. Install the webdriver io `npm init wdio` 
6. The above command will install wdio cli & the config
    * ? Where is your automation backend located? `On my local machine`
    * ? Which framework do you want to use? `mocha`
    * ? Do you want to use a compiler? `TypeScript (https://www.typescriptlang.org/)`
    * ? Where are your test specs located? `./test/specs/**/*.ts`
    * ? Do you want WebdriverIO to autogenerate some test files? `Yes`
    * ? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? `Yes`
    * ? Where are your page objects located? `./test/pageobjects/**/*.ts`
    * ? Which reporter do you want to use? `spec, mochawesome`
    * ? Do you want to add a plugin to your test setup?
    * ? Do you want to add a service to your test setup? `chromedriver`
    * ? What is the base url? `http://localhost`
    * ? Do you want me to run `npm install` Yes
7. Run the sample test: `npm init wdio`