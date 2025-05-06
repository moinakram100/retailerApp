sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("com.ingenx.retailerapp.controller.SalesOverview", {
        onInit: function () {
            const oData = {
                totalSales: 120000, 
                sales: [
                  {
                    customerName: "Gas World Pvt Ltd",
                    gasType: "Oxygen",
                    quantity: "500",
                    amount: 25000,
                    saleDate: "2025-04-20"
                  },
                  {
                    customerName: "Fuel Station ABC",
                    gasType: "Nitrogen",
                    quantity: "300",
                    amount: 15000,
                    saleDate: "2025-04-21"
                  },
                  {
                    customerName: "Air Solutions Ltd",
                    gasType: "Helium",
                    quantity: "200",
                    amount: 10000,
                    saleDate: "2025-04-22"
                  }
                ]
              };
              const oModel = new JSONModel(oData);
              this.getView().setModel(oModel, "overview");   
        },  
        
    });
});

