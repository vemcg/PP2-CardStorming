/////////////////////////////////////////////////////////////////

<%= 'https://groups.google.com/forum/#!topic/requirejs/9nLpMXNVISM' %>

I came up with the "poor man's" solution (I'm using Rails 2):

Assuming you have require.js, main.js (a "default" module), home.js (for example) in you public/javascripts, in your layout you can put:

<%= javascript_include_tag 'require', 'data-main' => "/javascripts/#{yield(:js_module) || 'main'}" %>

In a view you can now do:

<% content_for :js_module, 'home' %>

In the view and it will load 'home' as the main module, or 'main' if none was specified. This won't work if you try multiple content_for calls, and optimization would have to be done manually (probably as a capistrano task or similar.)

Not much but it's where I'm starting on this app and it might be helpful to somebody.

Nathan
////////////////////////////////////////////////////////////////////////////////////



Hellowxxx from crud1xx in app/assets/javascripts/
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