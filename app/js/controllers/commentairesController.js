angular.module('app')
    .controller('CommentairesController', function($scope, CommentsService) {
        $scope.commentaires = [];
        $scope.addCommentaire = function() {
            let commentaire = {
                comment: $scope.comment,
                user: $scope.user,
                sujet: $scope.sujet,
            };
            CommentsService.create(commentaire).then(function(res) {
                // Quand la requete c'est bien passé
                $scope.commentaires.push(commentaire);
                $scope.comment = '';
                $scope.user = '';
                $scope.sujet = '';
                console.log(res.data);
            }, function(err) {
                // Quand la requete ce passe mal
            });
        };
        CommentsService.getAll().then(function(res) {
            $scope.commentaires = res.data;
        });
        $scope.delete = function(index, commentaire) {
            CommentsService.delete(commentaire._id).then(function(res) {
                console.log("Delete success");
                CommentsService.getAll().then(function(res) {
                    $scope.commentaires = res.data;
                });
            }, function(err) {
                console.log("Delete failed");
            });
        };
        $scope.update = function(index, comment) {
            CommentsService.update($scope.commentaires[index]._id, comment).then(function(res) {
                console.log("Edit success");
              }), function(err) {
                console.log("Edit failed");
          };
        }

    });
