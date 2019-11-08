context("Users", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/users");
  });

  it("should and and delete a user", () => {
    cy.findByText("Add user").click();
    cy.findByLabelText("name").type("Bob");
    cy.findByLabelText("email").type("bob@bob.com{enter}");
    cy.findByLabelText("Delete user Bob").click();
  });
});
