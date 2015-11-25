'use strict';

function messagesRouting($stateProvider) {
    $stateProvider
        .state('messages', {
            url: '/messages',
            template: require('./views/messages.html'),
            controller: 'MessagesController as vm',
            resolve: {
                loadMessagesController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/messages.controller');
                            $ocLazyLoad.load({
                                name: module.name
                            });
                            resolve(module.controller);
                        });
                    });
                }
            }
        }).state('messages.all', {
            url: '/all',
            // templateUrl: function(stateParams) {//此种方法不适用，调试可用
            //     return './pages/messages/views/messages.all.html';
            // },
            // templateProvider: ($q) => {//动态加载
            //     return $q((resolve) => {
            //         require.ensure([], () => resolve(require('./views/messages.all.html')));
            //     });
            // },
            template: require('./views/messages.all.html'),//预编译
            controller: 'MessagesAllController as vm',
            resolve: {
                loadMessagesAllController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/messages.all.controller');
                            $ocLazyLoad.load({
                                name: module.name
                            });
                            resolve(module.controller);
                        });
                    });
                }
            }
        }).state('messages.new', {
            url: '/new',
            templateProvider: ($q) => {
                return $q((resolve) => {
                    require.ensure([], () => resolve(require('./views/messages.new.html')));
                });
            },
            controller: 'MessagesNewController as vm',
            resolve: {
                loadMessagesNewController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load only controller module
                            let module = require('./controllers/messages.new.controller');
                            $ocLazyLoad.load({
                                name: module.name
                            });
                            resolve(module.controller);
                        });
                    });
                }
            }
        });
}
// messagesRouting.$inject = ['$stateProvider'];
export default angular
    .module('messages.routing', [])
    .config(messagesRouting);