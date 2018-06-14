function splitSpreadsheet() {
  var numberOfLines = 500;
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var yourNewSheet = {};
  var sheetName = sheet.getSheetName();
   for (var i = 0; i < data.length; i++) {

     var tabName = i%numberOfLines;
     if(tabName == 0){
       yourNewSheet = sheet.getParent().getSheetByName(sheetName+"batch #" + i)
       if ( yourNewSheet ) {
         yourNewSheet.clear();
       } else {
         yourNewSheet =  sheet.getParent().insertSheet(sheetName+"batch #" + i);
       }
       if ( 0 !== i ) {
         yourNewSheet.appendRow(data[0]);
       }
     }
    yourNewSheet.appendRow(data[i]);
  }
}