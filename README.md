# Cypress-e2e automation framework with behavior-driven development cucumber and html-report

## Description

This repository contains e2e tests written in Cypress and Cucumber to test the site https://telnyx.com/ Contains of:

* Page Object Model
* Tests are located in cypress/e2e/features folder
* Cucumber html-report

## Setup

Before using cypress, you need to install node.js, install all the dependencies for doing the full operation of the node.js.

#### devDependencies:
* @badeball/cypress-cucumber-preprocessor: 13.0.2
* @bahmutov/cypress-esbuild-preprocessor: 2.1.5
* cypress: 10.9.0
* esbuild: 0.15.9
* multiple-cucumber-html-reporter: 2.0.0
  
Also you need to download cucumber-json-formatter according to your OS and rename this file to

cucumber-json-formatter.exe
  
## Steps to run

* Clone the repository using "git clone "
* npm init
* npm i
* npm run cypress:run
* npm run cypress:report
  
## Configuration 

* cypress.config.js - Main config file where default behavior of Cypress can be modified.

  
## License
ISC