$.ajax({
    url: "https://localhost:44398/api/mealcategories/getall",
    dataType: "json",
    error:  function (jqXHR, textStatus, errorThrown) {
        console.log(`Veri alınırken bir hata oluştu: ${textStatus} ${errorThrown}`);

        let result = jqXHR.responseJSON;

        for(let key in result) {
            console.log(key + ":", result[key]);
        }
    }
});

$.get( "https://localhost:44398/api/mealcategories/getall", function( data ) {
    
    let incomingData = data.data;

    const box = []; 
    for(let i=0; i < incomingData.length; i++){
        
        let category_image = incomingData[i].imagePath;
        let category_name = incomingData[i].name;

        console.log(incomingData[i])
        
        let element = `
        <div class='menu-content'>
            <a href='menu-category.html' class='menu-image'>
                <img src='${category_image}' alt='${category_name}'>
                <div class='img-overlay flex'>
                    <span class='name'>${category_name}</span>
                </div>
            </a>
         </div>
         
         `
        
        box.push(element); 
        document.getElementById("row").innerHTML = box;

        
        

        // var menu = '"#menu' + [i+1] + '"';
        // $(menu).attr("src", incomingData[i].imagePath);;
        // var menuContent =  '';
        // menuContent += '<div class="img-overlay flex">' 
        // '<span class = "name">' + incomingData[i].name + '</span>' 
        // '</div>'; 
        
    }

    console.log( "Veriler Getirildi" );
});