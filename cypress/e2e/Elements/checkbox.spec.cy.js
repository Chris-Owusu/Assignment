/// <reference types="cypress"/>


describe('Assignment', () => {
    beforeEach(() => {
    cy.visit('/')
    cy.contains('div', 'Elements').click()
  })
  
    it('CHECK BOX', () => {
      cy.xpath("(//li[@id='item-1'])[1]").as('checkBox')
      cy.get('@checkBox').click()
      cy.get('button[title="Expand all"]').click()
      cy.contains('span', 'Commands').click()
      cy.contains('span', 'React').click()
      cy.contains('span', 'Private').click()
      cy.contains('span', 'General').click()
      cy.contains('span', 'Word File.doc').click() 
  
      cy.get('#tree-node-commands').should('be.checked');
      cy.get('#tree-node-react').should('be.checked')
      cy.get('#tree-node-private').should('be.checked')
      cy.get('#tree-node-general').should('be.checked')
      cy.get('#tree-node-wordFile').should('be.checked')
      cy.xpath("//span[normalize-space()='You have selected :']").should('have.text', 'You have selected :')
     
    })

})