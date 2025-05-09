sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ], (Controller, JSONModel) => {
    "use strict";
  
    return Controller.extend("com.ingenx.qms.retailerapp.controller.SalesOrder", {
        onInit: function () {
            const safetyStock = 200;
            const avgSalesRate = 50;
            const leadTime = 3;
  
            const reorderLevel = safetyStock + (avgSalesRate * leadTime);
  
            const oPRModel = new sap.ui.model.json.JSONModel({
                StationID: "STN001",
                CurrentStock: 350,
                SafetyStock: safetyStock,
                AvgSalesRate: avgSalesRate,
                LeadTime: leadTime,
                ReorderLevel: reorderLevel, // Dynamically calculated
                Material: "CNG_GAS",
                Description: "Compressed Natural Gas",
                Quantity: 100,
                UoM: "KG",
                DeliveryDate: new Date().toISOString().split("T")[0],
                Plant: "",
                PurchasingGroup: ""
            });
            // Attach the model to the view with a name, e.g., "pr"
            this.getView().setModel(oPRModel, "pr");
  
            console.log(this.getView().getModel("pr").getData());
  
        }
        ,
  
        onPlantValueHelp: function (oEvent) {
            // Open Plant value help dialog
        },
  
        onPurchasingGroupValueHelp: function (oEvent) {
            // Open PG value help dialog
        },
  
        onSubmitPR: function () {
            // Send PR data to backend or show confirmation
        }
  
    });
  });