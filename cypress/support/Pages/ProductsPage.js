export class ProductsPage {
    
    GetInProductsPage(){
        cy.get('#onlineshoplink').click();
    };

    SelectProduct(Product){
        cy.get('div').contains(Product).siblings('button').click();
        cy.contains('header','Message alert').siblings('div').children('p').should('contain.text',Product);
        cy.get('#closeModal').click()
    };

}