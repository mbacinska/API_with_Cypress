/// <reference types="Cypress" />

describe('Http methods test', () => {
    it('adds book to the library, checks if was added and remove it ', () => {
        //add book to the library API
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name": "Learn Appium Automation with Java",
            "isbn": "cpmy",
            "aisle": "148",
            "author": "John Foe"
        }).its('body').then((body) => {
            const bookID = body.ID
            cy.log(bookID)
            //check if book was added
            cy.request('GET', `http://216.10.245.166/Library/GetBook.php?ID=${bookID}`).as('response')
            cy.get('@response').its('status').should('equal', 200)

            //delete book 
            cy.request('POST', 'http://216.10.245.166/Library/DeleteBook.php', {
                "ID": `${bookID}`
            }).then((response) => {
                expect(response.body).to.have.property('msg', 'book is successfully deleted')
            })


        })
    })
})