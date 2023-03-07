/// <reference types="cypress"/>


describe('Assignment', () => {
    beforeEach(() => {
    cy.visit('/')
    cy.contains('div', 'Elements').click()
  })
  
    context('Links', () => {
      it('HOME LINKS', () => {
        cy.xpath("(//li[@id='item-5'])[1]").as('links')
        cy.get('@links').click()
        cy.get('#simpleLink').click()
        cy.get('#simpleLink').should("have.attr", 'href').and('equal', 'https://demoqa.com')
        cy.get('#simpleLink').should("have.attr", 'target').and('equal', '_blank')
      })
    
      it('HOMEQUYn9 LINK', () => {
        cy.xpath("(//li[@id='item-5'])[1]").as('links')
        cy.get('@links').click()
        cy.get('#dynamicLink').click()
        cy.get('#simpleLink').should("have.attr", 'href').and('equal', 'https://demoqa.com')
        cy.get('#simpleLink').should("have.attr", 'target').and('equal', '_blank')
      })
    
      it('CREATED LINK', () => {
        cy.xpath("(//li[@id='item-5'])[1]").as('links')
        cy.get('@links').click()
        cy.get('#created').click()
        cy.get('#linkResponse').should("have.text", 'Link has responded with staus 201 and status text Created')
      })
    
      it('NO CONTENT LINK', () => {
        cy.xpath("(//li[@id='item-5'])[1]").as('links')
        cy.get('@links').click()
        cy.get('#no-content').click()
        cy.get('#linkResponse').should("have.text", 'Link has responded with staus 204 and status text No Content')
      })
    
      it('MOVED LINK', () => {
        cy.xpath("(//li[@id='item-5'])[1]").as('links')
        cy.get('@links').click()
        cy.get('#moved').click()
        cy.get('#linkResponse').should("have.text", 'Link has responded with staus 301 and status text Moved Permanently')
      })
    
      it('BAD REQUEST LINK', () => {
        cy.xpath("(//li[@id='item-5'])[1]").as('links')
        cy.get('@links').click()
        cy.get('#bad-request').click()
        cy.get('#linkResponse').should("have.text", 'Link has responded with staus 400 and status text Bad Request')
      })
    
      it('UNAUTHORIZED LINK', () => {
        cy.xpath("(//li[@id='item-5'])[1]").as('links')
        cy.get('@links').click()
        cy.get('#unauthorized').click()
        cy.get('#linkResponse').should("have.text", 'Link has responded with staus 401 and status text Unauthorized')
      })
    
      it('FORBIDDEN LINK', () => {
        cy.xpath("(//li[@id='item-5'])[1]").as('links')
        cy.get('@links').click()
        cy.get('#forbidden').click()
        cy.get('#linkResponse').should("have.text", 'Link has responded with staus 403 and status text Forbidden')
      })
    
      it('NO FOUND LINK', () => {
        cy.xpath("(//li[@id='item-5'])[1]").as('links')
        cy.get('@links').click()
        cy.get('#invalid-url').click()
        cy.get('#linkResponse').should("have.text", 'Link has responded with staus 404 and status text Not Found')
      })
    })
})