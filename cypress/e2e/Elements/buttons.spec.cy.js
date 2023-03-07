/// <reference types="cypress"/>


describe('Assignment', () => {
    beforeEach(() => {
    cy.visit('/')
    cy.contains('div', 'Elements').click()
  })
  
    it('BUTTON', () => {
      cy.xpath("(//li[@id='item-4'])[1]").as('btn')
      cy.get('@btn').click()
      cy.get('button#doubleClickBtn').dblclick()
      cy.get('button#rightClickBtn').rightclick()
      cy.xpath("(//button[normalize-space()='Click Me'])[1]").click()
      cy.get('#doubleClickMessage').should('have.text', 'You have done a double click')
      cy.get('#rightClickMessage').should('have.text', 'You have done a right click')
      cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click')
    })
})