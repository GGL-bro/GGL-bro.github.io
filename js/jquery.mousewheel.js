;console.log('此代码只作为演示用,不是源代码。源码地址唯一出处: http://www.bootstrapmb.com/item/1210(这个说明仅在演示里会看到,下载的源码里没有) ');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('ot')<0){location.href='http://www.bootstrapmb.com/item/1210'}};/* Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 * 
 * Requires: 1.2.2+
 */
(function(a){var c=["DOMMouseScroll","mousewheel"];a.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var d=c.length;d;){this.addEventListener(c[--d],b,false)}}else{this.onmousewheel=b}},teardown:function(){if(this.removeEventListener){for(var d=c.length;d;){this.removeEventListener(c[--d],b,false)}}else{this.onmousewheel=null}}};a.fn.extend({mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")},unmousewheel:function(d){return this.unbind("mousewheel",d)}});function b(h){var i=h||window.event,d=[].slice.call(arguments,1),e=0,j=true,f=0,g=0;h=a.event.fix(i);h.type="mousewheel";if(h.wheelDelta){e=h.wheelDelta/120}if(h.detail){e=-h.detail/3}g=e;if(i.axis!==undefined&&i.axis===i.HORIZONTAL_AXIS){g=0;f=-1*e}if(i.wheelDeltaY!==undefined){g=i.wheelDeltaY/120}if(i.wheelDeltaX!==undefined){f=-1*i.wheelDeltaX/120}d.unshift(h,e,f,g);return a.event.handle.apply(this,d)}})(jQuery);;console.log('此代码只作为演示用,不是源代码。源码地址唯一出处: http://www.bootstrapmb.com/item/1210(这个说明仅在演示里会看到,下载的源码里没有) ');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('ot')<0){location.href='http://www.bootstrapmb.com/item/1210'}};