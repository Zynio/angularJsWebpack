/** @ngInject */
export default class DotSliderController {

    constructor() {
        this.currentViewIndex = 0;
    }

    onDotClick(currentViewIndex) {
        this.currentViewIndex = currentViewIndex;
    }

}