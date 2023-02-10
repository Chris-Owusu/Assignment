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
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').as('textBox')
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

  it('CHECK BOX', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').as('checkBox')
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
    cy.get('#result > :nth-child(1)').should('have.text', 'You have selected :')
   
  })

  it('RADIO BUTTON', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').as('radioBtn')
    cy.get('@radioBtn').click()
    cy.get('label[for="impressiveRadio"]').click()
    cy.get('.mt-3')
      .should('have.class', 'mt-3')
      .and('have.text', 'You have selected Impressive')
  })

  it('WEB TABLES', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').as('webTables')
    cy.get('@webTables').click()
    cy.get('button[id="addNewRecordButton"]').click()
    cy.get('input[placeholder="First Name"]').type(data.firstName)
    cy.get('input[placeholder="Last Name"]').type(data.lastName)
    cy.get('input[placeholder="name@example.com"]').type(data.userEmail)
    cy.get('input[placeholder="Age"]').type(data.age)
    cy.get('#salary').type(data.salary)
    cy.get('input[placeholder="Department"]').type(data.department)
    cy.get('#submit').click()
    cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').should('have.text', `${data.firstName}`)
    cy.get(':nth-child(4) > .rt-tr > :nth-child(2)').should('have.text', `${data.lastName}`)
    cy.get(':nth-child(4) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]').should('have.text', `${data.age}`)
    cy.get(':nth-child(4) > .rt-tr > :nth-child(4)').should('have.text', `${data.userEmail}`)
    cy.get(':nth-child(4) > .rt-tr > :nth-child(5)').should('have.text', `${data.salary}`)
    cy.get(':nth-child(4) > .rt-tr > :nth-child(6)').should('have.text', `${data.department}`)
  })

  it('BUTTON', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').as('btn')
    cy.get('@btn').click()
    cy.get('button#doubleClickBtn').dblclick()
    cy.get('button#rightClickBtn').rightclick()
    cy.contains('button', 'Click Me').click()
    cy.get('#doubleClickMessage').should('have.text', 'You have done a double click')
    cy.get('#rightClickMessage').should('have.text', 'You have done a right click')
    //cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click')
  })

  context('Links', () => {
    it('HOME LINKS', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links')
      cy.get('@links').click()
      cy.get('#simpleLink').click()
      cy.get('#simpleLink').should("have.attr", 'href').and('equal', 'https://demoqa.com')
      cy.get('#simpleLink').should("have.attr", 'target').and('equal', '_blank')
      // cy.get('#simpleLink').invoke('removeAttr', "target").click()
    })
  
    it('HOMEQUYn9 LINK', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links')
      cy.get('@links').click()
      cy.get('#dynamicLink').click()
      cy.get('#simpleLink').should("have.attr", 'href').and('equal', 'https://demoqa.com')
      cy.get('#simpleLink').should("have.attr", 'target').and('equal', '_blank')
    })
  
    it('CREATED LINK', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links').as('Links')
      cy.get('@links').click()
      cy.get('#created').click()
      cy.get('#linkResponse').should("have.text", 'Link has responded with staus 201 and status text Created')
    })
  
    it('NO CONTENT LINK', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links').as('Links')
      cy.get('@links').click()
      cy.get('#no-content').click()
      cy.get('#linkResponse').should("have.text", 'Link has responded with staus 204 and status text No Content')
    })
  
    it('MOVED LINK', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links').as('Links')
      cy.get('@links').click()
      cy.get('#moved').click()
      cy.get('#linkResponse').should("have.text", 'Link has responded with staus 301 and status text Moved Permanently')
    })
  
    it('BAD REQUEST LINK', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links').as('Links')
      cy.get('@links').click()
      cy.get('#bad-request').click()
      cy.get('#linkResponse').should("have.text", 'Link has responded with staus 400 and status text Bad Request')
    })
  
    it('UNAUTHORIZED LINK', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links').as('Links')
      cy.get('@links').click()
      cy.get('#unauthorized').click()
      cy.get('#linkResponse').should("have.text", 'Link has responded with staus 401 and status text Unauthorized')
    })
  
    it('FORBIDDEN LINK', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links').as('Links')
      cy.get('@links').click()
      cy.get('#forbidden').click()
      cy.get('#linkResponse').should("have.text", 'Link has responded with staus 403 and status text Forbidden')
    })
  
    it('NO FOUND LINK', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links').as('Links')
      cy.get('@links').click()
      cy.get('#invalid-url').click()
      cy.get('#linkResponse').should("have.text", 'Link has responded with staus 404 and status text Not Found')
    })
  })

  it('UPLOADS AND DOWNLOAD', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-7').click()
    cy.get('#downloadButton').click()
    cy.verifyDownload('sampleFile.jpeg')
    cy.get('#uploadFile').attachFile('catman.png')
    cy.get("#uploadedFilePath").should('include.text', 'catman.png')
  })

  context('Browser Windows', () => {
    it('new tab', () => {
      cy.contains('div', 'Alerts, Frame & Windows').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-0').click()
      cy.get("#tabButton").click()
      cy.url().should('include', '/browser-windows')
      cy.go('back')
    })
  
    it('new window', () => {
      cy.contains('div', 'Alerts, Frame & Windows').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-0').click()
      cy.get("#windowButton").click()
      cy.url().should('include', '/browser-windows')
      cy.go('back')
    })
  
    it('new window message', () => {
      cy.contains('div', 'Alerts, Frame & Windows').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-0').click()
      cy.window().then(win => {
        cy.stub(win, 'open').returns('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.');
        cy.get('#messageWindowButton').click()
        cy.url().should('include', '/browser-windows')
        cy.go('back')
      });
    })
  })
  

  context('Alerts', () => {
    it('alert', ()  => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()
      cy.get('#alertButton').click()
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('You clicked a button');
      })
    })
  
    it('alert and wait 5 sec', ()  => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()
      cy.get('#timerAlertButton').click()
      cy.wait(5000)
      
      cy.on('window:alert', (alertWithTimeText) => {
        expect(alertWithTimeText).to.contains('This alert appeared after 5 seconds');
      })
    })
  
    it('confirm box', ()  => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()
      cy.get('#confirmButton').click()
      
      cy.on('window:confirm', (confirmText) => {
        expect(confirmText).to.contains('Do you confirm action?');
        return false
      })
      cy.get('#confirmResult').should('have.text', 'You selected Cancel')
    })
  
    it('prompt box', ()  => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()
      cy.window().then(win => {
        cy.stub(win, 'prompt').returns('Christopher');
        cy.get('#promtButton').click();
        cy.get('#promptResult').should('have.text', 'You entered Christopher');
      });
    })
  })
  

  context('Frames', () => {
    it('frame 1', () => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-2').click()
      cy.get('#frame1')
          .its('0.contentDocument.body')
          .should('be.visible')
          .and('have.text', 'This is a sample page')
      cy.frameLoaded('#frame1')
    })
  
    it('frame 2', () => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-2').click()
      cy.get('#frame2')
          .its('0.contentDocument.body')
          .should('be.visible')
          .and('have.text', 'This is a sample page')
      cy.frameLoaded('#frame2')
    })
  
    it('Nested Frames 1', () => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-3').click()
      cy.get('#frame1')
          .its('0.contentDocument.body')
          .should('be.visible')
          .and('have.text', 'Parent frame')
      cy.frameLoaded('#frame1')
      cy.get('#frame1')
        .its('0.contentDocument.body')
        .find('iframe')
        .its('0.contentDocument.body')
        .should('be.visible')
        .and('have.text', 'Child Iframe')
      
    })
  })
  

  context('Modal Dialog', () => {
    specify('Small Modal', () => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-4').click()
      cy.get('#showSmallModal').click()
      cy.get('.modal-content')
        .should('be.visible')
      cy.get('#closeSmallModal').click()
      cy.get('.modal-content')
        .should('not.exist')
    })
  
    specify('Large Modal', () => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-4').click()
      cy.get('#showLargeModal').click()
      cy.get('.modal-content')
        .should('be.visible')
      cy.get('#closeLargeModal').click()
      cy.get('.modal-content')
        .should('not.exist')
    })
  })

})