if (Posts.find().count() <= 1) {
  Posts.insert({
    title: 'Hello World',
    url: 'https://www.youtube.com/embed/rOU4YiuaxAM'
  });

  Posts.insert({
    title: 'HeeeeyYeahyeahyeah',
    url: 'http://heyyeyaaeyaaaeyaeyaa.com/',
  });

  Posts.insert({
    title: 'Samuel',
    url: 'http://www.samuel-rowan.com/',
  });
}
