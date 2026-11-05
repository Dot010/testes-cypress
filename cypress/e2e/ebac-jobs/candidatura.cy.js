/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e-bay.vercel.app/')
    })

    it('Deve renderizar levar a pagina de candidatura', () => {
    
        cy.get(':nth-child(1) > .Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('Deve preencher o formulário de candidatura', () => {
         cy.get(':nth-child(1) > .Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Jonathan')
        cy.get('input[name="email"]').type('jonathan@example.com')
        cy.get('input[name="telefone"]').type('11999999999')
        cy.get('input[name="endereco"]').type('Rua Exemplo, 123')
        cy.get('select[name="escolaridade"]').select('Outros')
        cy.get('#linux').check()
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
    cy.screenshot('tela-inscricao-preenchida')
    })
  
})