import {test} from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { FormAuthenticationPage } from '../pages/form-authentication-page'
import { SecurePage } from '../pages/secure-page'

let homePage: HomePage
let formAuthenticationPage: FormAuthenticationPage
let securePage: SecurePage

test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        formAuthenticationPage = new FormAuthenticationPage(page)
        securePage = new SecurePage(page)
        await page.goto('https://the-internet.herokuapp.com/')
        await homePage.clickOnLink("Form Authentication")
    })

test('Form Authentication Validation happy path', async ({page}) => {
    await formAuthenticationPage.logIn('tomsmith', 'SuperSecretPassword!')
    await securePage.validateLogInMessage()
    await securePage.logOut()
    await formAuthenticationPage.validateLogOutMessage()
})