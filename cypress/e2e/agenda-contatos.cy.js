describe('Agenda de contatos', () => {
    const nome = 'Contato Teste Cypress'
    const nomeAlterado = 'Contato Teste Cypress Alterado'

    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('deve incluir um contato', () => {
        cy.get('input[type="text"]').type(nome)
        cy.get('input[type="email"]').type('teste.cypress@ebac.com')
        cy.get('input[type="tel"]').type('11999999999')
        cy.get('button.adicionar').click()

        cy.contains('.contato', nome).should('exist')
    })

    it('deve alterar um contato', () => {
        cy.contains('.contato', nome).find('button.edit').click()

        cy.get('input[type="text"]').clear().type(nomeAlterado)
        cy.get('button.alterar').click()

        cy.contains('.contato', nomeAlterado).should('exist')
    })

    it('deve remover um contato', () => {
        cy.contains('.contato', nomeAlterado).find('button.delete').click()

        cy.contains('.contato', nomeAlterado).should('not.exist')
    })
})
