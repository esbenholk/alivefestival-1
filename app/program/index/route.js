import Route from '@ember/routing/route'
import {hash} from 'rsvp'

export default Route.extend({
	model() {
		if (this.get('cached')) return this.get('cached')
		// /artists?filter[cat]=12 or /posts?filter[category_name]=jazz_funk
		return hash({
			page: this.store.findRecord('page', 1473),
			eventPage: this.store.findRecord('page', 43),
			artists: this.store.query('artist', {
				categories: ['7', '8'],
				per_page: 99
			})
		}).then(model => {
			this.set('cached', model)
			return model
		})
	}
})
