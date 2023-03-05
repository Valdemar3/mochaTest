it('Find and click',() => {   
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/') // visit link
    cy.get('img[alt="Material Dark Theme"]').click(); // find and click on the locator
    //cy.get('a.mat-ripple').click();
    console.log(typeof(cy.get('.menu-sidebar').should('have.class','expanded')));

})