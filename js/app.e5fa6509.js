(function(t){function e(e){for(var o,i,u=e[0],s=e[1],c=e[2],d=0,p=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/simple-decisions/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0a62":function(t,e,n){"use strict";n("3fee")},"0da8":function(t,e,n){"use strict";n("b720")},"27a8":function(t,e,n){},3024:function(t,e,n){"use strict";n("27a8")},"368a":function(t,e,n){"use strict";n("82d6")},"3d63":function(t,e,n){"use strict";n("8658")},"3fee":function(t,e,n){},"4a4d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("a026"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-toolbar",{attrs:{dark:"",tabs:"",flat:"",color:"indigo"}},[n("v-app-bar-nav-icon"),n("v-toolbar-title",[t._v("Page title")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-dots-vertical")])],1)],1),n("Designer")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"editor-wrapper"}},[n("div",{ref:"rete",attrs:{id:"rete"}}),n("v-btn",{attrs:{color:"pink",fab:"",dark:"",bottom:"",right:""},on:{click:function(e){return t.doStuff()}}},[n("v-icon",[t._v("mdi-plus")])],1)],1)},u=[],s=n("1da1"),c=(n("96cf"),n("d81d"),n("bf19"),n("f5d5")),l=n("f261"),d=n("1be2"),p=n("def2"),f=n("1b64"),v=n("d4ec"),m=n("bee2"),k=n("262e"),b=n("2caf"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{attrs:{type:"text",readonly:t.readonly},domProps:{value:t.value},on:{input:function(e){return t.change(e)}}})},y=[],w={props:["readonly","emitter","ikey","getData","putData"],data:function(){return{value:""}},methods:{change:function(t){this.value=t.target.value,this.update()},update:function(){this.ikey&&this.putData(this.ikey,this.value),this.emitter.trigger("process")}},mounted:function(){this.value=this.getData(this.ikey)}},g=w,O=(n("368a"),n("2877")),x=Object(O["a"])(g,h,y,!1,null,null,null),_=x.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("textarea",{attrs:{cols:"30",rows:"5"},domProps:{value:t.value},on:{input:function(e){return t.change(e)}}})},C=[],S={props:["readonly","emitter","ikey","getData","putData"],data:function(){return{value:""}},methods:{change:function(t){this.value=t.target.value,this.update()},update:function(){this.ikey&&this.putData(this.ikey,this.value),this.emitter.trigger("process")}},mounted:function(){this.value=this.getData(this.ikey)}},N=S,D=(n("3d63"),Object(O["a"])(N,j,C,!1,null,null,null)),P=D.exports,E=function(t){Object(k["a"])(n,t);var e=Object(b["a"])(n);function n(t,o){var a,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(v["a"])(this,n),a=e.call(this,o),a.component=r?P:_,a.props={emitter:t,ikey:o},a}return Object(m["a"])(n,[{key:"setValue",value:function(t){this.vueContext.value=t}}]),n}(c["d"].Control),I=new c["c"]("answer"),V=new c["c"]("event"),$=(new c["c"]("question"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"node",class:t._f("kebab")([t.selected(),t.node.name])},[n("div",{staticClass:"title"},[t._v(t._s(t.node.name))]),n("div",{staticClass:"content"},[t._l(t.inputs(),(function(t){return n("div",{key:t.key,staticClass:"input"},[n("Socket",{directives:[{name:"socket",rawName:"v-socket:input",value:t,expression:"input",arg:"input"}],attrs:{type:"input",socket:t.socket}})],1)})),t._l(t.controls(),(function(t){return n("div",{directives:[{name:"control",rawName:"v-control",value:t,expression:"control"}],key:t.key,staticClass:"control"})})),t._l(t.outputs(),(function(t){return n("div",{key:t.key,staticClass:"output"},[n("Socket",{directives:[{name:"socket",rawName:"v-socket:output",value:t,expression:"output",arg:"output"}],attrs:{type:"output",socket:t.socket}})],1)}))],2)])}),q=[],A={mixins:[l["a"].mixin],components:{Socket:l["a"].Socket}},F=A,T=(n("0da8"),Object(O["a"])(F,$,q,!1,null,"3e32c196",null)),J=T.exports,B=function(t){Object(k["a"])(n,t);var e=Object(b["a"])(n);function n(){var t;return Object(v["a"])(this,n),t=e.call(this,"Q"),t.data.component=J,t}return Object(m["a"])(n,[{key:"builder",value:function(t){var e=new c["d"].Input("t","trigger",V,!0),n=new c["d"].Output("A","possible answers",I),o=new E(this.editor,"text",!0);return t.addInput(e).addControl(o).addOutput(n)}},{key:"worker",value:function(t,e,n){}}]),n}(c["d"].Component),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"node",class:t._f("kebab")([t.selected(),t.node.name])},[n("div",{staticClass:"title"},[t._v(t._s(t.node.name))]),n("div",{staticClass:"content"},[t._l(t.inputs(),(function(t){return n("div",{key:t.key,staticClass:"input"},[n("Socket",{directives:[{name:"socket",rawName:"v-socket:input",value:t,expression:"input",arg:"input"}],attrs:{type:"input",socket:t.socket}})],1)})),t._l(t.controls(),(function(t){return n("div",{directives:[{name:"control",rawName:"v-control",value:t,expression:"control"}],key:t.key,staticClass:"control"})})),t._l(t.outputs(),(function(t){return n("div",{key:t.key,staticClass:"output"},[n("Socket",{directives:[{name:"socket",rawName:"v-socket:output",value:t,expression:"output",arg:"output"}],attrs:{type:"output",socket:t.socket}})],1)}))],2)])},R=[],z={mixins:[l["a"].mixin],components:{Socket:l["a"].Socket}},Q=z,G=(n("0a62"),Object(O["a"])(Q,M,R,!1,null,"4b907f4d",null)),H=G.exports,K=function(t){Object(k["a"])(n,t);var e=Object(b["a"])(n);function n(){var t;return Object(v["a"])(this,n),t=e.call(this,"A"),t.data.component=H,t}return Object(m["a"])(n,[{key:"builder",value:function(t){var e=new c["d"].Input("q","q",I,!0),n=new c["d"].Output("output","q/x",V,!0),o=new E(this.editor,"text");return t.addInput(e).addControl(o).addOutput(n)}},{key:"worker",value:function(t,e,n){}}]),n}(c["d"].Component),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"node-container",class:t._f("kebab")([t.selected(),t.node.name])},[n("div",{staticClass:"diamond",class:t._f("kebab")(t.selected())}),t._l(t.inputs(),(function(t){return n("div",{key:t.key,staticClass:"input"},[n("Socket",{directives:[{name:"socket",rawName:"v-socket:input",value:t,expression:"input",arg:"input"}],attrs:{type:"input",socket:t.socket}})],1)})),t._l(t.controls(),(function(t){return n("div",{directives:[{name:"control",rawName:"v-control",value:t,expression:"control"}],key:t.key,staticClass:"control"})})),t._l(t.outputs(),(function(t){return n("div",{key:t.key,staticClass:"output"},[n("Socket",{directives:[{name:"socket",rawName:"v-socket:output",value:t,expression:"output",arg:"output"}],attrs:{type:"output",socket:t.socket}})],1)}))],2)},U=[],W={mixins:[l["a"].mixin],components:{Socket:l["a"].Socket}},X=W,Y=(n("c0f8"),Object(O["a"])(X,L,U,!1,null,"8febb764",null)),Z=Y.exports,tt=function(t){Object(k["a"])(n,t);var e=Object(b["a"])(n);function n(){var t;return Object(v["a"])(this,n),t=e.call(this,"Diamond"),t.data.component=Z,t}return Object(m["a"])(n,[{key:"builder",value:function(t){var e=new c["d"].Input("t","trigger",V),n=new c["d"].Output("a","possible answers",V),o=new E(this.editor,"text",!0);return t.addInput(e).addOutput(n).addControl(o)}},{key:"worker",value:function(t,e,n){}}]),n}(c["d"].Component),et=n("955e"),nt={data:function(){return{editor:null}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[new B,new K,new tt],o=new c["d"].NodeEditor("demo@0.1.0",t.$refs.rete),o.use(d["a"]),o.use(l["a"]),o.use(f["a"]),o.use(p["a"]),a=new c["d"].Engine("demo@0.1.0"),n.map((function(t){o.register(t),a.register(t)})),o.on("process nodecreated noderemoved connectioncreated connectionremoved",Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.abort();case 2:return t.next=4,a.process(o.toJSON());case 4:case"end":return t.stop()}}),t)})))),o.view.resize(),e.next=12,o.fromJSON(et);case 12:p["a"].zoomAt(o),setTimeout((function(){return o.trigger("process")}),1e3),t.editor=o;case 15:case"end":return e.stop()}}),e)})))()},methods:{doStuff:function(){window.e=this.editor,console.log(this.editor)}}},ot=nt,at=(n("3024"),n("6544")),rt=n.n(at),it=n("8336"),ut=n("132d"),st=Object(O["a"])(ot,i,u,!1,null,null,null),ct=st.exports;rt()(st,{VBtn:it["a"],VIcon:ut["a"]});var lt={name:"App",components:{Designer:ct}},dt=lt,pt=(n("034f"),n("5bc1")),ft=n("2fa4"),vt=n("71d9"),mt=n("2a7f"),kt=Object(O["a"])(dt,a,r,!1,null,null,null),bt=kt.exports;rt()(kt,{VAppBarNavIcon:pt["a"],VBtn:it["a"],VIcon:ut["a"],VSpacer:ft["a"],VToolbar:vt["a"],VToolbarTitle:mt["a"]});var ht=n("f309");n("bf40");o["a"].use(ht["a"]);var yt=new ht["a"]({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});n("d5e8"),n("5363");o["a"].config.productionTip=!1,new o["a"]({vuetify:yt,render:function(t){return t(bt)}}).$mount("#app")},"82d6":function(t,e,n){},"85ec":function(t,e,n){},8658:function(t,e,n){},"955e":function(t){t.exports=JSON.parse('{"id":"demo@0.1.0","nodes":{"9":{"id":9,"data":{"text":"what?"},"inputs":{"t":{"connections":[]}},"outputs":{"a":{"connections":[{"node":10,"input":"q","data":{}},{"node":11,"input":"q","data":{}}]}},"position":[-530.3169464414051,-54.059836496312485],"name":"Q"},"10":{"id":10,"data":{"text":"a"},"inputs":{"q":{"connections":[{"node":9,"output":"a","data":{}}]}},"outputs":{"output":{"connections":[]}},"position":[287,-153],"name":"A"},"11":{"id":11,"data":{"text":"b"},"inputs":{"q":{"connections":[{"node":9,"output":"a","data":{}}]}},"outputs":{"output":{"connections":[]}},"position":[269,15],"name":"A"}}}')},b720:function(t,e,n){},c0f8:function(t,e,n){"use strict";n("4a4d")}});
//# sourceMappingURL=app.e5fa6509.js.map