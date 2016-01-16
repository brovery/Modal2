(function () {
    'use strict';

    angular.module('myModal', ["ngAnimate", "ui.bootstrap"])
        .controller('ModalCtrl', ModalCtrl)
        .controller('ModalInstanceCtrl', ModalInstanceCtrl);

    ModalCtrl.$inject = ['$uibModal', '$log'];
    ModalInstanceCtrl.$inject = ['$uibModalInstance', 'items'];

    function ModalCtrl($uibModal, $log) {
        var mc = this;
        mc.items = ['item1', 'item2', 'item3'];
        mc.open = open;


        function open() {
            $uibModal.open({
                animation: true,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl as mic',
                size: 'md',
                resolve: {
                    items: function () {
                        return mc.items;
                    }
                }
            });
        }


    }

    function ModalInstanceCtrl($uibModalInstance, items) {
        var mic = this;
        mic.ok = ok;

        function ok() {
            $uibModalInstance.close();
        }

    }
})();