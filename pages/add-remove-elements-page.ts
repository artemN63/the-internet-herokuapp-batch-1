import { expect, Locator, Page } from '@playwright/test'

export class AddRemoveElementsPage {
    addElementButton: Locator
    firstDeleteButton: Locator
    secondDeleteButton: Locator
    thirdDeleteButton: Locator

    constructor(page: Page) {
        this.addElementButton = page.getByRole('button', { name: 'Add Element' })
        this.firstDeleteButton = page.getByRole('button', { name: 'Delete' }).first()
        this.secondDeleteButton = page.getByRole('button', { name: 'Delete' }).nth(1)
        this.thirdDeleteButton = page.getByRole('button', { name: 'Delete' }).nth(2)
    }

    async addElementThreeTimesClick(): Promise<void> {
    for (let i = 0; i < 3; i++) {
        await this.addElementButton.click()
    }
    }

    async validateThreeDeleteButtonsAreVisible(): Promise<void> {
        await expect(this.firstDeleteButton).toBeVisible()
        await expect(this.secondDeleteButton).toBeVisible()
        await expect(this.thirdDeleteButton).toBeVisible()
    }

    async validateThreeDeleteButtonsAreNotVisible(): Promise<void> {
        await expect(this.firstDeleteButton).not.toBeVisible()
        await expect(this.secondDeleteButton).not.toBeVisible()
        await expect(this.thirdDeleteButton).not.toBeVisible()
    }

    async pressEachOfThreeDeleteButton(): Promise<void> {
        await this.firstDeleteButton.click()
        await this.firstDeleteButton.click()
        await this.firstDeleteButton.click()
    }
}
