var item = [9,8,7,6,5,4,3,2,1];

function divide(item,pivot,l,r){
	var i=r;
	var j=l;
	while(i>j){
		while(item[j]<item[pivot]){

			j++;
		}
		while(item[i]>item[pivot]){
			i--;
		}

		if(item[j]>item[i]){
			console.log("swapped");
			var temp = item[i];
			item[i] = item[j];
			item[j] = temp;
		}

	}
}

function quickSort(item,left, right){
	pivot = Math.floor((left+right)/2)
	divide(item,pivot,left,right)
console.log(pivot,left,right);
	if(left<pivot){
		
		quickSort(item,left,pivot-1);	
	}
	if(right>pivot){
		
		quickSort(item,pivot+1,right);
	}
	
}

quickSort(item,0,item.length-1);

console.log(item);

