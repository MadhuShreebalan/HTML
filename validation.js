
function ValidationForm()                                    
{ 
    var CardNumber = document.forms["form"]["CardNumber"].value;               
    var Securitycode = document.forms["form"]["Securitycode"].value;    
    //var Cardholder's name = document.forms["ValidationForm"]["Cardholder's name"].value;  
    
   // var Address1 = document.forms["ValidationForm"]["Address1"].value;  
    //var Town/City = document.forms["ValidationForm"]["Town/City"].value;  
    //var Email = document.forms["ValidationForm"]["Email"].value;  
    //var Postalcode/Zipcode = document.forms["ValidationForm"]["Postalcode/Zipcode"].value;  
   
    if (CardNumber == "")                                  
    { 
		document.getElementsByName('CardNumber').innerHTML ="this is an invalid name";
        alert("Please enter a valid Card number."); 
        CardNumber.focus(); 
        return false; 
    } 
   
    if (Securitycode == "")                               
    { 	document.getElementsByName('Securitycode').innerHTML ="this is an invalid name";
        alert("Please enter a valid Security code."); 
        Securitycode.focus(); 
        return false; 
    } 
       
    /*if (Email == "")                                   
    { 
        alert("Please enter a valid e-mail address."); 
        Email.focus(); 
        return false; 
    } 

	if (Address1 == "")                                   
    { 
        alert("Please enter a valid  address."); 
        Address1.focus(); 
        return false; 
    } 
   
    if (Cardholder's name == "")                           
    { 
        alert("Please enter a valid Cardholder's name."); 
        Cardholder's name.focus(); 
        return false; 
    } 
   
    if (Town/City == "")                        
    { 
        alert("Please enter a valid Town/City"); 
        Town/City.focus(); 
        return false; 
    } 
   */
    return true; 
}