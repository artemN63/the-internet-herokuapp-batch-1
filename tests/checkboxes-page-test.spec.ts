import {test} from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { CheckBoxesPage } from '../pages/checkboxes-page'

let homePage: HomePage
let checkBoxesPage: CheckBoxesPage

test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        checkBoxesPage = new CheckBoxesPage(page)
        await page.goto('https://the-internet.herokuapp.com/')
        await homePage.clickOnLink("Checkboxes")
    })

test('Checkboxes Validation happy path', async ({page}) => {
    await checkBoxesPage.validateCheckBoxesFirtstIsNotCheckedAndSecondIsChecked()
    await checkBoxesPage.clickOnCheckBox(1)
    await checkBoxesPage.validateBothCheckBoxesAreChecked()
})