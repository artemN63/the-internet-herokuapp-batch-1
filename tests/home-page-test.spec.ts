import {test} from '@playwright/test'
import { HomePage } from '../pages/home-page'

let homePage: HomePage

test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        await page.goto('https://the-internet.herokuapp.com/')
    })

test('The Internet - Herokuapp Main title validation', async ({page}) => {
    await homePage.validateMainTitle()
})