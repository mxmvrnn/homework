function Article() {
  Article.count++;

  //...
}
Article.count = 0;

Article.showCount = function() {
  console.log( this.count ); // (1)
}

// использование
new Article();
new Article();
new Article();
new Article();
new Article();
new Article();
new Article();
new Article();
Article.showCount(); // (2)