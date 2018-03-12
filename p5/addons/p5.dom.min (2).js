/*! p5.js v0.6.0 January 19, 2018 */ !function(a,b){"function"==typeof define&&define.amd?define("p5.dom",["p5"],function(a){b(a)}):b("object"==typeof exports?require("../p5"):a.p5)}(this,function(a){function b(b){var c=document;return"string"==typeof b&&"#"===b[0]?(b=b.slice(1),c=document.getElementById(b)||document):b instanceof a.Element?c=b.elt:b instanceof HTMLElement&&(c=b),c}function c(b,c,d){(c._userNode?c._userNode:document.body).appendChild(b);var e=d?new a.MediaElement(b):new a.Element(b);return c._elements.push(e),e}function d(a,b,d,e){var f=document.createElement(b);"string"==typeof(d=d||"")&&(d=[d]);for(var g=0;g<d.length;g++){var h=document.createElement("source");h.src=d[g],f.appendChild(h)}if(void 0!==e){var i=function(){e(),f.removeEventListener("canplaythrough",i)};f.addEventListener("canplaythrough",i)}var j=c(f,a,!0);return j.loadedmetadata=!1,f.addEventListener("loadedmetadata",function(){j.width=f.videoWidth,j.height=f.videoHeight,0===j.elt.width&&(j.elt.width=f.videoWidth),0===j.elt.height&&(j.elt.height=f.videoHeight),j.loadedmetadata=!0}),j}a.prototype.select=function(c,d){a._validateParameters("select",arguments);var e=null,f=b(d);return"."===c[0]?(c=c.slice(1),e=f.getElementsByClassName(c),e=e.length?e[0]:null):"#"===c[0]?(c=c.slice(1),e=f.getElementById(c)):(e=f.getElementsByTagName(c),e=e.length?e[0]:null),e?this._wrapElement(e):null},a.prototype.selectAll=function(c,d){a._validateParameters("selectAll",arguments);var e,f=[],g=b(d);if("."===c[0]?(c=c.slice(1),e=g.getElementsByClassName(c)):e=g.getElementsByTagName(c),e)for(var h=0;h<e.length;h++){var i=this._wrapElement(e[h]);f.push(i)}return f},a.prototype._wrapElement=function(b){var c=Array.prototype.slice.call(b.children);if("INPUT"===b.tagName&&"checkbox"===b.type){var d=new a.Element(b);return d.checked=function(){return 0===arguments.length?this.elt.checked:(arguments[0]?this.elt.checked=!0:this.elt.checked=!1,this)},d}return"VIDEO"===b.tagName||"AUDIO"===b.tagName?new a.MediaElement(b):"SELECT"===b.tagName?this.createSelect(new a.Element(b)):c.length>0&&c.every(function(a){return"INPUT"===a.tagName||"LABEL"===a.tagName})?this.createRadio(new a.Element(b)):new a.Element(b)},a.prototype.removeElements=function(b){a._validateParameters("removeElements",arguments);for(var c=0;c<this._elements.length;c++)this._elements[c].elt instanceof HTMLCanvasElement||this._elements[c].remove()},["div","p","span"].forEach(function(b){var d="create"+b.charAt(0).toUpperCase()+b.slice(1);a.prototype[d]=function(a){var d=document.createElement(b);return d.innerHTML=void 0===typeof a?"":a,c(d,this)}}),a.prototype.createImg=function(){a._validateParameters("createImg",arguments);var b,d=document.createElement("img"),e=arguments,f=function(){b.width=d.offsetWidth||d.width,b.height=d.offsetHeight||d.height,e.length>1&&"function"==typeof e[1]?(b.fn=e[1],b.fn()):e.length>1&&"function"==typeof e[2]&&(b.fn=e[2],b.fn())};return d.src=e[0],e.length>1&&"string"==typeof e[1]&&(d.alt=e[1]),d.onload=function(){f()},b=c(d,this)},a.prototype.createA=function(b,d,e){a._validateParameters("createA",arguments);var f=document.createElement("a");return f.href=b,f.innerHTML=d,e&&(f.target=e),c(f,this)},a.prototype.createSlider=function(b,d,e,f){a._validateParameters("createSlider",arguments);var g=document.createElement("input");return g.type="range",g.min=b,g.max=d,0===f?g.step=1e-18:f&&(g.step=f),"number"==typeof e&&(g.value=e),c(g,this)},a.prototype.createButton=function(b,d){a._validateParameters("createButton",arguments);var e=document.createElement("button");return e.innerHTML=b,d&&(e.value=d),c(e,this)},a.prototype.createCheckbox=function(){a._validateParameters("createCheckbox",arguments);var b=document.createElement("div"),d=document.createElement("input");d.type="checkbox",b.appendChild(d);var e=c(b,this);if(e.checked=function(){var a=e.elt.getElementsByTagName("input")[0];if(a){if(0===arguments.length)return a.checked;arguments[0]?a.checked=!0:a.checked=!1}return e},this.value=function(a){return e.value=a,this},arguments[0]){var f=Math.random().toString(36).slice(2),g=document.createElement("label");d.setAttribute("id",f),g.htmlFor=f,e.value(arguments[0]),g.appendChild(document.createTextNode(arguments[0])),b.appendChild(g)}return arguments[1]&&(d.checked=!0),e},a.prototype.createSelect=function(){a._validateParameters("createSelect",arguments);var b,d,e=arguments[0];return"object"==typeof e&&"SELECT"===e.elt.nodeName?(d=e,b=this.elt=e.elt):(b=document.createElement("select"),e&&"boolean"==typeof e&&b.setAttribute("multiple","true"),d=c(b,this)),d.option=function(a,c){for(var d,e=0;e<this.elt.length;e++)if(this.elt[e].innerHTML===a){d=e;break}if(void 0!==d)!1===c?this.elt.remove(d):this.elt[d].innerHTML===this.elt[d].value?this.elt[d].innerHTML=this.elt[d].value=c:this.elt[d].value=c;else{var f=document.createElement("option");f.innerHTML=a,arguments.length>1?f.value=c:f.value=a,b.appendChild(f)}},d.selected=function(a){var b,c=[];if(arguments.length>0){for(b=0;b<this.elt.length;b++)a.toString()===this.elt[b].value&&(this.elt.selectedIndex=b);return this}if(this.elt.getAttribute("multiple")){for(b=0;b<this.elt.selectedOptions.length;b++)c.push(this.elt.selectedOptions[b].value);return c}return this.elt.value},d},a.prototype.createRadio=function(b){a._validateParameters("createRadio",arguments);var d=document.querySelectorAll("input[type=radio]"),e=0;if(d.length>1){var f=d.length,g=d[0].name,h=d[1].name;e=1;for(var i=1;i<f;i++)h=d[i].name,g!==h&&e++,g=h}else 1===d.length&&(e=1);var j,k;"object"==typeof b?(k=b,j=this.elt=b.elt):(j=document.createElement("div"),k=c(j,this)),k._getInputChildrenArray=function(){return Array.prototype.slice.call(this.elt.children).filter(function(a){return"INPUT"===a.tagName})};var l=-1;return k.option=function(a,b){var c=document.createElement("input");if(c.type="radio",c.innerHTML=a,c.value=b||a,c.setAttribute("name","defaultradio"+e),j.appendChild(c),a){l++;var d=document.createElement("label");c.setAttribute("id","defaultradio"+e+"-"+l),d.htmlFor="defaultradio"+e+"-"+l,d.appendChild(document.createTextNode(a)),j.appendChild(d)}return c},k.selected=function(a){var b,c=k._getInputChildrenArray();if(a){for(b=0;b<c.length;b++)c[b].value===a&&(c[b].checked=!0);return this}for(b=0;b<c.length;b++)if(!0===c[b].checked)return c[b].value},k.value=function(a){var b,c=k._getInputChildrenArray();if(a){for(b=0;b<c.length;b++)c[b].value===a&&(c[b].checked=!0);return this}for(b=0;b<c.length;b++)if(!0===c[b].checked)return c[b].value;return""},k},a.prototype.createInput=function(b,d){a._validateParameters("createInput",arguments);var e=document.createElement("input");return e.type=d||"text",b&&(e.value=b),c(e,this)},a.prototype.createFileInput=function(b,d){function e(c){function d(c){var d=new a.File(c);return function(a){d.data=a.target.result,b(d)}}for(var e=c.target.files,f=0;f<e.length;f++){var g=e[f],h=new FileReader;h.onload=d(g),g.type.indexOf("text")>-1?h.readAsText(g):h.readAsDataURL(g)}}if(a._validateParameters("createFileInput",arguments),window.File&&window.FileReader&&window.FileList&&window.Blob){var f=document.createElement("input");return f.type="file",d&&(f.multiple="multiple"),f.addEventListener("change",e,!1),c(f,this)}console.log("The File APIs are not fully supported in this browser. Cannot create element.")},a.prototype.createVideo=function(b,c){return a._validateParameters("createVideo",arguments),d(this,"video",b,c)},a.prototype.createAudio=function(b,c){return a._validateParameters("createAudio",arguments),d(this,"audio",b,c)},a.prototype.VIDEO="video",a.prototype.AUDIO="audio",void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(a){var b=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return b?new Promise(function(c,d){b.call(navigator,a,c,d)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),a.prototype.createCapture=function(){a._validateParameters("createCapture",arguments);for(var b,d,e=!0,f=!0,g=0;g<arguments.length;g++)arguments[g]===a.prototype.VIDEO?f=!1:arguments[g]===a.prototype.AUDIO?e=!1:"object"==typeof arguments[g]?b=arguments[g]:"function"==typeof arguments[g]&&(d=arguments[g]);if(!navigator.getUserMedia)throw"getUserMedia not supported in this browser";var h=document.createElement("video");b||(b={video:e,audio:f}),navigator.mediaDevices.getUserMedia(b).then(function(a){try{"srcObject"in h?h.srcObject=a:h.src=window.URL.createObjectURL(a)}catch(b){h.src=a}d&&d(a)},function(a){console.log(a)});var i=c(h,this,!0);return i.loadedmetadata=!1,h.addEventListener("loadedmetadata",function(){h.play(),h.width?(i.width=h.videoWidth=h.width,i.height=h.videoHeight=h.height):(i.width=i.elt.width=h.videoWidth,i.height=i.elt.height=h.videoHeight),i.loadedmetadata=!0}),i},a.prototype.createElement=function(b,d){a._validateParameters("createElement",arguments);var e=document.createElement(b);return void 0!==d&&(e.innerHTML=d),c(e,this)},a.Element.prototype.addClass=function(a){return this.elt.className?this.elt.className=this.elt.className+" "+a:this.elt.className=a,this},a.Element.prototype.removeClass=function(a){var b=new RegExp("(?:^|\\s)"+a+"(?!\\S)");return this.elt.className=this.elt.className.replace(b,""),this.elt.className=this.elt.className.replace(/^\s+|\s+$/g,""),this},a.Element.prototype.child=function(b){return void 0===b?this.elt.childNodes:("string"==typeof b?("#"===b[0]&&(b=b.substring(1)),b=document.getElementById(b)):b instanceof a.Element&&(b=b.elt),this.elt.appendChild(b),this)},a.Element.prototype.center=function(a){var b=this.elt.style.display,c="none"===this.elt.style.display,d="none"===this.parent().style.display,e={x:this.elt.offsetLeft,y:this.elt.offsetTop};c&&this.show(),this.elt.style.display="block",this.position(0,0),d&&(this.parent().style.display="block");var f=Math.abs(this.parent().offsetWidth-this.elt.offsetWidth),g=Math.abs(this.parent().offsetHeight-this.elt.offsetHeight),h=e.y,i=e.x;return"both"===a||void 0===a?this.position(f/2,g/2):"horizontal"===a?this.position(f/2,h):"vertical"===a&&this.position(i,g/2),this.style("display",b),c&&this.hide(),d&&(this.parent().style.display="none"),this},a.Element.prototype.html=function(){return 0===arguments.length?this.elt.innerHTML:arguments[1]?(this.elt.innerHTML+=arguments[0],this):(this.elt.innerHTML=arguments[0],this)},a.Element.prototype.position=function(){return 0===arguments.length?{x:this.elt.offsetLeft,y:this.elt.offsetTop}:(this.elt.style.position="absolute",this.elt.style.left=arguments[0]+"px",this.elt.style.top=arguments[1]+"px",this.x=arguments[0],this.y=arguments[1],this)},a.Element.prototype._translate=function(){this.elt.style.position="absolute";var a="";return this.elt.style.transform&&(a=this.elt.style.transform.replace(/translate3d\(.*\)/g,""),a=a.replace(/translate[X-Z]?\(.*\)/g,"")),2===arguments.length?this.elt.style.transform="translate("+arguments[0]+"px, "+arguments[1]+"px)":arguments.length>2&&(this.elt.style.transform="translate3d("+arguments[0]+"px,"+arguments[1]+"px,"+arguments[2]+"px)",3===arguments.length?this.elt.parentElement.style.perspective="1000px":this.elt.parentElement.style.perspective=arguments[3]+"px"),this.elt.style.transform+=a,this},a.Element.prototype._rotate=function(){var a="";return this.elt.style.transform&&(a=this.elt.style.transform.replace(/rotate3d\(.*\)/g,""),a=a.replace(/rotate[X-Z]?\(.*\)/g,"")),1===arguments.length?this.elt.style.transform="rotate("+arguments[0]+"deg)":2===arguments.length?this.elt.style.transform="rotate("+arguments[0]+"deg, "+arguments[1]+"deg)":3===arguments.length&&(this.elt.style.transform="rotateX("+arguments[0]+"deg)",this.elt.style.transform+="rotateY("+arguments[1]+"deg)",this.elt.style.transform+="rotateZ("+arguments[2]+"deg)"),this.elt.style.transform+=a,this},a.Element.prototype.style=function(b,c){var d=this;if(c instanceof a.Color&&(c="rgba("+c.levels[0]+","+c.levels[1]+","+c.levels[2]+","+c.levels[3]/255+")"),void 0===c){if(-1===b.indexOf(":"))return window.getComputedStyle(d.elt).getPropertyValue(b);for(var e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split(":");g[0]&&g[1]&&(this.elt.style[g[0].trim()]=g[1].trim())}}else if("rotate"===b||"translate"===b||"position"===b){var h=Array.prototype.shift.apply(arguments),i=this[h]||this["_"+h];i.apply(this,arguments)}else if(this.elt.style[b]=c,"width"===b||"height"===b||"left"===b||"top"===b){var j=c.replace(/\D+/g,"");this[b]=parseInt(j,10)}return this},a.Element.prototype.attribute=function(a,b){if(null==this.elt.firstChild||"checkbox"!==this.elt.firstChild.type&&"radio"!==this.elt.firstChild.type)return void 0===b?this.elt.getAttribute(a):(this.elt.setAttribute(a,b),this);if(void 0===b)return this.elt.firstChild.getAttribute(a);for(var c=0;c<this.elt.childNodes.length;c++)this.elt.childNodes[c].setAttribute(a,b)},a.Element.prototype.removeAttribute=function(a){if(null!=this.elt.firstChild&&("checkbox"===this.elt.firstChild.type||"radio"===this.elt.firstChild.type))for(var b=0;b<this.elt.childNodes.length;b++)this.elt.childNodes[b].removeAttribute(a);return this.elt.removeAttribute(a),this},a.Element.prototype.value=function(){return arguments.length>0?(this.elt.value=arguments[0],this):"range"===this.elt.type?parseFloat(this.elt.value):this.elt.value},a.Element.prototype.show=function(){return this.elt.style.display="block",this},a.Element.prototype.hide=function(){return this.elt.style.display="none",this},a.Element.prototype.size=function(b,c){if(0===arguments.length)return{width:this.elt.offsetWidth,height:this.elt.offsetHeight};var d=b,e=c,f=a.prototype.AUTO;if(d!==f||e!==f){if(d===f?d=c*this.width/this.height:e===f&&(e=b*this.height/this.width),this.elt instanceof HTMLCanvasElement){var g,h={},i=this.elt.getContext("2d");for(g in i)h[g]=i[g];this.elt.setAttribute("width",d*this._pInst._pixelDensity),this.elt.setAttribute("height",e*this._pInst._pixelDensity),this.elt.setAttribute("style","width:"+d+"px; height:"+e+"px"),this._pInst.scale(this._pInst._pixelDensity,this._pInst._pixelDensity);for(g in h)this.elt.getContext("2d")[g]=h[g]}else this.elt.style.width=d+"px",this.elt.style.height=e+"px",this.elt.width=d,this.elt.height=e,this.width=d,this.height=e;this.width=this.elt.offsetWidth,this.height=this.elt.offsetHeight,this._pInst&&this._pInst._curElement.elt===this.elt&&(this._pInst._setProperty("width",this.elt.offsetWidth),this._pInst._setProperty("height",this.elt.offsetHeight))}return this},a.Element.prototype.remove=function(){for(var a in this._events)this.elt.removeEventListener(a,this._events[a]);this.elt.parentNode&&this.elt.parentNode.removeChild(this.elt)},a.MediaElement=function(b,c){a.Element.call(this,b,c);var d=this;this.elt.crossOrigin="anonymous",this._prevTime=0,this._cueIDCounter=0,this._cues=[],this._pixelDensity=1,this._modified=!1,Object.defineProperty(d,"src",{get:function(){var a=d.elt.children[0].src,b=d.elt.src===window.location.href?"":d.elt.src;return a===window.location.href?b:a},set:function(a){for(var c=0;c<d.elt.children.length;c++)d.elt.removeChild(d.elt.children[c]);var e=document.createElement("source");e.src=a,b.appendChild(e),d.elt.src=a,d.modified=!0}}),d._onended=function(){},d.elt.onended=function(){d._onended(d)}},a.MediaElement.prototype=Object.create(a.Element.prototype),a.MediaElement.prototype.play=function(){return this.elt.currentTime===this.elt.duration&&(this.elt.currentTime=0),this.elt.readyState>1?this.elt.play():(this.elt.load(),this.elt.play()),this},a.MediaElement.prototype.stop=function(){return this.elt.pause(),this.elt.currentTime=0,this},a.MediaElement.prototype.pause=function(){return this.elt.pause(),this},a.MediaElement.prototype.loop=function(){return this.elt.setAttribute("loop",!0),this.play(),this},a.MediaElement.prototype.noLoop=function(){return this.elt.setAttribute("loop",!1),this},a.MediaElement.prototype.autoplay=function(a){return this.elt.setAttribute("autoplay",a),this},a.MediaElement.prototype.volume=function(a){if(void 0===a)return this.elt.volume;this.elt.volume=a},a.MediaElement.prototype.speed=function(a){if(void 0===a)return this.elt.playbackRate;this.elt.playbackRate=a},a.MediaElement.prototype.time=function(a){if(void 0===a)return this.elt.currentTime;this.elt.currentTime=a},a.MediaElement.prototype.duration=function(){return this.elt.duration},a.MediaElement.prototype.pixels=[],a.MediaElement.prototype.loadPixels=function(){return this.canvas||(this.canvas=document.createElement("canvas"),this.drawingContext=this.canvas.getContext("2d")),this.loadedmetadata&&(this.canvas.width!==this.elt.width&&(this.canvas.width=this.elt.width,this.canvas.height=this.elt.height,this.width=this.canvas.width,this.height=this.canvas.height),this.drawingContext.drawImage(this.elt,0,0,this.canvas.width,this.canvas.height),a.Renderer2D.prototype.loadPixels.call(this)),this.setModified(!0),this},a.MediaElement.prototype.updatePixels=function(b,c,d,e){return this.loadedmetadata&&a.Renderer2D.prototype.updatePixels.call(this,b,c,d,e),this.setModified(!0),this},a.MediaElement.prototype.get=function(b,c,d,e){return this.loadedmetadata?a.Renderer2D.prototype.get.call(this,b,c,d,e):void 0===b?new a.Image(1,1):d>1?new a.Image(b,c,d,e):[0,0,0,255]},a.MediaElement.prototype.set=function(b,c,d){this.loadedmetadata&&(a.Renderer2D.prototype.set.call(this,b,c,d),this.setModified(!0))},a.MediaElement.prototype.copy=function(){a.Renderer2D.prototype.copy.apply(this,arguments)},a.MediaElement.prototype.mask=function(){this.loadPixels(),this.setModified(!0),a.Image.prototype.mask.apply(this,arguments)},a.MediaElement.prototype.isModified=function(){return this._modified},a.MediaElement.prototype.setModified=function(a){this._modified=a},a.MediaElement.prototype.onended=function(a){return this._onended=a,this},a.MediaElement.prototype.connect=function(b){var c,d;if("function"==typeof a.prototype.getAudioContext)c=a.prototype.getAudioContext(),d=a.soundOut.input;else try{c=b.context,d=c.destination}catch(a){throw"connect() is meant to be used with Web Audio API or p5.sound.js"}this.audioSourceNode||(this.audioSourceNode=c.createMediaElementSource(this.elt),this.audioSourceNode.connect(d)),b?b.input?this.audioSourceNode.connect(b.input):this.audioSourceNode.connect(b):this.audioSourceNode.connect(d)},a.MediaElement.prototype.disconnect=function(){if(!this.audioSourceNode)throw"nothing to disconnect";this.audioSourceNode.disconnect()},a.MediaElement.prototype.showControls=function(){this.elt.style["text-align"]="inherit",this.elt.controls=!0},a.MediaElement.prototype.hideControls=function(){this.elt.controls=!1};var e=function(a,b,c,d){this.callback=a,this.time=b,this.id=c,this.val=d};a.MediaElement.prototype.addCue=function(a,b,c){var d=this._cueIDCounter++,f=new e(b,a,d,c);return this._cues.push(f),this.elt.ontimeupdate||(this.elt.ontimeupdate=this._onTimeUpdate.bind(this)),d},a.MediaElement.prototype.removeCue=function(a){for(var b=0;b<this._cues.length;b++)this._cues[b].id===a&&(console.log(a),this._cues.splice(b,1));0===this._cues.length&&(this.elt.ontimeupdate=null)},a.MediaElement.prototype.clearCues=function(){this._cues=[],this.elt.ontimeupdate=null},a.MediaElement.prototype._onTimeUpdate=function(){for(var a=this.time(),b=0;b<this._cues.length;b++){var c=this._cues[b].time,d=this._cues[b].val;this._prevTime<c&&c<=a&&this._cues[b].callback(d)}this._prevTime=a},a.File=function(a,b){this.file=a,this._pInst=b;var c=a.type.split("/");this.type=c[0],this.subtype=c[1],this.name=a.name,this.size=a.size,this.data=void 0}});