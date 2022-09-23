let items = [];

function moveToItemPage(index) {
    localStorage.setItem('item', JSON.stringify(items[index]))
    window.location.href = "icore9.html";
}
$(document).ready(function () {
    $("#openSidedar").on("click", function () {
        document.getElementById("mySidebar").style.display = "block";
    })
    $("#closeSidedar").on("click", function () {
        document.getElementById("mySidebar").style.display = "none";
    });

    function getAllProducts() {
        $.ajax({
            type: "Get",
            url: "http://localhost:3000/api/v1/items",
            dataType: "json",
            success: function (data) {
                let html = '';
                items=data;
                for(let i = 0; i < data.length; i++){
                  html += '<div class="col-xl-3 probar sombra">';
                  html += '<img src="./assets/'+data[i].image+'"class="img-fluid img-profile imgra"/>';
                  html += '<h5>'+data[i].name+'</h5>';
                  html += '<h5>₡'+data[i].price+'</h5>';
                  html += '<div class="d-grid gap-2 col-6 mx-auto">';
                  html += '<a onclick="moveToItemPage('+i+')" type="button" class="btn btn-dark bot">Información</a>';
                  html += '</div> </div>';



                }
                /**
                for (let i = 0; i < data.length; i++) {
                    console.log(i);
                    html += '<div class="card product-item" >';
                    html += '<img class="card-img-top" src="' + data[i].image + '" alt="Card image cap">';
                    html += '<div class="card-body">';
                    html += '<h5 class="card-title">' + data[i].name + '</h5>';
                    html += '<p class="card-text">$' + data[i].price + '</p>';
                    html += '<a href="#" class="btn btn-red" onclick="moveToItemPage(' + i + ')">Ver</a>'
                    html += ' </div> </div>';

                }
                
                
                <div class="col-xl-3 probar sombra">
      
                <img src="./assets/core-i9.jpg"class="img-fluid img-profile imgra"/>
  
                <h5>Procesador Intel icore 9</h5>
                <h5>₡300000</h5>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <a href="icore9.html" type="button" class="btn btn-dark bot">Información</a>
                </div>
                */
                console.log(html);
                $('#products-list').append(html);
            },
            error: function (error) {
                alert(error);
            }
        });
    }

    getAllProducts();
})