function trim(str) 
{
	return str.replace("/^\s+|\s+$/g","");
}

function formFieldHasInput(fieldElement)
{
	return fieldElement && fieldElement.value 
						&& trim(fieldElement.value);
}

function validate(e)
{
    hideErrors();
    if (formHasErrors()) 
    {
        e.preventDefault();
        return false;
    }
    else
    {
    	alert("Thank you for consulting with Moriarty, your inquiry will be promptly thrown away.");
    	return true;
    }
    
}

function resetForm(e)
{
	if ( confirm('Clear order?') )
	{
		hideErrors();
		document.getElementById("fullname").focus();
		return true;
	}
	e.preventDefault();
	return false;	
}

function hideErrors()
{
    var errorFields = document.getElementsByClassName("error");

    for (var i = 0; i < errorFields.length; i++) {
        errorFields[i].style.display = "none";
    }
}

function formHasErrors()
{
	var errorFlag = false;
	var requiredTextFields = ['fullname', 'phonenumber', 'email'];
	for(var i = 0; i < requiredTextFields.length; i++)
	{
		var textField = document.getElementById(requiredTextFields[i]);

		if(!formFieldHasInput(textField))
		{
			var error = document.getElementById(requiredTextFields[i]+"_error");

			error.style.display = "block";

			if(!errorFlag)
			{
				textField.focus();
				textField.select();
			}
			errorFlag = true;
		}
	}
var phoneregex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
	var phonenumber = document.getElementById("phonenumber");
    if (!phoneregex.test(phonenumber.value) || !formFieldHasInput(phonenumber)) {
        var error = document.getElementById("phonenumber_error");
        error.style.display = "block";
        if (!errorFlag) {
            textField.focus();
            textField.select();
        }
        errorFlag = true;
    }


var emailregex = RegExp(/\S+@\S+.\S+/);
    var email = document.getElementById("email");
    if (!emailregex.test(email.value) || !formFieldHasInput(email)) {
        var error = document.getElementById("email_error");
        error.style.display = "block";
        if (!errorFlag) {
            textField.focus();
            textField.select();
        }
        errorFlag = true;
    }
    return errorFlag;
}
function load()
{
	hideErrors();
	document.getElementById("resetbutton").addEventListener("click", resetForm, false);
	document.getElementById("submitbutton").addEventListener("click", validate, false);
}


document.addEventListener("DOMContentLoaded", load, false);