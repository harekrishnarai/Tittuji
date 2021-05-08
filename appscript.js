var token= "YOUR TOKEN";
var telegramUrl = "https://api.telegram.org/bot" + token;
var webAppUrl = "ENTER THE DEPLOYMENT URL WHICH YOU GET after entering all";

function getMe() {
  var url = telegramUrl+ "/getMe";
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function setWebhook(){
  var url = telegramUrl+ "/setWebhook?url="+ webAppUrl;
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function doGet(e){
  return HtmlService.createHtmlOutput("Hi There");
}

function doPost(e){
  var data = e.postData.contents;
  var text = data.message.text;
  var id = data.message.chat.id;
  var name = data.message.chat.first_name + "" + data.message.chat.last_name;
  var answer = "Hi " +name+ ", thank you for your comment" +text;
  //this is where telegram works
  MailApp.sendEmail(Session.getEffectiveUser().getEmail(),"Message sent to bot",JSON.stringify(data,null,0));
  
 // MailApp.sendEmail(Session.getEffectiveUser().getEmail, "subject", JSON.strin);
}