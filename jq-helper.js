// Write your package code here!
Template.jq.onRendered(function () {
  var options = this.data.options || {
    onRendered: function () {

    }
  };

  options.onRendered.apply(this);
});