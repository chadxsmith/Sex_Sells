 $( document ).ready(function() {

 var newpic = 0; 


function newPicChecker(){
    if(newpic === 40){
        newpic = 1
    }
}



setInterval(scrambledPornCall_1, 2000);
setInterval(scrambledPornCall_2, 1000);


 


    function scrambledPornCall_1() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url:"http://api.giphy.com/v1/gifs/search?q=spice-channel-scrambled&api_key=dc6zaTOxFJmzC&limit=100"
          }).done(function(response){
                console.log(response)

              for(i = 0; i < response["data"].length; i++){
                  

                  $(".background__img--full").css('background-image','url(' + response["data"][newpic]["images"]["downsized"]["url"] + ')')      
                  $(".header--transparent").text('For Everyone')                        
              }

          })

         newpic++
         newPicChecker()

    }



    function scrambledPornCall_2() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url:"http://api.giphy.com/v1/gifs/search?q=glitchart&api_key=dc6zaTOxFJmzC&limit=100"
          }).done(function(response){
                console.log(response)

              for(i = 0; i < response["data"].length; i++){
                  

                  $(".header--transparent").css('background-image','url(' + response["data"][newpic]["images"]["downsized"]["url"] + ')')      
                  $(".header--transparent").text('Believe Everything')                      
              }

          })

         newpic++
         newPicChecker()

    }
        


});