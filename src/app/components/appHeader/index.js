import './appHeader.scss'
import angular from 'angular'
import AppHeaderController from "./appHeader.controller";
import template from './appHeader.html'

export default angular.module('app.appHeader', [])
    .component('appHeader', {
            template,
            controller: AppHeaderController
        }
    )
    .controller('AppHeaderController', AppHeaderController)
    .name;