import angular from 'angular';
import component from "./index"
import 'angular-mocks/ngMock';
import promo_cover from "../../../assets/img/promo_cover.png";

describe("AppHeaderController test", () => {

    let controller, element;

    beforeEach(angular.mock.module(component));

    beforeEach(angular.mock.inject(($rootScope, $controller, $animate) => {
        element = {
            querySelector: jasmine.createSpy()
        };

        controller = $controller("AppHeaderController", { $animate, $element : [element]})
    }));

    it("initPromoMove test", () => {
        controller.$onInit();

        expect(controller.promoMove.title).toBe("Ocalony");
        expect(controller.promoMove.type).toBe("Dramat");
        expect(controller.promoMove.price).toBe(5);
        expect(controller.promoMove.cover).toBe(promo_cover);
    });

    it("onClickTobBarToggler test", () => {
        controller.onClickTobBarToggler();

        expect(controller.isMenuOpened).toBe(true);
        expect(element.querySelector).toHaveBeenCalled();
    });

    it("onClickOutsideSideNav test", () => {
        controller.onClickOutsideSideNav();

        expect(controller.isMenuOpened).toBe(false);
        expect(element.querySelector).toHaveBeenCalled();
    });

    it("openSiteNav test", () => {
        controller.openSiteNav();

        expect(controller.isMenuOpened).toBe(true);
        expect(element.querySelector).toHaveBeenCalled();
    });

    it("hideSiteNav test", () => {
        controller.hideSiteNav();

        expect(controller.isMenuOpened).toBe(false);
        expect(element.querySelector).toHaveBeenCalled();
    });
});