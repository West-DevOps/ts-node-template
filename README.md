# ts-node-template

Basic boilerplate for typescript on node.  With winston logging and jest testing framework

## What is this for? 

Command-line / non-interactive programs written in typescript running on node.  
It includes a minimal `jest` configuration so the project can be tested, 
also includes a `winston` logger for writing program output to the terminal. 

## How can I run it? 

`ts-node` is included in the dev dependencies for local execution of the program so a `npm start` will run it. 

## How can I test it? 

There is a barebones `jest.config.ts` file which includes: 

* Regex to only run `*.unit.ts` files 
* Test coverage (using the `v8` coverage provider) generated in `coverage` directory.
* Test reports (using `junit`) generated in the `reports/junit` directory. 

Running `npm test` will run the unit tests and generate all the reports.

## How can I compile it? 

```shell
npm run compile
```
