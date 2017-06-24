angular.module('app')
    .controller('MainController', function($scope) {

      $scope.addCommentaire = function(){
        let commentaires = {
          content: $scope.contenuCommentaire,
          user: $scope.user,
          sujet: $scope.sujet,

        };
        $scope.commentaires.push(commentaire);

      };
    });
