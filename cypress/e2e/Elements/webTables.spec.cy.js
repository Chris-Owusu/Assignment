/// <reference types="cypress"/>


describe('Assignment', () => {
    beforeEach(() => {
      cy.fixture('example.json').then(function (data) {
          globalThis.data = data
    })
    cy.visit('/')
    cy.contains('div', 'Elements').click()
  })
  
    it('WEB TABLES', () => {
      cy.xpath("(//li[@id='item-3'])[1]").as('webTables')
      cy.get('@webTables').click()
      cy.get('button[id="addNewRecordButton"]').click()
      cy.get('input[placeholder="First Name"]').type(data.firstName)
      cy.get('input[placeholder="Last Name"]').type(data.lastName)
      cy.get('input[placeholder="name@example.com"]').type(data.userEmail)
      cy.get('input[placeholder="Age"]').type(data.age)
      cy.get('#salary').type(data.salary)
      cy.get('input[placeholder="Department"]').type(data.department)
      cy.get('#submit').click()
      cy.xpath("(//div[@role='gridcell'])[22]").should('have.text', `${data.firstName}`)
      cy.xpath("(//div[@role='gridcell'])[23]").should('have.text', `${data.lastName}`)
      cy.xpath("(//div[@role='gridcell'])[24]").should('have.text', `${data.age}`)
      cy.xpath("(//div[@role='gridcell'])[25]").should('have.text', `${data.userEmail}`)
      cy.xpath("(//div[@role='gridcell'])[26]").should('have.text', `${data.salary}`)
      cy.xpath("(//div[@role='gridcell'])[27]").should('have.text', `${data.department}`)
    })

})