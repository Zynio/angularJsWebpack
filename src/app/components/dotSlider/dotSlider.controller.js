const sliderChangeMillis = 15000;

/** @ngInject */
export default class DotSliderController {

    constructor($interval) {
        this.currentViewIndex = 0;
        this.$interval = $interval;
    }

    $onInit() {
        this.startSliderAnimation();
    }

    onDotClick(currentViewIndex) {
        this.changeView(currentViewIndex);
    }

    changeView(currentViewIndex) {
        this.currentViewIndex = currentViewIndex;
    };

    startSliderAnimation() {
        const internalFunction = () => {
            if (this.currentViewIndex + 1 >= this.items.length) {
                this.changeView(0);
            } else {
                this.changeView(this.currentViewIndex + 1);
            }
        };

        this.$interval(internalFunction, sliderChangeMillis);
    }

}