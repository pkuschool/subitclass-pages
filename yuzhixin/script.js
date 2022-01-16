function load() {
   
    
    var blindsSubmenu = document.getElementById("blinds-submenu");
    setIncreasingTransitionDelay(blindsSubmenu, 0.25, 0.15);

    var zoomDownSubmenu = document.getElementById("zoom-down-submenu");
    setIncreasingTransitionDelay(zoomDownSubmenu, 0.25, 0.10);
    
   
    document.body.addEventListener("click", collapseMenuFromEvent, false);
    document.body.addEventListener("touchend", collapseMenuFromEvent, false);

   
    var menu = document.getElementById("navigation-menu");
    var menuItems = menu.children;
    for(var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", expandMenuFromEvent, true);
        menuItems[i].addEventListener("touchend", function(e) {e.stopPropagation();}, true);
    }
}

function setIncreasingTransitionDelay(containerElement, initialDelay, delayIncrement)
{
    var children = containerElement.children;
    for(var i = 0; i < children.length; i++)
        children[i].style["-webkit-transition-delay"] = (initialDelay + (i * delayIncrement)) + "s";
}

function expandMenuFromEvent(event)
{
    var currentlyExpandedMenuItem = document.getElementsByClassName("expanded")[0];
    if (currentlyExpandedMenuItem == this)
        return;
    else if (currentlyExpandedMenuItem) // Only allow one menu to be expanded at a time.
        currentlyExpandedMenuItem.removeClassName("expanded");
    else
        document.getElementById("navigation-menu").addClassName("expanded-menu");
        
    this.addClassName("expanded");
    event.stopPropagation();
}


function collapseMenuFromEvent(event)
{
    var currentlyExpandedMenuItem = document.getElementsByClassName("expanded")[0];
    if (!currentlyExpandedMenuItem)
        return;
        
    currentlyExpandedMenuItem.removeClassName("expanded");

    var navigationMenu = document.getElementById("navigation-menu");
    navigationMenu.removeClassName("expanded-menu");
}


Element.prototype.hasClassName = function (className) {
  return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(this.className);
};


Element.prototype.addClassName = function (className) {
  if (!this.hasClassName(className)) {
    this.className = [this.className, className].join(' ').replace(/^\s*|\s*$/g, "");
  }
};


Element.prototype.removeClassName = function (className) {
  if (this.hasClassName(className)) {
    var curClasses = this.className;
    this.className = curClasses.replace(new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)', 'g'), ' ').replace(/^\s*|\s*$/g, "");
  }
};
