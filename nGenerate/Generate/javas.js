function randomtest() {

var I,i;
document.getElementById("row").innerHTML = "";

for (I = 0; I < 2500; I++) {
  i = document.createElement("span");
  i.innerHTML = Math.floor((Math.random() * 5) + 1) + "\n";
  i.id = I;
  document.getElementById("row").appendChild(i);
  
	}
	
}



function findCeil(arr, r, l, h)
    {
        let mid;
        while (l < h)
        {
            mid = l + ((h - l) >> 1);
            (r > arr[mid]) ? (l = mid + 1) : (h = mid);
        }
        return (arr[l] >= r) ? l : -1;
		
    }
 
 
function myRand(arr, freq,  n) {
        let prefix= [];
        let i;
        prefix[0] = freq[0];
        for (i = 1; i < n; ++i)
            prefix[i] = prefix[i - 1] + freq[i];
        let r = Math.floor((Math.random()* prefix[n - 1])) + 1;
        let indexc = findCeil(prefix, r, 0, n - 1);
        return arr[indexc];
		
    }



function random(){
	
	document.getElementById("row").innerHTML = "";
	let arr = [1, 2, 3, 4, 5];
	let freq = [40, 30, 10, 10, 10];
	let n = arr.length;
	var Rows = 50;
	var cellsRow = 50;
    var div1 = document.getElementById('row');
    var tbl = document.createElement("table");
        for (var r = 0; r < Rows; r++) {
          var row = document.createElement("tr");
			for (var c = 0; c < cellsRow; c++) {
                var cell = document.createElement("td");
				getRandom = myRand(arr, freq, n);
				var cellText = document.createTextNode(myRand(arr, freq, n));
                cell.appendChild(cellText);
                row.appendChild(cell);
                }           
	        tbl.appendChild(row);  }
            div1.appendChild(tbl); 
} 

window.onload=drawTable;


function randomm(){
 
    let arr = [1, 2, 3, 4, 5];
    let freq = [40, 30, 10, 10, 10];
    let i;
    let n = arr.length;
	
	var X,x;
	
	document.getElementById("row").innerHTML = "";
	
    for (X = 0; X <=2500; X++){
		x = document.createElement("span");
		x.innerHTML = myRand(arr, freq, n) + "\n";
		x.id = X;
		document.getElementById("row").appendChild(x);
	}
		

				
	//document.getElementById("row").innerHTML = x;	
    //document.write(myRand(arr, freq, n));
}




function ten () {
t = document.getElementById('row').value;
document.getElementById("row").innerHTML = "";	
	
    let arr = [1, 2, 3, 4, 5];
    let freq = [40, 30, 10, 10, 10];
    let n = arr.length;
	var Rows = 50;
	var cellsRow = 50;
    var div1 = document.getElementById('row');
    var tbl = document.createElement("table");
		
            var a=new Array();            var b=new Array();
            for (var i = 0; i < 50; i += 1) a[i]= myRand(arr, freq, n) + "\n";
            for (var j = 0; j < a.length; j += 1)
                for (var i = 0; i < a.length; i += 1) {
                    //document.write(i*dx,j*dx,dx-1,dx-1);
					//document.write(myRand(arr, freq, n) + "\n");
                };
            
            
            for (var j = 0; j < a.length*3/2; j += 1){
                for (var i = 0; i < a.length; i += 1) b[i]=a[i];
                for (var i = 0; i < a.length; i += 1) {
                    bj=b[(i+1)%a.length];
                    bk=b[(i-1)%a.length];
					bl=b[i];
                    bm=b[(i+a.length-1)%a.length];
					bo=b[(i-a.length-1)%a.length];
                    a[i]=rules(bj,bk,bl,bm,bo);                    
						//document.write((i*dx,j*dx,dx-1,dx-1) + "\n");
						//document.write(myRand(arr, freq, n) + "\n");
						document.getElementById("row").innerHTML = myRand(arr, freq, n) + "\n";
                    }
                };
                
			for (var r = 0; r < Rows; r++) {
				var row = document.createElement("tr");
			for (var c = 0; c < cellsRow; c++) {
                var cell = document.createElement("td");
				getRandom = myRand(arr, freq, n);
				var cellText = document.createTextNode(myRand(arr, freq, n));
                cell.appendChild(cellText);
                row.appendChild(cell);
                }           
	        tbl.appendChild(row);  }
            div1.appendChild(tbl); 
} 
window.onload=drawTable;
			
        
        function rules (j,k,l,m,o) {
            
            if( j==1 && k == 1 && l==1 && m == 1 && o==1) return 3;
			if( j==2 && k == 2 && l==2 && m == 2 && o==2) return 3;
            if( j==3 && k == 3 && l==3 && m == 3 && o==3) return 4;
			if( j==4 && k == 4 && l==4 && m == 4 && o==4) return 4;
            if( j==5 && k == 5 && l==5 && m == 5 && o==5) return 5;
			if( l==6 && m == 6 && o==6 && m == 6 && o==6) return 5;
            if( l==5 ) return 1;
            if( j!=1 && k == 1 && l==1 && m == 1 && o==1) return 1;
			if( j!=2 && k == 2 && l==2 && m == 2 && o==2) return 1;
            if( j!=3 && k == 3 && l==3 && m == 3 && o==3) return 1;
			if( j!=4 && k == 4 && l==4 && m == 4 && o==4) return 1;
            if( j!=5 && k == 5 && l==5 && m == 5 && o==5) return 1;
			if( l!=6 && m == 6 && o==6 && m == 6 && o==6) return 1;	
        }
