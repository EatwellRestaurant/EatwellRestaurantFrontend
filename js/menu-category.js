const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id)

$.ajax({
    url: "https://localhost:7189/api/products/getproductsbymealcategoryid" + "?id=" + id,
    dataType: "json",
    error:  function (jqXHR, textStatus, errorThrown) {
        console.log(`Veri alınırken bir hata oluştu: ${textStatus} ${errorThrown}`);

        let result = jqXHR.responseJSON;

        for(let key in result) {
            console.log(key + ":", result[key]);
        }
    }
    
});

$.get( "https://localhost:7189/api/products/getproductsbymealcategoryid" + "?id=" + id, function( data ) {

    console.log(id);
    let incomingData = data.data;
    console.log(incomingData);

});