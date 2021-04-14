(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(i,".").concat(m)]||s[m]||b[m]||a;return n?o.a.createElement(f,l(l({ref:t},u),{},{components:n})):o.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(106)),i={id:"otherguides",title:"Other Guides"},l={unversionedId:"poller/otherguides",id:"poller/otherguides",isDocsHomePage:!1,title:"Other Guides",description:"Many folks in the community have contributed their own installation guides for various platforms.",source:"@site/docs/poller/otherguides.md",slug:"/poller/otherguides",permalink:"/docs/poller/otherguides",version:"current",sidebar:"someSidebar",previous:{title:"FAQs",permalink:"/docs/poller/faq"},next:{title:"Contributors",permalink:"/docs/poller/contributors"}},c=[],u={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Many folks in the community have contributed their own installation guides for various platforms.\nYou can find some of them below. If you created a guide and want it listed here,\nplease let us know!"),Object(a.b)("h1",{id:"raspberry-pi"},"Raspberry Pi"),Object(a.b)("p",null,"If you'd like a simple step-by-step guide, written by a UniFi Poller user for implementation on\nDocker on a Raspberry Pi then have a look at this\n",Object(a.b)("a",{parentName:"p",href:"https://nerdygeek.uk/2020/06/18/unifi-poller-an-easy-step-by-step-guide/"},"nerdygeek guide"),"!"),Object(a.b)("p",null,"Note that a Pi is not recommended for use in a long term context -\nalthough many users have started this way, the amount and type of data collection\nis better done on a more capable server."),Object(a.b)("p",null,"Here's another RPi guide (in video form) from MacTelecom:\n",Object(a.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=OaKcQUb2gYc"},"https://www.youtube.com/watch?v=OaKcQUb2gYc")),Object(a.b)("h1",{id:"more-guides"},"More Guides"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.eduitguy.com/2020/04/16/unifi-poller-amazing/"},"https://www.eduitguy.com/2020/04/16/unifi-poller-amazing/")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://jaas.ai/u/unifi-poller-charmers/unifi-poller"},"https://jaas.ai/u/unifi-poller-charmers/unifi-poller")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.neteye-blog.com/2019/03/monitoring-a-ubiquity-unifi-wireless-controller/"},"https://www.neteye-blog.com/2019/03/monitoring-a-ubiquity-unifi-wireless-controller/")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.robertcampbell.dev/2020/07/installing-unifi-poller-influxdb-and.html"},"https://www.robertcampbell.dev/2020/07/installing-unifi-poller-influxdb-and.html")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://blog.frankovic.net/2020/10/04/grafana-on-azure-part-2/"},"https://blog.frankovic.net/2020/10/04/grafana-on-azure-part-2/")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://bensonk.net/networking/2020/10/09/welcome-to-jekyll.html"},"https://bensonk.net/networking/2020/10/09/welcome-to-jekyll.html")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://blog.johnminadeo.com/unifi-poller-setup-and-configuration/"},"https://blog.johnminadeo.com/unifi-poller-setup-and-configuration/"))))}p.isMDXComponent=!0}}]);