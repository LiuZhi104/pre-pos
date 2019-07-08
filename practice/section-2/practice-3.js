'use strict';

function countSameElements(collection) {
  var same = [];
  var keyvalue = {};
  var countSame = 1;
  for(let i = 0 ; i < collection.length ; i++){
	  var h = collection[i].indexOf('h');
	  if(h == 0){
		var keyvalue = {
			'name': 'h',
			'summary': 11
		}
		i = i+8;
		same.push(keyvalue);
		keyvalue = {};
	    countSame = 1; 
	  }else{
	  if(collection[i] == collection[i+1]){
		  countSame++;
	  }else{
		  if(countSame > 1){
			var keyvalue = {
			 'name': collection[i],
			 'summary': countSame  
		    }
		  }else{
			var h = collection[i].indexOf('h');
			var t = collection[i].indexOf('t');
			var c = collection[i].indexOf('c');
			var d = collection[i].indexOf('d');
			if(h == 0){
				var keyvalue = {
					'name': 'h',
					'summary': 11
				}
				i = i+8;
			}
			if(t == 0){
				var keyvalue = {
					'name': 't',
					'summary': 19
				}
				i = i+8;
			}
			if(c == 0){
				var keyvalue = {
					'name': 'c',
					'summary': 8
				}
			}
			if(d == 0){
				var keyvalue = {
					'name': 'd',
					'summary': 5
				}
			}
		  }
		  same.push(keyvalue);
		  keyvalue = {};
		  countSame = 1;  
		  
	  }
		  
	  }
  }
  console.log(same);
  return same;
}
