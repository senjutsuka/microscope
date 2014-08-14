if (Posts.find().count() === 0) {
	
	Posts.insert({
		title: 'Introducing Telescope',
		author: 'sacah gieor',
		url: 'http://athing.com'
	});

	Posts.insert({
		title: 'meat eat or',
		author: 'A meetEator',
		url: 'http://www.google.com'
	});


	Posts.insert({
		title: 'how to meat eat or',
		author: 'AmatEator',
		url: 'http://www.reddit.com'
	});

	
}