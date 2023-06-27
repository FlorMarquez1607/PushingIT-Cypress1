export class ShoppingCartPage {

    GetInShoppingCartSection(){
        cy.xpath('//button[@id="goShoppingCart"]').click();
    }
    
    ProductsVerification(Product,Price){
        cy.contains(Product).should('have.text',Product).siblings('p').eq(1).should('have.text',Price);
    };

    TotalToPayVerification(){
        cy.xpath("//button[contains(text(),'Show total price')]").click();
        cy.get('#price > b').should('contain',48)
    };
}