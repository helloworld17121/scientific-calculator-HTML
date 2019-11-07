function myclick(a) {
  myform.display.value+=a;
}
function equalto()
{
  myform.display1.value="SYNTAX ERROR";
  myform.display1.value=eval(myform.display.value); 
  if(myform.display1.value=="undefined"){
      myform.display1.value="SYNTAX ERROR";
  }
}
  function ac(){
  myform.display.value="";
  myform.display1.value="";
}
function backspace(){
  var prevalue=myform.display.value;
  myform.display.value=prevalue.substr(0,prevalue.length-1);
}  

function cos() {
      myform.display1.value="SYNTAX ERROR";
      myform.display1.value=eval(myform.display.value); 
      if(myform.display1.value=="undefined"){
          myform.display1.value="SYNTAX ERROR";
      }
	  myform.display1.value = Math.cos(myform.display.value);
}

function sin() {
    myform.display1.value="SYNTAX ERROR";
      myform.display1.value=eval(myform.display.value); 
      if(myform.display1.value=="undefined"){
          myform.display1.value="SYNTAX ERROR";
      }
	myform.display1.value = Math.sin(myform.display.value);
}

function tan() {
    myform.display1.value="SYNTAX ERROR";
      myform.display1.value=eval(myform.display.value); 
      if(myform.display1.value=="undefined"){
          myform.display1.value="SYNTAX ERROR";
      }
	myform.display1.value = Math.tan(myform.display.value);
}

function acos() {
      myform.display1.value="SYNTAX ERROR";
      myform.display1.value=eval(myform.display.value); 
      if(myform.display1.value=="undefined"){
          myform.display1.value="SYNTAX ERROR";
      }
	  myform.display1.value = Math.acos(myform.display.value);
}

function asin() {
    myform.display1.value="SYNTAX ERROR";
      myform.display1.value=eval(myform.display.value); 
      if(myform.display1.value=="undefined"){
          myform.display1.value="SYNTAX ERROR";
      }
	myform.display1.value = Math.asin(myform.display.value);
}

function atan() {
    myform.display1.value="SYNTAX ERROR";
      myform.display1.value=eval(myform.display.value); 
      if(myform.display1.value=="undefined"){
          myform.display1.value="SYNTAX ERROR";
      }
	myform.display1.value = Math.atan(myform.display.value);
}

function sqrt() {
    myform.display1.value="SYNTAX ERROR";
      myform.display1.value=eval(myform.display.value); 
      if(myform.display1.value=="undefined"){
          myform.display1.value="SYNTAX ERROR";
      }
	myform.display1.value = Math.sqrt(myform.display.value);
}

function ln() {
    myform.display1.value="SYNTAX ERROR";
      myform.display1.value=eval(myform.display.value); 
      if(myform.display1.value=="undefined"){
          myform.display1.value="SYNTAX ERROR";
      }
	myform.display1.value = Math.log(myform.display.value);
}

function exp() {
    
    myform.display1.value="SYNTAX ERROR";
      myform.display1.value=eval(myform.display.value); 
      if(myform.display1.value=="undefined"){
          myform.display1.value="SYNTAX ERROR";
      }
	myform.display1.value = Math.exp(myform.display.value);
}

function changeSign() {
	myform.display1.value="SYNTAX ERROR"; 
      if(myform.display1.value=="undefined"){
          myform.display1.value="SYNTAX ERROR";
      }
	myform.display.value = "-"+eval(myform.display.value)
    myform.display1.value = "-"+eval(myform.display.value)
}

function square() {
    myform.display1.value="SYNTAX ERROR";
      myform.display1.value=eval(myform.display.value); 
      if(myform.display1.value=="undefined"){
          myform.display1.value="SYNTAX ERROR";
      }
	myform.display1.value = eval(myform.display.value) * eval(myform.display.value)
}
function inverse() {
    myform.display1.value="SYNTAX ERROR";
      myform.display1.value=eval(myform.display.value); 
      if(myform.display1.value=="undefined"){
          myform.display1.value="SYNTAX ERROR";
      }
	myform.display1.value = 1/eval(myform.display.value)
}