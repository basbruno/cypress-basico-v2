/// <reference types="Cypress" />

/*const faker = require('faker')*/



beforeEach(() => {
  
    cy.visit('./src/index.html')
    /*user.email = faker.internet.email()
    user.firstName = faker.name.firstName()
    user.lastName = faker.name.lastName()
    user.phone = faker.internet.phone()*/
    })
    
    

     
   
    
    
    /// <reference types="Cypress" />

/*const faker = require('faker')*/



beforeEach(() => {
  
    cy.visit('./src/index.html')
    
    })
    
    
    describe('Central de Atendimento ao Cliente TAT', function() {
    
     
    it('EX1: seleciona um produto (YouTube) por seu valor', function(){
    
    
        cy.get('#product').select('youtube').should('have.value','youtube')
    
    
      
    })

    it('EX2: seleciona um produto (Mnetoria) por seu valor', function(){
    
    
        cy.get('#product').select('mentoria').should('have.value','mentoria')
    
    
      
    })
    

    it('EX3: seleciona um produto (Blog) por seu indice', function(){
    
    
        cy.get('#product').select(1).should('have.value','blog')
    
    
      
    })

    
    it('EX4: seleciona um produto (Cursos) por seu valor', function(){
    
    
        cy.get('#product').select('cursos').should('have.value','cursos')
    
    
      
    })

    })
    
    
      
