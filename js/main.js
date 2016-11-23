(function(){

	$('#getData').click(function(){
        $('#content').append('<img id="load" src="../img/download.gif"><br>');
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/photos',
			type: 'GET',
			success: function( res ){
                $('#load').remove();
				for( var i = 0; i < res.length; i++ ){
                    var url = res[i].url;
					$('#content').append('<img src="'+url+'"><br>');
				}
			}   
		})
	});
    
}())