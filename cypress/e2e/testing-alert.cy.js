describe('Test a simple alert by clicking a button', function() {
    it('clicks the button and verify the content', function(){
        cy.visit('http://localhost:3000/')    
    
        const stub = cy.stub()  
        cy.on ('window:alert', stub)
        cy
        .get('button').contains('Click for Alert').click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('This is a simple alert')      
        })  
    
        })
    
    })