/// <reference types="Cypress" />


//cypress uses mocha and Chai test framework 
describe('MyFirstCypress',function() { //describe is like test scenario
    it('MyFirstTestCase',function() //it is like our test case
    {

        cy.visit('https://www.fenergo.com')  //cy.visit is to naviagte to new url
        cy.wait(5000) //similar to thread.spleep
        cy.contains('Accept All Cookies').click()  //idenitfies element contains text as 'Accept All Cookies and click
        //cy.get('#mobile-nav').click()  //cy.get is used to identify DOm elements based on css selectors
    
        //cy.contains('Book a Demo').eq(1).click()  //A number indicating the index to find the element at within an array of elements. A negative number counts index from the end of the list.
        cy.contains('Book a Demo').click()
        cy.get('#FirstName').type('Dhanunjaya Accenture') //To Enter Value into text box

        cy.get('#Country').select('Australia') //to select value from dropdown

        cy.get('#Marketing_Opt_In__c').check() //to click check box

        //https://docs.cypress.io/guides/references/assertions#Disabled-property
        //should is used for assertions
        //be is for assertion of behaviour of element
        //have is used for assertion of properties of element
        cy.get('.mktoButton').should('be.enabled')  //to check button is enabled

        /*
        cy.get('.products').as('productLocator')  //as is used as alias name for element and can be reused
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {  @productLocator is as alis name for cy.get('product')
            //each is used to iterate through listof elements
        const textVeg=$el.find('h4.product-name').text()
        if(textVeg.includes('Cashews'))
        {
        $el.find('button').click()
        }
        })*/

        // To Fetch the list from Mouseover Menu
       cy.get('#menu-main').find('#menu-item-6018 ul.sub-menu li a').each(($el,index,$list) =>{

              cy.log($el.text())
            if($el.text() ==="Client Lifecycle Management")
            {
                cy.wrap($el).click({force:true})
             }
       });

       cy.get('#slider-35-slide-49-layer-5').click();
       cy.get('#Institution_Type__c').select('Fintech')
       cy.get('#Institution_Type__c').should('have.value','Fintech')  //Validate if DropDown is selected or not


      
      

    }); 
    
});

    
