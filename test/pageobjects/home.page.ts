import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get headingInfo () {
        return $('h1');
    }

    public get navMenu () {
        return $('.nav-menu button');
    }

    public get signOut () {
        return $('button[role="menuitem"]:last-child');
    }

    public async logout(){
        await this.navMenu.click();
        await this.signOut.click();
    }
}

export default new HomePage();
