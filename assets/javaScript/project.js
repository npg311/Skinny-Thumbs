$("#submit").on("click", function (event) {
    event.preventDefault();

    // clear result
    $('#videoDisply').html("");
    
    // get form input
    var drinkSearch = $("#search").val().trim();
    // run get request on api
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + drinkSearch + "&type=video&key=AIzaSyAzKhulzTYO2S90UlvOBDQeh20jnsRa67g";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {   
        var result = response.items;
        
        for (var i = 0; i < result.length; i++) {
            var ytID = "https://www.youtube.com/embed/" + result[i].id.videoId;        
            var videoId = $('<iframe>').attr('src', ytID);
            var title = $('<h3>').text(result[i].snippet.title);
            $('#videoDisply').prepend(title, videoId);
        }
   
    });
});
