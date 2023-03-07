/// <reference types="cypress"/>


describe('Assignment', () => {
    beforeEach(() => {
    cy.visit('/')
    cy.contains('div', 'Elements').click()
  })
  
    it('UPLOADS AND DOWNLOAD', () => {
      cy.xpath("(//li[@id='item-7'])[1]").click()
      cy.get('#downloadButton').click()
      cy.verifyDownload('sampleFile.jpeg')
      cy.get('#uploadFile').attachFile('catman.png')
      cy.get("#uploadedFilePath").should('include.text', 'catman.png')
    })
})