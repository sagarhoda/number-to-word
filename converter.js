function ConverterApp() {
	
	this.init = function() {
		htmlElements.create();
	};

}

function HtmlElementsCreator() {
	
	this.create = function() {
		var textBox = document.createElement('input');
		var submitButton = document.createElement('button');
		var buttonText = document.createTextNode('Convert');
		var displayDiv = document.createElement('div');

		textBox.setAttribute('id', 'userInput');
		textBox.setAttribute('type', 'number');
		textBox.setAttribute('max', '9999');		
		submitButton.appendChild(buttonText);
		displayDiv.setAttribute('id', 'answer');

		document.body.appendChild(textBox);
		document.body.appendChild(submitButton);
		document.body.appendChild(displayDiv);

		submitButton.onclick = function() {
			var input = document.getElementById('userInput').value;

			if(input == ''){
				alert('Please Enter A Number');
			} 
			else{
				converters.toWord(input);
			}
		};

	};

}

function Converters() {

	this.toWord = function(number) {
		var numberLength = number.length;
		var splittedArray = number.toString().split('');
		var ones = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
		var tens = ['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen', 'Eighteen', 'Nineteen'];
		var twenties = ['','','Twenty','Thirty','Fourty','Fifty','Sixty','Seventy','Eighty','Ninety']
		var words = ['','','','Hundred','Thousand', 'Thousand','Lakh'];
		var final = [];
		var displayDiv = document.getElementById('answer');

		for(var i=1; i<=numberLength; i++){
			var prefix = words[i];
			if(i == 1){
				if(splittedArray[numberLength-2]!=1){
					final.push(ones[splittedArray[numberLength-i]] + ' ' + prefix);
				}
			}

			else if(i == 2){
				if(splittedArray[numberLength-i] == 1){
					final.push(tens[splittedArray[numberLength-i+1]]);
				}
				else{
					final.push(twenties[splittedArray[numberLength-i]] + prefix);
				}
			}

			else if(i == 3){
				final.push(ones[splittedArray[numberLength-i]] + ' ' + prefix);
			}

			else if(i == 4){
					final.push(ones[splittedArray[numberLength-i]] + ' ' + prefix);
			}

			else if(i == 5){
				if(splittedArray[numberLength-i] == 1){
					final.push(tens[splittedArray[numberLength-i+1]] + ' ' + prefix);
					final[numberLength-i+3] = '';
				}
				else{
					final.push(twenties[splittedArray[numberLength-i]]);
				}
			}

			else if(i == 6){
				final.push(ones[splittedArray[numberLength-i]] + ' ' + prefix);
			}
			
		}

		for(var i=final.length; i>=0; i--){
			final.push(final[i]);
		}

		for(var i=0; i<=numberLength; i++){
			final.shift();
		}
		
		displayDiv.innerHTML = final.join(' ') + ' Rupees Only';

	};

}

var app = new ConverterApp();
var htmlElements = new HtmlElementsCreator(); 
var converters = new Converters();

app.init();