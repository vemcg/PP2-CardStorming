Hello from public/assets/crud1xx.js
require(['calculator/subtract', 'calculator/square','jquery'], 
	function (sub, sq,$) {
	console.log(sub(18,5));
	
	console.log(sq(11));
     console.log("HIIIIIIIIIII");





//////////////////////////////
function addStudent(){
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
}
function deleteStudent(){
	$("#orderedList li:last").remove();
	// This is what Rajiv used:  $("#orderedList").children().last().remove();
}
function clearAllStudent(){
  $("#orderedList").children().remove();
}
$(document).ready(function(){
  $("#btnAdd").click(addStudent);
  $("#btnDelete").click(deleteStudent);
  $("#btnClear").click(clearAllStudent);
  $(".positive_integer_only").keyup(function () {     
  this.value = this.value.replace(/[^1-9]/g,'');
});

 // $("datepicker start").datepicker();
 // $("datepicker start").datepicker();

 });




//////////////////////////////

});