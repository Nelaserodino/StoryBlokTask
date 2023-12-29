class Asset {
  // Constructor defining Cypress commands to locate elements
  get = {
    uploadModal: () => cy.get('#assets-upload-modal'),
    inputAssetName: () => cy.get('#asset-name-input-0'),
    assetContainer: () => cy.get('.assets-list-item-preview__container'),
    submitButton: () => cy.get('button[type=submit]'),
    spanAssetName: (assetName) =>
      cy.get('span[data-testid="asset-name"]').contains(assetName),
    img: () => cy.get('.assets-list-item-preview__image > img'),
    assetDetailsModal: () => cy.get('[data-testid="asset-detail-modal"]'),
    assetDetailsModalCloseButton: () => cy.get('[aria-label="Close Asset Details"]'),
    uploadingImageProgressBar: () => cy.get('.sb-upload-dialog__content'),
    toggleButton: () => cy.get('.sb-toggle__label'),
    saveAndCloseButton: () => cy.get('.asset-detail__footer-actions > .sb-button'),
    deleteAsset: () => cy.get('[aria-label="Delete asset"]'),
    confirmDelete: () => cy.get('[data-testid="delete-tab-modal-button"]'),
  };

  //Methods

  // Uploads a file to the application
  uploadFile(filePath) {
    cy.get('#file').attachFile(filePath);
  }
  // Replaces a file
  replaceFile(filePath) {
    cy.get('#replacefile').attachFile(filePath);
  }
  // Types the asset name in the input field
  typeAssetName(assetName) {
    this.get.inputAssetName().clear().type(assetName);
  }
  // Clicks the submit button for asset upload
  clickUploadAsset() {
    this.get.submitButton().click();
  }
  // Click on the chosen asset
  clickAsset(assetName) {
    this.get.spanAssetName(assetName).click();
  }
  // Close the Asset Details Modal
  closeAssetDetailsModal() {
    this.get.assetDetailsModalCloseButton().click();
  }
  // Delete the asset
  deleteSelectedAsset(assetName) {
    this.clickAsset(assetName);
    this.get.deleteAsset().click();
    this.get.confirmDelete().click();
  }
}

export const asset = new Asset();
