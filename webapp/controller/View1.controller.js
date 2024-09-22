sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("project1.controller.View1", {

        onInit: function () {
            // Exemple de données pour la liste de rapports
            var oData = {
                reports: [
                    { reportName: "Rapport 1", reportDescription: "Description du rapport 1" },
                    { reportName: "Rapport 2", reportDescription: "Description du rapport 2" },
                    { reportName: "Rapport 3", reportDescription: "Description du rapport 3" }
                ]
            };
            
            // Création du modèle JSON et définition sur la vue
            var oModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onReportSelected: function (oEvent) {
            // Obtenir l'élément sélectionné
            var oItem = oEvent.getSource();
            var sReportName = oItem.getTitle();
            
            // Afficher un message toast avec le rapport sélectionné
            MessageToast.show("Rapport sélectionné : " + sReportName);
        }
    });
});
