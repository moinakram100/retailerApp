sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
], function(Controller, Fragment) {
    "use strict";

    return Controller.extend("com.ingenx.retailerapp.controller.Unload", {
        onInit() {
            var oDummyData = [
                {
                    ParkingNo: "PK001",
                    VehicleNumber: "TN10AB1234",
                    STONumber:"258",
                    Date:"2025-04-22",
                    VehicleDefinition: "Open Truck",
                    Quantity:"100KG",
                    Product: "Gasoline",
                    Status: "Pending"
                }
            ];
        
            var oModel = new sap.ui.model.json.JSONModel(oDummyData);
            this.getView().setModel(oModel, "mergedData");
        
        },
        confirmPartialQuantity: function () {
            var oView = this.getView();
            if (!this.byId('partQuantity')) {
                Fragment.load({
                    name: "com.ingenx.retailerapp.fragments.confirmPartialQuantity",
                    controller: this,
                    id: oView.getId()
                }).then(function (oDialog) {
                    oView.addDependent(oDialog); // Good practice
                    oDialog.open();
                });
            } else {
                this.byId('partQuantity').open();
            }
        },
        onCloseDialog: function () {
            this.byId("partQuantity").close();
        }
    });
});

