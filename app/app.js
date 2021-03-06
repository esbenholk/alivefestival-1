import LinkComponent from '@ember/routing/link-component'
import Application from '@ember/application'
import Resolver from './resolver'
import loadInitializers from 'ember-load-initializers'
import config from './config/environment'

const App = Application.extend({
	rootElement: '#App',
	modulePrefix: config.modulePrefix,
	podModulePrefix: config.podModulePrefix,
	Resolver
})

// Change the class Ember adds to active elements
LinkComponent.reopen({
	activeClass: 'is-active'
})

loadInitializers(App, config.modulePrefix)

export default App
