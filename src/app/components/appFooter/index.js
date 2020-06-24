import './appFooter.scss'
import angular from 'angular'
import AppFooterController from "./appFooter.controller";
import template from './appFooter.html'
import AppHeaderController from "../appHeader/appHeader.controller";

export default angular.module('app.appFooter', [])
    .component('appFooter', {
            template,
            controller: AppFooterController
        }
    )
    .controller('AppFooterController', AppFooterController)
    .name;