import './appFooter.scss'
import angular from 'angular'
import AppFooterController from "./appFooter.controller";
import template from './appFooter.html'

export default angular.module('app.appFooter', [])
    .component('appFooter', {
        template,
            controller: AppFooterController
        }
    ).name;