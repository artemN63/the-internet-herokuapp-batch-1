import {test} from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { CheckBoxesPage } from '../pages/checkboxes-page'

let homePage: HomePage
let checkBoxesPage: CheckBoxesPage

test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        checkBoxesPage = new CheckBoxesPage(page)
        await page.goto('https://the-internet.herokuapp.com/')
    })

test('Checkboxes Validation happy path', async ({page}) => {
    await homePage.clickOnLink("Checkboxes")

    await checkBoxesPage.validateSecondCheckBox()
    await checkBoxesPage.checkBox1.click()
    await checkBoxesPage.validateBothCheckBoxes()
})