function blank()
{
  var a=document.getElementById("firstname").value;
  var b=document.getElementById("lastname").value;
  var c=document.getElementById("email").value;
  var d=document.getElementById("vemail").value;
      if (a.length < 1)
      {
          window.alert("Field is blank!");
          return false;
      }
      else if (b.length < 1)
      {
          window.alert("Field is blank!");
          return false;
      }
      else if (c.length < 1)
      {
          window.alert("Field is blank!");
          return false;
      }
      else if (d.length < 1)
      {
          window.alert("Field is blank!");
          return false;
      }
      else {
        document.getElementById("invalid").innerHTML = "Thanks "+ a+ "! We'll be in touch!"
      }
      ValidateEmail(d);
}


function ValidateEmail(inputText)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat))
{
}
else
{
document.getElementById("invalid").innerHTML = "Invalid Email"
}
}
