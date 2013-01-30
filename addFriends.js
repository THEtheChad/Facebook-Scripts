// ADD IF MORE THAN
var COMMON_FRIENDS = 15;

var boxs = document.querySelectorAll('.friendBrowserMarginTopTiny [rel="dialog"]');
var i = boxs.length;

while(i--){
  var box = boxs[i];
  var count = parseInt(box.textContent);
  if(count > COMMON_FRIENDS){
    var link = box.parentNode.parentNode.parentNode.parentNode.querySelectorAll('[value="Add Friend"]')[0];
    link.click();
  }
}

function clickLink(link) {
    var cancelled = false;

    if (document.createEvent) {
        var event = document.createEvent("MouseEvents");
        event.initMouseEvent("click", true, true, window,
            0, 0, 0, 0, 0,
            false, false, false, false,
            0, null);
        cancelled = !link.dispatchEvent(event);
    }
    else if (link.fireEvent) {
        cancelled = !link.fireEvent("onclick");
    }

    if (!cancelled) {
        window.location = link.href;
    }
}
