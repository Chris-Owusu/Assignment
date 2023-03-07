/// <reference types="cypress"/>


describe('Assignment', () => {
    beforeEach(() => {
    cy.visit('/')
    cy.contains('div', 'Elements').click()
  })
  
    it('RADIO BUTTON', () => {
      cy.xpath("(//li[@id='item-2'])[1]").as('radioBtn')
      cy.get('@radioBtn').click()
      cy.get('label[for="impressiveRadio"]').click()
      cy.get('.mt-3')
        .should('have.class', 'mt-3')
        .and('have.text', 'You have selected Impressive')
    })
})