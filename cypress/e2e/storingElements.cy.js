describe('Storing Elements', () => {

	it('Repetition', () => {
        cy.visit('/automation-practice-form')
		// Get parent element
		cy.get('input[placeholder="First Name"]').parent('form').then( (form) => {
			const inputs = form.find('input')
			const divs = form.find('divs')
			const labels = form.find('label')

			expect(inputs.length).to.eq(15)
			expect(divs.length).to.eq(70)
			expect(labels.length).to.eq(36)

			//wrap formats to cypress format to use it with should
			cy.wrap(inputs).should('have.length',15)
			
			//console.log(`I'm the length`)
			cy.log('I am the length', inputs.length)

			//debugger
			cy.task('log', inputs.length)
		})
		// Get parent elements in general
		cy.get('input[placeholder="First Name"]').parents()
		// Get parent element and its child
		cy.get('input[placeholder="First Name"]').parents().find('label')

		// Get parent element and child element limiting parent
		cy.get('input[placeholder="First Name"]').parents('form').find('label')

		cy.get('form').find('label')

		cy.pause()
		cy.get('input[placeholder="First Name"]').then(console.log)
		cy.get('input[placeholder="First Name"]').debug
		// Correct way of using find

		//cy.find('label') //wrong way of using find
	})
})
