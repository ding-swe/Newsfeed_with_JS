numTB = 1; /* text boxes */ 

function changeTo() {
   document.getElementById("textbox1").innerHTML = "Changed into the deviant. <button onclick='changeBack()'> push me </button>";
}


function changeBack() {
   document.getElementById("textbox1").innerHTML = "Changed back to original. <button onclick='changeTo()'> push me </button>";
}

/* NEW FUNCTIONS */ 


function addBelow(){
	var divID = "textbox";
	oldID = divID.concat(numTB);
	
	var newTB = numTB + 1;
	newDivID = divID.concat(newTB);
	
	var newBlock = document.createElement("P");
	
	/* alert(newDivID) */
	
	newBlock.id = newDivID;
	newBlock.innerHTML = "new text box <br> <button  onclick='addBelow()'> Add more text </button><button  onclick='removeText()'> Remove text </button> ";
	
	document.getElementById(oldID).appendChild(newBlock);
	
	
	numTB = numTB + 1;
}

function removeText(){
	var currDivID = "textbox";
	var TBminus = numTB - 1;
	var prevDivID = currDivID.concat(TBminus);
	currDivID = currDivID.concat(numTB);
	
	if(numTB > 1){ /* elements to delete */
		var child = document.getElementById(currDivID); 
		document.getElementById(prevDivID).removeChild(child);
		numTB = numTB - 1;
	}
	else{ /* only one element, clear itself */ 
		document.getElementById(currDivID).innerHTML = "new text box <br> <button  onclick='addBelow()'> Add more text </button><button  onclick='removeText()'> Remove text </button> ";
	}
}


/* END NEW FUNCTIONS */


function changeColor(){
	/* alert(document.getElementById("sidebar").style.backgroundColor);*/
	if(document.getElementById("sidebar").style.backgroundColor == "blue"){
		document.getElementById("sidebar").style.backgroundColor = "#757575";
	}
	else{
		document.getElementById("sidebar").style.backgroundColor = "BLUE";
	}
	/* if(document.getElementById("sidebar").style.backgroundColor == "#757575"){
		document.getElementById("sidebar").style.backgroundColor = "BLUE";
	}
	else{
		document.getElementById("sidebar").style.backgroundColor = "#757575";
	}*/
	
	
	
}ba 