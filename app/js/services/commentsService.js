angular.module('app')
    .service('CommentsService', function($http) {
        return {
            getAll: function() {
                return $http.get('/commentaire');
            },
            create: function(commentaire) {
                return $http.post('/commentaire', commentaire);
            },
            delete: function(id) {
                return $http.delete('/commentaire/' + id);
            },
            update: function(id, comment) {
                return $http.put('/commentaire/' + id, comment);
        }
      }
    });
