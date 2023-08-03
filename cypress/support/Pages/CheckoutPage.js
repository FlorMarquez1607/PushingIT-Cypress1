export class CheckoutPage{

    FillOutTheForm(FirstName,LastName,CardNumber){
        cy.get('#FirstName').type(FirstName);
        cy.get('#lastName').type(LastName);
        cy.get('#cardNumber').type(CardNumber);
    };

    ConfirmPurchase(){
        cy.contains('button','Purchase').click()
    };
}