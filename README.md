# Integrate MS Power Apps with React

## Local Testing Environment

* mkdir MyReactComponent
* cd MyReactComponent
* pac pcf init --namespace MyComponents --name MyReactComponent --template field
* npm install
* npm install --legacy-peer-deps react react-dom office-ui-fabric-react @fluentui/react
* npm install --legacy-peer-deps @types/react @types/react-dom --save-dev
* code your component 
* npm start 
* npm run build 

## Pug into Power Apps

* mkdir Solutions
* pac solution init --publisher-name Samples --publisher-prefix samples
* pac solution add-reference --path path\to\main\directory
* open developer command prompt for vscode 
* msbuild /t:restore path\to\Solution\folder
* msbuild path\to\Solution\folder
* solution zip file is generated in the `Solution\bin\debug` folder

Imp Links:

[Creating first code component in ms power apps](https://docs.microsoft.com/en-us/power-apps/developer/component-framework/implementing-controls-using-typescript)

[React typescript Form Example 1](https://medium.com/@sandupa.egodage/react-form-with-typescript-c74510b2f9d3)

[React typescript Form Example 2](https://devtrium.com/posts/react-typescript-events#our-toy-example)

[MS Power Apps with react Example](https://powerapps.microsoft.com/es-es/blog/use-of-react-and-office-ui-fabric-react-in-the-powerapps-component-framework-is-now-available-for-public-preview/)

[Fluent UI](https://developer.microsoft.com/en-us/fluentui#/controls/web/button)

[Application Lifecycle Management](https://docs.microsoft.com/en-us/power-platform/alm/)
