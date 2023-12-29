# StoryBlok Asset Management Cypress Tests

This repository contains Cypress end-to-end tests for the StoryBlok asset management feature. The tests cover various functionalities like uploading assets, setting assets to private, and replacing assets.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software and how to install them:

- Node.js (Preferably the latest version)
- npm (Node Package Manager)
- Cypress

### Installing

A step by step series of examples that tell you how to get a development environment running:

1. Clone the repository:
   ```bash
   git clone https://github.com/Nelaserodino/StoryBlok

2. Navigate to the project directory:
   ```bash
   cd StoryBlokTask

3. Install dependencies:
   ```bash
   npm install 

### Running the Tests

1. To run the tests, execute the following command:
   ```bash
   npm run test

### Breakdown of Test Cases
A brief description of the test cases included:

TC01: Verifies that a user can upload an asset.
TC04: Checks that a user can set an asset as private.
TC07: Ensures that a user can replace an asset with one of the same extension.

### Built With
Cypress - The web testing framework used
Node.js - JavaScript runtime

### Running the Tests and getting a report
1. To run the tests on your terminal and obtain an HTML report, execute the following command:
   ```bash
   npm run mocha 