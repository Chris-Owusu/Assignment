/// <reference types="cypress"/>


describe('Assignment', () => {
    beforeEach(() => {
    cy.visit('/alertsWindows')
  })
    it('Nested Frames 1', () => {
      cy.xpath("(//li[@id='item-3'])[2]").click()
      cy.get('#frame1')
          .its('0.contentDocument.body')
          .should('be.visible')
          .and('have.text', 'Parent frame')
      cy.get('#frame1')
        .its('0.contentDocument.body')
        .find('iframe')
        .its('0.contentDocument.body')
        .should('be.visible')
        .and('have.text', 'Child Iframe')
      
    })
})