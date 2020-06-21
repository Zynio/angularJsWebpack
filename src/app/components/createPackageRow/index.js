import './createPackageRow.scss'
import angular from 'angular'
import CreatePackageRowController from "./createPackageRow.controller";
import template from './createPackageRow.html'

export default angular.module('app.createPackageRow', [])
    .component('createPackageRow', {
            template,
            controller: CreatePackageRowController
        }
    ).name;