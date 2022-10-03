// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    * @param {typeof sap.m.MessageToast} MessageToast
    */
    function (Controller, MessageToast) {
        "use strict";
        return Controller.extend("DCristinel.sapui5.controller.App", {
            onInit: function () {

            },
            onShowHello: function () {

                // Lectura de texto desde i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();

                // Lectura de propiedad del modelo de datos
                var oRecipient = this.getView().getModel().getProperty("/recipient/name");                 
                var sMessage = oBundle.getText("messageText", [oRecipient]);
                MessageToast.show(sMessage);
            }
        });
    });   