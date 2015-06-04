
Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    var post = {
      url: $(e.target).find('[name=url]').val()
    };
    post._id = Posts.insert(post);
    Router.go('postpage', post);
  }
});
