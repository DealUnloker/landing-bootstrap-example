(()=>{var e={10:(e,t,n)=>{"use strict";n(792);window.SecretRoom=function(){var e=document.getElementById("submit_btn").value;if(console.log(e),"1337"==e){document.getElementsByTagName("body")[0].style.display="none";var t=document.getElementsByTagName("html")[0];setInterval((function(){var e="#"+((1<<24)*Math.random()|0).toString(16);console.log(e),t.style.backgroundColor=e}),50)}}},792:()=>{var e=1;function t(t){var n,r=document.getElementsByClassName("slider-item"),o=document.getElementsByClassName("slider-dots_item");for(t>r.length&&(e=1),t<1&&(e=r.length),n=0;n<r.length;n++)r[n].style.display="none";for(n=0;n<o.length;n++)o[n].className=o[n].className.replace(" active","");r[e-1].style.display="block",o[e-1].className+=" active"}t(e),window.plusSlide=function(){t(e+=1)},window.minusSlide=function(){t(e-=1)},window.currentSlide=function(n){t(e=n)}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0},t=[[10]],r=()=>{};function o(){for(var r,o=0;o<t.length;o++){for(var l=t[o],a=!0,s=1;s<l.length;s++){var i=l[s];0!==e[i]&&(a=!1)}a&&(t.splice(o--,1),r=n(n.s=l[0]))}return 0===t.length&&(n.x(),n.x=()=>{}),r}n.x=()=>{n.x=()=>{},a=a.slice();for(var e=0;e<a.length;e++)l(a[e]);return(r=o)()};var l=o=>{for(var l,a,[i,u,c,d]=o,m=0,f=[];m<i.length;m++)a=i[m],n.o(e,a)&&e[a]&&f.push(e[a][0]),e[a]=0;for(l in u)n.o(u,l)&&(n.m[l]=u[l]);for(c&&c(n),s(o);f.length;)f.shift()();return d&&t.push.apply(t,d),r()},a=self.webpackChunk=self.webpackChunk||[],s=a.push.bind(a);a.push=l})(),n.x()})();