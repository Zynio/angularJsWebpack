import '../styles/app.scss'

import angular from 'angular'
import ngAnimate from 'angular-animate'
import ngTouch from 'angular-touch'
import collapse from 'ui-bootstrap4/src/collapse'
import uirouter from '@uirouter/angularjs'
import routing from './app.config'
import AppController from './app.controller'
import translate from 'angular-translate'
import translateLoaderStaticFiles from 'angular-translate-loader-static-files'

import home from './components/home';
import appHeader from './components/appHeader';
import appFooter from './components/appFooter';
import clickOutside from './directives/clickOutside.directive';

angular
    .module('app', [
        translate,
        translateLoaderStaticFiles,
        ngAnimate,
        ngTouch,
        collapse,
        uirouter,
        home,
        appHeader,
        appFooter,
        clickOutside
    ])
    .config(routing)
    .controller('AppController', AppController);