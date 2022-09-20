const { assert } = require("chai")
const { expect } = require("chai")
const { it } = require("mocha")

describe('Assertions', () => {

    beforeEach(() => {
        cy.visit('/automation-practice-form')
    })
    /*after(() => {
        cy.visit('/')
    })*/
	it('Assertion', () => {
		cy.url().should('include', 'demoqa.com') //verify you're in url after clicking
		cy.get('#firstName').should('be.visible').should('have.attr', 'placeholder', 'First Name')
	})

    it('Assertion 2', () => {
		//cy.visit('/automation-practice-form')
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').then((element) => {
            expect(element).to.be.visible
            expect(element).to.have.greaterThan('placeholder', 'First Name')
        })
	})

    it.only('Assertion 3', () => {
		//cy.visit('/automation-practice-form')
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').then((element) => {
            assert.equal(element).to.be.visible
            assert.equal(element.attr('placeholder'), 'First Name')
        })
	})
})
