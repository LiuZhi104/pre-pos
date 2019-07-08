'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var same = [];
  var arrayB = objectB.value;
  var countSame = 1;
  for(let i = 0 ; i < collectionA.length ; i++){
	  if(collectionA[i] == collectionA[i+1]){
		  countSame++;
	  }else{
		  var keyvalue = {
			'key': collectionA[i],
			'count': countSame  
		  }
		  same.push(keyvalue);
		  keyvalue = {};
		  countSame = 1;
	  }
  }
  for(let j = 0 ; j < same.length ; j++){
	  for(let k = 0 ; k < arrayB.length ; k++){
		  if(same[j].key == arrayB[k]){
			  same[j].count =  same[j].count - Math.floor(same[j].count/3);
		  }
	  }
  }
  return same;
}
