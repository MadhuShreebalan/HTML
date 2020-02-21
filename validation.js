
function ValidationForm()                                    
{ 
    var CardNumber = document.getElementById["CardNumber"].value;               
    var Securitycode = document.getElementByName["Securitycode"].value;    
    var Cardholdersname = document.getElementByName["Cardholdersname"].value;  
    var Address1 = document.getElementByName["Address1"].value;  
    var Town/City = document.getElementByName["Town/City"].value;  
    var Email = document.getElementByName["Email"].value;  
    var Postalcode/Zipcode = getElementByName.forms["Postalcode/Zipcode"].value;  
   
    if (CardNumber == "")                                  
    { 
		document.getElementsById('card').innerHTML ="this is an invalid name";
       alert("Please enter a valid Card number."); 
        card.focus(); 
        return false; 
    }
   
    if (Securitycode == "")                               
    { 	document.getElementsById('Securitycode').innerHTML ="this is an invalid code";
       // alert("Please enter a valid Security code."); 
        Securitycode.focus(); 
        return false; 
    } 
         if (Postalcode/Zipcode == "")                               
    { 	document.getElementsById(' postCode').innerHTML ="this is an invalid code";
       // alert("Please enter a valid Security code."); 
         postCode.focus(); 
        return false; 
    } 
    if (Email == "")                                   
    { 	document.getElementsById('emailId').innerHTML ="this is an email address";
        //alert("Please enter a valid e-mail address."); 
        Email.focus(); 
        return false; 
    } 

	if (Address1 == "")                                   
    { document.getElementsById('location').innerHTML ="this is a valid address";
        //alert("Please enter a valid  address."); 
        location.focus(); 
        return false; 
    } 
   
    if (Cardholdersname == "")                           
    { 
document.getElementsByName('Cardholdersname').innerHTML ="Please enter a valid Cardholder's name.";
        //alert("Please enter a valid Cardholder's name."); 
        Cardholdersname.focus(); 
        return false; 
    } 
   
    if (Town/City == "")                        
    { document.getElementsByName('Town/City').innerHTML ="Please enter a valid Town/City";
        alert("Please enter a valid Town/City"); 
        Town/City.focus(); 
        return false; 
    } 
   
    return true; 
}*/