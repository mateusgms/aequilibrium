angular.module('meusServicos', ['ngRoute'])
    .factory("recursoIndice", ['$http', function ($http) {
                var serviceBase = 'services/';
                var obj = {};
                obj.getCustomers = function () {
                    return $http.get(serviceBase + 'customers');
                };
                obj.getCustomer = function (customerID) {
                    return $http.get(serviceBase + 'customer?id=' + customerID);
                };

                obj.insertCustomer = function (customer) {
                    return $http.post(serviceBase + 'insertCustomer', customer).then(function (results) {
                        return results;
                    });
                };

                obj.updateCustomer = function (id, customer) {
                    return $http.post(serviceBase + 'updateCustomer', {
                        id: id,
                        customer: customer
                    }).then(function (status) {
                        return status.data;
                    });
                };

                obj.deleteCustomer = function (id) {
                    return $http.delete(serviceBase + 'deleteCustomer?id=' + id).then(function (status) {
                        return status.data;
                    });
                };
    }]);
