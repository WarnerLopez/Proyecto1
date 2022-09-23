$(document).ready(function () {
    let item = JSON.parse(localStorage.getItem('item'));
    console.log(item)

    $("#img-principal").attr( 'src', './assets/'+item.image);
    $('#name').append(item.name);
    $('#price').append(item.price);
    $('#frecuencia').append(item.frecuencia);
    $('#cores').append(item.cores);
    $('#Threads').append(item.Threads);
    $('#cache').append(item.cache);
    $('#Socket').append(item.Socket);
    $('#Consumo').append(item.Consumo);








    //frecuencia: "3.7 GHz / 4.8 GHz Max Boost",
   // cores: 12,
    ////Threads: 24,
    ////cache: "6/64MB (L2/L3)",
    //Socket: "AM4",
   // Consumo: "105W",

    

}
)

