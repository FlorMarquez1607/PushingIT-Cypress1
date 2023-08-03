/// <reference types="cypress" />

describe("",() =>{
    it("",() =>{
        cy.request(
            'DELETE',
            'https://pushing-it.onrender.com/api/deleteuser/FlorenciaMarquez'
        ).then((response) => {
            expect(response.status).to.equal(200)});

    })
})