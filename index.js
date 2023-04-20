var createInput = document.getElementById("createInput");
var createButton = document.getElementById("createButton");
var updateBrandInput = document.getElementById("updateBrandInput");
var updateIdInput = document.getElementById("updateIdInput");
var updateButton = document.getElementById("updateButton");
var deleteInput = document.getElementById("deleteInput");
var deleteButton = document.getElementById("deleteButton");
var readButton = document.getElementById("readButton");
var brands = document.getElementById("brands");

deleteButton.addEventListener("click", () => deleteBrand(deleteInput.value));
updateButton.addEventListener("click", () =>
  updateBrand(updateIdInput.value, updateBrandInput.value)
);
createButton.addEventListener("click", () => addBrand(createInput.value));
readButton.addEventListener("click", getBrands);

var apiURL =
"https://crudcrud.com/api/df63745a441448f991faedf8a600daa5;"


// READ FUNCTION
function getBrands() {
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      brands.innerHTML = "";

      for (var i = 0; i < data.length; i++) {
        var brand = data[i].brand;
        var brandID = data[i]._id;
        var p = document.createElement("p");
        p.innerHTML = brand + ", " + brandID;
        brands.appendChild(p);
      }
    });
}


// UPDATE FUNCTION
function addBrand(newBrand) {
  fetch(apiURL, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'POST',
    body: JSON.stringify({brand: newBrand})
  })
  .then(response => response.json())
  .then(data => console.log(data))
}


//DELETE FUNCTION
function deleteBrand(existingID) {
  fetch(apiURL + "/" + existingID, {
    method: "DELETE",
  }).then((response) => console.log(response));
}


// UPDATE FUNCTION
function updateBrand(existingID, updatedBrand) {
  fetch(apiURL + "/" + existingID, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: "PUT",
    body: JSON.stringify({ brand: updatedBrand }),
  }).then((response) => console.log(response));
}
