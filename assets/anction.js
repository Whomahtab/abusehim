// 
// 
//  Amir  Chakkkaa(_'_)
//   _/﹋\_
//  (҂`_´)
//  <,︻╦╤─ ҉ - -
//  _/﹋\_
// 
const inputText  = document.querySelector('.form-inpt');
const btn_Create = document.querySelector('#btn_create');
let   textbox    = document.querySelector('.godText')
let   output_data = document.querySelector('#output');
// hide data
output_data.style.display = "none";
btn_Create.addEventListener('click', function(){
getAbuseWords(inputText.value)
})

// 
function getAbuseWords (limit) {
	// alert(limit);
	textbox.textContent = ' ';
	const data = "https://jsonbox.io/box_72aa636239c6f2481d61";
	fetch(data)
	.then((response) => response.json())
		.then((data) => {
		 // console.log(data[2].name);
	   let dataLength = data.length;
	   output_data.style.display = "block";
	   // loopppp
	   for(let i = 1; i <= limit; i++){
		// console.log(data[i].word);
		textbox.textContent += data[i].word + " ";
		
		console.clear();
	   }
});
} //.function