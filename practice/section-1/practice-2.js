'use strict';

function collectSameElements(collectionA, collectionB) {
  var same =[];
  var arrayb = collectionB[0];
  for(let i =0 ;i<collectionA.length;i++){
	  for(let j = 0 ; j < arrayb.length ; j++){
        if(collectionA[i] == arrayb[j] ){
           same.push(collectionA[i]);
        }
    }
  }
  return same;
}
