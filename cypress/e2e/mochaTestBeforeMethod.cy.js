// describe ('Using before method', () => {

//   before (() => {
//     cy.visit('https://google.com');
//   })
  
//   it.skip('Test1', () => {
//     //cy.visit('https://google.com');
//     cy.get('input.gLFyf').type('Cypress');
//   })
  
//   it('Test2', () => {
//     //cy.visit('https://google.com');
//     cy.get('input.gLFyf').type('Cypress');
//   })
  
//   it.only('Test3', () => { // it.only  it.skip
//     //cy.visit('https://google.com');
//     cy.get('input.gLFyf').type('Cypress');
//   })
  
//   it('Test4', () => {
//     //cy.visit('https://google.com');
//     cy.get('input.gLFyf').type('Cypress');
//   })

// })

describe ('Using before each method', () => {

  beforeEach (() => {
    cy.visit('https://google.com');
  })
  
  it.skip('Test1', () => { // it.skip  - skip this test
    //cy.visit('https://google.com');
    cy.get('input.gLFyf').type('Cypress');
  })
  
  it('Test2', () => {
    //cy.visit('https://google.com');
    cy.get('input.gLFyf').type('Cypress');
  })
  
  it('Test3', () => { // it.only  it.skip
    //cy.visit('https://google.com');
    cy.get('input.gLFyf').type('Cypress');
  })
  
  it('Test4', () => {
    //cy.visit('https://google.com');
    cy.get('input.gLFyf').type('Cypress');
  })

})