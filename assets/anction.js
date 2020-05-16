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
let copyBtn = document.querySelector('.btn-copy');

// hide data
output_data.style.display = "none";
btn_Create.addEventListener('click', function(){
getAbuseWords(inputText.value)
})

// 
function getAbuseWords (limit) {
	// alert(limit);
	textbox.textContent = ' ';
	const data = "https://jsonbox.io/box_72aa636239c6f2481d61?limit=500";
	fetch(data)
	.then((response) => response.json())
		.then((data) => {
	   let dataLength = data.length;
	   output_data.style.display = "block";
	   for(let i = 1; i <= limit; i++){
		// console.log(data[i].word);
		textbox.textContent +=data[i].word + " ";
		
		console.clear();
	   }
});
} //.function

copyBtn.addEventListener('click', function(){
	textbox.select();
	 textbox.setSelectionRange(0, 99999);
   document.execCommand("copy");
   	copyBtn.innerText = "Copied"
   	setTimeout(function(){
   	copyBtn.innerText = "Copy"
   },1000)
})