import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        getCode(code) {
            alert(code);
        }
    }
});