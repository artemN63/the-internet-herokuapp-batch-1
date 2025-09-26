import { expect, Locator, Page } from '@playwright/test'

export class SecurePage {
    logOutButton: Locator
    logInMessage: Locator

    constructor(page: Page) {
        this.logInMessage = page.getByText('You logged into a secure area')
        this.logOutButton = page.getByRole('link', { name: 'Logout' })
    }

    async validateLogInMessage(): Promise<void> {
        await expect(this.logInMessage).toContainText("You logged into a secure area!")
    }

    async logOut(): Promise<void> {
        await this.logOutButton.click()
    }
}