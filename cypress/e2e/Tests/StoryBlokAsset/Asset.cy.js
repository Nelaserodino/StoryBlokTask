// Import the Asset Page Object Model (POM)
import { asset } from '../../../support/POM/StoryBlokAsset.Page';

// Get login credentials from Cypress environment variables
const { email, password } = Cypress.env('StoryBlok');

// Test Suite for Asset Feature Tests
describe('US01 | StoryBlok | Asset Feature Tests', () => {
  let currentAssetName;
  // Before each test, ensure the user is logged in and navigated to the correct space and tab
  beforeEach(
    'Precon: The user is logged in, and in the desired Space, and in Asset Tab',
    () => {
      cy.login(email, password);
      // Navigate to the specific testing area within StoryBlok
      cy.selectSpace('Asset Testing');
      cy.selectTab('Assets');
    },
  );

  it('US01 # | TC01: Check that the user can upload an Asset when clicking the "Upload files" button', () => {
    currentAssetName = `picture-${Date.now()}`;

    // Start the upload process for a new asset
    asset.uploadFile('background.jpg');

    // Ensure the upload modal is visible as part of the upload process
    asset.get.uploadModal().should('be.visible');

    // Enter the unique asset name and initiate the upload
    asset.typeAssetName(currentAssetName);
    asset.clickUploadAsset();

    // Check that the upload has started
    asset.get.uploadingImageProgressBar().should('be.visible');

    // Assertion to confirm that the image's src attribute contains the asset name, and the asset is visible, indicating successful upload
    cy.get('.assets-list-item-preview__image > img', { timeout: 20000 })
      .should('have.attr', 'src')
      .and('include', currentAssetName);

    asset.get.assetContainer().should('be.visible');
  });

  it('US01 # | TC04: Check that the user can set an asset as private', () => {
    currentAssetName = `picture-${Date.now()}`;

    asset.uploadFile('background.jpg');
    asset.typeAssetName(currentAssetName);

    //Toggle the button in order to set the asset as private
    asset.get.toggleButton().click();
    asset.clickUploadAsset();

    //Assertions to verify the asset is now private
    cy.get('.asset-private-preview', { timeout: 20000 })
      .should('be.visible')
      .and('contain', 'Private Asset');
  });

  it('US01 # | TC07: Check that the user can replace an asset of the same extension', () => {
    currentAssetName = `picture-${Date.now()}`;

    //'Precon: Create a public asset'
    asset.uploadFile('background.jpg');
    asset.typeAssetName(currentAssetName);
    asset.clickUploadAsset();
    cy.get('.assets-list-item-preview__image > img', { timeout: 20000 })
      .should('have.attr', 'src')
      .and('include', currentAssetName);

    // Interact with the previously created asset for replacement
    asset.clickAsset(currentAssetName);

    // Capture the current src attribute to verify change post-replacement
    asset.get
      .img()
      .invoke('attr', 'src')
      .then((src) => {
        const originalSrc = src;

        // Replace the current asset with a new file
        asset.replaceFile('girl.jpg');

        // Close the asset details modal post-replacement
        asset.closeAssetDetailsModal();

        // Verify the asset's src attribute has updated, confirming replacement
        asset.get.img().invoke('attr', 'src').should('not.eq', originalSrc);
      });
  });

  afterEach(() => {
    // Code to run after each test
    if (currentAssetName) {
      asset.deleteSelectedAsset(currentAssetName);
    }
  });
});
