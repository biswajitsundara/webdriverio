import LoginPage from  '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('user', 'test');
        await expect(HomePage.headingInfo).toBeExisting();
        await expect(HomePage.headingInfo).toHaveTextContaining('Customer Information');
        await browser.pause(5000);
    });

    it('should logout from the app successfully', async () => {
        
        await HomePage.logout();
        await browser.pause(5000);
    });
});


