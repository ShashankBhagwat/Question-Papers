FirstQpcardsController = RouteController.extend({
  subscriptions: function () {
    // set up the subscriptions for the route and optionally
    // wait on them like this:
    //
     this.subscribe('english', this.params._id);this.subscribe('mone', this.params._id);this.subscribe('mtwo', this.params._id);this.subscribe('physics', this.params._id);
     this.subscribe('chemistry', this.params._id);this.subscribe('c', this.params._id);this.subscribe('mechanics', this.params._id);this.subscribe('drawing', this.params._id);
    //
    // "Waiting" on a subscription does not block. Instead,
    // the subscription handle is added to a reactive list
    // and when all items in this list are ready, this.ready()
    // returns true in any of your route functions.
  },

  data: function () {
    // return a global data context like this:
    // Items.findOne({_id: this.params._id});
  },

  action: function () {
    // You can create as many action functions as you'd like.
    // This is the primary function for running your route.
    // Usually it just renders a template to a page. But it
    // might also perform some conditional logic. Override
    // the data context by providing it as an option in the
    // last parameter.
    this.render('FirstQpcards', { /* data: {} */});
  }
});
