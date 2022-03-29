var wineName = window.getSelection().toString().replace(/,/g, '').split(' ').join('+');
var titleDiv = "<div style=\"color:wheat;font-weight:bold;\">Searching for: "+ wineName +"</div>";
var link1Div = "<div><a href=\"https://www.vivino.com/search/wines?q="+wineName+"\" target=\"_blank\" style=\"color: wheat;\">from Vivino</a>";
var link2Div = "<div><a href=\"https://www.wine-searcher.com/find/"+wineName+"/0/australia\" target=\"_blank\" style=\"color: wheat;\">from Wine Searcher</a>";
var link3Div = "<div><a href=\"https://www.cellartracker.com/list.asp?szSearch="+wineName+"\" target=\"_blank\" style=\"color: wheat;\">from Cellar Tracker</a>";
var closeBtn = "<div><a href=\"#\" onclick=\"var elem = document.querySelector('#bml-wine-search-div');elem.parentNode.removeChild(elem);return false;\" style=\"float:right;color: wheat;\">Close X</a></div>";

var myDiv = document.createElement("div");
myDiv.id = 'bml-wine-search-div';
myDiv.innerHTML = "<div id=\"bml-wine-search-div\" style=\"position:fixed;z-index: 10000;background:#b11226;top:10px;left: 10px;width: 500px;padding: 20px;\">"+closeBtn+titleDiv+link1Div+link2Div+link3Div+"</div>";
window.document.body.appendChild(myDiv);
