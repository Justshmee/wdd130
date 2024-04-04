define(["require","exports","./c_init_data_runtime","./c_core_uri","./c_browser_browser_detection","./c_init_data_edison"],(function(e,t,r,n,s,i){"use strict";function o(e){return n.assert(e.startsWith("/static/"),`'${e}' is not a /static url`),new n.URI({scheme:"https",authority:"cfl.dropboxstatic.com",path:e}).toString()}const a=["edison:preloadCss","js:requireCssWithComponent","js:require_css","loadCssWithCache","ensemble","CssEntryPoint","css-modules"],d=["css-modules"];function c(e,t,r){if(r[t].length>0){if(d.includes(t)){const n=r[t];for(let t=0;t<n.length;t++){const{elem:r,path:s}=n[t];if(s>e.path)return[r,t]}}return[r[t][r[t].length-1].elem.nextElementSibling,null]}const n=a.indexOf(t);for(let e=n-1;e>=0;e--){const t=r[a[e]]||[];if(t.length>0)return[t[t.length-1].elem.nextElementSibling,null]}for(let e=n+1;e<a.length;e++){const t=r[a[e]]||[];if(t.length>0)return[t[0].elem,null]}return[null,null]}function l(e,t,r,n,s){e.elem.setAttribute("data-loader",t),e.elem instanceof HTMLStyleElement&&e.elem.setAttribute("path",e.path);let i=null,o=null;if(!s){if(d.includes(t)&&function(e,t,r){if(r.hasOwnProperty(t)&&null!=r[t]&&r[t].length>0)return r[t].map((({path:e})=>e)).includes(e.path);return!1}(e,t,r))return!1;[i,o]=c(e,t,r)}return null===o?r[t].push(e):r[t].splice(o,0,e),i?n.insertBefore(e.elem,i):n.appendChild(e.elem),!0}function u(e,t,r=document){const n=r.defaultView;n.__injectCssCache||(n.__injectCssCache=function(){const e={};for(const t of["edison:preloadCss","js:require_css","js:requireCssWithComponent","loadCssWithCache","ensemble","CssEntryPoint","css-modules"])e[t]=[];return e}());const s=n.__injectCssCache;s[t]=s[t]?s[t]:[];const i=d.includes(t);if(!i&&e.length>1){const[n]=c(e[0],t,s),o=r.createDocumentFragment();let a=0;for(const r of e){l(r,t,s,o,!i)&&a++}return null===n?r.head.appendChild(o):r.head.insertBefore(o,n),a}{let n=0;for(const i of e){l(i,t,s,r.head,!1)&&n++}return n}}function m(e){try{const t=new URL(e);return t.pathname?decodeURIComponent(t.pathname):""}catch(e){return""}}function h(e=document){const t=f(e),r=e.querySelectorAll('link[rel="stylesheet"]');for(let e=0;e<r.length;e++){let n=m(r[e].href);null==t.already_loaded_css_paths[n]&&(t.loaded_css[n]=Promise.resolve(),t.already_loaded_css_paths[n]="loaded")}}function f(e){const t=e;return t._cssCache||(t._cssCache={loaded_css:Object.create(null),already_loaded_css_paths:Object.create(null)}),t._cssCache}function p(e,t,r,n){const s=r.pathname;let i=t.loaded_css[s];return i||(i=new Promise(((i,o)=>{const a=e.createElement("link");return a.href=r.toString(),a.rel="stylesheet",a.type="text/css",a.crossorigin="anonymous",a.onload=function(){return t.already_loaded_css_paths[s]="loaded",i()},a.onerror=o,u([{elem:a,path:r.pathname}],n,e),a})),t.loaded_css[s]=i,t.already_loaded_css_paths[s]="downloading"),i}var g,_;function P(){const e=window.performance?window.performance.now():0;return Math.floor(e)}h(),function(e){e.JsExecutionStart="js_execution_start",e.RequireLoadCallbackTime="require_load_callback_time",e.InitPageModuleLoadTime="init_page_module_load_time",e.PreloadModulesLoadTime="preload_modules_load_time",e.InitReceived="init_received",e.RenderStarted="render_started",e.RenderComplete="render_complete",e.FirstDataModuleReceived="first_data_module_received",e.LastDataModuleReceived="last_data_module_received",e.FirstCssPreloadReceived="first_css_preload_received",e.LastCssPreloadReceived="last_css_preload_received",e.ServerSidePrefetchStartedReceived="server_side_prefetch_started_received",e.DoneStreamingReceived="done_streaming_received",e.StreamedPrefetchWaitTime="streamed_prefetch_wait_time"}(g||(g={})),function(e){e.PageLoadComplete="page_load_complete",e.ErrorPageShown="error_page_shown"}(_||(_={}));class S{constructor(e){this.AMP_NAMESPACE="web_timing",this.marked={};const{atlasservlet:t,pageName:r,performanceNow:n=P,getLazyMetricsReporter:s}=e;this.atlasservlet=t,this.pageName=r,this.performanceNow=n,this.lazyMetricsReporter=s?s():null;let i=()=>{};this.renderCompletePromise=new Promise((e=>{i=e})),this.renderCompleteResolveFn=i,this.eventTimings={},this.streamedPrefetchRequestTimingQueues={},this.streamedPrefetchResponseTimings={}}recordEventTime(e){this.eventTimings[e]=this.performanceNow()}recordEventTimeOnce(e){this.eventTimings[e]||this.recordEventTime(e)}getTags(e){return Object.assign({atlasservlet:this.atlasservlet,edison_page_name:this.pageName},e)}recordInitReceived(){this.recordEventTimeOnce(g.InitReceived)}recordRenderStarted(){this.recordEventTimeOnce(g.RenderStarted)}recordRenderComplete(){this.recordEventTimeOnce(g.RenderComplete),this.renderCompleteResolveFn()}recordDataModuleReceived(){this.recordEventTimeOnce(g.FirstDataModuleReceived),this.recordEventTime(g.LastDataModuleReceived)}recordCssPreloadReceived(){this.recordEventTimeOnce(g.FirstCssPreloadReceived),this.recordEventTime(g.LastCssPreloadReceived)}recordServerSidePrefetchStartedReceived(){this.recordEventTimeOnce(g.ServerSidePrefetchStartedReceived)}recordDoneStreamingReceived(){this.recordEventTimeOnce(g.DoneStreamingReceived)}saveEventTimings(){return r.__awaiter(this,void 0,void 0,(function*(){if(!this.lazyMetricsReporter)return;yield this.renderCompletePromise;const e=yield this.lazyMetricsReporter,t=Object.assign(Object.assign({},function(){const e={};return"number"==typeof window.EDISON_METRICS_JS_EXECUTION_START&&(e[g.JsExecutionStart]=window.EDISON_METRICS_JS_EXECUTION_START),"number"==typeof window.EDISON_METRICS_REQUIRE_LOAD_CALLBACK_TIME&&(e[g.RequireLoadCallbackTime]=window.EDISON_METRICS_REQUIRE_LOAD_CALLBACK_TIME),"number"==typeof window.EDISON_METRICS_INIT_PAGE_MODULE_LOAD_TIME&&(e[g.InitPageModuleLoadTime]=window.EDISON_METRICS_INIT_PAGE_MODULE_LOAD_TIME),"number"==typeof window.EDISON_METRICS_PRELOAD_MODULES_LOAD_TIME&&(e[g.PreloadModulesLoadTime]=window.EDISON_METRICS_PRELOAD_MODULES_LOAD_TIME),e}()),this.eventTimings);for(const[r,n]of Object.entries(t)){const t=this.getTags();e.createStats({ns:this.AMP_NAMESPACE,name:`edison/${r}`},t).recordDuration(n,s.TimeUnit.MILLISECONDS)}}))}recordStreamedPrefetchRequestTime(e,t){return r.__awaiter(this,void 0,void 0,(function*(){this.streamedPrefetchRequestTimingQueues[e]||(this.streamedPrefetchRequestTimingQueues[e]=[]),this.streamedPrefetchRequestTimingQueues[e].push({loggingIdentifier:t,requestTime:this.performanceNow(),processed:!1}),yield this.flushPrefetchTimingRecordQueue()}))}recordStreamedPrefetchResponseTime(e,t){return r.__awaiter(this,void 0,void 0,(function*(){this.streamedPrefetchResponseTimings[e]||(this.streamedPrefetchResponseTimings[e]={responseTime:this.performanceNow(),failed:t},yield this.flushPrefetchTimingRecordQueue())}))}markPageLoadSuccess(){this.recordPageMarker(_.PageLoadComplete,{result:"success"})}markPageLoadFailed(){this.recordPageMarker(_.PageLoadComplete,{result:"error"})}markErrorPageShown(){const e=!!this.marked[_.PageLoadComplete];e||this.markPageLoadFailed(),this.recordPageMarker(_.ErrorPageShown,{page_load_completed:e.toString()})}recordPageMarker(e,t={}){return r.__awaiter(this,void 0,void 0,(function*(){try{const r=yield this.lazyMetricsReporter;if(this.marked[e])return;const n=null==r?void 0:r.createCounter({ns:this.AMP_NAMESPACE,name:`edison/page/${e}`},this.getTags(Object.assign({browser:s.getBrowserShortName(),source:s.is_mobile_or_tablet()?"mobile":"web"},t)));null==n||n.increment(),null==n||n.record(),this.marked[e]=!0}catch(t){console.error("Fail to record page event: ",e)}}))}flushPrefetchTimingRecordQueue(){return r.__awaiter(this,void 0,void 0,(function*(){if(!this.lazyMetricsReporter)return;const e=yield this.lazyMetricsReporter,t={};for(const[r,n]of Object.entries(this.streamedPrefetchRequestTimingQueues)){const i=this.streamedPrefetchResponseTimings[r];if(i)for(const r of n){const{loggingIdentifier:n,requestTime:o}=r,{responseTime:a,failed:d}=i;if(t[n]||(t[n]=0),t[n]++,r.processed)continue;const c=`${n}_${t[n]}`,l=this.getTags({prefetch_id:c,failed:`${d}`}),u=e.createStats({ns:this.AMP_NAMESPACE,name:`edison/${g.StreamedPrefetchWaitTime}`},l),m=Math.max(a-o,0);u.recordDuration(m,s.TimeUnit.MILLISECONDS),r.processed=!0,window.performance&&window.performance.measure(`edison:${g.StreamedPrefetchWaitTime}:${n}`,{start:o>a?0:o,end:a,detail:{prefetchId:c}})}}}))}}class w extends r.Message{constructor(e){super(),this.originalUrl="",this.currentUrl="",r.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new w).fromBinary(e,t)}static fromJson(e,t){return(new w).fromJson(e,t)}static fromJsonString(e,t){return(new w).fromJsonString(e,t)}static equals(e,t){return r.proto3.util.equals(w,e,t)}}w.runtime=r.proto3,w.typeName="edison.prefetch.PrefetchArgs",w.fields=r.proto3.util.newFieldList((()=>[{no:10,name:"original_url",kind:"scalar",T:9},{no:11,name:"current_url",kind:"scalar",T:9}]));class y extends r.Message{constructor(e){super(),this.type={case:void 0},r.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new y).fromBinary(e,t)}static fromJson(e,t){return(new y).fromJson(e,t)}static fromJsonString(e,t){return(new y).fromJsonString(e,t)}static equals(e,t){return r.proto3.util.equals(y,e,t)}}y.runtime=r.proto3,y.typeName="edison.prefetch.Prefetch",y.fields=r.proto3.util.newFieldList((()=>[{no:1,name:"pending",kind:"message",T:v,oneof:"type"},{no:2,name:"result",kind:"message",T:T,oneof:"type"}]));class v extends r.Message{constructor(e){super(),this.requestKeys=[],r.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new v).fromBinary(e,t)}static fromJson(e,t){return(new v).fromJson(e,t)}static fromJsonString(e,t){return(new v).fromJsonString(e,t)}static equals(e,t){return r.proto3.util.equals(v,e,t)}}v.runtime=r.proto3,v.typeName="edison.prefetch.Prefetch.Pending",v.fields=r.proto3.util.newFieldList((()=>[{no:1,name:"request_keys",kind:"scalar",T:9,repeated:!0}]));class T extends r.Message{constructor(e){super(),this.requestKey="",this.response=new Uint8Array(0),this.error="",r.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new T).fromBinary(e,t)}static fromJson(e,t){return(new T).fromJson(e,t)}static fromJsonString(e,t){return(new T).fromJsonString(e,t)}static equals(e,t){return r.proto3.util.equals(T,e,t)}}T.runtime=r.proto3,T.typeName="edison.prefetch.Prefetch.Result",T.fields=r.proto3.util.newFieldList((()=>[{no:1,name:"request_key",kind:"scalar",T:9},{no:2,name:"response",kind:"scalar",T:12},{no:3,name:"error",kind:"scalar",T:9}]));const E={typeName:"edison.prefetch.PrefetchService",methods:{streamPrefetches:{name:"StreamPrefetches",I:w,O:y,kind:i.MethodKind.ServerStreaming}}};class R extends r.Message{constructor(e){super(),this.isFromOfficeIp=!1,r.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new R).fromBinary(e,t)}static fromJson(e,t){return(new R).fromJson(e,t)}static fromJsonString(e,t){return(new R).fromJsonString(e,t)}static equals(e,t){return r.proto3.util.equals(R,e,t)}}R.runtime=r.proto3,R.typeName="edison_dws2.PrefetchArguments",R.fields=r.proto3.util.newFieldList((()=>[{no:1,name:"is_from_office_ip",kind:"scalar",T:8},{no:2,name:"proto_arguments",kind:"message",T:r.Any}]));class M extends r.Message{constructor(e){super(),this.rpcProxyUrl="",this.atlasservlet="",this.pageName="",this.pageLifecycle="",this.activeUserId=r.protoInt64.zero,this.activeTeamId=r.protoInt64.zero,this.authRole=0,this.authActionType=0,this.uriPath="",this.legacyController="",this.legacyAction="",this.isOfficeIp=!1,this.staticRepoRev="",this.dws2RepoRev="",this.streamingEnabled=!1,this.isBuildTimePrefetchesEnabled=!1,this.skipBuildTimePrefetchDurationThreshold=0,this.isCssPreloadEnabled=!1,this.entryPointModuleName="",this.beforeRenderModuleName="",this.isDws2Stage=!1,this.originalUrl="",this.originalReferer="",this.prefetchVersion=0,this.isProd=!1,this.gates={},this.browserId="",r.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new M).fromBinary(e,t)}static fromJson(e,t){return(new M).fromJson(e,t)}static fromJsonString(e,t){return(new M).fromJsonString(e,t)}static equals(e,t){return r.proto3.util.equals(M,e,t)}}M.runtime=r.proto3,M.typeName="edison_dws2.EdisonInitParams",M.fields=r.proto3.util.newFieldList((()=>[{no:22,name:"rpc_proxy_url",kind:"scalar",T:9},{no:2,name:"atlasservlet",kind:"scalar",T:9},{no:3,name:"page_name",kind:"scalar",T:9},{no:15,name:"page_lifecycle",kind:"scalar",T:9},{no:4,name:"active_user_id",kind:"scalar",T:4},{no:5,name:"active_team_id",kind:"scalar",T:4},{no:31,name:"auth_role",kind:"scalar",T:13},{no:32,name:"auth_action_type",kind:"scalar",T:13},{no:6,name:"uri_path",kind:"scalar",T:9},{no:9,name:"legacy_controller",kind:"scalar",T:9},{no:10,name:"legacy_action",kind:"scalar",T:9},{no:11,name:"is_office_ip",kind:"scalar",T:8},{no:12,name:"static_repo_rev",kind:"scalar",T:9},{no:13,name:"dws2_repo_rev",kind:"scalar",T:9},{no:14,name:"streaming_enabled",kind:"scalar",T:8},{no:30,name:"is_build_time_prefetches_enabled",kind:"scalar",T:8},{no:37,name:"skip_build_time_prefetch_duration_threshold",kind:"scalar",T:5},{no:36,name:"is_css_preload_enabled",kind:"scalar",T:8},{no:25,name:"entry_point_module_name",kind:"scalar",T:9},{no:26,name:"before_render_module_name",kind:"scalar",T:9},{no:27,name:"is_dws2_stage",kind:"scalar",T:8},{no:28,name:"original_url",kind:"scalar",T:9},{no:29,name:"original_referer",kind:"scalar",T:9},{no:33,name:"prefetchVersion",kind:"scalar",T:5},{no:34,name:"is_prod",kind:"scalar",T:8},{no:35,name:"gates",kind:"map",K:9,V:{kind:"scalar",T:8}},{no:38,name:"browserId",kind:"scalar",T:9}]));class C extends r.Message{constructor(e){super(),this.type={case:void 0},this.b64RequestKey="",r.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new C).fromBinary(e,t)}static fromJson(e,t){return(new C).fromJson(e,t)}static fromJsonString(e,t){return(new C).fromJsonString(e,t)}static equals(e,t){return r.proto3.util.equals(C,e,t)}}C.runtime=r.proto3,C.typeName="edison_dws2.EdisonRequest",C.fields=r.proto3.util.newFieldList((()=>[{no:2,name:"service_method_prefetch",kind:"message",T:k,oneof:"type"},{no:3,name:"css_preload",kind:"message",T:b,oneof:"type"},{no:5,name:"module_preload",kind:"message",T:A,oneof:"type"},{no:4,name:"b64_request_key",kind:"scalar",T:9}]));class k extends r.Message{constructor(e){super(),this.service="",this.method="",this.initialPageAtlasservlet="",this.initialPageName="",r.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new k).fromBinary(e,t)}static fromJson(e,t){return(new k).fromJson(e,t)}static fromJsonString(e,t){return(new k).fromJsonString(e,t)}static equals(e,t){return r.proto3.util.equals(k,e,t)}}k.runtime=r.proto3,k.typeName="edison_dws2.EdisonRequest.ServiceMethodPrefetch",k.fields=r.proto3.util.newFieldList((()=>[{no:1,name:"service",kind:"scalar",T:9},{no:2,name:"method",kind:"scalar",T:9},{no:3,name:"proto_arguments",kind:"message",T:r.Any},{no:5,name:"initial_page_atlasservlet",kind:"scalar",T:9},{no:6,name:"initial_page_name",kind:"scalar",T:9}]));class b extends r.Message{constructor(e){super(),this.cssPaths=[],r.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new b).fromBinary(e,t)}static fromJson(e,t){return(new b).fromJson(e,t)}static fromJsonString(e,t){return(new b).fromJsonString(e,t)}static equals(e,t){return r.proto3.util.equals(b,e,t)}}b.runtime=r.proto3,b.typeName="edison_dws2.EdisonRequest.CssPreload",b.fields=r.proto3.util.newFieldList((()=>[{no:1,name:"css_paths",kind:"scalar",T:9,repeated:!0}]));class A extends r.Message{constructor(e){super(),this.modulePaths=[],r.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new A).fromBinary(e,t)}static fromJson(e,t){return(new A).fromJson(e,t)}static fromJsonString(e,t){return(new A).fromJsonString(e,t)}static equals(e,t){return r.proto3.util.equals(A,e,t)}}A.runtime=r.proto3,A.typeName="edison_dws2.EdisonRequest.ModulePreload",A.fields=r.proto3.util.newFieldList((()=>[{no:1,name:"module_paths",kind:"scalar",T:9,repeated:!0}]));class D extends r.Message{constructor(e){super(),this.encodedProto="",r.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new D).fromBinary(e,t)}static fromJson(e,t){return(new D).fromJson(e,t)}static fromJsonString(e,t){return(new D).fromJsonString(e,t)}static equals(e,t){return r.proto3.util.equals(D,e,t)}}D.runtime=r.proto3,D.typeName="edison_dws2.InitProps",D.fields=r.proto3.util.newFieldList((()=>[{no:1,name:"encodedProto",kind:"scalar",T:9}]));class q extends r.Message{constructor(e){super(),this.modules=[],this.yapsProject="",this.yapsDeployment="",this.atlasservlet="",this.pageName="",r.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new q).fromBinary(e,t)}static fromJson(e,t){return(new q).fromJson(e,t)}static fromJsonString(e,t){return(new q).fromJsonString(e,t)}static equals(e,t){return r.proto3.util.equals(q,e,t)}}q.runtime=r.proto3,q.typeName="datamodules.DataModulesPrefetchArguments",q.fields=r.proto3.util.newFieldList((()=>[{no:1,name:"modules",kind:"scalar",T:9,repeated:!0},{no:3,name:"yaps_project",kind:"scalar",T:9},{no:4,name:"yaps_deployment",kind:"scalar",T:9},{no:5,name:"atlasservlet",kind:"scalar",T:9},{no:6,name:"page_name",kind:"scalar",T:9}]));class I extends r.Message{constructor(e){super(),this.type={case:void 0},r.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new I).fromBinary(e,t)}static fromJson(e,t){return(new I).fromJson(e,t)}static fromJsonString(e,t){return(new I).fromJsonString(e,t)}static equals(e,t){return r.proto3.util.equals(I,e,t)}}I.runtime=r.proto3,I.typeName="datamodules.JsonOrProtoAny",I.fields=r.proto3.util.newFieldList((()=>[{no:1,name:"json",kind:"scalar",T:9,oneof:"type"},{no:2,name:"proto_any",kind:"message",T:r.Any,oneof:"type"}]));class N extends r.Message{constructor(e){super(),this.name="",r.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new N).fromBinary(e,t)}static fromJson(e,t){return(new N).fromJson(e,t)}static fromJsonString(e,t){return(new N).fromJsonString(e,t)}static equals(e,t){return r.proto3.util.equals(N,e,t)}}N.runtime=r.proto3,N.typeName="datamodules.DataModule",N.fields=r.proto3.util.newFieldList((()=>[{no:1,name:"name",kind:"scalar",T:9},{no:2,name:"data",kind:"message",T:I}]));class L extends r.Message{constructor(e){super(),this.dataModules=[],r.proto3.util.initPartial(e,this)}static fromBinary(e,t){return(new L).fromBinary(e,t)}static fromJson(e,t){return(new L).fromJson(e,t)}static fromJsonString(e,t){return(new L).fromJsonString(e,t)}static equals(e,t){return r.proto3.util.equals(L,e,t)}}var J;L.runtime=r.proto3,L.typeName="datamodules.DataModulesPrefetchData",L.fields=r.proto3.util.newFieldList((()=>[{no:1,name:"data_modules",kind:"message",T:N,repeated:!0}])),t.EdisonPrefetchStatus=void 0,(J=t.EdisonPrefetchStatus||(t.EdisonPrefetchStatus={}))[J.PendingStreaming=0]="PendingStreaming",J[J.PendingAjax=1]="PendingAjax",J[J.StreamedAndNotConsumed=2]="StreamedAndNotConsumed",J[J.StreamedAndConsumed=3]="StreamedAndConsumed",J[J.FetchedByAjax=4]="FetchedByAjax";class B{constructor(e){this.data=e}toBinary(){return this.data}}const O=new s.Empty;function x(){if("undefined"==typeof jest&&!window.RUNNING_IN_REACTSERVER)return()=>r.__awaiter(this,void 0,void 0,(function*(){const{getMetricsReporter:t}=yield new Promise((function(t,r){e(["./c_src_sink_index"],t,r)})).then((function(e){return e.index_esnext}));return t()}))}class j{setEntryInPrefetchLog(e,t,r,n){for(const s of this.prefetchLog)if(s.requestKey===e&&s.status===t)return s.status=r,void(n&&Object.assign(s,n))}constructor(){this.isDoneStreaming=!1,this.isServerSidePrefetchStarted=!1,this.buildTimePrefetchesEnabled=!1,this.skipBuildTimePrefetchDurationThreshold=0,this.cssPreloadEnabled=!1,this.loadedDataModules={},this.pendingDataModulePromises={},this.pendingDataModuleResolveFns={},this.consumedPrefetches={},this.pendingPrefetchPromises={},this.pendingPrefetchResolveFns={},this.pendingServerSidePrefetchKeys=[],this.prefetchLog=[],this.preloadedCssPaths=new Set,this.metrics=new S({atlasservlet:r.getAtlasservlet(),pageName:r.getPageName(),getLazyMetricsReporter:x()}),this.metrics.recordInitReceived()}static waitUntilInitialized(){return r.__awaiter(this,void 0,void 0,(function*(){j.getSingleton()}))}static getSingleton(){return j.instance||(j.instance=new j),j.instance}static init(){j.getSingleton()}static reset(){j.instance=null}static beforeRender(e){const{beforeRender:t}=e;if(!t)throw new Error("Before render module does not export a beforeRender function.");if("function"!=typeof t)throw new Error("beforeRender member exported from before render module is not a function.");e.beforeRender()}static setIsBuildTimePrefetchesEnabled(e){j.getSingleton().buildTimePrefetchesEnabled=e}static getIsBuildTimePrefetchesEnabled(){return j.getSingleton().buildTimePrefetchesEnabled}static setSkipBuildTimePrefetchDurationThreshold(e){j.getSingleton().skipBuildTimePrefetchDurationThreshold=e}static getSkipBuildTimePrefetchDurationThreshold(){return j.getSingleton().skipBuildTimePrefetchDurationThreshold}static setIsCSSPreloadEnabled(e){j.getSingleton().cssPreloadEnabled=e}static getIsCSSPreloadEnabled(){return j.getSingleton().cssPreloadEnabled}static getPrefetchLog(){return[...j.getSingleton().prefetchLog]}static getMetrics(){return j.getSingleton().metrics}static _grpcWebAjax(e,s){return r.__awaiter(this,void 0,void 0,(function*(){if("serviceMethodPrefetch"!==e.type.case)throw new Error(`Unsupported edison request type: ${e.type.case}`);n.incrementAjaxCount();try{const{service:n,method:o,protoArguments:a}=e.type.value,d=i.createEdisonGrpcWebTransport(),c=yield d.unary({typeName:n},{name:o,I:B,O:{fromBinary:e=>e}},void 0,void 0,void 0,null==a?void 0:a.value),l=r.protoBase64.enc(c.message);return j.getSingleton().setEntryInPrefetchLog(s,t.EdisonPrefetchStatus.PendingAjax,t.EdisonPrefetchStatus.FetchedByAjax,{failed:!1,result:l}),l}finally{n.decrementAjaxCount()}}))}static preloadCSS(e){const t=j.getSingleton(),n=window;if(window.RUNNING_IN_REACTSERVER){const s=[];for(const r of e)t.preloadedCssPaths.has(r)||(s.push(r),t.preloadedCssPaths.add(r));if(s.length>0){const e=new C({type:{case:"cssPreload",value:{cssPaths:s}}}),t=r.marshalProto(e);n.ReactserverEdisonClient.sendEdisonRequest(t)}}else{t.metrics.recordCssPreloadReceived();const r=document,n=f(r);e.forEach((e=>{p(r,n,new URL(o(e)),"edison:preloadCss")}))}}static _prefetch(e,n,s){const i=j.getSingleton(),o=new C({type:{case:"serviceMethodPrefetch",value:{service:e,method:n,protoArguments:r.wrapInAny(s||O),initialPageAtlasservlet:r.getAtlasservlet(),initialPageName:r.getPageName()}}}),a=`${e}.${n}`;if(o.b64RequestKey)throw new Error("The EdisonRequest proto message parameter to prefetchHelper must not have a b64PrefetchKey set (it is computed here so we make sure it is the same between browser and streaming reactserver).");const d=r.marshalProto(o),c=!!i.pendingPrefetchPromises[d];return!r.isServedByEdisonWebServer()||i.consumedPrefetches[d]||i.isServerSidePrefetchStarted&&!i.pendingServerSidePrefetchKeys.includes(d)&&!c||i.isDoneStreaming&&!c?(i.prefetchLog.push({edisonRequest:o,requestKey:d,status:t.EdisonPrefetchStatus.PendingAjax,isAjax:!0,isAfterStreaming:i.isDoneStreaming}),j._grpcWebAjax(o,d)):(c?i.setEntryInPrefetchLog(d,t.EdisonPrefetchStatus.StreamedAndNotConsumed,t.EdisonPrefetchStatus.StreamedAndConsumed):(i.pendingPrefetchPromises[d]=new Promise(((e,t)=>{i.pendingPrefetchResolveFns[d]={requestMsg:o,resolve:e,reject:t}})),i.prefetchLog.push({edisonRequest:o,requestKey:d,status:t.EdisonPrefetchStatus.PendingStreaming})),i.metrics.recordStreamedPrefetchRequestTime(d,a),i.consumedPrefetches[d]=!0,i.pendingPrefetchPromises[d])}static fetch(e,t,n){const s=r.getRequestOriginalUrl(),i=Object.assign({originalUrl:s},n||{});i.currentUrl=i.currentUrl||s;const o=new w(i);return this._prefetch(e,t,o)}static preloadJSModules(e){if(window.RUNNING_IN_REACTSERVER){const t=new C({type:{case:"modulePreload",value:{modulePaths:e}}}),n=r.marshalProto(t);window.ReactserverEdisonClient.sendEdisonRequest(n)}}static registerStreamedPrefetch(e,n,s=!1){const i=j.getSingleton();if(i.isDoneStreaming)throw new Error("Cannot register new streamed prefetch after marking that we are done streaming.");if(i.metrics.recordStreamedPrefetchResponseTime(e,s),!i.pendingPrefetchPromises[e]){i.pendingPrefetchPromises[e]=s?Promise.reject(new Error(n)):Promise.resolve(n);const o=r.unmarshalProto(e,C),a={requestKey:e,status:t.EdisonPrefetchStatus.StreamedAndNotConsumed,failed:s,result:n,isAjax:!1,isAfterStreaming:!1};return o&&(a.edisonRequest=o),void i.prefetchLog.push(a)}i.pendingPrefetchResolveFns[e]&&(s?i.pendingPrefetchResolveFns[e].reject(new Error(n)):i.pendingPrefetchResolveFns[e].resolve(n),delete i.pendingPrefetchResolveFns[e],i.setEntryInPrefetchLog(e,t.EdisonPrefetchStatus.PendingStreaming,t.EdisonPrefetchStatus.StreamedAndConsumed,{result:n,failed:s,isAjax:!1,isAfterStreaming:!1}))}static loadDataModule(e){const t=j.getSingleton(),n={};for(const r of e)r in t.loadedDataModules&&(n[r]=t.loadedDataModules[r]);if(Object.keys(n).length===e.length)return Promise.resolve(n);const s=e.filter((e=>!(e in t.loadedDataModules)));return j._prefetch("data_modules.DataModules","DataModulesPrefetch",new q({modules:s})).then((e=>{const t=r.unmarshalProto(e,L).dataModules;if(t.length!==s.length)throw new Error("unexpected number of data modules in the response -- we should have received exactly "+s.length+" but instead we got "+t.length);for(const{data:e,name:r}of t){if(!e||"json"!==e.type.case||!e.type.value)throw new Error("handling data modules with protobuf return type not yet implemented");{const t=JSON.parse(e.type.value);j.getSingleton().loadedDataModules[r]=t,n[r]=t}}return n}))}static registerStreamedDataModule(e,t,r){const n=j.getSingleton();if(n.isDoneStreaming)throw new Error("Cannot register new streamed data modules after marking that we are done streaming.");if("proto"===t)throw new Error("handling data modules with protobuf return type not yet implemented");n.metrics.recordDataModuleReceived();const s=JSON.parse(r);if(n.pendingDataModulePromises[e]){if(!n.pendingDataModuleResolveFns[e])throw new Error(`Trying to resolve the promise for the streamed data module "${e}" but could not find resolve function in pendingDataModuleResolveFns`);n.pendingDataModuleResolveFns[e].resolve(s),delete n.pendingDataModuleResolveFns[e]}else n.pendingDataModulePromises[e]=Promise.resolve(s)}static getStreamedDataModule(e){const t=j.getSingleton();if(!t.pendingDataModulePromises[e]){if(t.isDoneStreaming)throw new Error(`Data module "${e}" was not streamed.`);t.pendingDataModulePromises[e]=new Promise(((r,n)=>{t.pendingDataModuleResolveFns[e]={resolve:r,reject:n}}))}return t.pendingDataModulePromises[e]}static markServerSidePrefetchStarted(e){if(!Array.isArray(e))throw new Error("requestKeys must be an array");const r=j.getSingleton();r.isServerSidePrefetchStarted=!0,r.pendingServerSidePrefetchKeys=e,r.metrics.recordServerSidePrefetchStartedReceived();Object.keys(r.pendingPrefetchResolveFns).filter((t=>!e.includes(t))).forEach((e=>{const{requestMsg:n,resolve:s,reject:i}=r.pendingPrefetchResolveFns[e];r.setEntryInPrefetchLog(e,t.EdisonPrefetchStatus.PendingStreaming,t.EdisonPrefetchStatus.PendingAjax),j._grpcWebAjax(n,e).then(s).catch(i),delete r.pendingPrefetchResolveFns[e]}))}static doneStreaming(){const e=j.getSingleton();if(!e.isDoneStreaming){e.metrics.recordDoneStreamingReceived(),e.metrics.saveEventTimings();for(const t in e.pendingDataModuleResolveFns)if(e.pendingDataModuleResolveFns.hasOwnProperty(t)){if(t in e.loadedDataModules)throw new Error(`${t} was still pending registration by streamed inline chunks at time of "done streaming", but there already is a result for this data module being loaded already. This is an invalid state.`);e.pendingDataModuleResolveFns[t].reject(new Error("canceling data module progress: done streaming before receiving data module result")),delete e.pendingDataModuleResolveFns[t]}for(const r in e.pendingPrefetchResolveFns)if(e.pendingPrefetchResolveFns.hasOwnProperty(r)){const{requestMsg:n,resolve:s,reject:i}=e.pendingPrefetchResolveFns[r];e.setEntryInPrefetchLog(r,t.EdisonPrefetchStatus.PendingStreaming,t.EdisonPrefetchStatus.PendingAjax,{isAjax:!0,isAfterStreaming:!0}),j._grpcWebAjax(n,r).then(s).catch(i),delete e.pendingPrefetchResolveFns[r]}e.pendingServerSidePrefetchKeys=[],e.isDoneStreaming=!0}}static getPrefetchCounts(){return j.getSingleton().prefetchLog.reduce(((e,{isAjax:t,isAfterStreaming:r})=>("boolean"==typeof t&&"boolean"==typeof r&&(r?e.numPrefetchesRequestedAfterDoneStreaming++:e.numPrefetchesRequestedBeforeDoneStreaming++,t?e.numPrefetchesByAjax++:e.numPrefetchesStreamed++),e)),{numPrefetchesRequestedAfterDoneStreaming:0,numPrefetchesRequestedBeforeDoneStreaming:0,numPrefetchesByAjax:0,numPrefetchesStreamed:0})}static loadPrefetches(){var e,t,n,s;return r.__awaiter(this,void 0,void 0,(function*(){const o=i.createEdisonGRPCWebPromiseClient(E,"/dws2/rpc/"),a=r.getRequestOriginalUrl(),d=new w({originalUrl:a,currentUrl:a}),c=new Set;try{try{for(var l,u=!0,m=r.__asyncValues(o.streamPrefetches(d));l=yield m.next(),!(e=l.done);){s=l.value,u=!1;try{const e=s;if("pending"===e.type.case&&(j.markServerSidePrefetchStarted(e.type.value.requestKeys),e.type.value.requestKeys.forEach((e=>c.add(e)))),"result"===e.type.case){const{requestKey:t,response:n,error:s}=e.type.value;c.delete(t),s?j.registerStreamedPrefetch(t,s,!0):j.registerStreamedPrefetch(t,r.protoBase64.enc(n),!1)}}finally{u=!0}}}catch(e){t={error:e}}finally{try{u||e||!(n=m.return)||(yield n.call(m))}finally{if(t)throw t.error}}}catch(e){c.forEach((t=>{j.registerStreamedPrefetch(t,e.toString(),!0)}))}finally{j.doneStreaming()}}))}}j.instance=null;var F=Object.freeze({__proto__:null,Edison:j,get EdisonPrefetchStatus(){return t.EdisonPrefetchStatus}});function U(){return r.__awaiter(this,void 0,void 0,(function*(){const{ensureCookiesAreEnabled:t}=yield new Promise((function(t,r){e(["./c_edison_cookies_check"],t,r)}));if(!t())return;(()=>{r.__awaiter(this,void 0,void 0,(function*(){const{showToastFromCookie:t}=yield new Promise((function(t,r){e(["./c_core_toast_toast_on_init"],t,r)}));t()}))})()}))}t.Edison=j,t.InitProps=D,t.edison_esnext=F,t.getOrCreateCache=f,t.initFromDws=function(e){j.init(),U()},t.initPage=function(e){window.RUNNING_IN_EDISON=!0;const t="string"==typeof e?r.unmarshalProto(e,M):M.fromJson(e);j.init();const{isBuildTimePrefetchesEnabled:n,isCssPreloadEnabled:s,skipBuildTimePrefetchDurationThreshold:i}=t;j.setIsBuildTimePrefetchesEnabled(n),j.setIsCSSPreloadEnabled(s),j.setSkipBuildTimePrefetchDurationThreshold(i),"boolean"!=typeof RUNNING_IN_REACTSERVER&&U()},t.injectCss=u,t.loadCssWithCache=p,t.rescanForMoreCssLinks=h,t.static_url=o}));
//# sourceMappingURL=e_edison.js-vflS0g3B1.map
