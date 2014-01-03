requirejs([
  'backbone',
  "views/videosView",
  "views/eventsView",
  "collections/videos",
  "collections/events",
  "helpers/handlebars"
  ], function(Backbone, VideosView, EventsView, VideosCollection, EventsCollection) {
    var videos = new VideosCollection();
    videos.fetch({
      success: function() {
        var videosView = new VideosView({collection: videos});
        $("#videos").html(videosView.render().el);
      }
    });
});