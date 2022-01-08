//global vars
var itemsPerPage = 3;
var startItem = 1;
var currentPage = 1;
var endItem = itemsPerPage;
var totalItems = document.getElementsByClassName("child").length;
var itemsOnLastPage = totalItems % itemsPerPage;
var totalPages = totalItems / itemsPerPage;
var debug = true;


function showDebug() {
   if(debug){
    console.log('===== DEBUG =====');
    console.log('itemsPerPage',itemsPerPage);
    console.log('totalItems',totalItems);
    console.log('totalPages',totalPages);
    console.log('itemsOnLastPage',itemsOnLastPage);
    console.log('currentPage',currentPage);
    console.log('startItem',startItem);
    console.log('endItem',endItem);    
   }
}

//show initial slides
function showProducts() {
    for (i = startItem; i <= endItem; i++) {
        document.getElementById("c" + i).style.display = "inline-block";
    }
}

function hideProductsOnNext() {
    for (i = startItem; i <= endItem; i++) {
        document.getElementById("c" + i).style.display = "none";
    }

    if(endItem + itemsPerPage > totalItems){
        startItem += itemsOnLastPage;
        endItem += itemsOnLastPage;
    } else {
        startItem +=itemsPerPage;
        endItem += itemsPerPage;
    }
}

function next() {

    //if(startItem <= 3 && endItem <= 7){
    if(startItem >= 1 && endItem <= (totalItems-1) ){

        //hide
        hideProductsOnNext();
    
        //show new items
        showProducts();

        //update currentPage
        currentPage += 1;

        showDebug();
    }
    else return;
}

function hideProductsOnBack() {
    for (i = endItem; i >= startItem; i--) {
        document.getElementById("c" + i).style.display = "none";
    }

    if(startItem - itemsPerPage < 0){
        startItem -= itemsOnLastPage;
        endItem -= itemsOnLastPage;
    } else {
        startItem -= itemsPerPage;
        endItem -= itemsPerPage;
    }
}

function back() {

    //if(startItem >= 2 && endItem >= 6){
    if(startItem >= 1 && endItem > itemsPerPage){
  
        //hide
        hideProductsOnBack();

        //show new items
        showProducts();

        //update currentPage
        currentPage -= 1;

        showDebug();
    }
    else return;
}
 
function getDetails(obj) {
    console.log('data' , obj.getAttribute('data-index'));

}