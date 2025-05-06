namespace retailerDb;

using {
    managed,
    cuid
} from '@sap/cds/common';

entity ServiceProfileMaster : managed {
    key ID                 : Integer;
    key serviceProfileName : String;
        serviceProfileDesc : String;
        field1             : String;
        field2             : String;
        field3             : String;
        field4             : String;
        field5            : String;
}
