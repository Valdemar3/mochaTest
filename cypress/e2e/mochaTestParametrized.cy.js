
describe ('Parametrized ', () => {

describe ('Firsr Option', () => {
 
  beforeEach(()=> {
    cy.log('Before')
  })

  const paramTest = ({testData, expectedResult} ) =>
  function () {
    cy.visit('https://google.com')
    cy.get('input.gLFyf').type(`${testData} qweqwe`)
    cy.get('input.gLFyf').should('contain.value', `${expectedResult} qweqwe`)
  }

  it (`search data`, paramTest({testData: 1, expectedResult: 1}))
  it ('search data', paramTest({testData: 2, expectedResult: 2}))
  it ('search data', paramTest({testData: 3, expectedResult: 3}))
  it ('search data', paramTest({testData: 'Cypress', expectedResult: 'Cypress'}));

})


  //---- Dima Stanit like more:

  describe ('Second option', ()=> {
    const data2 = [
      { testData2: 1, expectedResult2: 1},
      { testData2: 2, expectedResult2: 2},
      { testData2: 3, expectedResult2: 3},
      { testData2: 'Cypress', expectedResult2: 'Cypress'}
    ]
  
    data2.forEach(({testData2, expectedResult2}) => {
      it(`search data ${testData2}`, () => {
        cy.visit('https://google.com')
        cy.get('input.gLFyf').type(`${testData2} qweqwe`)
        cy.get('input.gLFyf').should('contain.value', `${expectedResult2} qweqwe`)
      })
    })
  })
 
})