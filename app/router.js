import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('languages', function() {
    this.route('show', {path: '/:language_id'});
    this.route('new');
    this.route('edit', {path: '/:language_id/edit'});
  });
});

export default Router;
