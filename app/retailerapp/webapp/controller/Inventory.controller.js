sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("com.ingenx.retailerapp.controller.Inventory", {
        onInit: function () {
              let oData = [{
               "tankHeight": "50%",
                "location" : "Andheri E.",
                "product" : "CNG",
              },
              {
                "tankHeight": "30%",
                 "location" : "Andheri E.",
                 "product" : "CNG",
               },
              {
                "tankHeight": "45%",
                 "location" : "Sakinaka",
                 "product" : "CNG",
               },
              {
                "tankHeight": "65%",
                 "location" : "Sakinaka",
                 "product" : "CNG",
               },
              {
                "tankHeight": "35%",
                 "location" : "Bandra",
                 "product" : "CNG",
               },
              {
                "tankHeight": "50%",
                 "location" : "Bandra",
                 "product" : "CNG",
               },
              ]
              var oModel = new JSONModel(oData);
              this.getView().setModel(oModel,"tankDetailsData");
              console.log("data",this.getView().getModel("tankDetailsData").getData())
              oModel.attachRequestCompleted(function () {
                this._applyTankFillAnimation();
              }.bind(this));
        },  
        
        onAfterRendering: function () {
          // Wait until DOM is ready
          setTimeout(function () {
            this._applyTankFillAnimation();
          }.bind(this), 100); // 100ms delay
        },
        
        _applyTankFillAnimation: function () {
          var aTanks = this.getView().byId("tank_layout").getItems(); // Assuming tank_layout holds multiple tanks
          aTanks.forEach(function (oTank, iIndex) {
            var oModel = this.getView().getModel("tankDetailsData");
            var sHeight = oModel.getProperty("/" + iIndex + "/tankHeight");
            var oFillBox = oTank.byId("tankFill");
            if (oFillBox && oFillBox.getDomRef()) {
              oFillBox.getDomRef().style.height = sHeight;
            }
          }.bind(this));
        }
        
    });
});

