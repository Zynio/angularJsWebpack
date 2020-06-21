/** @ngInject */
export default class AppHeaderController {

    constructor() {
        this.isMenuVisible = false;
    }

    onClickTobBarToggler() {
        this.openSiteNav();
    }

    onClickOutsideSideNav() {
        setTimeout(() => {
            if (this.isMenuVisible) {
                this.hideSiteNav();
            }
        }, 1000);
    }

    openSiteNav() {
        this.isMenuVisible = true;
    };

    hideSiteNav() {
        this.isMenuVisible = false;
    };

}