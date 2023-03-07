/// <reference types="cypress"/>


describe('Assignment', () => {
    beforeEach(() => {
      cy.fixture('example.json').then(function (data) {
          globalThis.data = data
    })
    cy.visit('/')
    cy.contains('div', 'Elements').click()
  })
    
    it('TEXT BOX', () => {
      cy.xpath("(//li[@id='item-0'])[1]").as('textBox')
      cy.get('@textBox').click()
      cy.get('input[placeholder="Full Name"]').type(data.fullName)
      cy.get('input[placeholder="name@example.com"]').type(data.email)
      cy.get('textarea[placeholder="Current Address"]').type(data.currAddress)
      cy.get('textarea[id="permanentAddress"]').type(data.permAddress)
      cy.get('#submit').click()
      
      cy.get('#name').should('have.text', `Name:${data.fullName}`)
      cy.get('#email').should('have.text', `Email:${data.email}`)
      cy.get('.border > #currentAddress').should('have.text', `Current Address :${data.currAddress} `)
      cy.get('.border > #permanentAddress').should('have.text', `Permananet Address :${data.permAddress}`)
    })


})