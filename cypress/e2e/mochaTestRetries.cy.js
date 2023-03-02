///<reference types="cypress"/>

it ('Test1', {retries: 2}, () => {   //retries - повторы запусков тестов
  cy.visit('https://google.com')
  cy.get('input.gLFyf+').type('Cypress')
})

it ('Test1', () => {   //retries - повторы запусков тестов
  this.retries(2)  //same as above, different write
  cy.visit('https://google.com')
  cy.get('input.gLFyf+').type('Cypress')
})