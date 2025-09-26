import {test} from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { AddRemoveElementsPage } from '../pages/add-remove-elements-page'

let homePage: HomePage
let addRemoveElementsPage: AddRemoveElementsPage
test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        addRemoveElementsPage = new AddRemoveElementsPage(page)
        await page.goto('https://the-internet.herokuapp.com/')
        await homePage.clickOnLink("Add/Remove Elements")
    })

test('Add/Remove Elements Validation happy path', async ({page}) => {
    await addRemoveElementsPage.addElementThreeTimesClick()
    await addRemoveElementsPage.validateThreeDeleteButtonsAreVisible()
    await addRemoveElementsPage.pressEachOfThreeDeleteButton()
    await addRemoveElementsPage.validateThreeDeleteButtonsAreNotVisible()
})