'use strict';

function collectSameElements(collectionA, collectionB) {
  var same =[];
  var arrayb = collectionB.value;
  for(let i =0 ;i<collectionA.length;i++){
	  for(let j = 0 ; j < arrayb.length ; j++){
        if(collectionA[i].key == arrayb[j] ){
           same.push(collectionA[i].key);
        }
    }
  }
  return same;
}
