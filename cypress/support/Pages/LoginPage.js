export class LoginPage {

    ClickOnLogin(){
        cy.get('#registertoggle').dblclick();
    };

    EnterUser(user){
        cy.get('#user').type(user);
    };

    EnterPassword(pass){
        cy.get('#pass').type(pass);
    };

    ClickLoginBtn(){
        cy.get('#submitForm').click();
    };
}