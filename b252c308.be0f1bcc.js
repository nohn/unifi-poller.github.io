(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||s[m]||o;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(106)),i={id:"docker_faq",title:"Docker FAQ"},l={unversionedId:"install/docker_faq",id:"install/docker_faq",isDocsHomePage:!1,title:"Docker FAQ",description:"Where are the Docker images?",source:"@site/docs/install/docker_faq.md",slug:"/install/docker_faq",permalink:"/docs/install/docker_faq",version:"current"},c=[],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Where are the Docker images?")),Object(o.b)("p",null,"Images are available on ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/r/golift/unifi-poller/tags"},"Docker Hub")),Object(o.b)("p",null,"Linux images are available for ",Object(o.b)("inlineCode",{parentName:"p"},"386"),", ",Object(o.b)("inlineCode",{parentName:"p"},"amd64"),", ",Object(o.b)("inlineCode",{parentName:"p"},"arm32v6")," and ",Object(o.b)("inlineCode",{parentName:"p"},"arm64v8")," architectures.\nThere is no need to specify an architecture tag, docker will pull the correct image\nautomatically with the ",Object(o.b)("inlineCode",{parentName:"p"},"latest")," tag."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"What Docker tags are available?")),Object(o.b)("p",null,"It is recommended to use ",Object(o.b)("inlineCode",{parentName:"p"},"latest"),"."),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"master")," is not recommended. You may be asked to give this a try while troubleshooting or\ndebugging, but generally this will contain untested code or things that will break your graphs.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"master")," docker tag is based from the ",Object(o.b)("inlineCode",{parentName:"p"},"master")," git branch and may contain bugs;\nyou've been overly warned."),Object(o.b)("p",null,"You can install a specific version by specifying a version like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"docker pull golift/unifi-poller:2.0.1\n")),Object(o.b)("p",null,"or minor version like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"docker pull golift/unifi-poller:2.0\n")),Object(o.b)("p",null,"or a major version like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"docker pull golift/unifi-poller:2\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"How can I build from source?")),Object(o.b)("p",null,"You can build your own image from source."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/unifi-poller/unifi-poller.git\ncd unifi-poller\nmake docker\n")),Object(o.b)("p",null,"This builds a 64-bit amd64 linux image from scratch. If you need another architecture,\nuse the ",Object(o.b)("inlineCode",{parentName:"p"},"docker build")," command directly with a correct ",Object(o.b)("inlineCode",{parentName:"p"},"--build-arg")," flag.\nExamples ",Object(o.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/tree/master/init/docker/hooks"},"here"),"."))}u.isMDXComponent=!0}}]);