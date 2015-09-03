var assign = require('object-assign');
var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function (action) {
    var payload = {
      source: 'VIEW_ACTION',
      action: action
    };
    this.dispatch(payload);
  }
});

module.exports = AppDispatcher;
