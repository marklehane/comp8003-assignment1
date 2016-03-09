var artistList = [];

$(document).ready(function() {

	// populateArtistTable();
	populateArtworkTable();
	populateArtistDetails();
	populateArtworkDetails();

});

function populateArtistTable() {

	var tableContent = "";

	$.getJSON('/artists/artistlist', function(data) {

		 $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.fc + '</td>';
            tableContent += '<td>' + this.gender + '</td>';
            tableContent += '<td>' + this.birthYear + '</td>';
            tableContent += '<td>' + this.totalWorks + '</td>';
            tableContent += '<td><a href="/artistdetails/'+this.id+'" class="moreartist" rel="' + this._id + '">More</a></td>';
            tableContent += '</tr>';
        });


		$('#artistList table tbody').html(tableContent);

	});

};

function populateArtworkTable() {

	var tableContent = "";

	$.getJSON('/artworks/artworklist', function(data) {

		 $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.all_artists + '</td>';
            tableContent += '<td>' + this.title + '</td>';
            tableContent += '<td><img src="' + this.thumbnailUrl + '"></td>';
            tableContent += '<td><a href="/artworkdetails/'+this.id+'" class="moreartwork" rel="' + this._id + '">More</a></td>';
            tableContent += '</tr>';
        });


		$('#artworkList table tbody').html(tableContent);

	});

};

function populateArtistDetails() {

	var URL = window.location.pathname;
	var pathArray = URL.split( '/' );
	var secondLevelLocation = pathArray[2];

	var tableContent = "";

	$.getJSON('/artists/'+ secondLevelLocation +'', function(data) {

		 $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.fc + '</td>';
            tableContent += '<td>' + this.birthYear + '</td>';
            tableContent += '</tr>';
        });


		$('#artistDetails table tbody').html(tableContent);

	});


}

function populateArtworkDetails() {

	var URL = window.location.pathname;
	var pathArray = URL.split( '/' );
	var secondLevelLocation = pathArray[2];

	var tableContent = "";

	$.getJSON('/artworks/'+ secondLevelLocation +'', function(data) {

		 $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.all_artists + '</td>';
            tableContent += '<td>' + this.classification + '</td>';
            tableContent += '<td><img src="' + this.thumbnailUrl + '"></td>';
            tableContent += '</tr>';
        });


		$('#artworkDetails table tbody').html(tableContent);

	});


}
