import angular from 'angular';
import component from "./index"

describe("ArrowSliderController test", () => {

    let controller, element, $interval;

    beforeEach(angular.mock.module(component));

    beforeEach(angular.mock.inject(($rootScope, $controller, _$interval_) => {
        $interval = _$interval_;
        controller = $controller("ArrowSliderController", {_$interval_})
    }));

    it("startSliderAnimation hasNextItem test", () => {
        controller.currentViewIndex = 0;
        controller.items = [{}, {}];

        controller.startSliderAnimation();
        $interval.flush(15000);

        expect(controller.currentViewIndex).toBe(1);
    });

    it("startSliderAnimation hasPrevItem test", () => {
        controller.currentViewIndex = 1;
        controller.items = [{}, {}];

        controller.startSliderAnimation();
        $interval.flush(15000);

        expect(controller.currentViewIndex).toBe(0);
    });

    it("hasNextItem test", () => {
        controller.currentViewIndex = 0;
        controller.items = [{}, {}];

        expect(controller.hasNextItem()).toBe(true);

        controller.currentViewIndex = 2;
        controller.items = [{}, {}];

        expect(controller.hasNextItem()).toBe(false)
    });


    it("hasPrevItem test", () => {
        controller.currentViewIndex = 0;
        controller.items = [{}, {}];

        expect(controller.hasPrevItem()).toBe(false);

        controller.currentViewIndex = 2;
        controller.items = [{}, {}];

        expect(controller.hasPrevItem()).toBe(true)
    });

    it("onNextItemClick test", () => {
        controller.currentViewIndex = 0;

        controller.onNextItemClick();

        expect(controller.currentViewIndex).toBe(1);
    });

    it("onPrevItemClick test", () => {
        controller.currentViewIndex = 1;

        controller.onPrevItemClick();

        expect(controller.currentViewIndex).toBe(0);
    });
});