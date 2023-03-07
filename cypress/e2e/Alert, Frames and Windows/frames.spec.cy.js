/// <reference types="cypress"/>


describe('Assignment', () => {
    beforeEach(() => {
    cy.visit('/alertsWindows')
  })
  
    context('Frames', () => {
      it('frame 1', () => {
        cy.xpath("(//li[@id='item-2'])[2]").click()
        cy.get('#frame1')
            .its('0.contentDocument.body')
            .should('be.visible')
            .and('have.text', 'This is a sample page')
      })
    
      it('frame 2', () => {
        cy.xpath("(//div)[31]").click()
        cy.xpath("(//li[@id='item-2'])[2]").click()
        cy.get('#frame2')
            .its('0.contentDocument.body')
            .should('be.visible')
            .and('have.text', 'This is a sample page')
      })
    })
})