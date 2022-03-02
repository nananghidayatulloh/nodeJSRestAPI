function pertama(){ 
	console.log('satu'); 
} 
function kedua(){ 
	console.log('dua'); 
} 
pertama(); 
kedua(); 

function pertama(){ 
	setTimeout(function(){ 
		console.log('satu'); 
	}, 500); 
} 
function kedua(){ 
	console.log('dua'); 
} 
pertama(); 
kedua(); 
 
// hasilnya : 
// dua 
// satu 

function pertama(lanjut){ 
	setTimeout(function(){ 
		console.log('satu'); 
		lanjut(); 
	}, 500); 
} 
function kedua(){ 
	console.log('dua'); 
} 
pertama(kedua); 
 
// hasilnya : 
// satu 
// dua 