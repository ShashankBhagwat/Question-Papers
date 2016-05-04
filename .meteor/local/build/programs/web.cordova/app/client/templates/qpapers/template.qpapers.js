(function(){
Template.__checkName("Qpapers");
Template["Qpapers"] = new Template("Template.Qpapers", (function() {
  var view = this;
  return HTML.BODY({
    id: "body-qpapers"
  }, "\n    ", HTML.DIV({
    id: "qpapers"
  }, "\n\n      ", HTML.Raw('<div class="ui inverted fixed menu navbar page grid" style="background:#29b6f6;height:60px;">\n         <div>\n            <a class="back-btn" href="/qpcards" style="color:white;">\n              <button class="ui circular olive icon button">\n                <i class="big arrow left icon"></i>\n              </button>\n            </a>\n          </div>\n          <div>\n          <h1 class="ui center aligned header" style="color:white; margin-top: 10px;">\n              <div class="content">Take it off!</div>\n            </h1>\n          </div>\n          <div>\n            <a class="home-btn" href="/home_selection" style="color:white;">\n              <button class="ui circular orange icon button">\n                <i class="big home icon"></i>\n              </button>\n            </a>\n          </div>\n        </div>'), "\n\n        ", HTML.DIV({
    "class": "qp_img"
  }, "\n          ", Blaze.View("lookup:qp_png", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("qp_png")));
  }), "\n        "), "\n\n    "), HTML.Raw('<br>\n    <p style="font-family:JosefinSans;float:right;font-size:10px;">\n      from CSE techies @ Methodist College of Engg &amp; Tech, Abids, Hyd.\n    </p>\n\n  '));
}));

})();
