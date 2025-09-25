import { expect, Locator, Page } from '@playwright/test'

export class HomePage {
    mainTitle: Locator
    homePageContentLinks: Locator

    constructor(page: Page) {
        this.mainTitle = page.getByRole('heading', { name: 'Welcome to the-internet' })
        this.homePageContentLinks = page.locator("div[id='content'] ul li")
    }

    validateMainTitle(): void {
        expect(this.mainTitle).toHaveText('Welcome to the-internet')
    }

    async clickOnLink(linkText: string): Promise<void> {
        const link = this.homePageContentLinks.locator(`text=${linkText}`)
        await link.click()
    }
}