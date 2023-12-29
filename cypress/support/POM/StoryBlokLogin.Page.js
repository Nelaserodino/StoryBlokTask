class Login {
	//constructor
	get = {
		emailInput: () => cy.get('#email'),
		passwordInput: () => cy.get('#password'),
		submitBtn: () => cy.get("[data-testid='submit']"),
	};

	//Methods
	enterEmail(username) {
		this.get.emailInput().should('be.visible').and('be.enabled').clear().type(username);
		return this;
	}	
	enterPassword(password) {
		this.get.passwordInput().should('be.visible').and('be.enabled').clear().type(password);
		return this;
	}
	submitLoginForm() {
		this.get.submitBtn().click();
	}
}

export const login = new Login();