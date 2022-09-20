describe('Navigation Test', {browser: '!chrome'}, () => {

    it('Navigating to a site', () => {
        cy.visit('https://platzi.com');
    });


    it('Reloading a site', () => {
        cy.reload()
    });

    it('Force reload of a page', () => {
        cy.visit('https://google.com');
        cy.reload(true)
    });

    it('Navigating back to a previous page', () => {
        cy.visit('https://google.com');
        cy.visit('https://www.google.com/search?q=platzi&sxsrf=APq-WBsJmYoDdRVdbT5vkzyA6INN9o-OoA%3A1645072295957&source=hp&ei=p88NYtzpNpauytMPo56H6Aw&iflsig=AHkkrS4AAAAAYg3dt-lyynY6DU3aZCGsxCJKBESc0ZTy&ved=0ahUKEwic2c7u84X2AhUWl3IEHSPPAc0Q4dUDCAY&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyDgguEIAEELEDEMcBENEDMggIABCABBCxAzILCC4QgAQQxwEQrwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEOoCECc6CwguEIAEELEDEIMBOggIABCxAxCDAToLCAAQgAQQsQMQgwE6CAguEIAEELEDOgYIIxAnEBM6BAgAEEM6BwgAELEDEEM6BwgAEMkDEEM6CgguEMcBEKMCEEM6DgguEIAEELEDEIMBENQCULcEWNgNYKYQaAFwAHgAgAGAAYgBxgWSAQMwLjaYAQCgAQGwAQo&sclient=gws-wiz');
        cy.go('back')
        // cy.go(-1)
    });

    it('Navigating forward to a next page', () => {
        cy.visit('https://google.com');
        cy.visit('https://www.google.com/search?q=platzi&sxsrf=APq-WBsJmYoDdRVdbT5vkzyA6INN9o-OoA%3A1645072295957&source=hp&ei=p88NYtzpNpauytMPo56H6Aw&iflsig=AHkkrS4AAAAAYg3dt-lyynY6DU3aZCGsxCJKBESc0ZTy&ved=0ahUKEwic2c7u84X2AhUWl3IEHSPPAc0Q4dUDCAY&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyDgguEIAEELEDEMcBENEDMggIABCABBCxAzILCC4QgAQQxwEQrwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEOoCECc6CwguEIAEELEDEIMBOggIABCxAxCDAToLCAAQgAQQsQMQgwE6CAguEIAEELEDOgYIIxAnEBM6BAgAEEM6BwgAELEDEEM6BwgAEMkDEEM6CgguEMcBEKMCEEM6DgguEIAEELEDEIMBENQCULcEWNgNYKYQaAFwAHgAgAGAAYgBxgWSAQMwLjaYAQCgAQGwAQo&sclient=gws-wiz');
        cy.go('back')
        cy.go('forward')
        // cy.go(1)
    });


    it('Navigating forward to a next page with chain command', () => {
        cy.visit('https://google.com');
        cy.visit('https://www.google.com/search?q=platzi&sxsrf=APq-WBsJmYoDdRVdbT5vkzyA6INN9o-OoA%3A1645072295957&source=hp&ei=p88NYtzpNpauytMPo56H6Aw&iflsig=AHkkrS4AAAAAYg3dt-lyynY6DU3aZCGsxCJKBESc0ZTy&ved=0ahUKEwic2c7u84X2AhUWl3IEHSPPAc0Q4dUDCAY&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyDgguEIAEELEDEMcBENEDMggIABCABBCxAzILCC4QgAQQxwEQrwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEOoCECc6CwguEIAEELEDEIMBOggIABCxAxCDAToLCAAQgAQQsQMQgwE6CAguEIAEELEDOgYIIxAnEBM6BAgAEEM6BwgAELEDEEM6BwgAEMkDEEM6CgguEMcBEKMCEEM6DgguEIAEELEDEIMBENQCULcEWNgNYKYQaAFwAHgAgAGAAYgBxgWSAQMwLjaYAQCgAQGwAQo&sclient=gws-wiz').go('back').go('forward')
    });
})