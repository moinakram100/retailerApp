sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("com.ingenx.qms.retailerapp.controller.MyOrders", {
      onInit: function () {
          var oData = {
              Orders: [
                  {
                      "ID": "PR001",
                      "StationID": "STN001",
                      "Material": "CNG",
                      "SafetyStock": 100,
                      "ReorderLevel": 350,
                      "supplierName": "Indraprastha Gas",
                      "deliveryDate": "2025-05-10",
                      "quantity": 400,
                      "rate": 56,
                      "status": "Ordered"
                    },
                    {
                      "ID": "PR002",
                      "StationID": "STN002",
                      "Material": "CNG",
                      "SafetyStock": 80,
                      "ReorderLevel": 300,
                      "supplierName": "Mahanagar Gas",
                      "deliveryDate": "2025-05-11",
                      "quantity": 250,
                      "rate": 58,
                      "status": "Received"
                    },
                    {
                      "ID": "PR003",
                      "StationID": "STN003",
                      "Material": "CNG",
                      "SafetyStock": 120,
                      "ReorderLevel": 370,
                      "supplierName": "GAIL",
                      "deliveryDate": "2025-05-12",
                      "quantity": 200,
                      "rate": 54,
                      "status": "Ordered"
                    },
                    {
                      "ID": "PR004",
                      "StationID": "STN004",
                      "Material": "CNG",
                      "SafetyStock": 90,
                      "ReorderLevel": 330,
                      "supplierName": "Adani Gas",
                      "deliveryDate": "2025-05-13",
                      "quantity": 500,
                      "rate": 55,
                      "status": "Received"
                    },
                    {
                      "ID": "PR005",
                      "StationID": "STN005",
                      "Material": "CNG",
                      "SafetyStock": 110,
                      "ReorderLevel": 340,
                      "supplierName": "Torrent Gas",
                      "deliveryDate": "2025-05-14",
                      "quantity": 300,
                      "rate": 57,
                      "status": "Ordered"
                    }
              ]
          };
      
          var oModel = new sap.ui.model.json.JSONModel(oData);
          this.getView().setModel(oModel, "localModel");
      }
      
      
  });
});