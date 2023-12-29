// Importing necessary utilities for file upload and page object model (POM)
import 'cypress-file-upload';
import { login } from '../support/POM/StoryBlokLogin.Page';

// Custom command for user login. This automates the process of logging into the StoryBlok application.
Cypress.Commands.add('login', (email, password) => {
    cy.visit('app.storyblok.com');
    cy.url().should('include', 'storyblok');

    // Using POM methods for entering credentials and submitting the login form
    login.enterEmail(email).enterPassword(password).submitLoginForm();

    // Validate successful login by checking URL and verifying presence of the account element
    cy.url().should('contain', 'spaces');
    cy.get('[aria-label="My account"]').should('be.visible');
});

// Command to select a specific space by name in the StoryBlok application. Ensures navigation and validates correct space selection.
Cypress.Commands.add('selectSpace', (spaceName) => {
  cy.contains(spaceName).click();
  cy.url().should('contain', 'dashboard');
  cy.get('.header__title').should('exist').and('contain', spaceName);
});

// Command for navigating to a specific tab. Validates that the navigation was successful and the correct tab is displayed.
Cypress.Commands.add('selectTab', (tabName) => {
  cy.get(`[aria-label=${tabName}]`).click();
  cy.get('.header__title').should('exist').and('contain', tabName);
});


