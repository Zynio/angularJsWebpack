import grid_item_1 from '../../../assets/img/grid_item_1.png'
import grid_item_2 from '../../../assets/img/grid_item_2.png'
import arrow_slider_img_1 from '../../../assets/img/arrow_slider_img_2.png'
import arrow_slider_img_2 from '../../../assets/img/arrow_slider_img_1.png'

/* @ngInject */
export default class HomeController {

    constructor() {
        this.sliderItems = [{
                title: "Zyskaj więcej",
                image: grid_item_1
        }, {
            title: "Zyskaj więcej",
            image: grid_item_2
        }];

        this.sliderArrowItems = [{
            title: "VOD",
            description: "Video na żądanie",
            image: arrow_slider_img_1
        }, {
            title: "Zyskaj więcej",
            description: "Video na żądanie",
            image: arrow_slider_img_2
        }];
    }

}