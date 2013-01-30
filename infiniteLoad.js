function ShowAll(obj){
  this.timer  = 0;
  this.target = document.querySelectorAll(obj.target)[0];

  if(obj.hide){
    this.hide = document.querySelectorAll(obj.hide)[0];
  }

  var _this = this;
  this.delay = function(){
    clearTimeout(_this.timer);
    _this.start();  
  }
}

ShowAll.prototype = {
  start: function(){
    if(this.hide) this.hide.style.display = 'none';
    this.target.addEventListener('DOMNodeInserted', this.delay);
    this.loop();
  },

  loop: function(){
    var _this = this;
    _this.timer = setTimeout(function(){
      window.scrollTo(0, document.height);
      _this.loop();
    });
  },

  stop: function(){
    this.target.removeEventListener('DOMNodeInserted', this.delay); 
    if(this.hide) this.hide.style.display = '';
    clearTimeout(this.timer);
  }
}

// example
// newsfeed = new ShowAll({
//   "target" : "#home_stream",
//   "hide"   : "#mainContainer"
// });
