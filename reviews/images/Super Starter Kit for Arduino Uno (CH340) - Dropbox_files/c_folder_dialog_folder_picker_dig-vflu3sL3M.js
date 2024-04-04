define(["require","exports","./c_init_data_runtime","react","./e_folder_viewer_src_main","./c_table_columns_file_name_column","./c_spectrum_icon_arrow_index","./c_keymaster","./c_browse_interface","./c_folder_dialog_constants","./e_edison","./c_core_i18n","./c_badges_index","./e_core_exception","./c_react_query_helpers_helpers","./c_files_view_data_store","./c_api_v2_client_base","./c_spectrum_util_raf_throttle"],(function(e,t,a,s,r,l,n,o,i,c,d,u,h,_,p,f,S,E){"use strict";function m(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(a){if("default"!==a){var s=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,s.get?s:{enumerable:!0,get:function(){return e[a]}})}})),t.default=e,Object.freeze(t)}var g=m(s);const C=g.memo((e=>{var{path:t,size:s,user:l,useFullPath:n,isForCurrentPath:o,setUrl:i,rootReplacement:c,isBrowseSectionBreadcrumb:d,handleDragEnter:u,handleDragEnd:h}=e,_=a.__rest(e,["path","size","user","useFullPath","isForCurrentPath","setUrl","rootReplacement","isBrowseSectionBreadcrumb","handleDragEnter","handleDragEnd"]);const S=r.normalize(t),E=c||p.Viewer.get_root_name(l),m=r.parent_dirs(S).reverse();m.unshift(""),n&&""!==S&&m.push(S);const C=r.cx("file-breadcrumb-link",{"browse-section-breadcrumb-link":d});return g.createElement(r.Breadcrumb,Object.assign({size:s,isRootOverflow:!0},_),m.map(((e,t)=>{const a=o&&t===m.length-1,s=a?void 0:r.browse_uri_for_fq_path(l,e).toString(),n=a?void 0:function(e,t){return a=>{0===a.button&&(a.altKey||a.ctrlKey||a.metaKey||a.shiftKey)||(a.preventDefault(),t(e))}}(e,i);return g.createElement(r.Breadcrumb.Link,{key:r.filename(e,E),href:s,isCurrentPath:a,onClick:n,className:C,onDragEnter:u?u(m[t]):void 0,onDragEnd:h||void 0},f.getDisplayedFilename(r.filename(e,E)))})))}));C.displayName="FileBreadcrumb";const y=r.Loadable({loader:()=>a.__awaiter(void 0,void 0,void 0,(function*(){const{BoxEmptySpot:t}=yield new Promise((function(t,a){e(["./c_mjs_spot_box-empty"],t,a)}));return t}))}),v=r.Loadable({loader:()=>a.__awaiter(void 0,void 0,void 0,(function*(){const{TargetMissSpot:t}=yield new Promise((function(t,a){e(["./c_comments2_hooks_continuous_annotation_hook"],t,a)})).then((function(e){return e.targetMiss}));return t}))}),F=r.requireCssWithComponent(y,["/static/metaserver/static/css/dig-illustrations/index.web-vflOTtJG2.css"]),b=r.requireCssWithComponent(v,["/static/metaserver/static/css/dig-illustrations/index.web-vflOTtJG2.css"]);class L{constructor(){this.getAccessLevel=e=>e.icon.endsWith(c.ACCESS_LEVEL.NO_ACCESS)||r.BACKUP_ICONS.includes(e.icon)?c.ACCESS_LEVEL.NO_ACCESS:e.icon.endsWith(c.ACCESS_LEVEL.LIMITED_ACCESS_VAULT)?c.ACCESS_LEVEL.LIMITED_ACCESS_VAULT:e.icon.endsWith(c.ACCESS_LEVEL.LIMITED_ACCESS)||e.read_only?c.ACCESS_LEVEL.LIMITED_ACCESS:c.ACCESS_LEVEL.ACCESS,this.convertJsonFolderToFolder=e=>{const{path:t,icon:a,has_subdirs:s,contained_ns:r}=e,l=this.getAccessLevel(e),n=l===c.ACCESS_LEVEL.LIMITED_ACCESS_VAULT||l===c.ACCESS_LEVEL.ACCESS||l===c.ACCESS_LEVEL.LIMITED_ACCESS&&this.canSelectReadonly,o=l===c.ACCESS_LEVEL.LIMITED_ACCESS_VAULT||l===c.ACCESS_LEVEL.ACCESS||l===c.ACCESS_LEVEL.LIMITED_ACCESS&&(this.canSelectReadonly||s);return{path:t,isReadOnly:e.read_only,icon:a,hasSubfolders:s,isSelectable:n&&(!e.is_encrypted||this.canSelectEncrypted),isClickable:o&&(!e.is_encrypted||this.canSelectEncrypted),nsId:r,isLockedVaultFolder:l===c.ACCESS_LEVEL.LIMITED_ACCESS_VAULT&&e.read_only,isEncrypted:"folder_team_encrypted_32"===a||"folder_team_encrypted"===a}},this.cachedFolders=new Map}setProps(e,t,a,s,r){this.apiClient=e,this.user=t,this.canSelectReadonly=a,this.canSelectEncrypted=s,this.onDataLoaded=r}fetchFolderData(e){return a.__awaiter(this,void 0,void 0,(function*(){const t=yield this.apiClient.getFolderContents(this.user.id,e);if(this.onDataLoaded&&this.onDataLoaded(e),!t)return[];const a=t.map(this.convertJsonFolderToFolder),s=this.user.cdm_tmf_path&&r.paths_are_equal(e,"/")?[...a.filter((e=>r.paths_are_equal(e.path,this.user.cdm_tmf_path))),...a.filter((e=>!r.paths_are_equal(e.path,this.user.cdm_tmf_path)))]:a;return this.cachedFolders.set(r.normalize(e).toLowerCase(),s),s}))}fetchInstantFolderContents(e){const t=r.normalize(e);return this.cachedFolders.get(t.toLowerCase())}fetchFolderContents(e){return a.__awaiter(this,void 0,void 0,(function*(){const t=r.normalize(e);return this.fetchInstantFolderContents(e)||this.fetchFolderData(t)}))}}const k=l.createManagedTable(l.useFlexLayout,l.useKeyboarding);const w=({size:e})=>{const t=u.intl.formatMessage({id:"BAyazl",defaultMessage:"This is the only folder there is."});return g.default.createElement(u.Provider,{value:u.intl},g.default.createElement("div",{className:r.cx("folder-picker__empty-message","u-font-center",{"u-pad-top-xl":"small"!==e})},g.default.createElement(F,null),"small"===e?g.default.createElement("span",null,t):g.default.createElement("h2",{className:"u-pad-top-l"},t)))};w.displayName="EmptyMessage";const A=()=>g.default.createElement("div",{className:"folder-picker__error"},g.default.createElement(b,null),g.default.createElement("span",null,u.intl.formatMessage({id:"UIh+KT",defaultMessage:"Something went wrong on our end.  Please reload and try again."}))),I=()=>{const e=u.intl.formatMessage({id:"G09nql",defaultMessage:"Loading your folders…"});return g.default.createElement(u.Provider,{value:u.intl},g.default.createElement("div",{className:"folder-picker-dig-loading "},g.default.createElement(r.Spinner,{"aria-valuetext":e,size:"xsmall"}),g.default.createElement("span",{className:"folder-picker-dig-loading-label"},e)))};class D{constructor(){this.appendReactableData=e=>{const t=[];return e.forEach(((e,a)=>{t.push(Object.assign(Object.assign({},e),{title:r.Emstring.em_snippet(r.filename(e.path),c.MAX_FOLDER_NAME_LENGTH),uniqueKey:""+e.nsId,isFolder:!0,isShared:!1,extension:"",path:e.path,index:a,isSelected:!1}))})),t},this.getDisplayableFolderList=e=>a.__awaiter(this,void 0,void 0,(function*(){const t=yield K.fetchFolderContents(e);return this.appendReactableData(t)})),this.getInstantDisplayableFolderList=e=>{const t=K.fetchInstantFolderContents(e);if(t)return this.appendReactableData(t)},this.getSingleCachedFolder=e=>{const t=this.getInstantDisplayableFolderList(r.parent_dir(e));let a=null;return null==t||t.some((t=>!!r.paths_are_equal(t.path,e)&&(a=t,!0))),a},this.getSingleFolder=e=>a.__awaiter(this,void 0,void 0,(function*(){let t=this.getInstantDisplayableFolderList(r.parent_dir(e));t||(t=yield this.getDisplayableFolderList(r.parent_dir(e)));let a=null;return null==t||t.some((t=>!!r.paths_are_equal(t.path,e)&&(a=t,!0))),a}))}}class N{constructor(){this.selectedIndex=0,this.prevKeyScope="",this.claimFocusAfterNavigate=!1,this.keysActive=!1,this.updateFolderData=e=>{this.folderData=e},this.handleChoice=()=>{if(!this.folderData[this.selectedIndex].isClickable)return;this.claimFocusAfterNavigate=!0;const e=this.folderData[this.selectedIndex];this.handleFolderChoice(e)},this.setupKeyboardShortcuts=()=>{this.changedFocusedFolder(),this.keysActive||(this.keysActive=!0,this.prevKeyScope=o.key.getScope(),this.prevKeyScope!==c.KEY_SCOPE&&o.key.setScope(c.KEY_SCOPE),o.key("up",c.KEY_SCOPE,(()=>{this.selectedIndex=this.selectedIndex-1,this.changedFocusedFolder()})),o.key("down",c.KEY_SCOPE,(()=>{this.selectedIndex=this.selectedIndex+1,this.changedFocusedFolder()})),o.key("left",c.KEY_SCOPE,(()=>{this.claimFocusAfterNavigate=!0,this.changedFocusedFolder(),this.goToParent()})),o.key("right",c.KEY_SCOPE,this.handleChoice),o.key("space",c.KEY_SCOPE,this.handleChoice),o.key("enter",c.KEY_SCOPE,(()=>{this.changedFocusedFolder(),this.handleChoice(),void 0!==this.onSuccess&&this.onSuccess()})))},this.cleanupKeyboardShortcuts=()=>{this.keysActive=!1,o.key.clearScope(c.KEY_SCOPE),this.prevKeyScope&&o.key.setScope(this.prevKeyScope),o.key.resetFilter()},this.setFocus=()=>{if(!this.claimFocusAfterNavigate)return;const e=document.querySelector(".folder-picker-container table tr");e&&(e.setAttribute("tabindex","-1"),e.focus()),this.claimFocusAfterNavigate=!1}}}const P=(e,t,a)=>{let s,r,l,n,o=!1;const{onFolderSelected:i,user:c,canSelectReadonly:d}=t;let u;e&&"/"!==e.path?(u=e.path,s=e.isLockedVaultFolder,r=e.nsId,o=e.isSelectable,l=e.isReadOnly,n=e.isEncrypted):(u="",l="view"===c.user_root_permissions,o=!c.is_cdm_member&&!c.is_tmr_member||!l||d,r=c.root_ns_id,n=!1),o||t.forceFolderSelectedCallback?i({path:u,nsId:r,predictionId:a,isLockedVaultFolder:s,isReadOnly:l,isEncrypted:n}):i({})},T=()=>{const e=u.intl.formatMessage({id:"oDXE4c",defaultMessage:"Based on previous activity and file type"});return g.default.createElement(r.Tooltip,{title:e},g.default.createElement(r.IconButton,{variant:"transparent"},g.default.createElement(r.UIIcon,{src:E.HelpLine,className:"icon-help","aria-label":e})))};T.displayName="SuggestionHeaderTooltip";const x=()=>{const e=u.intl.formatMessage({id:"qdhuuB",defaultMessage:"Suggested location"});return g.default.createElement("span",null,e,g.default.createElement(T,null))};x.displayName="SuggestionHeaderText";const O=e=>{const t=r.parent_dir(e.path),a=r.paths_are_equal(t,"/")?e.rootName:t.slice(1),s=u.intl.formatMessage({id:"R7F8Tb",defaultMessage:"in {location}"},{location:a});return g.default.createElement("a",{href:"#",className:"suggestion_parent",onClick:t=>{t.stopPropagation(),e.handleClick()}},s)};O.displayName="FolderSuggestionLocation";class M{constructor(e,t,s){this.fetch=()=>a.__awaiter(this,void 0,void 0,(function*(){var e,t,a;try{const e=yield this.fetchFolderSuggestion(this.user.id);this.onFetch(e)}catch(s){const r=null!==(a=null===(t=null===(e=S.filterApiError(s))||void 0===e?void 0:e.raw)||void 0===t?void 0:t.responseBody)&&void 0!==a?a:"Received error response from folder suggestion API";_.reportException({err:new Error(r),tags:["folder_suggestion"],severity:_.SEVERITY.NONCRITICAL})}})),this.fetchFolderSuggestion=e,this.user=t,this.onFetch=s}}const R=e=>{const[t,a]=s.useState(""),n={uniqueKey:e.path,title:r.filename(e.path),isFolder:!0,icon:t};let i="",d=!1;s.useEffect((()=>{V.getSingleFolder(e.path).then((e=>{null!==e&&a(e.icon)}))}),[e.path]);const u=g.default.createElement(O,{path:r.parent_dir(e.path),handleClick:e.handleLocationClick,rootName:e.rootName});let h="folder-suggestion-location";return e.selected&&(h+=" folder-suggestion-location-selected"),g.default.createElement("div",{className:"folder-suggestion-dig",onFocus:()=>{d||(d=!0,i=o.key.getScope(),i!==c.SUGGESTED_LOCATION_KEY_SCOPE&&o.key.setScope(c.SUGGESTED_LOCATION_KEY_SCOPE),e.handleLocationClick())},onBlur:()=>{o.key.clearScope(c.SUGGESTED_LOCATION_KEY_SCOPE),i&&o.key.setScope(i),o.key.resetFilter()}},g.default.createElement(x,null),g.default.createElement("span",{role:"button",className:h,onClick:e.handleClick},g.default.createElement(l.FileNameCell,{file:n,subTitle:u})))};let K,V,q,B;R.displayName="FolderSuggestionDisplay";const U=e=>{var t;const[o,c]=s.useState(null!==(t=e.initialPath)&&void 0!==t?t:"/"),_=s.useRef(""),[p,f]=s.useState([]),S=s.useRef(!1),E=e.size||"standard",{showEmptyFolders:m,onError:y,onFolderSelected:v,onRowClicked:F}=e,[b,T]=s.useState(void 0),[x,O]=s.useState(!1),U=s.useMemo((()=>{return t=e.currentUserPath,[{id:"filename",Cell:({row:{original:e}})=>g.default.createElement(l.FileNameCell,{file:e}),accessor:e=>e.title,width:300},{id:"current_folder_token",Cell:({row:{original:{path:e}}})=>e===t?g.default.createElement(h.AccessoryBadge,null,u.intl.formatMessage({id:"dNc7Si",defaultMessage:"Current folder"})):null,width:void 0},{id:"drilldown_arrow",accessor:e=>e.hasSubfolders?g.default.createElement(n.IconArrow,{name:"right"}):"",width:void 0}];var t}),[e.currentUserPath]),z=s.useCallback((t=>{const a={user:e.user,canSelectReadonly:e.canSelectReadonly,canSelectEncrypted:e.canSelectEncrypted,onFolderSelected:v,forceFolderSelectedCallback:e.forceFolderSelectedCallback};null==F||F(t.path,t.index,!1),t.hasSubfolders||m||(_.current=t.path),c(t.path),P(t,a)}),[e.user,e.canSelectReadonly,e.canSelectEncrypted,e.forceFolderSelectedCallback,v,F,m]),Y=s.useCallback(((t,s)=>a.__awaiter(void 0,void 0,void 0,(function*(){c(t),O(null!=s);const a={user:e.user,canSelectReadonly:e.canSelectReadonly,canSelectEncrypted:e.canSelectEncrypted,onFolderSelected:e.onFolderSelected,forceFolderSelectedCallback:e.forceFolderSelectedCallback};V.getSingleFolder(t).then((e=>{P(e,a,s)}))}))),[e.user,e.canSelectReadonly,e.canSelectEncrypted,e.onFolderSelected,e.forceFolderSelectedCallback]);s.useMemo((()=>{K=new L,V=new D,q=new N,q.goToParent=()=>{},q.onSuccess=e.onSuccess,q.changedFocusedFolder=()=>{O(!1)}}),[e.onSuccess]),s.useMemo((()=>{K.setProps(e.apiClient,e.user,e.canSelectReadonly,e.canSelectEncrypted,e.onDataLoaded)}),[e.apiClient,e.user,e.canSelectReadonly,e.canSelectEncrypted,e.onDataLoaded]),s.useEffect((()=>{(()=>{const e=new Image;e.src=d.static_url("/static/metaserver/static/images/illustration_catalog/dropbox_somethings_not_working-vfl2QXPxi.png"),e.srcset=d.static_url("/static/metaserver/static/images/illustration_catalog/dropbox_somethings_not_working@2x-vflkcbmXv.png")+" 2x"})()}),[]),s.useEffect((()=>{e.apiClient.fetchFolderSuggestion&&(B=new M(e.apiClient.fetchFolderSuggestion,e.user,(t=>{var a,s;const{path:r,prediction_id:l,suggest_id:n}=t;if(r){const t={path:r,predictionId:l};null===(s=e.onFetchFolderSuggestionSuccess)||void 0===s||s.call(e,[t],n),T(t)}else null===(a=e.onFetchFolderSuggestionSuccess)||void 0===a||a.call(e,[],n)})),B.fetch())}),[e.apiClient.fetchFolderSuggestion,e.user,e.onFetchFolderSuggestionSuccess]),s.useEffect((()=>{q.goToParent=()=>{Y(r.parent_dir(_.current))}}),[Y]),s.useEffect((()=>{q.handleFolderChoice=z}),[z]),s.useEffect((()=>{q.onSuccess=e.onSuccess}),[e.onSuccess]),s.useEffect((()=>{q.updateFolderData(p),q.selectedIndex=0,q.setFocus()}),[p]),s.useEffect((()=>{const e=()=>a.__awaiter(void 0,void 0,void 0,(function*(){let e=yield V.getDisplayableFolderList(o);0!=e.length||r.paths_are_equal(o,"/")||m||(e=yield V.getDisplayableFolderList(r.parent_dir(o))),_.current=o,f(e),Y(o)}));(()=>{const t=V.getInstantDisplayableFolderList(o),a=V.getSingleCachedFolder(o);if(_.current&&void 0!==t&&t.length<1&&!r.paths_are_equal(o,"/"))_.current=o;else if(!_.current||!1!==(null==a?void 0:a.hasSubfolders)||m||r.paths_are_equal(o,"/")){if(t)return _.current=o,void f(t);try{v({isLoading:!0}),e()}catch(e){s=e,null==y||y(s instanceof Error?s:new Error(String(s))),v({}),S.current=!0}var s}else _.current=o})()}),[o,y,v,m]);const j=s.useRef(!1);e.initialPath&&!j.current&&(j.current=!0,Y(e.initialPath));const G=()=>o!==_.current;let W,H=null;if(S.current)W=g.default.createElement(A,null);else if(G())W=g.default.createElement(I,null);else if(G()||p.length>0){const t=i.get_browse_root_name(e.user);void 0!==b&&(H=g.default.createElement(R,{path:b.path,handleClick:()=>{var t;null===(t=e.onFolderSuggestionClick)||void 0===t||t.call(e,b),Y(b.path,b.predictionId)},handleLocationClick:()=>{var t;null===(t=e.onFolderSuggestionLocationClick)||void 0===t||t.call(e,b),Y(r.parent_dir(b.path),b.predictionId)},rootName:t,selected:x})),W=g.default.createElement("div",{className:"folder-picker-container folder-picker-dig-container",onFocus:q.setupKeyboardShortcuts,onBlur:q.cleanupKeyboardShortcuts},g.default.createElement(k,{isSelectable:!0,columns:U,data:p,showHeader:!1,getPropsForRow:e=>({disabled:!e.isClickable,onClick:()=>{z(e)},filename:e.title,className:e.isClickable?"":"not-clickable"})}))}else W=g.default.createElement(w,{size:E});return g.default.createElement(u.Provider,{value:u.intl},H,g.default.createElement("div",{className:"folder-picker-dig__breadcrumbs"},g.default.createElement("h1",{className:"ax-visually-hidden"},r.filename(_.current)),g.default.createElement(C,{useFullPath:!0,isForCurrentPath:!0,user:e.user,setUrl:t=>{var a;null===(a=e.onBreadcrumbClicked)||void 0===a||a.call(e,t),Y(t)},path:_.current,size:"small"})),W)};U.displayName="FolderPickerTableNoCss";const z=r.requireCssWithComponent(U,["/static/metaserver/static/css/browse/browse-vflzEjCEW.css","/static/metaserver/static/css/react/folder_picker-vflkuYDwD.css","/static/metaserver/static/css/scooter/scooter-scoped-vflcqLzQ9.css","/static/metaserver/static/css/dig-components/index.web-vflzskH5s.css","/static/typescript/component_libraries/dig-experimental/src/index.web-vflMgkV3K.css"]);t.FolderPicker=z}));
//# sourceMappingURL=c_folder_dialog_folder_picker_dig.js-vflJ0_BAF.map
