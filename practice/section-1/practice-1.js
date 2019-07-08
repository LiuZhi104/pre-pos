'use strict';

function collectSameElements(collectionA, collectionB) {
  var same = [];
  for(let i=0;i < collectionA.length;i++){
	  for(let j = 0 ; j < collectionB.length;j++){
		  if(collectionA[i] == collectionB[j]){
			  if(same.length > 0){
				  for(let y = 0 ; y < same.length; y++){
					  if(collectionA[i] == same[y]){
						continue;
					  }
				  }
			  }
			  same.push(collectionA[i]);
		  }
	  }
  }
  
  return same;
}
