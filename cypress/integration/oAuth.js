/// <reference types="Cypress" />

describe('oAuth 2.0 test', () => {
    it('retrieves access_token', () => {

        //const getCodeUrl = 'https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&auth_url=https://accounts.google.com/o/oauth2/v2/auth&client_id=692183103107-p0m7ent2hk7suguv4vq22hjcfhcr43pj.apps.googleusercontent.com&response_type=code&redirect_uri=https://rahulshettyacademy.com/getCourse.php'

        const url = 'hhttps://rahulshettyacademy.com/getCourse.php?code=4%2FzQGKCNT_yulDVCcIwiqBraiWaTT6qdMvfW-E3k76OGA6S40wAPmLhBtxC8aL-tGxM9kI-wPo8hkMPXyKwiO8PiM&scope=email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&prompt=none#ttps://rahulshettyacademy.com/getCourse.php?code=4%2FzQGhg5amUceN3OWtpN1RPLdEu2uurnn5QonmHx5Dup7wg_9rhtJbo-mULcnNKiWt0K-p1Ffle3p7AJXLpCUKjv4&scope=email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&prompt=none#'
        const splitUrl = url.split("code=")[1]
        const code = splitUrl.split("&scope")[0]
        cy.log(code)
        cy.request({
            method:'POST',
            url: `https://www.googleapis.com/oauth2/v4/token?code=${code}?client_id=692183103107-p0m7ent2hk7suguv4vq22hjcfhcr43pj.apps.googleusercontent.com?client_secret=erZOWM9g3UtwNRj340YYaK_W?grant_type=authorization_code?redirect_uri=https://rahulshettyacademy.com/getCourse.php`,
            urlEncodingEnabled: false,
            failOnStatusCode:false
        })
            .its('body').then((body) => {
                const token = body.access_token
                cy.log(token)

                cy.request('GET', `https://rahulshettyacademy.com/getCourse.php?access_token=${token}`).as('response')
                cy.get('@response').its('status').should('equal', 200)


            })
    })
})
