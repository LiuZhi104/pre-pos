'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var arrayB = objectB.value;
  for(let i = 0 ; i < collectionA.length ; i++){
	  for(let j = 0 ; j < arrayB.length; j++){
		  if(collectionA[i].key == arrayB[j]){
			  collectionA[i].count = collectionA[i].count - Math.floor(collectionA[i].count/3);
		  }
	  }
  }
  return collectionA;
}
