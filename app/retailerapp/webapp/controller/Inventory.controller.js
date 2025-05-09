sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/model/json/JSONModel",
     "sap/ui/core/Fragment",
], (Controller,JSONModel,Fragment) => {
    "use strict";

    return Controller.extend("com.ingenx.qms.retailerapp.controller.Inventory", {
        onInit: function () {
              let oData = [{
               "tankHeight": "50%",
                "location" : "Andheri E.",
                "product" : "CNG",
                "seqnr" : "01",
                "capacity" : "6000 Kg"
              },
              {
                "tankHeight": "30%",
                 "location" : "Andheri E.",
                 "product" : "CNG",
                 "seqnr" : "02",
                 "capacity" : "6000 Kg"
               },
              {
                "tankHeight": "45%",
                 "location" : "Sakinaka",
                 "product" : "CNG",
                 "seqnr" : "03",
                 "capacity" : "6000 Kg"
               },
              {
                "tankHeight": "65%",
                 "location" : "Sakinaka",
                 "product" : "CNG",
                 "seqnr" : "04",
                 "capacity" : "6000 Kg"
               },
              {
                "tankHeight": "35%",
                 "location" : "Bandra",
                 "product" : "CNG",
                 "seqnr" : "05",
                 "capacity" : "6000 Kg"
               },
              {
                "tankHeight": "50%",
                 "location" : "Bandra",
                 "product" : "CNG",
                 "seqnr" : "06",
                 "capacity" : "6000 Kg"
               },
              ]
              var oModel = new JSONModel(oData);
              this.getView().setModel(oModel,"tankDetailsData");
              oModel.attachRequestCompleted(function () {
              }.bind(this));
        },  
    
   

        onShowInfoPress: function (oEvent) {
          const oView = this.getView();
          const oSource = oEvent.getSource();
          const oContext = oSource.getBindingContext("tankDetailsData");
          const oData = oContext.getObject();
      
          const oDialogModel = new sap.ui.model.json.JSONModel(oData);
      
          if (!this.tankDialog) {
              Fragment.load({
                  id: oView.getId(),
                  name: "com.ingenx.qms.retailerapp.fragments.inventoryDetails",
                  controller: this
              }).then(function (oDialog) {
                  this.tankDialog = oDialog;
                  this.getView().addDependent(this.tankDialog);
                  this.tankDialog.setModel(oDialogModel, "selectedTank");
                  this.tankDialog.open();
              }.bind(this));
          } else {
              this.tankDialog.setModel(oDialogModel, "selectedTank");
              this.tankDialog.open();
          }
      },

      onDialogClose : function(){
        if(this.tankDialog){
          this.tankDialog.close();
        }
      },

      getQuantityText: function (heightPercentage, capacity) {
        if (!heightPercentage || !capacity) {
          return "";
        }
        const percentage = parseFloat(heightPercentage.toString().replace("%", ""));
        const total = Math.round((percentage * parseInt(capacity)) / 100);
        return total + " Kg";
      }
      
      
        
    });
});

