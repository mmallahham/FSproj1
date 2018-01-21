This node.js project is the back-end part of the first assignment for the Full Stack course
at Lexicon Malmö.

Author: Mohammad Almonjed Allahham.
Date:   14/01/2018.

Project Name: Guess the animal.

Description: The user will think about an animal and the application will ask many (Yes/No) questions until it guess the animal.

The purpose of the project is to create a binary tree of questions by learning the application a new question and answer each time it guises a wrong animal, and this will extend the tree and make it gives more correct answers(AI).   

Development Environment: You may have a look on package.json for all the dependencies to see all the packages were used in the project and I will describe them here.

Visual Studio Code:
I was using it as an editor because it is free and support many programming languages and available on windows, mac, and Linux. And also has a lot of helpful extensions, I used while developing the project the EditorConfig. 

EditorConfig: helps developers define and maintain consistent coding styles between different editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.
For the style used on this project please check .editorconfig file in the project directory.
For more information visit editorconfig.org.

Node.js, npm: This part is the back end of the project and it was developed using JavaScript and node.js was used while development and to run it on the server, npm is the package manager was used with node.js.

Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere” paradigm allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.
For more information and downloading node.js please visit: nodejs.org


npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website.
For more information and downloading npm please visit: npmjs.com.

Development Web Server:
There is many webserver for node.js development like http-server, live-server, express, budo, webpack dev server, etc. For this project I used Express.
 
Express: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications, released as free and open-source software under the MIT License. It is designed for building web applications and APIs, It is in fact the standard server framework for Node.js.

To install Express run this command:
$ npm install express --save
Automation:
There is many automation tools for node.js and the three famous automation tools are Grunt, Gulp, and Npm. I use npm as package manager so I used it for automation too.
npm supports the "scripts" property of the package.json file, for the following scripts:
Prepublish, prepare, prepublishOnly, prepack, postpack, publish, postpublish, preinstall, install, postinstall, preuninstall, uninstall, postuninstall, preversion, version, postversion, pretest, test, posttest, prestop, stop, poststop, prestart, start, poststart: prerestart, restart, postrestart, preshrinkwrap, shrinkwrap, postshrinkwrap.
For more information visit: docs.npmjs.com/misc/scripts



Linting:
For linting I used for this project ESLint because it is the most popular linter for node.js.
ESLint: an open source JavaScript linting utility originally created by Nicholas C. Zakas in June 2013. Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn’t adhere to certain style guidelines. There are code linters for most programming languages, and compilers sometimes incorporate linting into the compilation process.
JavaScript, being a dynamic and loosely-typed language, is especially prone to developer error. Without the benefit of a compilation process, JavaScript code is typically executed in order to find syntax or other errors. Linting tools like ESLint allow developers to discover problems with their JavaScript code without executing it.
The primary reason ESLint was created was to allow developers to create their own linting rules. ESLint is designed to have all rules completely pluggable. The default rules are written just like any plugin rules would be. They can all follow the same pattern, both for the rules themselves as well as tests. While ESLint will ship with some built-in rules to make it useful from the start, you’ll be able to dynamically load rules at any point in time.
If you want to include ESLint as part of your project’s build system, we recommend installing it locally. You can do so using npm:
$ npm install eslint --save-dev
You should then setup a configuration file, please check the eslintrc.json in the project folder to see linting configuration.
For more information about ESLint please visit: eslint.org


Testing: I used Mocha as testing framework and chai as assertion library and the test files will be in the same folder with *.test.js extensions.
Mocha: a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
Install with npm globally:
$ npm install --global mocha
or as a development dependency for your project:
$ npm install --save-dev mocha
You can chose the style of the result by setting the reporter parameter when calling the mocha from command line if mocha installed globally or by npm run by using test script in scripts section in package.json.
For more information about setting and how to use: mochajs.org

Mocha allows you to use any assertion library you wish. In the above example, we’re using Node.js’ built-in assert module–but generally, if it throws an Error, it will work! This means you can use libraries such as:
•	should.js - BDD style shown throughout these docs
•	expect.js - expect() style assertions
•	chai - expect(), assert() and should-style assertions
•	better-assert - C-style self-documenting assert()
•	unexpected - “the extensible BDD assertion toolkit
Chai: BDD / TDD assertion library for node and the browser that can be delightfully paired with any JavaScript testing framework.
Chai is available on npm:
$ npm install chai –-save-dev 
More info on: chaijs.com



