# spring-cloud-skipper-ui is no longer actively maintained by VMware, Inc.

This is the *Spring Cloud Skipper* user interface (UI). The UI uses [Angular][].

> The Git repository for the main *Spring Cloud Skipper* project is at: https://github.com/spring-cloud/spring-cloud-skipper

# Building the Module

Two build tool chains are supported. Primarily, the *Spring Cloud Skipper UI* uses [npm][] ([Node.js][]-based) for managing dependencies and the execution of the build. In order to provide easier *Continuous Integration* (CI) support, [Maven][] can also be used to execute the build.

The *Spring Cloud Skipper Dashboard* uses [Maven][], specifically the [frontend-maven-plugin][] which will actually execute [npm][] underneath. Using the [frontend-maven-plugin][], however, the required tooling, including [Node.js][] will be downloaded, installed and executed for you.

## Requirements

Using [Maven][] is also the easiest route for Java developers to get started, as the only requirements are:

* [Maven][]
* [Git][]

## Building the Project using Maven

	$ git clone https://github.com/spring-cloud/spring-cloud-skipper-ui.git
	$ cd spring-cloud-skipper-ui
	$ mvn clean package install

This will create `target/spring-cloud-skipper-ui-1.0.0.BUILD-SNAPSHOT.jar` and also install the build artifact into the local Maven repository.

## Building the Project using npm

For UI development purposes, we recommend using [npm][] directly. Please ensure that at a minimum [Node.js][], [npm][] and the [Angular CLI][] are available on your system. In order to execute the build simply do:

	$ git clone https://github.com/spring-cloud/spring-cloud-skipper-ui.git
	$ cd spring-cloud-skipper-ui/ui
	$ npm install
	$ ng build --prod

**NOTE:** Before building be sure that the `ng-serve` development server has been shutdown.

### Build fails after merging a branch or changing branches.
In some cases the npm-modules or other dependencies may become inconsistent during branch changes.
In order to resolve the problem we need to clean out inconsistent dependencies.
The following instructions can be used to do this:

* Shutdown the development server if it is running.
* Commit or stash your changes
* Execute the following:
	* `git clean -fx`
	* `npm install`
* If you stashed your files execute the following:  `git stash pop`
* Now build the application by executing the following: `ng build --prod`

## Important Build-related Configuration Files

* **pom.xml** Maven config file
* ui/**package.json** Node dependencies

# Running Tests

## Unit Tests

	$ ng test

## E2E Tests

In order to also execute the End-to-End (E2E) tests, please execute the UI build using:

	$ ng e2e

Please ensure that a *Spring Cloud Skipper* server instance is running at `http://localhost:9393/`.

## Development

For development, please ensure that a *Spring Cloud Skipper* server instance is running at `http://localhost:9393/`.

The execute:

	$ npm start

The Dashboard will be running at `http://localhost:4200/`. The browser will automatically reload upon saving any changes to the application sources.

## Dependency Management using Bower

[npm][] is used for managing UI dependencies.

### Install Build Dependency

	$ npm install --save-dev my-dependency

## How to Update Node.js dependencies in package.json

Use [https://github.com/tjunnone/npm-check-updates](https://github.com/tjunnone/npm-check-updates)

[Angular]: http://angular.io/
[Angular CLI]: https://cli.angular.io/
[frontend-maven-plugin]: https://github.com/eirslett/frontend-maven-plugin
[Git]: https://git-scm.com/
[Maven]: http://maven.apache.org/
[Node.js]: http://nodejs.org/
[npm]: https://www.npmjs.com/
[Protractor]: https://github.com/angular/protractor
