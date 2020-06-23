import promo_cover from "../../../assets/img/promo_cover.png";

/** @ngInject */
export default class AppHeaderController {

    constructor() {
        this.isMenuVisible = false;
    }

    $onInit() {
        this.initPromoMove();
    }

    initPromoMove() {
        this.promoMove = {
            title: "Ocalony",
            type: "Dramat",
            price: 5,
            cover: promo_cover
        };
    };

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