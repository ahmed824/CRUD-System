


var productNameItem = document.getElementById('productName')
var productCategoryItem = document.getElementById('productCategory')
var productPriceItem = document.getElementById('productPrice')
var productDescriptionItem = document.getElementById('productDescription')

var productContainer = []

if (localStorage.getItem('products') != null) {
    productContainer = JSON.parse(localStorage.getItem('products'))
    displayProducts()

}

function addProduct() {
    var productOpj = {
        name: productNameItem.value,
        category: productCategoryItem.value,
        price: productPriceItem.value,
        description: productDescriptionItem.value,
    }
    productContainer.push(productOpj)
    localStorage.setItem('products', JSON.stringify(productContainer))

    displayProducts()
    clearInpyts()
}

function displayProducts() {
    cartona = ``
    for (var i = 0; i < productContainer.length; i++) {
        cartona += `
        <tr>
            <td>${i + 1}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].description}</td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm">Delete</button></td>
            <td><button class="btn btn-success btn-sm">Update</button></td>
        </tr>
    `
    }
    document.getElementById("tbody").innerHTML = cartona
}

function clearInpyts() {
    productNameItem.value = "";
    productPriceItem.value = "";
    productDescriptionItem.value = "";
    productCategoryItem.value = "";
}

function deleteProduct(Index) {
    productContainer.splice(Index, 1);
    localStorage.setItem('products', JSON.stringify(productContainer));
    displayProducts()
}

function search() {
    var searchInput = document.getElementById("searchInput").value
    var box = ``

    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.toLowerCase().includes(searchInput.toLowerCase())) {
            box += `
            <tr>
                <td>${i + 1}</td>
                <td>${productContainer[i].name.replace(new RegExp(searchInput, 'gi'), match => `<span>${match}</span>`)}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].description}</td>
                <td><button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm">Delete</button></td>
                <td><button class="btn btn-success btn-sm">Update</button></td>
            </tr>
        `
        }

    }
    document.getElementById('tbody').innerHTML = box
};




