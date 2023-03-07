/// <reference types="cypress"/>


describe('Assignment', () => {

  beforeEach(() => {
  cy.visit('/alertsWindows')
  cy.contains('div', 'Elements').click()
  })

  context('Alerts', () => {
    it('alert', ()  => {
      let called
      cy.xpath("(//div)[31]").click()
      cy.xpath("(//li[@id='item-1'])[2]").click()
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.eq('You clicked a button');
        called = true
      })
      cy.get('#alertButton').click()
      cy.wrap(null).should(() => {
        expect(called).to.be.true
      })
    })
  
    it('alert and wait 5 sec', ()  => {
      let secondCall
      cy.xpath("(//div)[31]").click()
      cy.xpath("(//li[@id='item-1'])[2]").click()
      
      cy.on('window:alert', (alertWithTimeText) => {
        expect(alertWithTimeText).to.eq('This alert appeared after 5 seconds');
        secondCall = true
      })
      cy.get('#timerAlertButton').click()
      cy.wait(5000)
      cy.wrap(null).should(() => {
        expect(secondCall).to.be.true
      })
    })
  
    it('confirm box', ()  => {
      cy.xpath("(//div)[31]").click()
      cy.xpath("(//li[@id='item-1'])[2]").click()
      cy.get('#confirmButton').click()
      
      cy.on('window:confirm', (confirmText) => {
        expect(confirmText).to.eq('Do you confirm action?');
        return false
      })
      cy.get('#confirmResult').should('have.text', 'You selected Cancel')
    })
  
    it.only('prompt box', ()  => {
      cy.xpath("(//div)[31]").click()
      cy.xpath("(//li[@id='item-1'])[2]").click()
      cy.window().then(win => {
        cy.stub(win, 'prompt').returns('Christopher');
        cy.get('#promtButton').click();
        cy.get('#promptResult').should('have.text', 'You entered Christopher');
      });
    })
  })
})