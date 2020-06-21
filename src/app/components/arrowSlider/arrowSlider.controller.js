/** @ngInject */
export default class ArrowSliderController {

    constructor() {
        this.currentViewIndex = 0;
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