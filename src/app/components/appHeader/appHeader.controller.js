import promo_cover from "../../../assets/img/promo_cover.png";

/** @ngInject */
export default class AppHeaderController {

    constructor($animate, $element) {
        this.isMenuOpened = false;
        this.$animate = $animate;
        this.$element = $element;
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
        this.hideSiteNav();
    }

    openSiteNav() {
        this.isMenuOpened = true;
        this.$animate.addClass(this.getMainMenuElement(), 'visible');
    };

    hideSiteNav() {
        this.isMenuOpened = false;
        this.$animate.removeClass(this.getMainMenuElement(), 'visible');
    };

    getMainMenuElement() {
        return this.$element[0].querySelector('#main-menu');
    }

}