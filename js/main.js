function createNewPost(news){
    var eachNewsPost = `
        <div class="box">
            <article class="media">
                 <div class="media-left">
                    <figure class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                </div>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>`+news.by+`</strong> <small>`+news.time+`</small>
                            <br>
                            <a href="`+news.url+`" class="is-underlined" target="_blank">
                                `+news.title+`
                            </a>
                        </p>
                    </div>
                </div>
            </article>
        </div>
    `;
    return eachNewsPost;
}
var all;
var totalLeft;
var app = angular.module('myApp', []);
var seeMore = document.getElementById("seeMore");
app.controller('myCtrl', function($scope, $http) {
    $http.get("hacker_news_stories.json")
    .then(function(response) {
        all = response.data;
        totalLeft = all.length;
        var allData = "";
        for (var i = 0; i < 5 && totalLeft>0; i++,totalLeft--) {
            allData += createNewPost(all[i]);
        }
        all.splice(0,i-1);
        document.getElementById("allNews").innerHTML = allData;
        if(totalLeft <=0)
        {
            document.getElementById("seeMore").setAttribute("disabled","");
        }
    });
});

seeMore.addEventListener("click", function(){
    var allData = "";
    for (var i = 0; i < 5 && totalLeft>0; i++,totalLeft--) {
        allData += createNewPost(all[i]);
    }
    all.splice(0,i-1);
    document.getElementById("allNews").innerHTML += allData;
    if(totalLeft <=0)
    {
        document.getElementById("seeMore").setAttribute("disabled","");
    }
});

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});