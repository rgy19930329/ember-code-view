import Ember from 'ember';

export default Ember.Route.extend({
    routeName: 'index',
    listUrl: '',

    codeContent: '',

    model() {
        return Ember.RSVP.hash({
            codeContent: this.get('codeContent')
        });
    },

});
