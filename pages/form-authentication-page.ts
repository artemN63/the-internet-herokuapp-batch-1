import { expect, Locator, Page } from '@playwright/test'

export class FormAuthenticationPage {
    usernameInput: Locator
    passwordInput: Locator
    logInButton: Locator
    logOutMessage: Locator

    errorUsernameMessage: Locator
    errorPasswordMessage: Locator

    constructor(page: Page) {
        this.usernameInput = page.getByRole('textbox', { name: 'Username' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.logInButton = page.getByRole('button', { name: ' Login' })
        this.logOutMessage = page.getByText('You logged out of the secure')

        this.errorUsernameMessage = page.getByText('Your username is invalid! ×')
        this.errorPasswordMessage = page.getByText('Your password is invalid! ×')
    }

    async logIn(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.logInButton.click()
    }

    async validateLogOutMessage(): Promise<void> {
        await expect(this.logOutMessage).toContainText("You logged out of the secure area!")
    }

    async validateUsernameErrorMessage(): Promise<void> {
        expect(this.errorUsernameMessage).toContainText('Your username is invalid!')
    }

    async validatePasswordErrorMessage(): Promise<void> {
        expect(this.errorPasswordMessage).toContainText('Your password is invalid!')
    }
}