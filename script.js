let sampleTable=document.getElementById('sampleTable')

function insert_Row() {
    //Write your code here
let row = sampleTable.insertRow(0);  

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
	
}
