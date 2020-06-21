import './arrowSlider.scss'
import angular from 'angular'
import ArrowSliderController from "./arrowSlider.controller";
import template from './arrowSlider.html'

export default angular.module('app.arrowSlider', [])
    .component('arrowSlider', {
            template,
            bindings: {
                items: '='
            },
            controller: ArrowSliderController
        }
    ).name;