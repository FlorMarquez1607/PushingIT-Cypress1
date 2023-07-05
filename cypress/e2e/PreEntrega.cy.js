/// <reference types="cypress" />

import {LoginPage} from "../support/Pages/LoginPage";
import {ProductsPage} from "../support/Pages/ProductsPage";
import {ShoppingCartPage} from "../support/Pages/ShoppingCartPage"

describe('Online Shop section', ()=> {
    let Credentials;
    let Products;
    const loginPage = new LoginPage ();
    const productsPage = new ProductsPage ();
    const shoppingCartPage = new ShoppingCartPage ();
    before('',()=>{
        cy.fixture('Credentials').then(Data1=>{
            Credentials = Data1;
        })
        cy.fixture('Products').then(Data2=>{
            Products = Data2;
        })
    })
    beforeEach('User logs in "Pushing IT" page',()=>{
        cy.visit('')
        loginPage.ClickOnLogin();
        loginPage.EnterUser(Credentials.user);
        loginPage.EnterPassword(Credentials.pass);
        loginPage.ClickLoginBtn();
    })
    it('User selects two products from the Online Shop, then verifies the shopping cart', ()=>{
      productsPage.GetInProductsPage();
      productsPage.SelectProduct(Products.PinkSweater.Id);
      productsPage.SelectProduct(Products.WhiteShoes.Id);
      shoppingCartPage.GetInShoppingCartSection();
      shoppingCartPage.ProductsVerification(Products.PinkSweater.Id,Products.PinkSweater.Price);
      shoppingCartPage.ProductsVerification(Products.WhiteShoes.Id,Products.WhiteShoes.Price);
      shoppingCartPage.TotalToPayVerification(Products.PinkSweater.Price,Products.WhiteShoes.Price);
    });
});