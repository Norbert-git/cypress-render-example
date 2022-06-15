describe("proper name", () => {
  beforeEach(() => {
    cy.visit("url name")
  })

  // .get looking for h1 on the entire page
  it("h1 on the page", () => {
    cy.get("h1").should("exist")
  })

  // make sure the h1 spells Main Page
  it("renders the correct h1 text", () => {
    cy.get("h1").should("contain.text", "Main Page")
  })

  // on the page there are different "containers" .eq(1) is the second
  // testing to see if a paragraph exist
  // .find is limited to find one element
  it("rendering a paragraph under h1", () => {
    cy.get(".container").eq(1).find("p").should("exist")
  })

  // using within allow to "find" multiple elements
  // within one container
  it("finding multiple element within one container", () => {
    cy.get(".container")
      .eq(2)
      .within(() => {
        cy.get("h1").should("exist")
        cy.get("p").should("exist")
      })
  })
})
