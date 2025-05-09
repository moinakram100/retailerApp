sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("com.ingenx.qms.retailerapp.controller.SalesOverview", {
    onInit: function () {
      // KPI data
      var oData = {
        totalSales: 486500,
        totalQuantity: 6270,
        orderCount: 137,
        avgOrderValue: 3550,
        pendingPayments: 4,
        grossProfit: 52000,
        deliveredOrders: 126,
        pendingOrders: 8,
        cancelledOrders: 3,
        paymentModes: [
          { mode: "Cash", value: 0.45 },
          { mode: "Card", value: 0.35 },
          { mode: "Fleet Sale", value: 0.20 }
        ]
      };

      // Quarterly chart data
      var quarterlyData = {
        items: [
          { Quarter: "Q1", Cash: 300000, Card: 200000, Fleet: 150000, Profit: 10000 },
          { Quarter: "Q2", Cash: 200000, Card: 150000, Fleet: 100000, Profit: 8000 },
          { Quarter: "Q3", Cash: 250000, Card: 180000, Fleet: 120000, Profit: 9000 },
          { Quarter: "Q4", Cash: 400000, Card: 250000, Fleet: 150000, Profit: 12000 }
        ]
      };

      // VizFrame properties
      var oVizPropsModel = new JSONModel({
        quarterlyChart: {
          plotArea: {
            dataLabel: {
              visible: true,
              showTotal: true
            }
          },
          title: {
            text: "Quarterly Sales and Amount Overview"
          }
        },
        paymentChart: {
          title: {
            text: "Most Preferred Payment Methods",
            visible: true
          },
          legend: {
            visible: true
          },
          plotArea: {
            dataLabel: {
              visible: true,
              formatString: ["#,##0.00%"]
            }
          }
        }
      });

      this.getView().setModel(new JSONModel(oData), "localModel");
      this.getView().setModel(new JSONModel(quarterlyData), "quarterlyModel");
      this.getView().setModel(oVizPropsModel, "vizProps");
    }
  });
});
