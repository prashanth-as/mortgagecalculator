
function getValues()
{

document.getElementById("nm").innerHTML = document.getElementById("name").value;
var balance = parseFloat(document.getElementById("principal").value);
var interestRate = parseFloat(document.getElementById("interest").value/100.0);
var terms = parseInt(document.getElementById("terms").value);
var extrap = parseInt(document.getElementById("extra").value);
var earlyp;

var div = document.getElementById("amor"); div.innerHTML = "";

var balVal = validateInputs(balance);
var intrVal = validateInputs(interestRate);

	if (balVal && intrVal)
	{
		div.innerHTML += amort(balance, interestRate, terms, extrap);
	}
	else
	{
		div.innerHTML += "Invalid values. Please try again.";
	}
}

function amort(balance, interestRate, terms, extrap)
{
var monthlyRate = interestRate/12;
var payment = balance * (monthlyRate/(1-Math.pow(1+monthlyRate, -terms)));


	document.getElementById("am").innerHTML = "$"+balance.toFixed(2);
	document.getElementById("in").innerHTML = (interestRate*100).toFixed(2)+"%";
	document.getElementById("mon").innerHTML = terms;
	document.getElementById("mp").innerHTML = "$"+payment.toFixed(2);
	document.getElementById("ex").innerHTML = "$"+extrap;
	document.getElementById("tmp").innerHTML = "$"+(extrap+payment).toFixed(2);
	document.getElementById("tot").innerHTML = "$"+(payment * terms).toFixed(2);

var result = ""; var to_int = 0; var tinterest = 0; var pcount =1;
var to_bal = 0; var tinterest = 0; payment = payment + extrap;

		 while (balance > 0)
		 {
			 to_int = monthlyRate*balance;
			 if (payment > balance) { payment = balance + to_int; }
			 to_bal = payment - to_int;
			 tinterest = tinterest + to_int;
			 balance = balance - to_bal;

			 result += "<tr>";
			 result += "<td>" + pcount + "</td>";
			 result += "<td> $ " + payment.toFixed(2) + "</td>";
			 result += "<td> $ " + to_int.toFixed(2) + "</td>";
			 result += "<td> $ " + tinterest.toFixed(2) + "</td>";
			 result += "<td> $ " + to_bal.toFixed(2) + "</td>";
			 result += "<td> $ " + Math.abs(balance.toFixed(2)) + "</td>";
			 result += "</tr>";

			 pcount++;
		 }
		earlyp = (terms - pcount)+1;
	 	document.getElementById("early").innerHTML = earlyp+" months";
		result += "</table>";
		return result;
}

function validateInputs(value)
{
	//some code here to validate inputs
	if ((value == null) || (value == ""))
	{
		return false;
	}
	else
	{
		return true;
	}
}
