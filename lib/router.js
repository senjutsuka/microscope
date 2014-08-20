Router.configure({
	layoutTempate: 'layout'
});

Router.map(function() {
	this.route('postsList', {path: '/'});
});