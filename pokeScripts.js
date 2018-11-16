$("#getPoke").click(function(){
    name = $("#userInput").val()
$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/" + name + "/",
    
    success : function(data){
        console.log(data)
        const rName = data.name
        const pokPic = data.sprites.front_default
        const pokDesc = data.abilities[0].ability.name
        const height = data.height
        const weight = data.weight
        // const pokename = data.results[0].name
        $("#picture").slideUp(50).attr('src', pokPic).slideDown(1000);
        $("#pokeName").html(rName);
        $("#description").html(pokDesc);
        $("#height").html(rName + "\'s height is " + height + " and it's weight is " + weight);
        // $("#weight").html(+ weight);
        // $("#description").html(pokDesc)
        
        
    
    },
    error : function(request, error){
        console.log(error)
        console.log(request)
    }
    });
})