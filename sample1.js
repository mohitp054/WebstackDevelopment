const api_url="https://cynthiaesthermetilda.github.io/Xhrdemo/products.json"


var productlist=[];

document.getElementById('showProducts').addEventListener('click', function() {
    fetch(api_url)
      .then(response => response.json())
      .then(data => {
        productlist=data
        displayProducts(productlist)
        
    })

      .catch(error => console.error('Error fetching products.json:', error))
  })
  function displayProducts(products) {
    var productListDiv = document.getElementById('productList');
    productListDiv.innerHTML = '';

    var table = document.createElement('table');

    
    var headerRow = document.createElement('tr');
    var headers = ['Name', 'Price','Description','Image'];

    for (var i = 0; i < headers.length; i++) {
      var headerCell = document.createElement('th');
      headerCell.textContent = headers[i];
      headerRow.appendChild(headerCell);
    }

    table.appendChild(headerRow);

    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      var productRow = document.createElement('tr');

      var nameCell = document.createElement('td');
      nameCell.textContent = product.name;

      var priceCell = document.createElement('td');
      priceCell.textContent = product.price;
      var descCell = document.createElement('td');
      descCell.textContent = product.description;

      var imageCell = document.createElement('td');
      imageCell.textContent = product.image_url;

      productRow.appendChild(nameCell);
      productRow.appendChild(priceCell);
      productRow.appendChild(descCell);
      productRow.appendChild(imageCell);

      table.appendChild(productRow);
    }

    productListDiv.appendChild(table);
  }


document.getElementById("searchbar").addEventListener('input',()=>{
    var searchitem=  document.getElementById("searchbar").value
    if(searchitem===null || searchitem===''){
        displayProducts(productlist)
    }
})  

function searchresults(){
    var searchitem= document.getElementById("searchbar").value
    var filterType = document.getElementById("selectbar").value

    var newlist=[]
    var sortedProducts=[]


    for(var i=0;i < productlist.length ;i++)
    {
        if(productlist[i].name.toLowerCase().includes(searchitem.toLowerCase())){
            newlist.push(productlist[i])
        }
     document.getElementById('productList').innerHTML=null;
    //  displayProducts(newlist)

    switch(filterType){
        case 'nofilter':
            displayProducts(newlist);
            break;
        case 'price':
            sortedProducts = productlist.slice().sort((a, b) => a.price - b.price);
            displayProducts(sortedProducts);
            break;
        case 'name':           
            sortedProducts = productlist.slice().sort((a, b) => a.name.localeCompare(b.name));
            displayProducts(sortedProducts);
            break;
    }
        
    }

}