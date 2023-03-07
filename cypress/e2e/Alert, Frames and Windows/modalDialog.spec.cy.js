/// <reference types="cypress"/>


describe('Assignment', () => {
    beforeEach(() => {
    cy.visit('/alertsWindows')
  })
  
    context('Modal Dialog', () => {
      specify('Small Modal', () => {
        cy.xpath("(//li[@id='item-4'])[2]").click()
        cy.get('#showSmallModal').click()
        cy.get('.modal-content')
          .should('be.visible')
        cy.get('#closeSmallModal').click()
        cy.get('.modal-content')
          .should('not.exist')
      })
    
      specify('Large Modal', () => {
        cy.xpath("(//li[@id='item-4'])[2]").click()
        cy.get('#showLargeModal').click()
        cy.get('.modal-content')
          .should('be.visible')
        cy.get('#closeLargeModal').click()
        cy.get('.modal-content')
          .should('not.exist')
      })
    })
  
})