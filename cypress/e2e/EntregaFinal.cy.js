/// <reference types="cypress" />

import {LoginPage} from "../support/Pages/LoginPage";
import {ProductsPage} from "../support/Pages/ProductsPage";
import {ShoppingCartPage} from "../support/Pages/ShoppingCartPage";
import {CheckoutPage} from "../support/Pages/CheckoutPage";
import {ReciptPage} from "../support/Pages/ReciptPage";

describe('Online Shop section', ()=> {
    let CheckoutData;
    let Products;
    const loginPage = new LoginPage ();
    const productsPage = new ProductsPage ();
    const shoppingCartPage = new ShoppingCartPage ();
    const checkoutpPage = new CheckoutPage ();
    const reciptPage = new ReciptPage ();
    before('',()=>{
        cy.fixture('CheckoutData').then(Data1=>{
            CheckoutData = Data1;
        })
        cy.fixture('Products').then(Data2=>{
            Products = Data2;
        })
        loginPage.CreateUser();
        
    })
    beforeEach('User logs in "Pushing IT" page',()=>{
        loginPage.LoginWithNewUser();
    })
    it('User selects two products from the Online Shop, then verifies the shopping cart', ()=>{
    productsPage.GetInProductsPage();
    productsPage.SelectProduct(Products.PinkSweater.Id);
    productsPage.SelectProduct(Products.WhiteShoes.Id);
    shoppingCartPage.GetInShoppingCartSection();
    shoppingCartPage.ProductsVerification(Products.PinkSweater.Id,Products.PinkSweater.Price);
    shoppingCartPage.ProductsVerification(Products.WhiteShoes.Id,Products.WhiteShoes.Price);
    shoppingCartPage.TotalToPayVerification(Products.PinkSweater.Price,Products.WhiteShoes.Price);
    shoppingCartPage.ClickOnCheckoutButton();
    checkoutpPage.FillOutTheForm(CheckoutData.FirstName, CheckoutData.LastName, CheckoutData.CardNumber);
    checkoutpPage.ConfirmPurchase();
    reciptPage.WaitToRecipt();
    reciptPage.VerifyNameAndLastName(CheckoutData.FirstName, CheckoutData.LastName);
    reciptPage.VerifyProducts(Products.PinkSweater.Id,Products.WhiteShoes.Id);
    reciptPage.VerifyCreditCardNumber(CheckoutData.CardNumber);
    reciptPage.VerifyTotalAmout(Products.PinkSweater.Price,Products.WhiteShoes.Price);

    });
});

after("Delete User",() =>{
    
        cy.request(
            'DELETE',
            'https://pushing-it.onrender.com/api/deleteuser/FlorenciaMarquez'
        ).then((response) => {
            expect(response.status).to.equal(200)});
})