/// <reference types="Cypress" />

/*const faker = require('faker')*/



beforeEach(() => {
  
    cy.visit('./src/index.html')
    /*user.email = faker.internet.email()
    user.firstName = faker.name.firstName()
    user.lastName = faker.name.lastName()
    user.phone = faker.internet.phone()*/
    })
    
    
    describe('Central de Atendimento ao Cliente TAT', function() {
    
     
    it('marca o tipo de atendimento "Feedback"', function(){
    
    
        cy.get(':nth-child(4) > input').check().should('be.checked')
    
        cy.get(':nth-child(3) > input').check().should('be.checked')
        
        cy.get('#support-type > :nth-child(2) > input').check().should('be.checked')
      
    })
    
    })