const sliderChangeMillis = 5000;

/** @ngInject */
export default class ArrowSliderController {

    constructor($interval) {
        this.currentViewIndex = 0;
        this.$interval = $interval;
    }

    $onInit() {
        this.startSliderAnimation();
    }

    startSliderAnimation() {
        const internalFunction = () => {
            if (this.hasNextItem()) {
                this.currentViewIndex++;
            } else {
                this.currentViewIndex = 0;
            }
        };

        this.$interval(internalFunction, sliderChangeMillis);
    }

    hasNextItem() {
        return this.currentViewIndex < this.items.length - 1;
    }

    hasPrevItem() {
        return this.currentViewIndex > 0;
    }

    onNextItemClick() {
        this.currentViewIndex++;
    }

    onPrevItemClick() {
        this.currentViewIndex--;
    }

}