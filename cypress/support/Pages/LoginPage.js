export class LoginPage {

    CreateUser(){
        cy.request(
            'POST',
            'https://pushing-it.onrender.com/api/register',
        {   username: 'FlorenciaMarquez',
            password:'123456!',
            gender:'Female',
            day:'16',
            month:'july',
            year:'1990'  
        }).then((response) => {
            expect(response.status).to.equal(200)
        });
    };

    LoginWithNewUser(){
        cy.request(
            'POST',
            'https://pushing-it.onrender.com/api/login',
            {
            username: 'FlorenciaMarquez',
            password:'123456!'
            }).then((response) => {
                expect(response.status).to.equal(200)
                window.localStorage.setItem('token',response.body.token)
                window.localStorage.setItem('user',response.body.user.username)});
                cy.visit('');

    };
};