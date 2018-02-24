import {module, test} from 'qunit'
import {setupRenderingTest} from 'ember-qunit'
import {render, findAll} from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | instagram feed', function(hooks) {
	setupRenderingTest(hooks)

	test('it renders', async function(assert) {
		await render(hbs`{{instagram-feed}}`)
		assert.equal(findAll('iframe').length, 1)
	})
})
