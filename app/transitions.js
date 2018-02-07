export default function() {
	// Set velocity.js defaults
	this.setDefault({
		duration: 500,
		easing: [0.86, 0.0, 0.07, 1.0]
	})

	// Between Music and News index/detail
	this.transition(
		this.fromRoute(['news.index', 'music.index']),
		this.toRoute(['news.post', 'music.artist']),
		this.use('toLeft'),
		this.reverse('toRight')
	)

	// Between pages
	// this.transition(
	// 	this.withinRoute([
	// 		'news',
	// 		'music',
	// 		'adventure',
	// 		'guide',
	// 		'about',
	// 		'memory',
	// 		'tickets',
	// 		'volunteer',
	// 		'partners',
	// 		'english',
	// 		'404'
	// 	]),
	// 	this.use('fade', {duration: 250})
	// );
}
