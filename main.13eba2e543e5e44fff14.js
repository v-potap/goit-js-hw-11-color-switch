(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,n){var e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],r={body:document.querySelector("body"),btnStart:document.querySelector('button[data-action="start"]'),btnStop:document.querySelector('button[data-action="stop"]')},o=function(){function t(t){this.obj=t,this.objInitialStyle=t.style,this.timerID=0}var n=t.prototype;return n.start=function(t){var n=this;this.timerID=setInterval(function(){return n.obj.style.backgroundColor=t[n.randomIntegerFromInterval(1,t.length)]},1e3)},n.stop=function(){clearInterval(this.timerID),this.obj.style=this.objInitialStyle},n.getTimerID=function(){return this.timerID},n.randomIntegerFromInterval=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)},t}();r.btnStart.addEventListener("click",function(t){t.preventDefault(),i.start(e),r.btnStart.disabled=!0}),r.btnStop.addEventListener("click",function(t){t.preventDefault(),i.stop(),r.btnStart.disabled=!1});var i=new o(r.body)}},[["QfWi",1]]]);
//# sourceMappingURL=main.13eba2e543e5e44fff14.js.map