﻿app.service("businessService", ["globalApiEndPoint", "WebClientService", function (globalApiEndPoint, webClientService) {
    var apiEndPoint = globalApiEndPoint + "/businesspage";
    

    this.getById = function (id, page, success, error) {
        webClientService.get(apiEndPoint + "/get/" + id, null, success, error);
    };

    this.getAll = function(searchObj, success, error) {
        webClientService.get(apiEndPoint + "/get/all", searchObj, success, error);
    }

    this.getCountries = function(success, error) {
        webClientService.get(apiEndPoint + "/get/countries", null, success, error);
    }
    this.getStates = function(countryId, success, error) {
        webClientService.get(apiEndPoint + "/get/states", {countryId : countryId}, success, error);
    }

}]);