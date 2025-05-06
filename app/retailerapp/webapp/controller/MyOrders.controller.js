sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/m/Popover",
  "sap/m/Label",
  "sap/m/Select",
  "sap/m/DatePicker",
  "sap/m/Button",
  "sap/m/MessageToast"
], function (
  Controller,
  JSONModel,
  Filter,
  FilterOperator,
  Popover,
  Label,
  Select,
  DatePicker,
  Button,
  MessageToast
) {
  "use strict";

  return Controller.extend("com.ingenx.retailerapp.controller.MyOrders", {

    onInit: function() {
      // Sample order data
      var oData = {
        orders: [
          { orderNo: "PO1001", orderDate: "2025-04-26", status: "Delivered",quantity:"500" ,customerName: "Station A" },
          { orderNo: "PO1002", orderDate: "2025-04-24", status: "Pending",  quantity:"350" ,customerName: "Station B" },
          { orderNo: "PO1003", orderDate: "2025-04-22", status: "Delivered",quantity:"500" ,customerName: "Station C" },
          { orderNo: "PO1004", orderDate: "2025-04-20", status: "Cancelled",quantity:"730" ,customerName: "Station D" }
        ]
      };
      var oModel = new JSONModel(oData);
      this.getView().setModel(oModel);

      // We'll reuse this popover for filtering
      this._oFilterPopover = null;
    },

    onCreateOrder: function() {
      // Navigate to your Create Order page
      var oRouter = this.getOwnerComponent().getRouter();
      oRouter.navTo("RouteCreateOrder");
    },

    onSearchOrder: function(oEvent) {

            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
              var filter = new Filter("orderNo", FilterOperator.Contains, sQuery);
              aFilters.push(filter);
            }      
            var oList = this.byId("ordersTable");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilters, "Application");
    },

    onOpenFilterPopover: function(oEvent) {
      var oPopover = this.byId("filterPopover");
      oPopover.openBy(oEvent.getSource());
    },

    _onStatusFilter: function(oEvent) {
      var sKey = oEvent.getParameter("selectedItem").getKey(),
          oTable = this.byId("ordersTable"),
          oBinding = oTable.getBinding("items"),
          aFilters = [];

      if (sKey !== "All") {
        aFilters.push(new Filter("status", FilterOperator.EQ, sKey));
      }
      oBinding.filter(aFilters);
    },

    _onDateFilter: function() {
      MessageToast.show("Date filter applied (implement as needed)");
    },

    _onClearFilters: function() {
      this.byId("ordersTable").getBinding("items").filter([]);
      var oPopover = this.byId("filterPopover");
      oPopover.close();
    },

    onOrderSelect: function(oEvent) {
      var oItem = oEvent.getParameter("listItem"),
          oData = oItem.getBindingContext().getObject();
         MessageToast.show("Selected Order: " + oData.orderNo);
    },

    onViewDetail: function(oEvent) {
      var oItem = oEvent.getSource().getParent().getParent(),
          oData = oItem.getBindingContext().getObject();
          MessageToast.show("View details for " + oData.orderNo);
    },

    onCancel: function(oEvent) {
      var oItem = oEvent.getSource().getParent().getParent(),
          oData = oItem.getBindingContext().getObject();
          MessageToast.show("Cancelling " + oData.orderNo);
    }

  });
});
