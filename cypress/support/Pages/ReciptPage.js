export class ReciptPage {
    
    WaitToRecipt(){
        cy.get('.chakra-progress', {timeout: 20000}).should('not.exist');
    }
    
    VerifyNameAndLastName(Name,LastName){
        cy.xpath('//header[text()="Purchase has been completed successfully"]//following-sibling::div//child::div//child::p').should('contain.text',Name)
        cy.xpath('//header[text()="Purchase has been completed successfully"]//following-sibling::div//child::div//child::p').should('contain.text',LastName)

    }

    VerifyProducts(PinkSweater,WhiteShoes){
        cy.xpath('//header[text()="Purchase has been completed successfully"]//following-sibling::div//child::div//child::p').should('contain.text',PinkSweater)
        cy.xpath('//header[text()="Purchase has been completed successfully"]//following-sibling::div//child::div//child::p').should('contain.text',WhiteShoes)

    }

    VerifyCreditCardNumber(CardNumber){
        cy.xpath('//header[text()="Purchase has been completed successfully"]//following-sibling::div//child::div//child::p').should('contain.text',CardNumber)

    }

    VerifyTotalAmout(Price1,Price2){
        cy.xpath('//header[text()="Purchase has been completed successfully"]//following-sibling::div//child::div//child::p').should('contain.text',Price1+Price2)

    }
}