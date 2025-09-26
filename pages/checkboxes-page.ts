import { expect, Locator, Page } from '@playwright/test'

export class CheckBoxesPage {
    checkBox1: Locator
    checkBox2: Locator

    constructor(page: Page) {
        this.checkBox1 = page.getByRole('checkbox').first()
        this.checkBox2 = page.getByRole('checkbox').nth(1)
    }

    clickOnCheckBox(checkBoxNumber: number): void {
        if(checkBoxNumber === 1) {
            this.checkBox1.click()
        } else if (checkBoxNumber === 2) {
            this.checkBox2.click()
        }
    }

    async validateCheckBoxesFirtstIsNotCheckedAndSecondIsChecked(): Promise<void> {
        await expect(this.checkBox1).not.toBeChecked()
        await expect(this.checkBox2).toBeChecked() 
    }

    async validateBothCheckBoxesAreChecked(): Promise<void> {
        await expect(this.checkBox1).toBeChecked()
        await expect(this.checkBox2).toBeChecked() 
    }
}