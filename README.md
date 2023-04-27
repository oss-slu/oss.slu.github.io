# [oss-slu.github.io](https://oss-slu.github.io/)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Making Contributions

### Requirements

Docusaurus requires [Node.js](https://nodejs.org) version 16.14 or above.

This website uses [react-pdf](https://www.npmjs.com/package/react-pdf).

### How to make updates

1. Fork this repository.
2. Run ```npm start``` to start a local development server.
3. Check out the open issues or make updates as seen fit. 

### Making a pull-request

Follow [this tutorial](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) in the GitHub Docs to create a pull request. If fixing an open issue, please include the issue number in the title of the pull request (for example, "Fixed issue #7 -- Brief description").

## Deployment

This project deploys using GitHub actions. The .github/workflows folder contains .yml files that will build and deploy the changes when a pull request is approved and merged with the main branch.
