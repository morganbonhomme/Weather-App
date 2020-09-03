(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(e,t,a){e.exports={container:"weatherDisplay_container__2rddH",temperature:"weatherDisplay_temperature__2FZoQ",icon:"weatherDisplay_icon__2r6lJ"}},,function(e,t,a){e.exports={App:"App_App__1IQbR",title:"App_title__1gQOn"}},function(e,t,a){e.exports={Input:"input_Input__26tJz",textInput:"input_textInput__2ukq0"}},,,,,,function(e,t,a){e.exports=a.p+"static/media/01d.2110aa2c.svg"},function(e,t,a){e.exports=a.p+"static/media/01n.e0f7ef82.svg"},function(e,t,a){e.exports=a.p+"static/media/02d.acd8aae3.svg"},function(e,t,a){e.exports=a.p+"static/media/02n.89ef778b.svg"},function(e,t,a){e.exports=a.p+"static/media/03d.add62541.svg"},function(e,t,a){e.exports=a.p+"static/media/09d.4d9f4d05.svg"},function(e,t,a){e.exports=a.p+"static/media/10d.310969c6.svg"},function(e,t,a){e.exports=a.p+"static/media/11d.57216538.svg"},function(e,t,a){e.exports=a.p+"static/media/13n.0f0243b4.svg"},function(e,t,a){e.exports=a.p+"static/media/50d.d2783a70.svg"},function(e,t,a){e.exports=a.p+"static/media/50n.d5179f94.svg"},,,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),s=(a(29),a(3)),o=a.n(s),p=a(8),u=a(9),d=a(10),m=a(1),l=a(23),h=a(22),f=a(4),v=a.n(f),b=a(5),y=a.n(b),g=function(e){return r.a.createElement("form",{className:y.a.Input,onSubmit:e.citySubmitted},r.a.createElement("input",{className:y.a.textInput,type:"text",placeholder:"Your city"}))},w=a(2),x=a.n(w),k=a(11),_=a.n(k),N=a(12),E=a.n(N),D=a(13),j=a.n(D),I=a(14),O=a.n(I),S=a(15),W=a.n(S),C=a(16),A=a.n(C),H=a(17),J=a.n(H),q=a(18),M=a.n(q),Q=a(19),B=a.n(Q),z=a(20),F=a.n(z),L=a(21),P=a.n(L),R=function(e){var t;switch(e.icon){case"01d":t=_.a;break;case"01n":t=E.a;break;case"02d":t=j.a;break;case"02n":t=O.a;break;case"03d":case"03n":case"04d":case"04n":t=W.a;break;case"09d":case"09n":t=A.a;break;case"10d":case"10n":t=J.a;break;case"11d":case"11n":t=M.a;break;case"13d":case"13n":t=B.a;break;case"50d":t=F.a;break;case"50n":t=P.a}return r.a.createElement("div",{className:x.a.container},r.a.createElement("h2",null," Today's weather in ",e.cityName," :"),r.a.createElement("img",{src:t,alt:e.description,className:x.a.icon}),r.a.createElement("div",{className:x.a.temperature},Math.round(10*e.temperature)/10,"\xb0C"))},T=function(e){var t=e.weather,a=t.weather[0].description,n=t.weather[0].icon,c=t.main.temp,i=t.name;return r.a.createElement(R,{description:a,icon:n,temperature:c,cityName:i})},Y=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={cityName:"Paris",weather:{}},n.getCityNameHandler=n.getCityNameHandler.bind(Object(m.a)(n)),n.getWeatherData=n.getWeatherData.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"getCityNameHandler",value:function(e){e.preventDefault();var t=document.querySelector("input");this.setState({cityName:t.value}),this.getWeatherData(t.value),t.value=""}},{key:"getWeatherData",value:function(e){var t=this,a="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=".concat("a998792d707154003d3547c6fe8dfbd4","&q=").concat(e.toLowerCase());(function(){var e=Object(p.a)(o.a.mark((function e(){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(a,{mode:"cors"});case 3:if((n=e.sent).ok){e.next=8;break}alert("Sorry the city was misspelled, try again"),e.next=12;break;case 8:return e.next=10,n.json();case 10:r=e.sent,t.setState({weather:r});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}})()()}},{key:"componentDidMount",value:function(){this.getWeatherData(this.state.cityName)}},{key:"render",value:function(){return this.state.weather.weather?r.a.createElement("div",{className:v.a.App},r.a.createElement("h1",{id:v.a.title},"What's the weather today ?"),r.a.createElement(g,{citySubmitted:this.getCityNameHandler}),r.a.createElement(T,{weather:this.state.weather})):null}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.13effec3.chunk.js.map