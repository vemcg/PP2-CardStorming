define(['jquery'], function ($) {
  return function (){
 // add node here
  var num1 = $("#num1").val();
  var num2 = $("#num2").val();
  //var datePickerBegin = 
 // alert("addStudent"+a);
  if(num1!=""  && num2 !=""   ){
    var output =   parseInt(num1)+ parseInt(num2);
    var node   = "<li>" + num1 + " + " + num2+ " = "+  output+ "</li>";
  
  alert("node="+node);
  $("#orderedList").append(node); 
  $("#num1").val("");
  $("#num2").val("");
}else{
  alert("please Enter non-blank entries")
}
 // $("#name").append(node); 
  //$(html).find('li').appendTo('ol')

  //$('li:last').append(node);
};

});