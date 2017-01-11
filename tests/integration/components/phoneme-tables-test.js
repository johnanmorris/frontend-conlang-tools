import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('phoneme-tables', 'Integration | Component | phoneme tables', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{phoneme-tables}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#phoneme-tables}}
      template block text
    {{/phoneme-tables}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
