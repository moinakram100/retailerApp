sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/model/json/JSONModel",
     "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
], (Controller,JSONModel,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("com.ingenx.retailerapp.controller.Payments", {
        onInit: function () {
          var oData = {
            payments: [
              {
                paymentId: "PAY001",
                poNumber: "PO12345",
                amount: "50000",
                paymentDate: "2025-05-01",
                mode: "UPI",
                transactionId: "TXN987654"
              },
              {
                paymentId: "PAY002",
                poNumber: "PO12346",
                amount: "75000",
                paymentDate: "2025-05-02",
                mode: "Bank Transfer",
                transactionId: "TXN123456"
              },
              {
                paymentId: "PAY003",
                poNumber: "PO12347",
                amount: "65000",
                paymentDate: "2025-05-03",
                mode: "Cash",
                transactionId: "TXN123457"
              },
              {
                paymentId: "PAY004",
                poNumber: "PO12348",
                amount: "88000",
                paymentDate: "2025-05-04",
                mode: "UPI",
                transactionId: "TXN123458"
              },
              {
                paymentId: "PAY005",
                poNumber: "PO12349",
                amount: "78000",
                paymentDate: "2025-05-05",
                mode: "Cash",
                transactionId: "TXN123459"
              }
            ]
          };
          var oModel = new sap.ui.model.json.JSONModel(oData);
          this.getView().setModel(oModel);
        },  
        
        onPaymentSearch : function(oEvent){
          let aFilters = []
         let sQuery = oEvent.getSource().getValue()
         if(sQuery && sQuery.length>0){
          let filter = new Filter("poNumber",FilterOperator.Contains,sQuery)
          aFilters.push(filter)
         }
         var oList = this.byId("paymentTable");
         var oBinding = oList.getBinding("items");
         oBinding.filter(aFilters, "Application")
        },

        onOpenFilterPopover: function(oEvent) {
          var oPopover = this.byId("paymentFilterPopover");
          oPopover.openBy(oEvent.getSource());
        },

        _onClearFilters: function() {
          this.byId("paymentTable").getBinding("items").filter([]);
          var oPopover = this.byId("paymentFilterPopover");
          oPopover.close();
        },

        _onModeFilter: function(oEvent) {
          var sKey = oEvent.getParameter("selectedItem").getKey(),
              oTable = this.byId("paymentTable"),
              oBinding = oTable.getBinding("items"),
              aFilters = [];
    
          if (sKey !== "All") {
            aFilters.push(new Filter("mode", FilterOperator.EQ, sKey));
          }
          oBinding.filter(aFilters);
        },

        formatDate : function(date) {
          return date.toISOString().slice(0, 10); 
        },
        
        onDateFilter: function () {
          var oView = this.getView();
          var oTable = oView.byId("paymentTable");
          var oBinding = oTable.getBinding("items");
        
          var oDateFrom = oView.byId("paymentDateFrom").getDateValue();
          var oDateTo = oView.byId("paymentDateTo").getDateValue();
        
          if (!oDateFrom || !oDateTo) return;
        
          var sFrom = this.formatDate(oDateFrom);
          var sTo = this.formatDate(oDateTo);
        
          var aFilters = [
            new sap.ui.model.Filter({
              path: "paymentDate",
              operator: sap.ui.model.FilterOperator.BT,
              value1: sFrom,
              value2: sTo
            })
          ];
        
          oBinding.filter(aFilters);
        },
               

        DateFilter: function () {
          debugger
          var oView = this.getView();
          var oModel = this.getView().getModel();
          var aData = oModel.getProperty("/payments"); // original unfiltered data
          var oTable = oView.byId("paymentTable"); // replace with your table ID
        
          var oDateFrom = oView.byId("paymentDateFrom").getDateValue();
          var oDateTo = oView.byId("paymentDateTo").getDateValue();
        
          if (!oDateFrom || !oDateTo) {
            return; // wait until both dates are selected
          }
        
          var aFiltered = aData.filter(function (oItem) {
            var oPaymentDate = new Date(oItem.paymentDate); // assuming 'paymentDate' is in ISO format
            return oPaymentDate >= oDateFrom && oPaymentDate <= oDateTo;
          });
        
          // Update the model with filtered data
          oModel.setProperty("/filteredPayments", aFiltered);
          // Bind this to your table
          oTable.bindItems({
            path: "/filteredPayments",
            template: oTable.getBindingInfo("items").template
          });
        }
        
    });
});

