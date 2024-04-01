describe('Compra On-Line', () => {

    it('Validar produto adicionado com sucesso', () => {
      // Navega
      cy.visit("https://www.vr.com.br")
      cy.get("#buttonCompreOnline > span").click();
      cy.wait(2000)
      cy.get("#link-cliente-rh").click();  
      cy.get("#btn-selecionar-modalidade-avulso").click();
      cy.get("#modalidade-avulso-page > div > div > div > form:nth-child(4) > div:nth-child(2) > div > button.lojavr-style-c-edUOqw.lojavr-style-c-edUOqw-cZhZjR-variant-primary.plus-button").click();
      cy.get("produto-auto-valor").type("100");
      cy.get("#btn-adicionar-carrinho-auto").click();
      // Valida Produto
      cy.get('#modalidade-avulso-page > div > div > div > form.lojavr-style-c-gRiUQD.lojavr-style-c-gRiUQD-jhfYHE-isOnCart-true > div.product-in-cart-view__content > p').should('contain.text', 'Produto adicionado!')
    })
  })