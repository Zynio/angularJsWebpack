import './dotSlider.scss'
import angular from 'angular'
import DotSliderController from "./dotSlider.controller";
import template from './dotSlider.html'

export default angular.module('app.dotSlider', [])
    .component('dotSlider', {
            template,
            bindings: {
                items: '='
            },
            controller: DotSliderController
        }
    ).name;