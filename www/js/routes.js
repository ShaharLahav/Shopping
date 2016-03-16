angular
  .module('starter')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.chats', {
      url: '/lists',
      views: {
        'tab-lists': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrll'
        }
      }
    })
    .state('tab.favs', {
      url: '/favs',
      views: {
        'tab-favs': {
          templateUrl: 'templates/favs.html',
          controller: 'favs'
        }
      }
    })
    .state('tab.add-list', {
      url: '/add',
      views: {
        'tab-lists': {
          templateUrl: 'templates/list-add.html',
          controller: 'ListAddCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/lists/:listId',
      views: {
        'tab-lists': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/lists');
}