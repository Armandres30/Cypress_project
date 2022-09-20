describe('Interacting with elements', () => {

    let text
    it('Click', () => {
        cy.visit('/buttons')
        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage').should('be.visible').and('contain', 'You have a dynamic click')
    })

    it('Double Click', () => {
        cy.visit('/buttons')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible').and('contain', 'You have done a double click')
    })
    it('Right Click', () => {
        cy.visit('/buttons')
        cy.get('#rightClickBtn').dblclick()
        cy.get('#rigthClickMessage').should('be.visible').and('contain', 'You have done a right click')
    })
    it('Force Click', () => {
        cy.visit('/dynamic-properties')
        //cy.get('#enableAfter').click({timeout:0})
        cy.get('#enableAfter').click({timeout:0, force: true})
        //cy.get('#rightClickBtn').dblclick()
        //cy.get('#rigthClickMessage').should('be.visible').and('contain', 'You have done a right click')
    })
    it('Click per position', () => {
        cy.visit('/buttons')
        cy.get('button').eq(3).parent().parent().click('topRight')
        cy.get('button').eq(3).parent().parent().click('bottomLeft')
        cy.get('button').eq(3).parent().parent().click(5,60)
        
    })
    it('Input type text', () => {
        cy.visit('/automation-practice-form')
        cy.get('#firstName').type('Armando')
        cy.get('#lastName').type('Flores')

        cy.get('#firstName').type(' Andres')
        
        cy.wait(5000)

        cy.get('#firstName').type('{selectAll}{backspace}')
        cy.get('#firstName').type('Another Name')
        
    })
    it('Checkboxes and radio buttons', () => {
        cy.visit('/automation-practice-form')
        //cy.get('#gender-radio-1').click() //won't work because element inside of label
        cy.get('#gender-radio-1').click({force:true})
        cy.get('#gender-radio-1').check({force:true})
        cy.get('label[for="gender-radio-1"]').click()

        cy.get('#hobbies-checkbox-1"]').check({force:true})
        cy.get('#hobbies-checkbox-1"]').uncheck({force:true})

        cy.get('label[for="hobbies-checkbox-1"]').click()
        
    })
    it('Extracting info', () => {
        cy.visit('/automation-practice-form')
        
        cy.get('#firstName').as('name')
        cy.get('@name').type('Armando')
        //First way to do it
        cy.get('@name').then(($name) => {
            text = $name.val()
            expect(text).to.equal('Armando')
        })

        //Second way to do it, invoke only a function that in
        //this case is the element returned by get.
        cy.get('@name').invoke('val').should('equal', 'Armando')
        cy.get('@name').invoke('val').as('nameGlobal')
    })
    it('Sharing information between its', () => {
        // with global variable
        cy.get('#lastName').type(text)
        // with alias
        cy.get('#lastName').type(this.nameGlobal)
        
    })
    it('Interacting with dropdowns(select)', () => {
        // with global variable
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

		//Select per index
		cy.get('.custom-select').select(10)

		//Select per value
		cy.get('.custom-select').select('3').should('have.value', '3')

		//Select per text
		cy.get('.custom-select').select('Greece').should('have.value', '4')
    })
    it('Interacting with dropdown(select) dynamically', () => {
        // with global variable
        cy.visit('https://react-select.com/home')
        //Select per index
		cy.get('#react-select-6-input').type(' ')

		//Iterating each element
        cy.get('#react-select-6-listbox')
            .children()
            .children()
            .each(($el, index, $list) => {
                if ($el.text() == 'Red'){
                    $el.on('click')
                }
            })
        // Or if you know the id element
        cy.get('#react-select-6-option-3').click()   
    })
    it('Interacting with Tables', () => {
       // Getting table headers
		cy.visit('https://www.w3schools.com/html/html_tables.asp')
		cy.get('#customers')
			.find('th')
			.each(($el, index, $list) => {
				cy.log($el.text())
			})

		cy.get('#customers')
			.find('th')
			.first()
			.invoke('text')
			.should('equal', 'Company')

		cy.get('#customers')
			.find('th')
			.eq(1)
			.invoke('text')
			.should('equal', 'Contact')

		cy.get('#customers')
			.find('th')
			.eq(2)
			.invoke('text')
			.should('equal', 'Country')

		// Validamos el numero de filas
		cy.get('#customers').find('tr').should('have.length', 7)

		cy.get('#customers')
			.find('tr')
			.eq(1)
			.find('td')
			.eq(1)
			.invoke('text')
			.should('equal', 'Maria Anders')

		cy.get('#customers')
			.find('tr')
			.eq(1)
			.find('td')
			.eq(1)
			.then(($el) => {
				const texto = $el.text()
				expect(texto).to.equal('Maria Anders')
				cy.wrap($el).should('contain', 'Maria Anders')
			})  
    })

    it('Interacting with date pickers', () => {
        cy.visit('https://material.angular.io/components/datepicker/overview')
		cy.get('datepicker-overview-example')
			.find('input')
			.eq(0)
			.type('12/02/2005{enter}')

		cy.get('datepicker-overview-example').find('svg').click()  
    })

    it('Interacting with modals', () => {
        cy.visit('/modal-dialogs')
        cy.get('#showSmallModal').click()
        cy.get('#closeSmallModal').click()
    })

    it('Interacting with popups', () => {
        cy.visit('/alerts')
        //Cypress automatically accepts it

        // First way to do it
        // cy.get('#confirmButton').click()
        // cy.on('window:confirm', (confirm) => {
        //     expect(confirm).to.equal('Do you confirm action?')
        // })
        // cy.contains('You selected Ok').should('exist')

        // Second way to do it
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#confirmButton').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
        })
        cy.contains('You selected Ok').should('exist')


        // reject alert
        // cy.get('#confirmButton').click()
        // cy.on('window:confirm', (confirm) => {
        //     expect(confirm).to.equal('Do you confirm action?')
        //     return false
        // })
        // cy.contains('You selected Cancel').should('exist')

    })

    it('Interacting with tooltips', () => {
        cy.visit('/tool-tips')
        cy.get('#toolTipButton').trigger('mouseover')
        cy.contains('You hovered over the Button').should('exist')
        cy.get('#toolTipButton').trigger('mouseout')
        cy.contains('You hovered over the Button').should('not.exist')

    })

    it('Interacting with drag and drops', () => {
        cy.visit('/dragabble')
        cy.get('#dragBox')
            .trigger('mousedown', {which: 1, pageX: 600, pageY: 100})
            .trigger('mousemove', {which: 1, pageX: 600, pageY: 600})
            .trigger('mouseup')
    })
})