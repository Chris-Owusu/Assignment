/// <reference types="cypress"/>


describe('Assignment', () => {
    beforeEach(() => {
    cy.visit('/alertsWindows')
  })
  
    context('Browser Windows', () => {
      it('new tab', () => {
        cy.xpath("(//li[@id='item-0'])[3]").click()
        cy.get("#tabButton").click()
        cy.url().should('include', '/browser-windows')
      })
    
      it('new window', () => {
        cy.xpath("(//li[@id='item-0'])[3]").click()
        cy.get("#windowButton").click()
        cy.url().should('include', '/browser-windows')
      })
    
      it('new window message', () => {
        cy.xpath("(//li[@id='item-0'])[3]").click()
        cy.window().then(win => {
          cy.stub(win, 'open').returns('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.');
          cy.get('#messageWindowButton').click()
          cy.url().should('include', '/browser-windows')
        });
      })
    })
})