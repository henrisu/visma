(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[4],{594:function(t,n){},600:function(t,n,e){"use strict";e.r(n),e.d(n,"worker",(function(){return m}));var r=e(505),a=e(527),o=e(484),i=e(530),u=e.n(i),s=u.a&&u.a.__esModule?u.a.default:u.a;var c=e(40),d=e(24),f=e(181),p=0,l=f.paths["/items"].get.responses[200].content["application/json"].examples["example-1"].value,v={postItem:function(t){l.push(Object(d.a)(Object(d.a)({},t.body),{},{timestamp:Date.now(),_id:String(p++)}))},putItem:function(t){var n=t.body,e=l.findIndex((function(n){return n._id===t.params.itemId}));l[e]=n},putItems:function(t){var n,e=t.body,r=Object(c.a)(e);try{var a=function(){var t=n.value,e=l.findIndex((function(n){return n._id===t._id}));l[e]=t};for(r.s();!(n=r.n()).done;)a()}catch(o){r.e(o)}finally{r.f()}},deleteItem:function(t){var n=l.findIndex((function(n){return n._id===t.params.itemId}));l.splice(n,1)},deleteItems:function(t){var n,e=Object(c.a)(t.body);try{var r=function(){var t=n.value,e=l.findIndex((function(n){return n._id===t}));l.splice(e,1)};for(e.s();!(n=e.n()).done;)r()}catch(a){e.e(a)}finally{e.f()}}},m=a.a.apply(void 0,Object(r.a)(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=new s(t);e.register("notFound",(function(t,n,e){return n(e.status(404))})),e.register("notImplemented",(function(t,e,r,a){var o=n[t.operation.operationId];if(o){var i=o(t.request);if(i){var u=i.status,s=i.mock;return e(r.status(u),r.json(s))}}var c=t.api.mockResponseForOperation(t.operation.operationId),d=c.status,f=c.mock;return e(r.status(d),r.json(f))}));var r=Object.keys(o.c);return r.flatMap((function(n){return t.definition.servers.map((function(t){var r=t.url;return o.c[n]("".concat(r,"/*"),(function(t,n,a){return t.path=t.url.href.slice(r.length),e.handleRequest(t,n,a)}))}))}))}({definition:f},v)))}}]);
//# sourceMappingURL=4.12bfb0cb.chunk.js.map