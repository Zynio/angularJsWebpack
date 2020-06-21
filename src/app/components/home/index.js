import './home.scss'

import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import routing from './home.routes'
import HomeController from './home.controller'
import arrowSlider from '../arrowSlider';
import dotSlider from '../dotSlider';
import nowInTvOnlineRow from '../nowInTvOnlineRow';
import createPackageRow from '../createPackageRow';


export default angular.module('app.home', [uirouter, arrowSlider, dotSlider, nowInTvOnlineRow, createPackageRow])
    .config(routing)
    .controller('HomeController', HomeController)
    .name