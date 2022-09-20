describe('Test Configuration', () => {
	it('Get element by tag', () => {
		cy.visit('platzi.com/automation-practice-form')
		cy.get('input')
	})

	it('Get element by attribute', () => {
		cy.get('[placeholder="First Name"]')
	})

	it('Get element by tag and attribute', () => {
		cy.get('input[placeholder="First Name"]')
	})

	it('Get element by id', () => {
		cy.get('#firstName')
	})

	it('Get element by class', () => {
		cy.get('.mr-sm-2.form-control')
	})

	it('Get element that contains text', () => {
		cy.contains('Reading')
		cy.contains('.header-wrapper', 'Widgets')
	})

	it('Using parent', () => {
		// Get parent element
		cy.get('input[placeholder="First Name"]').parent()
		// Get parent elements in general
		cy.get('input[placeholder="First Name"]').parents()
		// Get parent element and its child
		cy.get('input[placeholder="First Name"]').parents().find('label')

		// Get parent element and child element limiting parent
		cy.get('input[placeholder="First Name"]').parents('form').find('label')

		cy.get('form').find('label')
		// Correct way of using find

		//cy.find('label') //wrong way of using find
	})
})
