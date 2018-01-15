const utubeApi = 'https://www.googleapis.com/youtube/v3/search'

function getDataFromApi(searchTerm, callback) {
  const settings = {
    url: utubeApi,
    data: {
      q: `${searchTerm} in:name`,
      key: 'AIzaSyBHoiBtyIgJXWy0-xQemDvG7wazOe-Pt8g',
      part:'snippet'
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };

  $.ajax(settings);
}

function test () {
	$('.form').submit(event => {event.preventDefault();
		const testSearch = $(event.currentTarget).find('.search');
		const testQuery = testSearch.val()
		getDataFromApi(testQuery, displayData)
		})
}

function render(result) {
	console.log(result)
	const imgThumb = result.snippet.thumbnails.medium.url;
	return `
	<div class ="img">
	<a href ='${imgThumb}'>  
		<img src ='${imgThumb}' alt ='youtube thumbnail' class ='utubeThumb'>
	</a>
	</div>`;

}


function displayData(data) {
	const results = data.items.map((item) => render(item));
	$('.results').html(results)
}

test()