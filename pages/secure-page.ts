import { expect, Locator, Page } from '@playwright/test'

export class SecurePage {
    logOutButton: Locator

    constructor(page: Page) {
        this.logOutButton = page.getByRole('link', { name: 'Logout' })
    }

    async logOut(): Promise<void> {
        await this.logOutButton.click()
    }
}