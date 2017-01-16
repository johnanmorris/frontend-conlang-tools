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
    this.route('new');
    this.route('edit', {path: '/:language_id/edit'});
  });
  this.route('language', {path: '/languages/:language_id'}, function(){
  });
});

export default Router;
