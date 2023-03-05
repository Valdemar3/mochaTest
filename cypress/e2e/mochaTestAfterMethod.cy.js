///<reference types="cypress"/>
describe ('Using after method', () => {

  beforeEach (() => {
    cy.visit('https://google.com');
  })
  
  it.skip('Test1', () => {
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

  after(() => {
    cy.log('Test suite finished')
  })

})

describe ('Using afterEach method', () => {

  beforeEach (() => {
    cy.visit('https://google.com');
  })
  
  it.skip('Test1', () => {
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

  afterEach(() => {
    cy.log('Test suite finished')
  })

})