import {test,expect} from 'playwright/test'

test('navigate to webapp', async({page}) => {

await page.goto('https://automationpracticehubapp.netlify.app/')
await expect(page).toHaveTitle('You Can Do it')


await page.getByTestId('login-username').fill('Admin')

await page.getByTestId('login-password').fill('Hello@123')

await page.getByRole('button', { name: ' Sign In '}).click();

await page.getByRole('button', {name:'Submit'}).first().click()

await page.getByRole('button', {name:'Save'}).click()

await page.getByRole('button', {name:'Reset'}).click()

 await expect(
    page.getByRole('button', { name: 'Disabled Button' })
  ).toBeDisabled();

})



// <input id="login-username" data-testid="login-username" placeholder="Admin" autocomplete="username" type="text" value="" name="username">