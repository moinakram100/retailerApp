sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("com.ingenx.retailerapp.controller.MenuOptions", {
        onInit: function () {
    
        },  
        onPressInventoryTile : function(){
            let oRouter = this.getOwnerComponent().getRouter()
            oRouter.navTo("RouteInventory")
        },
        onPressPaymentTile : function(){
            let oRouter = this.getOwnerComponent().getRouter()
            oRouter.navTo("RoutePayments")
        },
        onPressSalesOverviewTile : function(){
            let oRouter = this.getOwnerComponent().getRouter()
            oRouter.navTo("RouteSalesOverview")
        },
        onPressSalesOrderTile : function(){
            let oRouter = this.getOwnerComponent().getRouter()
            oRouter.navTo("RouteSalesOrder")
        },
        onPressMyOrderTile : function(){
            let oRouter = this.getOwnerComponent().getRouter()
            oRouter.navTo("RouteMyOrders")
        },
        onPressUnloadTile : function(){
            let oRouter = this.getOwnerComponent().getRouter()
            oRouter.navTo("RouteUnloadPage")
        },
        onSalesEntryTile : function(){
            let oRouter = this.getOwnerComponent().getRouter()
            oRouter.navTo("RouteSalesEntryPage")
        }
        
    });
});

