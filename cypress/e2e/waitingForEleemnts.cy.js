describe('Waiting for Elements', () => {

	beforeEach( () =>{
        cy.visit('www.platzi.com')
    })

    it('Wait for defined time', () => {
        cy.wait(5000)
    })
    it('Wait for an element', () => {
        cy.get('.ButtonLogin-cta', {timeout:6000})
    })
    it.only('Wait for an element and make assertion', () => {
        cy.get('.ButtonLogin-cta', {timeout:6000}).should('be.visible')
        cy.get('.ButtonLogin-cta').should('be.visible', {timeout: 6000})
    })
})

describe('Waiting for Elements', () => {

	beforeEach( () =>{
        cy.visit('/')
    })

    it('Disable retry', () => {
        cy.get('.banner-image444', {timeout:5000})
        //cy.get(':nth-child(3) > :nth-child(1) > .card-body', {timeout:5000})
        cy.get(':nth-child(3) > :nth-child(1) > .card-body', {timeout:0})
    })
})


