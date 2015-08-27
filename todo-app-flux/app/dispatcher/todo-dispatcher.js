import flux from 'flux';
import assign from 'object-assign';

let Dispatcher = flux.Dispatcher;

var TodoDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = TodoDispatcher;
