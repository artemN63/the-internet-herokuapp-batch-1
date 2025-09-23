import { expect, Locator, Page } from '@playwright/test'

export class HomePage {
    mainTitle: Locator

    constructor(page: Page) {
        this.mainTitle = page.getByRole('heading', { name: 'Welcome to the-internet' })
    }

    validateMainTitle(): void {
        expect(this.mainTitle).toHaveText('Welcome to the-internet')
    }
}