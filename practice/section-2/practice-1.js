'use strict';

function countSameElements(collection) {
  var same = [];
  var keyvalue = {};
  var countSame = 1;
  for(let i = 0 ; i < collection.length ; i++){
	  if(collection[i] == collection[i+1]){
		  countSame++;
	  }else{
		  var keyvalue = {
			'key': collection[i],
			'count': countSame  
		  }
		  same.push(keyvalue);
		  keyvalue = {};
		  countSame = 1;
	  }
  }
  console.log(same);
  return same;
}
