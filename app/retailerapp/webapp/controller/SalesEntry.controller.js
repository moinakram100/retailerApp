
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
  ], function(Controller, JSONModel, MessageToast) {
    "use strict";
  
    return Controller.extend("com.ingenx.qms.retailerapp.controller.SalesEntry", {
      onInit: function() {
        var oData = {
          Sales: [
            {
              saleID: "S001",
              saleDate: "2025-04-25",
              quantitySold: 320,
              saleRate: 78,
              paymentMode: "Cash",
              customerName: "Rahul Sharma"
            },
            {
              saleID: "S002",
              saleDate: "2025-04-26",
              quantitySold: 275,
              saleRate: 77.5,
              paymentMode: "Fleet",
              customerName: "Meena Verma"
            }
          ],
          saleDate: "",
          quantitySold: "",
          saleRate: "",
          paymentMode: "",
          customerName: ""
        };
  
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel, "localModel");
      },
  
      onSaveSale: function() {
        var oModel = this.getView().getModel("localModel");
        var oData = oModel.getData();
  
        var newSale = {
          saleID: "S00" + (oData.Sales.length + 1),
          saleDate: oData.saleDate,
          quantitySold: oData.quantitySold,
          saleRate: oData.saleRate,
          paymentMode: oData.paymentMode,
          customerName: oData.customerName
        };
  
        if (newSale.saleDate && newSale.quantitySold && newSale.saleRate) {
          oData.Sales.push(newSale);
  
          // Reset form
          oData.saleDate = "";
          oData.quantitySold = "";
          oData.saleRate = "";
          oData.paymentMode = "";
          oData.customerName = "";
  
          oModel.refresh();
          MessageToast.show("Sale recorded successfully!");
        } else {
          MessageToast.show("Please fill all required fields!");
        }
      }
    });
  });
  

