(function(t){function e(e){for(var n,c,o=e[0],s=e[1],l=e[2],d=0,f=[];d<o.length;d++)c=o[d],r[c]&&f.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},i=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/blog2/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"0adb":function(t,e,a){},"13f4":function(t,e){},"17a3":function(t,e,a){},"2b6a":function(t,e){},"4fe8":function(t,e,a){"use strict";var n=a("9f34"),r=a("74c2"),i=a("2877"),c=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"wrap"}},[a("head-nav"),a("router-view",{staticClass:"view"}),a("foot-nav",{staticClass:"footer"})],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head"},[a("b-navbar",{staticClass:"navbar",attrs:{toggleable:"true",type:"dark",variant:"dark"}},[a("b-navbar-brand",{staticClass:"brand",attrs:{href:"#"}},[a("img",{attrs:{src:"images/eye.jpg",alt:"brand_icon"}}),t._v("Blog\n\t    ")]),a("b-navbar-toggle",{staticClass:"nav_toggle",attrs:{target:"nav-collapse"}},[t._v("\n\t\t\t≡ menu\n\t\t")]),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"/"}},[t._v("首页"),a("i")]),a("b-nav-item",{attrs:{href:"/#/articles"}},[t._v("文章"),a("i")]),a("b-nav-item",{attrs:{href:"/#/contact"}},[t._v("联系"),a("i")])],1)],1)],1)],1)},o=[];$(function(){$(".head").siblings("div").click(function(){$(".navbar-collapse").hasClass("show")&&$(".nav_toggle").click()})});var s={},l=s,u=(a("5c64"),a("2877")),d=Object(u["a"])(l,c,o,!1,null,"fee35bc6",null),f=d.exports,h=a("c5b1"),p=a("5f5b"),v=(a("f9e3"),a("2dd8"),a("1157")),g=a.n(v);n["default"].use(p["a"]);var x={name:"app",components:{headNav:f,footNav:h["default"]}};g()(function(){});var b=x,w=(a("034f"),Object(u["a"])(b,r,i,!1,null,null,null)),m=w.exports,y=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home",attrs:{id:"home"}},[a("bgpic",{staticClass:"bgpic"})],1)},k=[],M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg"},[a("img",{staticClass:"bg-img",attrs:{src:"images/bg1.jpg"}})])}],P={name:"bgpic"},S=P,C=(a("c4b6"),Object(u["a"])(S,M,L,!1,null,"e1c57062",null)),W=C.exports;a("6c7b");$(function(){var t=function(){var t=this,e=function(t,e){return~~(Math.random()*(e-t+1)+t)},a=function(t,e,a,n,r,i,c,o){return!(t+a<r||r+c<t||e+n<i||i+o<e)};window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),t.init=function(){t.canvas=document.createElement("canvas"),t.canvas.width=t.cw=$(window).innerWidth(),t.canvas.height=t.ch=$(document).height(),t.canvas.classList.add("yanhua"),t.particles=[],t.partCount=150,t.fireworks=[],t.mx=t.cw/2,t.my=t.ch/2,t.currentHue=30,t.partSpeed=10,t.partSpeedVariance=5,t.partWind=50,t.partFriction=5,t.partGravity=1,t.hueMin=0,t.hueMax=360,t.fworkSpeed=16,t.fworkAccel=10,t.hueVariance=30,t.flickerDensity=25,t.showShockwave=!0,t.showTarget=!1,t.clearAlpha=25,$("#home").append(t.canvas),t.ctx=t.canvas.getContext("2d"),t.ctx.lineCap="round",t.ctx.lineJoin="round",t.lineWidth=1,t.bindEvents(),t.canvasLoop(),t.canvas.onselectstart=function(){return!1}},t.createParticles=function(a,n,r){var i=t.partCount;while(i--){var c={x:a,y:n,coordLast:[{x:a,y:n},{x:a,y:n},{x:a,y:n}],angle:e(0,360),speed:e(t.partSpeed-t.partSpeedVariance<=0?1:t.partSpeed-t.partSpeedVariance,t.partSpeed+t.partSpeedVariance),friction:1-t.partFriction/100,gravity:t.partGravity/2,hue:e(r-t.hueVariance,r+t.hueVariance),brightness:e(50,80),alpha:e(40,100)/100,decay:e(10,50)/1e3,wind:(e(0,t.partWind)-t.partWind/2)/25,lineWidth:t.lineWidth};t.particles.push(c)}},t.updateParticles=function(){var e=t.particles.length;while(e--){var n=t.particles[e],r=n.angle*Math.PI/180,i=Math.cos(r)*n.speed,c=Math.sin(r)*n.speed;n.speed*=n.friction,n.coordLast[2].x=n.coordLast[1].x,n.coordLast[2].y=n.coordLast[1].y,n.coordLast[1].x=n.coordLast[0].x,n.coordLast[1].y=n.coordLast[0].y,n.coordLast[0].x=n.x,n.coordLast[0].y=n.y,n.x+=i,n.y+=c,n.y+=n.gravity,n.angle+=n.wind,n.alpha-=n.decay,(!a(0,0,t.cw,t.ch,n.x-n.radius,n.y-n.radius,2*n.radius,2*n.radius)||n.alpha<.05)&&t.particles.splice(e,1)}},t.drawParticles=function(){var a=t.particles.length;while(a--){var n=t.particles[a],r=e(1,3)-1;if(t.ctx.beginPath(),t.ctx.moveTo(Math.round(n.coordLast[r].x),Math.round(n.coordLast[r].y)),t.ctx.lineTo(Math.round(n.x),Math.round(n.y)),t.ctx.closePath(),t.ctx.strokeStyle="hsla("+n.hue+", 100%, "+n.brightness+"%, "+n.alpha+")",t.ctx.stroke(),t.flickerDensity>0){var i=50-t.flickerDensity;if(e(0,i)===i){t.ctx.beginPath(),t.ctx.arc(Math.round(n.x),Math.round(n.y),e(n.lineWidth,n.lineWidth+3)/2,0,2*Math.PI,!1),t.ctx.closePath();var c=e(50,100)/100;t.ctx.fillStyle="hsla("+n.hue+", 100%, "+n.brightness+"%, "+c+")",t.ctx.fill()}}}},t.createFireworks=function(a,n,r,i){var c={x:a,y:n,startX:a,startY:n,hitX:!1,hitY:!1,coordLast:[{x:a,y:n},{x:a,y:n},{x:a,y:n}],targetX:r,targetY:i,speed:t.fworkSpeed,angle:Math.atan2(i-n,r-a),shockwaveAngle:Math.atan2(i-n,r-a)+Math.PI/180*90,acceleration:t.fworkAccel/100,hue:t.currentHue,brightness:e(50,80),alpha:e(50,100)/100,lineWidth:t.lineWidth};t.fireworks.push(c)},t.updateFireworks=function(){var e=t.fireworks.length;while(e--){var a=t.fireworks[e];t.ctx.lineWidth=a.lineWidth;var n=Math.cos(a.angle)*a.speed,r=Math.sin(a.angle)*a.speed;a.speed*=1+a.acceleration,a.coordLast[2].x=a.coordLast[1].x,a.coordLast[2].y=a.coordLast[1].y,a.coordLast[1].x=a.coordLast[0].x,a.coordLast[1].y=a.coordLast[0].y,a.coordLast[0].x=a.x,a.coordLast[0].y=a.y,a.startX>=a.targetX?a.x+n<=a.targetX?(a.x=a.targetX,a.hitX=!0):a.x+=n:a.x+n>=a.targetX?(a.x=a.targetX,a.hitX=!0):a.x+=n,a.startY>=a.targetY?a.y+r<=a.targetY?(a.y=a.targetY,a.hitY=!0):a.y+=r:a.y+r>=a.targetY?(a.y=a.targetY,a.hitY=!0):a.y+=r,a.hitX&&a.hitY&&(t.createParticles(a.targetX,a.targetY,a.hue),t.fireworks.splice(e,1))}},t.drawFireworks=function(){var a=t.fireworks.length;t.ctx.globalCompositeOperation="lighter";while(a--){var n=t.fireworks[a];t.ctx.lineWidth=n.lineWidth;var r=e(1,3)-1;t.ctx.beginPath(),t.ctx.moveTo(Math.round(n.coordLast[r].x),Math.round(n.coordLast[r].y)),t.ctx.lineTo(Math.round(n.x),Math.round(n.y)),t.ctx.closePath(),t.ctx.strokeStyle="hsla("+n.hue+", 100%, "+n.brightness+"%, "+n.alpha+")",t.ctx.stroke(),t.showTarget&&(t.ctx.save(),t.ctx.beginPath(),t.ctx.arc(Math.round(n.targetX),Math.round(n.targetY),e(1,8),0,2*Math.PI,!1),t.ctx.closePath(),t.ctx.lineWidth=1,t.ctx.stroke(),t.ctx.restore()),t.showShockwave&&(t.ctx.save(),t.ctx.translate(Math.round(n.x),Math.round(n.y)),t.ctx.rotate(n.shockwaveAngle),t.ctx.beginPath(),t.ctx.arc(0,0,n.speed/5*1,0,Math.PI,!0),t.ctx.strokeStyle="hsla("+n.hue+", 100%, "+n.brightness+"%, "+e(25,60)/100+")",t.ctx.lineWidth=n.lineWidth,t.ctx.stroke(),t.ctx.restore())}},t.bindEvents=function(){$(window).on("resize",function(){clearTimeout(t.timeout),t.timeout=setTimeout(function(){t.canvas.width=t.cw=$(window).innerWidth(),t.canvas.height=t.ch=$(window).innerHeight(),t.ctx.lineCap="round",t.ctx.lineJoin="round"},100)}),$(t.canvas).on("mousedown",function(a){t.mx=a.pageX-t.canvas.offsetLeft,t.my=a.pageY-t.canvas.offsetTop,t.currentHue=e(t.hueMin,t.hueMax),t.createFireworks(t.cw/2,t.ch,t.mx,t.my),$(t.canvas).on("mousemove.fireworks",function(a){t.mx=a.pageX-t.canvas.offsetLeft,t.my=a.pageY-t.canvas.offsetTop,t.currentHue=e(t.hueMin,t.hueMax),t.createFireworks(t.cw/2,t.ch,t.mx,t.my)})}),$(t.canvas).on("mouseup",function(e){$(t.canvas).off("mousemove.fireworks")})},t.clear=function(){t.particles=[],t.fireworks=[],t.ctx.clearRect(0,0,t.cw,t.ch)},t.canvasLoop=function(){requestAnimFrame(t.canvasLoop,t.canvas),t.ctx.globalCompositeOperation="destination-out",t.ctx.fillStyle="rgba(0,0,0,"+t.clearAlpha/100+")",t.ctx.fillRect(0,0,t.cw,t.ch),t.updateFireworks(),t.updateParticles(),t.drawFireworks(),t.drawParticles()},t.init()};new t}),console.log("yanhua.js的console.log");$(function(){var t=window.innerHeight;$(".bgpic").css("height",t+"px"),window.onresize=function(){t=window.innerHeight,$(".bgpic").css("height",t+"px")}});var j={components:{bgpic:W}},O=j,F=(a("fbef"),a("8d8a"),Object(u["a"])(O,_,k,!1,null,"764b13c1",null)),X=F.exports,Y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticStyle:{width:"100%",height:"500px","text-align":"center","padding-top":"270px"}},[t._v("文章页面正在开发中....")])])}],T={},A=T,V=Object(u["a"])(A,Y,E,!1,null,null,null),q=V.exports,H=a("4fe8");n["default"].use(y["a"]);var R=new y["a"]({routes:[{path:"/",name:"index - blog",component:X,meta:{}},{path:"/articles",name:"articles - blog",component:q,meta:{title:"articles - blog"}},{path:"/contact",name:"contact - blog",component:H["default"],meta:{title:"contact - blog"}}]});R.beforeEach(function(t,e,a){t.meta.title&&(document.title=t.meta.title),a()});var I=R;n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(m)},router:I}).$mount("#blog")},"5c64":function(t,e,a){"use strict";var n=a("71a2"),r=a.n(n);r.a},"64a9":function(t,e,a){},"71a2":function(t,e,a){},7322:function(t,e,a){"use strict";var n=a("fc33"),r=a.n(n);r.a},"74c2":function(t,e,a){"use strict";var n=a("2b6a"),r=a.n(n);e["default"]=r.a},"8d8a":function(t,e,a){"use strict";var n=a("b4cb"),r=a.n(n);r.a},"9f34":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticStyle:{width:"100%",height:"500px","text-align":"center","padding-top":"270px"}},[t._v("联系页面正在开发中，敬请期待")])])}];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},b4cb:function(t,e,a){},b91c:function(t,e,a){"use strict";var n=a("13f4"),r=a.n(n);e["default"]=r.a},bc8e:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"foot"},[a("div",{staticClass:"foot-wrap"},[a("p",[t._v("copyright@何进霖 2019 ")]),a("p",[t._v(" powered by Vue ")])])])}];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},c4b6:function(t,e,a){"use strict";var n=a("17a3"),r=a.n(n);r.a},c5b1:function(t,e,a){"use strict";var n=a("bc8e"),r=a("b91c"),i=(a("7322"),a("2877")),c=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"6d2ebff7",null);e["default"]=c.exports},fbef:function(t,e,a){"use strict";var n=a("0adb"),r=a.n(n);r.a},fc33:function(t,e,a){}});
//# sourceMappingURL=app.f4321b4e.js.map