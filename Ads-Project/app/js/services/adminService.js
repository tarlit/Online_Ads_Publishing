'use strict';

// adminService will implement operations for logged in admin
app.factory('adminService',
    function ($http, baseServiceUrl, authService) {
        return {

            getCategories: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/categories',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            createNewCategory: function (categoryData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/admin/categories',
                    headers: authService.getAuthHeaders(),
                    data: categoryData
                };
                $http(request).success(success).error(error);
            },

            editCategory: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/admin/categories/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            deleteCategory: function (id, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/admin/categories/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getTowns: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/towns',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            createNewTown: function (townData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/admin/towns',
                    headers: authService.getAuthHeaders(),
                    data: townData
                };
                $http(request).success(success).error(error);
            },

            editTown: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/admin/towns/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            deleteTown: function (id, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/admin/towns/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getAds: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/ads',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            getCurrentAd: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/ads' + id,
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            approveAd: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/admin/ads/approve/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            rejectAd: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/admin/ads/reject/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            editAd: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/admin/ads/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            deleteAd: function (id, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/admin/ads/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getUsers: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/users',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            editUser: function (username, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/admin/user/' + username,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },            

            deleteUser: function (username, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/admin/user/' + username,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            changePassword : function (success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/admin/setPassword',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
);