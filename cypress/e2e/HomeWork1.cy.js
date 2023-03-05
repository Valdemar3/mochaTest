///<reference types="cypress"/>
//<script src="chai.js" type="text/javascript"></script>

describe ('Test Suite for visit link and click on the locator',() => {
    
    const testData =[
        {fio: 'Name1', 
        lastName: '1!LastName',
        email: 'e1@g.com',
        pAsw: '1PASW',
        webSite: 'www.pornHub.com',
        recipients: '!They are Receipients',
        subject: '1!Subject',
        message: 'whatsUPPPPP',
        expectedFio: 'Name1',
        expectedLastName: 'LastName',
        expectedEmail: 'e1@g.com',
        expectedPasw: '1PASW',
        expectWebSite: 'www.pornHub.com',
        expectedReceipients: '!They are Receipients',
        expectedSubject: '1!Subject',
        expectedMessage: 'whatsUPPPPP',}
    ];

    testData.forEach(({fio, lastName, email, pAsw, webSite, recipients, subject, message,
         expectedFio, expectedLastName, expectedEmail,expectedPasw, expectWebSite, expectedReceipients, expectedSubject, expectedMessage}) => {
        
        beforeEach ('Folow for link',() => { //using preconditions for this test suite
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');  // visit link
            cy.get('img[alt="Material Dark Theme"]').click(); // find and click on the locator
            cy.get('.menu-sidebar').should('have.class','expanded');
            cy.get('.menu-title.ng-tns-c141-9').click();
            cy.get('.menu-title.ng-tns-c141-11').click();
        })
        it(`Type Inline Form`,() => {   
            //cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
            cy.get('[placeholder="Jane Doe"]').type(`${fio}`);
            cy.get('[placeholder="Jane Doe"]').should('contain.value',`${expectedFio}`);
            cy.get('form > input[placeholder="Email"]').type(`${email}`);
            cy.get('form > input[placeholder="Email"]').should('contain.value',`${expectedEmail}`)
            //cy.get('form.form-inline > nb-checkbox > label > input: enabled') // how to be sure, status is enable?
            cy.get('form.form-inline > nb-checkbox > label > span.custom-checkbox').click();
            cy.get('form.form-inline > nb-checkbox > label > span.custom-checkbox').should('have.class','checked');
            cy.get('form > button.appearance-filled.size-medium.shape-rectangle.status-primary').click();
        })
        it(`Type Using the Grid`, () => {
            cy.get('#inputEmail1').type(`${email}`);
            cy.get('#inputEmail1').should('contain.value',`${expectedEmail}`);
            cy.get('#inputPassword2').type(`${pAsw}`);
            cy.get('#inputPassword2').should('contain.value',`${expectedPasw}`);
            cy.get('span.text').contains('Option 1').click();
            cy.get('nb-radio[disabled]').should('have.attr', 'disabled');
            cy.get('div > button.appearance-filled.size-medium.shape-rectangle.status-primary').click();
        })
        it(`Type Forem without lables`, () => {
            cy.get('[placeholder="Recipients"]').type(`${recipients}`);
            cy.get('[placeholder="Recipients"]').should('have.value',`${expectedReceipients}`);
            cy.get('[placeholder="Subject"]').type(`${subject}`);
            cy.get('placeholder="Subject"]').should('have.value',`${expectedSubject}`);
            cy.get('[placeholder="Message"]').type(`${message}`);
            cy.get('[placeholder="Message"]').should(`${expectedMessage}`);
            cy.get('[button[status="success"]').click;
        })
        it(`Type Basic form`, () => {
            cy.get('#exampleInputEmail1').type(`${email}`);
            cy.get('#exampleInputEmail1').should('have.value', `${expectedEmail}`);
            cy.get('#exampleInputPassword1').type(`${pAsw}`);
            cy.get('#exampleInputPassword1').should('have.value', `${expectedPasw}`);
            cy.get('span.text').contains('Check me out').click();
            cy.get('span.custom-checkbox.checked').should('have.class', 'checked');
        })
        it(`Type Block form`, () => {
            cy.get('#inputFirstName').type(`${fio}`);
            cy.get('#inputFirstName').should('have.value',`${fio}`);
            cy.get('#inputLastName').type(`${lastName}`);
            cy.get('#inputLastName').should('have.value', `${lastName}`);
            cy.get('#inputEmail').type(`${email}`);
            cy.get('#inputEmail').should('have.value', `${expectedEmail}`);
            cy.get('#inputWebsite').type(`${webSite}`);
            cy.get('#inputWebsite').should('have.value', `${expectWebSite}`);
            cy.get('button.appearance-filled.size-medium.shape-rectangle.status-basic').click();

        })
    })
    

})
