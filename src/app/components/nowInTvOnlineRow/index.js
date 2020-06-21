import './nowInTvOnlineRow.scss'
import angular from 'angular'
import NowInTvOnlineRowController from "./nowInTvOnlineRow.controller";
import template from './nowInTvOnlineRow.html'

export default angular.module('app.nowInTvOnlineRow', [])
    .component('nowInTvOnlineRow', {
            template,
            controller: NowInTvOnlineRowController
        }
    ).name;