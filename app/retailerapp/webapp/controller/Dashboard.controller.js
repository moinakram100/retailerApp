sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("com.ingenx.retailerapp.controller.Dashboard", {
        onInit: function () {
          var aCardIds = ["createOrderCard", "myOrdersCard", "paymentCard", "salesOverviewCard", "inventoryCard", "optionsCard"];
          this.animateProgress()
          aCardIds.forEach(function(sId) {
            var oCard = this.byId(sId);
            if (oCard) {
              oCard.attachBrowserEvent("click", this.onCardPress.bind(this, sId));
            }}.bind(this));
            
            var oData = {
                chartData: [
                  { Quarter: "Q1 2014", OpenOrders: 90, FulfilledOrders: 10 },
                  { Quarter: "Q2 2014", OpenOrders: 70, FulfilledOrders: 20 },
                  { Quarter: "Q3 2014", OpenOrders: 100, FulfilledOrders: 30 },
                  { Quarter: "Q4 2014", OpenOrders: 110, FulfilledOrders: 50 },
                  { Quarter: "Q1 2015", OpenOrders: 120, FulfilledOrders: 130 }
                ],
                vizProperties: {
                  title: {
                    visible: true,
                    text: "Sales Order Fulfillment Status"
                  },              
                  plotArea: {
                    dataLabel: {
                      visible: true
                    }
                  }
                }
              };
              var oModel = new JSONModel(oData);
              this.getView().setModel(oModel);

              // Donut card code

              var oData = {
                donutData: [
                  { Category: "Available Inventory", Quantity: 100 },
                  { Category: "Consumed Inventory", Quantity: 60 }
                ],
                vizProperties: {
                  plotArea: {
                    colorPalette: ["#4CAF50", "#FF9800"],
                    dataLabel: {
                      visible: true,
                      type: "percentage"
                    }
                  },
                  legend: {
                    visible: true,
                    position: "top"
                  },
                  title: {
                    visible: true,
                    text: "CNG Inventory"
                  }
                }
              };
            
              var oModel = new sap.ui.model.json.JSONModel(oData);
              this.getView().setModel(oModel,"donutModel");
        },


        onCardPress: function(sCardId, oEvent) {
          var oCard = this.byId(sCardId);        
          oCard.addStyleClass("cardClickedEffect");
          setTimeout(function() {
            oCard.removeStyleClass("cardClickedEffect");
          }, 200);
          this.handleCardAction(sCardId);
        },

        handleCardAction: function(sCardId) {
          switch (sCardId) {
            case "createOrderCard" :
              let salesOrderRouter = this.getOwnerComponent().getRouter()
              salesOrderRouter.navTo("RouteSalesOrder")
              break;
            case "myOrdersCard" :
              let myOrderRouter = this.getOwnerComponent().getRouter()
              myOrderRouter.navTo("RouteMyOrders")
              break;
            case "paymentCard" :
              let paymentRouter = this.getOwnerComponent().getRouter()
              paymentRouter.navTo("RoutePayments")
              break;
            case "salesOverviewCard" :
              let salesHistoryRouter = this.getOwnerComponent().getRouter()
              salesHistoryRouter.navTo("RouteSalesOverview")
              break;
            case "inventoryCard" :
              let inventoryRouter = this.getOwnerComponent().getRouter()
              inventoryRouter.navTo("RouteInventory")
              break;
            case "optionsCard" :
              let oRouter = this.getOwnerComponent().getRouter()
              oRouter.navTo("RouteMoreOptions")
              break;
            default:
              sap.m.MessageToast.show("Unknown card clicked");
              break;
          }
        },

        onPressViewAllLink : function(){
          let inventoryRouter = this.getOwnerComponent().getRouter()
          inventoryRouter.navTo("RouteInventory")
        },

        onPressSalesHistoryLink : function(){
          let inventoryRouter = this.getOwnerComponent().getRouter()
          inventoryRouter.navTo("RouteSalesOverview")
        },

        animateProgress: function () {
          var oProgress = this.byId("dashboard_progressIn");
          var oProgress2 = this.byId("dashboard_progressIn2");
          var targetValue = 70;
          var targetValue2 = 55;
          var currentValue = 0;
      
          var interval = setInterval(function () {
              if (currentValue >= targetValue) {
                  clearInterval(interval);
              } else {
                  currentValue += 1;
                  oProgress.setPercentValue(currentValue);
              }
          }, 30); 
          var interval = setInterval(function () {
              if (currentValue >= targetValue2) {
                  clearInterval(interval);
              } else {
                  currentValue += 1;
                  oProgress2.setPercentValue(currentValue);
              }
          }, 40); 
      } 
    });
});