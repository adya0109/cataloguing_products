"use strict";(self.webpackChunksales=self.webpackChunksales||[]).push([[840],{5840:(e,t,r)=>{r.d(t,{Z:()=>ne});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,s=String.fromCharCode,c=Object.assign;function i(e){return e.trim()}function u(e,t,r){return e.replace(t,r)}function o(e,t){return e.indexOf(t)}function l(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function h(e){return e.length}function p(e){return e.length}function d(e,t){return t.push(e),e}var b=1,g=1,v=0,k=0,y=0,m="";function w(e,t,r,n,a,s,c){return{value:e,root:t,parent:r,type:n,props:a,children:s,line:b,column:g,length:c,return:""}}function $(e,t){return c(w("",null,null,"",null,null,0),e,{length:-e.length},t)}function x(){return y=k>0?l(m,--k):0,g--,10===y&&(g=1,b--),y}function A(){return y=k<v?l(m,k++):0,g++,10===y&&(g=1,b++),y}function C(){return l(m,k)}function S(){return k}function P(e,t){return f(m,e,t)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function E(e){return b=g=1,v=h(m=e),k=0,[]}function N(e){return m="",e}function T(e){return i(P(k-1,_(91===e?e+2:40===e?e+1:e)))}function j(e){for(;(y=C())&&y<33;)A();return z(e)>2||z(y)>3?"":" "}function O(e,t){for(;--t&&A()&&!(y<48||y>102||y>57&&y<65||y>70&&y<97););return P(e,S()+(t<6&&32==C()&&32==A()))}function _(e){for(;A();)switch(y){case e:return k;case 34:case 39:34!==e&&39!==e&&_(y);break;case 40:41===e&&_(e);break;case 92:A()}return k}function q(e,t){for(;A()&&e+y!==57&&(e+y!==84||47!==C()););return"/*"+P(t,k-1)+"*"+s(47===e?e:A())}function M(e){for(;!z(C());)A();return P(e,k)}var R="-ms-",B="-moz-",W="-webkit-",Z="comm",D="rule",F="decl",G="@keyframes";function H(e,t){for(var r="",n=p(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function I(e,t,r,n){switch(e.type){case"@import":case F:return e.return=e.return||e.value;case Z:return"";case G:return e.return=e.value+"{"+H(e.children,n)+"}";case D:e.value=e.props.join(",")}return h(r=H(e.children,n))?e.return=e.value+"{"+r+"}":""}function J(e,t){switch(function(e,t){return(((t<<2^l(e,0))<<2^l(e,1))<<2^l(e,2))<<2^l(e,3)}(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+B+e+R+e+e;case 6828:case 4268:return W+e+R+e+e;case 6165:return W+e+R+"flex-"+e+e;case 5187:return W+e+u(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return W+e+R+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return W+e+R+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return W+e+R+u(e,"shrink","negative")+e;case 5292:return W+e+R+u(e,"basis","preferred-size")+e;case 6060:return W+"box-"+u(e,"-grow","")+W+e+R+u(e,"grow","positive")+e;case 4554:return W+u(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(e)-1-t>6)switch(l(e,t+1)){case 109:if(45!==l(e,t+4))break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+B+(108==l(e,t+3)?"$3":"$2-$3"))+e;case 115:return~o(e,"stretch")?J(u(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==l(e,t+1))break;case 6444:switch(l(e,h(e)-3-(~o(e,"!important")&&10))){case 107:return u(e,":",":"+W)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+W+(45===l(e,14)?"inline-":"")+"box$3$1"+W+"$2$3$1"+R+"$2box$3")+e}break;case 5936:switch(l(e,t+11)){case 114:return W+e+R+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+R+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+R+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return W+e+R+e+e}return e}function K(e){return N(L("",null,null,null,[""],e=E(e),0,[0],e))}function L(e,t,r,n,a,c,i,l,f){for(var p=0,b=0,g=i,v=0,k=0,y=0,m=1,w=1,$=1,P=0,z="",E=a,N=c,_=n,R=z;w;)switch(y=P,P=A()){case 40:if(108!=y&&58==R.charCodeAt(g-1)){-1!=o(R+=u(T(P),"&","&\f"),"&\f")&&($=-1);break}case 34:case 39:case 91:R+=T(P);break;case 9:case 10:case 13:case 32:R+=j(y);break;case 92:R+=O(S()-1,7);continue;case 47:switch(C()){case 42:case 47:d(U(q(A(),S()),t,r),f);break;default:R+="/"}break;case 123*m:l[p++]=h(R)*$;case 125*m:case 59:case 0:switch(P){case 0:case 125:w=0;case 59+b:k>0&&h(R)-g&&d(k>32?V(R+";",n,r,g-1):V(u(R," ","")+";",n,r,g-2),f);break;case 59:R+=";";default:if(d(_=Q(R,t,r,p,b,a,l,z,E=[],N=[],g),c),123===P)if(0===b)L(R,t,_,_,E,c,g,l,N);else switch(v){case 100:case 109:case 115:L(e,_,_,n&&d(Q(e,_,_,0,0,a,l,z,a,E=[],g),N),a,N,g,l,n?E:N);break;default:L(R,_,_,_,[""],N,0,l,N)}}p=b=k=0,m=$=1,z=R="",g=i;break;case 58:g=1+h(R),k=y;default:if(m<1)if(123==P)--m;else if(125==P&&0==m++&&125==x())continue;switch(R+=s(P),P*m){case 38:$=b>0?1:(R+="\f",-1);break;case 44:l[p++]=(h(R)-1)*$,$=1;break;case 64:45===C()&&(R+=T(A())),v=C(),b=g=h(z=R+=M(S())),P++;break;case 45:45===y&&2==h(R)&&(m=0)}}return c}function Q(e,t,r,n,s,c,o,l,h,d,b){for(var g=s-1,v=0===s?c:[""],k=p(v),y=0,m=0,$=0;y<n;++y)for(var x=0,A=f(e,g+1,g=a(m=o[y])),C=e;x<k;++x)(C=i(m>0?v[x]+" "+A:u(A,/&\f/g,v[x])))&&(h[$++]=C);return w(e,t,r,0===s?D:l,h,d,b)}function U(e,t,r){return w(e,t,r,Z,s(y),f(e,2,-2),0)}function V(e,t,r,n){return w(e,t,r,F,f(e,0,n),f(e,n+1,-1),n)}var X=function(e,t,r){for(var n=0,a=0;n=a,a=C(),38===n&&12===a&&(t[r]=1),!z(a);)A();return P(e,k)},Y=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Y.get(r))&&!n){Y.set(e,!0);for(var a=[],c=function(e,t){return N(function(e,t){var r=-1,n=44;do{switch(z(n)){case 0:38===n&&12===C()&&(t[r]=1),e[r]+=X(k-1,t,r);break;case 2:e[r]+=T(n);break;case 4:if(44===n){e[++r]=58===C()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=s(n)}}while(n=A());return e}(E(e),t))}(t,a),i=r.props,u=0,o=0;u<c.length;u++)for(var l=0;l<i.length;l++,o++)e.props[o]=a[u]?c[u].replace(/&\f/g,i[l]):i[l]+" "+c[u]}}},te=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},re=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case F:e.return=J(e.value,e.length);break;case G:return H([$(e,{value:u(e.value,"@","@"+W)})],n);case D:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return H([$(e,{props:[u(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return H([$(e,{props:[u(t,/:(plac\w+)/,":-webkit-input-$1")]}),$(e,{props:[u(t,/:(plac\w+)/,":-moz-$1")]}),$(e,{props:[u(t,/:(plac\w+)/,R+"input-$1")]})],n)}return""}))}}];const ne=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a,s,c=e.stylisPlugins||re,i={},u=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)i[t[r]]=!0;u.push(e)}));var o,l,f,h,d=[I,(h=function(e){o.insert(e)},function(e){e.root||(e=e.return)&&h(e)})],b=(l=[ee,te].concat(c,d),f=p(l),function(e,t,r,n){for(var a="",s=0;s<f;s++)a+=l[s](e,t,r,n)||"";return a});s=function(e,t,r,n){o=r,H(K(e?e+"{"+t.styles+"}":t.styles),b),n&&(g.inserted[t.name]=!0)};var g={key:t,sheet:new n({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return g.sheet.hydrate(u),g}}}]);