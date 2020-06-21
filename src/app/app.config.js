/* @ngInject */
export default function routing($urlRouterProvider, $translateProvider) {

    $urlRouterProvider.otherwise('/');

    $translateProvider.useStaticFilesLoader({
        prefix: '../../../assets/translate/locale-',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('pl');

}