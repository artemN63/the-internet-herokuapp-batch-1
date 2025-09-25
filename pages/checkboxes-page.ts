import { expect, Locator, Page } from '@playwright/test'

export class CheckBoxesPage {
    checkBox1: Locator
    checkBox2: Locator

    constructor(page: Page) {
        this.checkBox1 = page.getByRole('checkbox').first()
        this.checkBox2 = page.getByRole('checkbox').nth(1)
    }

    async validateSecondCheckBox(): Promise<void> {
        await expect(this.checkBox1).not.toBeChecked()
        await expect(this.checkBox2).toBeChecked() 
    }

    async validateBothCheckBoxes(): Promise<void> {
        await expect(this.checkBox1).toBeChecked()
        await expect(this.checkBox2).toBeChecked() 
    }
}