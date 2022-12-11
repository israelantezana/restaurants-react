describe('Test a simple alert by clicking a button', function() {
    it('clicks the button and verify the content', function(){
        cy.visit('http://localhost:3000/')    
    
        const stub = cy.stub()  
        cy.on ('window:alert', stub)
        /*
          Escribe aquí tu prueba para comprobar que al pulsar el botón se muestra una alerta con un texto específico. 
          Para poder monitorear el proceso, utiliza el stub para ver el texto del cuadro de alerta.
        */    
        })
    })