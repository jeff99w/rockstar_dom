function addLoadEvent(func){var oldonload=window.onload;if(typeof window.onload!="function"){window.onload=func
}else{window.onload=function(){oldonload();func()}}}function insertAfter(newElement,targetElement){var parent=targetElement.parentNode;
console.log(parent);if(parent.lastChild==targetElement){parent.appendChild(newElement)}else{parent.insertBefore(newElement,targetElement.nextSibling)
}}function addClass(element,value){if(!element.className){element.className=value}else{newClassName=element.className;
newClassName+=" ";element.className+=value;element.className=newClassName}}function highlightPage(){var headers=document.getElementsByTagName("header");
if(headers.length==0){return false}var navs=headers[0].getElementsByTagName("nav");if(navs.length==0){return false
}var links=navs[0].getElementsByTagName("a");var linkurl;for(var i=0;i<links.length;i++){linkurl=links[i].getAttribute("href");
if(window.location.href.indexOf(linkurl)!=-1){console.log(linkurl);console.log(window.location.href);
links[i].className="here";var linktext=links[i].lastChild.nodeValue.toLowerCase();document.body.setAttribute("id",linktext)
}}}function moveElement(elementID,final_x,final_y,interval){var elem=document.getElementById(elementID);
if(elem.movement){clearTimeout(elem.movement)}if(!elem.style.left){elem.style.left="0px"}if(!elem.style.top){elem.style.top="0px"
}var xpos=parseInt(elem.style.left);var ypos=parseInt(elem.style.top);if(xpos==final_x&&ypos==final_y){return true
}if(xpos<final_x){var dis=Math.ceil((final_x-xpos)/10);xpos=xpos+dis}if(xpos>final_x){var dis=Math.ceil((xpos-final_x)/10);
xpos=xpos-dis}if(ypos<final_y){var dis=Math.ceil((final_y-ypos)/10);ypos=ypos+dis}if(ypos>final_y){var dis=Math.ceil((ypos-final_y)/10);
ypos=ypos-dis}elem.style.left=xpos+"px";elem.style.top=ypos+"px";var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
elem.movement=setTimeout(repeat,interval)}function prepareSlideshow(){if(!document.getElementById("intro")){return false
}var intro=document.getElementById("intro");var slideshow=document.createElement("div");slideshow.setAttribute("id","slideshow");
var frame=document.createElement("img");frame.setAttribute("src","images/frame.gif");frame.setAttribute("alt","frame");
frame.setAttribute("id","frame");slideshow.appendChild(frame);var preview=document.createElement("img");
preview.setAttribute("src","images/slideshow.gif");preview.setAttribute("alt","a glimpse of what awaits you");
preview.setAttribute("id","preview");slideshow.appendChild(preview);insertAfter(slideshow,intro);var links=document.getElementsByTagName("a");
var destination;for(var i=0;i<links.length;i++){links[i].onmouseover=function(){console.log(links[i]);
destination=this.getAttribute("href");console.log(destination);if(destination.indexOf("index.html")!=-1){moveElement("preview",0,0,5)
}if(destination.indexOf("about.html")!=-1){moveElement("preview",-150,0,5)}if(destination.indexOf("photos.html")!=-1){moveElement("preview",-300,5)
}if(destination.indexOf("live.html")!=-1){moveElement("preview",-450,5)}if(destination.indexOf("contact.html")!=-1){moveElement("preview",-600,0,5)
}}}}function showSection(id){var sections=document.getElementsByTagName("section");for(var i=0;i<sections.length;
i++){if(sections[i].getAttribute("id")!=id){sections[i].style.display="none"}else{sections[i].style.display="block"
}}}function prepareInternalnav(){var articles=document.getElementsByTagName("article");if(articles.length==0){return false
}var navs=articles[0].getElementsByTagName("nav");if(navs.length==0){return false}var nav=navs[0];var links=nav.getElementsByTagName("a");
for(var i=0;i<links.length;i++){var sectionId=links[i].getAttribute("href").split("#")[1];console.log(links[i].getAttribute("href").split("#")[0]);
if(!document.getElementById(sectionId)){continue}document.getElementById(sectionId).style.display="none";
links[i].destination=sectionId;links[i].onclick=function(){showSection(this.destination);return false
}}}addLoadEvent(highlightPage);addLoadEvent(prepareSlideshow);addLoadEvent(prepareInternalnav);function showPic(whichpic){if(!document.getElementById("placeholder")){return false
}var source=whichpic.getAttribute("href");var placeholder=document.getElementById("placeholder");placeholder.setAttribute("src",source);
if(!document.getElementById("description")){return false}if(whichpic.getAttribute("title")){var text=whichpic.getAttribute("title")
}else{var text=""}var description=document.getElementById("description");if(description.firstChild.nodeType==3){description.firstChild.nodeValue=text
}return false}function preparePlaceholder(){if(!document.getElementById("imagegallery")){return false
}var placeholder=document.createElement("img");placeholder.setAttribute("id","placeholder");placeholder.setAttribute("src","images/placeholder.gif");
placeholder.setAttribute("alt","my image gallery");var description=document.createElement("p");description.setAttribute("id","description");
var desctext=document.createTextNode("Choose an image");description.appendChild(desctext);var gallery=document.getElementById("imagegallery");
insertAfter(description,gallery);insertAfter(placeholder,description)}function prepareGallery(){if(!document.getElementById("imagegallery")){return false
}var gallery=document.getElementById("imagegallery");var links=gallery.getElementsByTagName("a");for(var i=0;
i<links.length;i++){links[i].onclick=function(){return showPic(this)}}}addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);function stripeTables(){if(!document.getElementsByTagName){return false}var tables=document.getElementsByTagName("table");
var odd,rows;for(var i=0;i<tables.length;i++){odd=false;rows=document.getElementsByTagName("tr");for(var j=0;
j<rows.length;j++){console.log(odd);if(odd==true){addClass(rows[j],"odd");odd=false}else{odd=true}}}}function highlightRows(){var rows=document.getElementsByTagName("td");
for(var i=0;i<rows.length;i++){rows[i].oldClassName=rows[i].className;rows[i].onmouseover=function(){addClass(this,"highlight")
};rows[i].onmouseout=function(){this.className=this.oldClassName}}}function displayAbbreviations(){var abbreviations=document.getElementsByTagName("abbr");
if(abbreviations.length<1){return false}var defs=new Array();for(var i=0;i<abbreviations.length;i++){var current_abbr=abbreviations[i];
if(current_abbr.childNodes.length<1){continue}var definition=current_abbr.getAttribute("title");var key=current_abbr.lastChild.nodeValue;
console.log(key);defs[key]=definition}var dlist=document.createElement("dl");for(key in defs){var definition=defs[key];
var dtitle=document.createElement("dt");var dtitle_text=document.createTextNode(key);dtitle.appendChild(dtitle_text);
var ddesc=document.createElement("dd");var ddesc_text=document.createTextNode(definition);ddesc.appendChild(ddesc_text);
dlist.appendChild(dtitle);dlist.appendChild(ddesc)}if(dlist.childNodes.length<1){return false}var header=document.createElement("h3");
var header_text=document.createTextNode("Abbreviation");header.appendChild(header_text);var articles=document.getElementsByTagName("article");
if(articles.length==0){return false}var container=articles[0];container.appendChild(header);container.appendChild(dlist)
}addLoadEvent(stripeTables);addLoadEvent(highlightRows);addLoadEvent(displayAbbreviations);function focusLabels(){var labels=document.getElementsByTagName("label");
for(var i=0;i<labels.length;i++){if(!labels[i].getAttribute("for")){continue}labels[i].onclick=function(){var id=this.getAttribute("for");
if(!document.getElementById(id)){return false}var elem=document.getElementById(id);elem.focus()}}}addLoadEvent(focusLabels);
function resetFields(whichform){for(var i=0;i<whichform.elements.length;i++){var element=whichform.elements[i];
if(element.type=="submit"){continue}var check=element.placeholder||element.getAttribute("placeholder");
if(!check){continue}element.onfocus=function(){var text=this.placeholder||this.getAttribute("placeholder");
if(this.value==text){this.className="";this.value=""}};element.onblur=function(){if(this.value==""){this.className="placeholder";
this.value=this.placeholder||this.getAttribute("placeholder")}};element.onblur()}}function prepareForms(){for(var i=0;
i<document.forms.length;i++){var thisform=document.forms[i];resetFields(thisform);thisform.onsubmit=function(){if(!validateForm(this)){return false
}var article=document.getElementsByTagName("article")[0];if(submitFormWithAjax(this,article)){return false
}return true}}}addLoadEvent(prepareForms);function isFilled(field){if(field.value.replace(" ","").length==0){return false
}var placeholder=field.placeholder||field.getAttribute("placeholder");console.log(placeholder);console.log(field.value);
return(field.value!=placeholder)}function isEmail(field){alert(1);return(field.value.indexOf("@")!=-1&&field.value.indexOf(".")!=-1)
}function validateForm(whichform){for(var i=0;i<whichform.elements.length;i++){var element=whichform.elements[i];
if(element.getAttribute("required")=="required"){if(!isFilled(element)){alert("Please fill in the  "+element.name+" field");
return false}}if(element.type=="email"){if(!isEmail(element)){alert("The "+element.name+" field must be a valid email address");
return false}}alert(6)}return true;function getHTTPObject(){if(typeof XMLHttpRequest=="undefined"){XMLHttpRequest=function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")
}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")
}catch(e){}return false}}alert(5);return new XMLHttpRequest()}}function displayAjaxLoading(element){while(element.hasChildNodes()){element.removeChild(element.lastChild)
}var content=document.createElement("img");content.setAttribute("src","images/loading.gif");content.setAttribute("alt","loading....");
element.appendChild(content);alert(4)}function submitFormWithAjax(whichform,thetarget){var request=getHTTPObject();
if(!request){return false}displayAjaxLoading(thetarget);var dataParts=[];var element;for(var i=0;i<whichform.elements.length;
i++){element=whichform.elements[i];dataParts[i]=element.name+"="+encodeURIComponent(element.value)}var data=dataParts.join("&");
request.open("POST",whichform.getAttribute("action"),true);request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
request.onreadystatechange=function(){if(request.readyState==4){if(request.status==200||request.status==0){var matches=request.responseText.match(/<article>([\s\S]+)<\/article>/);
if(matches.length>0){thetarget.innerHTML=matches[1]}else{thetarget.innerHTML="<p>Oops, there was an error. Sorry.</p>"
}}else{thetarget.innerHTML="<p>"+request.statusText+"</p>"}}};request.send(data);return true};