define(["require","exports","./c_init_data_runtime","react","./c_file_viewer_collection_viewer","./e_folder_viewer_src_main","./c_core_i18n","./c_file_transfers_async_browse_entry_point_onboarding_modal_async","./c_file_transfers_lib_utils","./c_growth-components_hooks_use_equalized_height","./c_spectrum_util_raf_throttle","./c_plugin_utils_getImageDefaultSizes","./c_flux_store_listener","./c_core_uri","./c_react_query_helpers_helpers","./c_api_v2_client_base","./c_core_attribution_header","./c_csrf","metaserver/static/js/modules/constants/viewer","./c_api_v2_noauth_client","./c_apex-metrics_src_types","./c_growth_ui_api","./c_esm_misc_util","./c_files_view_data_store","./e_core_exception","./c_lodash-es_lodash","./c_src_sink_index","./c_browse_models","./c_base64","./c_pap-events_navigation_navigate_to_replay","./c_hooks_use_stabilized_callback","./c_stormcrow_gating_factory","./c_stormcrow_types_log_exposure","metaserver/static/js/modules/constants/pdf_editing","./c_ui-icon_line_restore","./c_growth_ui_teams_web_actions_logger_events","metaserver/static/js/modules/constants/search","./c_toolkit_dist_redux-toolkit","./c_home_store","metaserver/static/js/modules/constants/web_experience_constants","metaserver/static/js/modules/constants/unity","./c_core_notify","react-dom","./e_edison","./c_init_data_edison","./c_referrer_cleansing_redirect","./c_cloud_docs_types","./c_keymaster","./c_es_hooks_useDispatch","./c_core_utils_browser_detection","./c_ui-icon_line_zoom-out","./c_campaigns_campaign_enums","./c_bolt_metaserver_clients","./c_skeleton_index","./c_ui-icon_line_team","./c_ui-icon_line_zip","./c_stormcrow_explicit_exposure_logging","./c_core_xhr","metaserver/static/js/langpack","metaserver/static/js/modules/constants/sharing","metaserver/static/js/modules/constants/locales","metaserver/static/js/modules/constants/file_viewer_configuration","metaserver/static/js/modules/constants/file_viewer_feature_experiments","metaserver/static/js/modules/constants/time","metaserver/static/js/modules/constants/login_and_register","metaserver/static/js/modules/constants/fingerprintjs_constants","./c_security_crypto","./c_flows_logging_flows_loggers","./c_flux_base_store","./c_cloud_docs_constants","./c_chips_index","./c_chip_index","metaserver/static/js/modules/constants/contacts","./c_spectrum_colorized_icon","./c_spectrum_svg_icon_bundle","./c_spectrum_positioned_portal","./c_user_centric_perf_metrics_component_visually_complete_component_visually_complete_calculator","./c_plugin_utils_drawWatermarkOnCanvas","./c_resize-observer-polyfill_dist_ResizeObserver","./c_badges_index","./c_badge_index","./c_react-error-boundary","./c_src_common_constants","./c_upload_kit_lib_types"],(function(e,t,i,n,o,a,s,l,r,c,_,d,u,m,p,f,g,E,y,b,x,v,h,S,w,T,O,k,C,N,I,$,F,A,j,L,D,P,R,M,q,z,B,Y,H,V,G,W,K,U,X,Q,Z,J,ee,te,ie,ne,oe,ae,se,le,re,ce,_e,de,ue,me,pe,fe,ge,Ee,ye,be,xe,ve,he,Se,we,Te,Oe,ke,Ce,Ne){"use strict";function Ie(e){return e&&e.__esModule?e:{default:e}}var $e=Ie(n);const Fe=e=>e.formatMessage({id:"0EQDHd",defaultMessage:"Copy link"}),Ae=e=>e.formatMessage({id:"3MahuB",defaultMessage:"Send a copy"}),je=e=>e.formatMessage({id:"v4qAYu",defaultMessage:"Close"});const Le=["copy_link","invite","cancel","clickaway","settings","qr_code","copy_view_link","copy_edit_link","transfer"];function De(e){return Le.find((t=>t===(null==e?void 0:e.toLowerCase())))}const Pe=Symbol("ON_VIEW_FLEXIBLE_ENTRY_POINT"),Re=Symbol("ON_SELECT_FLEXIBLE_ENTRY_POINT_ACTION"),Me=Symbol("ON_HOVER_FLEXIBLE_ENTRY_POINT_ACTION"),qe=Symbol("ON_LOG_FLEXIBLE_ENTRY_POINT_ACTION_DWELL_TIME"),{useEmitter:ze,defaultEmitter:Be}=a.defineLogger((({event:e,getContextValue:t})=>i.__awaiter(void 0,void 0,void 0,(function*(){const i=t(a.Context),n=t(a.Context$1),o=yield a.getHashedKeys(n),s=Object.assign(Object.assign({},a.getTags(o)),a.getTags$1(i));if(e.key!==Pe)if(e.key!==Re)if(e.key!==Me)if(e.key!==qe);else a.UDCL.logEvent(function(e){return{class:"sharing_sender",action:"log",object:"flexible_sharing_entrypoint_action_dwell_time",properties:e}}({flexibleSharingEntryPointAction:De(e.payload.action),fileExtension:e.payload.fileExtension,flexibleSharingEntryPointDwellTime:e.payload.dwellTime,flexibleSharingEntryPointDwellActionSelected:e.payload.selected,isDir:e.payload.isDir,actionSurface:e.payload.actionSurface,actionElement:e.payload.actionElement}),{tags:s});else a.UDCL.logEvent(function(e){return{class:"sharing_sender",action:"hover",object:"flexible_sharing_entrypoint_action",properties:e}}({flexibleSharingEntryPointAction:De(e.payload.action),fileExtension:e.payload.fileExtension,isDir:e.payload.isDir,actionSurface:e.payload.actionSurface,actionElement:e.payload.actionElement}),{tags:s});else a.UDCL.logEvent(function(e){return{class:"sharing_sender",action:"select",object:"flexible_sharing_entrypoint_action",properties:e}}({flexibleSharingEntryPointAction:De(e.payload.action),fileExtension:e.payload.fileExtension,flexibleSharingEntryPointTimeToAction:e.payload.timeToAction,isDir:e.payload.isDir,actionSurface:e.payload.actionSurface,actionElement:e.payload.actionElement}),{tags:Object.assign(Object.assign({},s),{isResized:e.payload.isResized?e.payload.isResized.toString():"false"})});else a.UDCL.logEvent({class:"sharing_sender",action:"view",object:"flexible_sharing_entrypoint",properties:{fileExtension:e.payload.fileExtension,isDir:e.payload.isDir,actionSurface:e.payload.actionSurface,actionElement:e.payload.actionElement}},{tags:s})})))),Ye=e=>$e.default.useCallback((()=>{e.$props.get().onRequestClose(),e.$dwellFlexibleEntryPointActionTimestamp.set(void 0)}),[e]),He=e=>$e.default.useCallback((()=>{e.$dwellFlexibleEntryPointActionTimestamp.set(Date.now())}),[e.$dwellFlexibleEntryPointActionTimestamp]),Ve=e=>{const t=ze();return $e.default.useCallback(((i,n)=>{const o=e.$dwellFlexibleEntryPointActionTimestamp.get();if(o){const s=Date.now()-o,l=e.$fileOrFolder.get();t.select(qe).emit({action:i,fileExtension:a.getExtension$1(l),dwellTime:s,selected:n,isDir:l.is_dir,actionSurface:e.$actionSurface.get(),actionElement:e.$actionElement.get()}),e.$dwellFlexibleEntryPointActionTimestamp.set(void 0)}}),[e,t])};a.injectInternalStyle("/static/metaserver/static/js/sharing/flexible-share-entry-point/flexible-share-entry-point.module.out-vflvzV5js.css",(e=>"._header-wrapper_1ytjc_1{align-items:center;display:flex;width:100%}._header-file-or-folder-icon-container_1ytjc_7{align-items:center;display:flex;flex-grow:0;justify-content:center;margin-right:8}._header-file-or-folder-name-container_1ytjc_15{align-items:flex-start;display:flex;flex-direction:column;flex-grow:1;justify-content:center;overflow:hidden}._header-file-or-folder-name_1ytjc_15{white-space:nowrap;width:100%}._share-entry-point-container_1ytjc_29{align-items:center;background:var(--dig-color__background__base);display:flex;flex-direction:column;flex-shrink:0;gap:12px;padding:30px;width:344px}.dig-Theme-vis2023 ._share-entry-point-dig-menu-content_1ytjc_40 .dig-Menu-canvas{border-radius:var(--dig-radius__large)}._body-wrapper_1ytjc_44{align-items:center;flex-direction:column;gap:12px}._body-button-container_1ytjc_53,._body-wrapper_1ytjc_44{align-self:stretch;display:flex;padding-top:8px}._body-button-container_1ytjc_53{align-content:center;align-items:flex-start;flex-direction:row;flex-wrap:wrap;gap:12px 8px;height:auto;justify-content:center}._share-entry-point-click-outside_1ytjc_66{margin-left:0}"));const Ge="_header-wrapper_1ytjc_1",We="_header-file-or-folder-icon-container_1ytjc_7",Ke="_header-file-or-folder-name-container_1ytjc_15",Ue="_header-file-or-folder-name_1ytjc_15",Xe="_share-entry-point-container_1ytjc_29",Qe="_share-entry-point-dig-menu-content_1ytjc_40",Ze="_body-wrapper_1ytjc_44",Je="_body-button-container_1ytjc_53",et="_share-entry-point-click-outside_1ytjc_66";a.injectInternalStyle("/static/metaserver/static/js/sharing/flexible-share-entry-point/components/flexible-sharing-entrypoint-simple-button.module.out-vflHQcBsZ.css",(e=>"._simple-button_13osq_1{border:1px solid var(--dig-color__border__subtle);border-radius:var(--dig-radius__large);cursor:pointer;flex-grow:1}._simple-button--small_13osq_7{width:140px}._simple-button--large_13osq_11{width:280px}._simple-button-content_13osq_15{box-sizing:border-box;display:flex;flex-shrink:0;flex-wrap:wrap;gap:var(--spacing__unit--1_5);height:auto;padding:var(--spacing__unit--1_5);width:100%}._simple-button-small-content_13osq_26{flex-direction:column}._simple-button-text-container_13osq_30{display:flex;flex-wrap:wrap}._simple-button-small-text-container_13osq_34{align-content:end}._simple-button-text_13osq_30{font-family:var(--type__title__standard--fontfamily);font-size:13px;font-weight:var(--type__body__standard--fontweight_strong);height:-webkit-min-content;height:min-content;line-height:var(--type__body__small--lineheight);padding-top:var(--dig-spacing__micro__xsmall);text-align:start;white-space:pre-wrap}._simple-button--primary_13osq_51{background-color:var(--dig-color__primary-cta__base);color:var(--dig-color__primary-cta__on-base)}._simple-button--primary_13osq_51._simple-button--isDisabled_13osq_56{background-color:var(--dig-color__disabled__base);color:var(--dig-color__disabled__on-base)}._simple-button--primary_13osq_51:hover{background-color:var(--dig-color__primary-cta__base--state-1)}._simple-button--primary_13osq_51:active,._simple-button--primary_13osq_51[aria-expanded=true]{background-color:var(--dig-color__primary-cta__base--state-2)}._simple-button--secondary_13osq_70{background-color:var(--dig-color__background__base);border:1px solid var(--dig-color__border__subtle)}._simple-button--secondary_13osq_70:active,._simple-button--secondary_13osq_70:hover,._simple-button--secondary_13osq_70[aria-expanded=true]{background-color:var(--dig-color__background__subtle)}._simple-button-isDisabled_13osq_81{color:var(--dig-color__disabled__on-surface);cursor:auto;pointer-events:none}"));const tt="_simple-button_13osq_1",it="_simple-button--small_13osq_7",nt="_simple-button--large_13osq_11",ot="_simple-button-content_13osq_15",at="_simple-button-small-content_13osq_26",st="_simple-button-text-container_13osq_30",lt="_simple-button-small-text-container_13osq_34",rt="_simple-button-text_13osq_30",ct="_simple-button--primary_13osq_51",_t="_simple-button-isDisabled_13osq_81",dt="_simple-button--secondary_13osq_70",ut=$e.default.forwardRef((e=>{var{className:t,icon:n,label:o,onClick:s,onMouseEnter:l,onMouseLeave:r,disabled:_,buttonSize:d,variant:u}=e,m=i.__rest(e,["className","icon","label","onClick","onMouseEnter","onMouseLeave","disabled","buttonSize","variant"]);const p=c.useEqualizedHeight("flexibleSharingEntrypoint_simpleButtonSmall"),f=c.useEqualizedHeight("flexibleSharingEntrypoint_simpleButtonSmall_text"),g=a.cx(tt,{[ct]:"primary"===u,[dt]:"secondary"===u,[_t]:_,[it]:"small"===d,[nt]:"large"===d},t),E=a.cx(ot,{[at]:"small"===d},t),y=a.cx(st,{[lt]:"small"===d},t);return $e.default.createElement(a.StylelessButton,Object.assign({onClick:s,onMouseEnter:l,onMouseLeave:r,className:g,"aria-label":o,ref:"small"===d?p.props.ref:void 0,style:"small"===d?p.props.style:void 0},m),$e.default.createElement("span",{className:E},$e.default.createElement(a.UIIcon,{src:n,size:"medium"}),$e.default.createElement("div",{className:y,ref:"small"===d?f.props.ref:void 0,style:"small"===d?f.props.style:void 0},$e.default.createElement(a.Text,{className:rt,color:"inherit",isBold:!0,size:"small",variant:"label"},o))))}));var mt;ut.displayName="FlexibleSharingEntrypointSimpleButton",function(e){e.CLICKAWAY="clickaway",e.SETTINGS="settings",e.CANCEL="cancel",e.COPY_LINK="copy_link",e.INVITE="invite",e.TRANSFER="transfer"}(mt||(mt={}));const pt=e=>{const t=(e=>a.useInitStoreV2(e,(e=>({$fileOrFolder:a.proxy((()=>e.get().fileOrFolder)),$user:a.proxy((()=>e.get().user)),$shareModalExtras:a.proxy((()=>e.get().shareModalExtras)),$modalRef:a.proxy((()=>e.get().modalRef)),$isOpen:a.proxy((()=>e.get().isOpen)),$actionSurface:a.proxy((()=>e.get().actionSurface)),$actionElement:a.proxy((()=>e.get().actionElement)),$openFlexibleEntryPointTimestamp:a.store(Date.now()),$dwellFlexibleEntryPointActionTimestamp:a.store(void 0),$props:e}))))(e);return $e.default.createElement(ft,{store:t})};pt.displayName="FlexibleShareEntryPoint";const ft=({store:e})=>{const t=a.useStore(e.$isOpen),i=a.useStore(e.$modalRef),o=Ye(e),s=ze();n.useEffect((()=>{const t=()=>{const t=e.$props.get(),i=e.$openFlexibleEntryPointTimestamp.get(),n=t.actionSurface,l=t.actionElement,r=t.fileOrFolder,c=i&&Date.now()-i;s.select(Re).emit({action:mt.CLICKAWAY,fileExtension:a.getExtension$1(r),timeToAction:c,isDir:r.is_dir,actionSurface:n,actionElement:l,isResized:!0}),o()};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[s,o,e.$openFlexibleEntryPointTimestamp,e.$props]),$e.default.useEffect((()=>{const t=e.$props.get(),i=t.actionSurface,n=t.actionElement,o=t.fileOrFolder;s.select(Pe).emit({fileExtension:a.getExtension$1(o),isDir:o.is_dir,actionSurface:i,actionElement:n})}),[]);const l=$e.default.useCallback((()=>{const t=e.$props.get(),i=e.$openFlexibleEntryPointTimestamp.get(),n=t.actionSurface,l=t.actionElement,r=t.fileOrFolder,c=i&&Date.now()-i;s.select(Re).emit({action:mt.CLICKAWAY,fileExtension:a.getExtension$1(r),timeToAction:c,isDir:r.is_dir,actionSurface:n,actionElement:l}),o()}),[e,o,s]);return $e.default.createElement("div",{className:et},$e.default.createElement(a.ClickOutside,{isActive:!0,onClickOutside:l},$e.default.createElement(a.Menu.Content,{className:Qe,triggerOffset:16,triggerRef:i,open:t,placement:"bottom-end"},$e.default.createElement("div",{className:Xe},$e.default.createElement(gt,Object.assign({},e)),$e.default.createElement(Et,Object.assign({},e))))))};ft.displayName="FlexibleShareEntryPointInternals";const gt=e=>{const t=Ye(e),i=ze(),n=He(e),l=Ve(e),r=$e.default.useCallback((()=>{const n=e.$props.get(),s=n.user,r=n.shareModalExtras,c=e.$openFlexibleEntryPointTimestamp.get(),_=n.actionSurface,d=n.actionElement,u=n.fileOrFolder,m=c&&Date.now()-c;i.select(Re).emit({action:mt.SETTINGS,fileExtension:a.getExtension$1(u),timeToAction:m,isDir:u.is_dir,actionSurface:_,actionElement:d}),l("settings",!0),t(),o.share(u,s,null,Object.assign(Object.assign({},r),{initialScreen:"settings",openSettingsFromFlexibleSharingEntrypoint:!0}))}),[e,i,t,l]),c=$e.default.useCallback((()=>{const t=e.$props.get(),o=t.actionSurface,s=t.actionElement,l=t.fileOrFolder;n(),i.select(Me).emit({action:mt.SETTINGS,fileExtension:a.getExtension$1(l),isDir:l.is_dir,actionSurface:o,actionElement:s})}),[e,n,i]),_=$e.default.useCallback((()=>{const n=e.$props.get(),o=e.$openFlexibleEntryPointTimestamp.get(),s=n.actionSurface,r=n.actionElement,c=n.fileOrFolder,_=o&&Date.now()-o;i.select(Re).emit({action:mt.CANCEL,fileExtension:a.getExtension$1(c),timeToAction:_,isDir:c.is_dir,actionSurface:s,actionElement:r}),l(mt.CANCEL,!0),t()}),[e,t,l,i]),u=$e.default.useCallback((()=>{const t=e.$props.get(),o=t.actionSurface,s=t.actionElement,l=t.fileOrFolder;n(),i.select(Me).emit({action:mt.CANCEL,fileExtension:a.getExtension$1(l),isDir:l.is_dir,actionSurface:o,actionElement:s})}),[e,n,i]),m=a.useStore(e.$fileOrFolder),p=$e.default.useMemo((()=>{const e=a.getFilename(m);return a.Emstring.em_snippet(e,13)}),[m]);return $e.default.createElement("div",{className:Ge},$e.default.createElement("div",{className:We},m.is_dir?$e.default.createElement(a.FolderBaseDefaultSmall,null):$e.default.createElement(a.FileIcon$1,{size:"small",extension:a.getExtension$1(m)})),$e.default.createElement("div",{className:Ke},$e.default.createElement(a.Title,{className:Ue,size:"small",weightVariant:"emphasized"},p),m.is_dir?null:$e.default.createElement("div",null,$e.default.createElement(a.Text,{color:"faint",style:{lineHeight:"18px"}},a.format_bytes(m.bytes)))),$e.default.createElement("div",null,$e.default.createElement(a.IconButton,{onClick:r,onMouseEnter:c,onMouseLeave:()=>l("settings",!1),size:"medium",variant:"borderless","aria-label":(f=s.intl,f.formatMessage({id:"Dnld5E",defaultMessage:"Settings"}))},$e.default.createElement(a.UIIcon,{src:d.SettingsLine}))),$e.default.createElement("div",null,$e.default.createElement(a.IconButton,{onClick:_,onMouseEnter:u,onMouseLeave:()=>l("cancel",!1),variant:"borderless","aria-label":je(s.intl)},$e.default.createElement(a.UIIcon,{src:a.CloseLine}))));var f};gt.displayName="Header";const Et=t=>{const n=Ye(t),d=ze(),m=He(t),p=Ve(t),f=a.useStore(t.$fileOrFolder),g=a.useSelector((e=>o.getShareActionsForFiles(e,[f]))),E=a.useSelector((e=>o.getFeatureFlags(e).fileTransfersAppAction)),y=a.useAfterDisplayPassthroughCallback({importer:()=>i.__awaiter(void 0,void 0,void 0,(function*(){return new Promise((function(t,i){e(["./c_views_copy_link_mini_modal"],t,i)})).then((({CopyLinkMiniModal:e})=>({default:{fn:e.show}})))}))}),b=$e.default.useCallback((()=>{const e=t.$props.get(),i=e.actionSurface,o=e.actionElement,s=e.fileOrFolder,l=e.modalRef,r=e.user,c=t.$openFlexibleEntryPointTimestamp.get(),_=c&&Date.now()-c;d.select(Re).emit({action:mt.COPY_LINK,fileExtension:a.getExtension$1(s),timeToAction:_,isDir:s.is_dir,actionSurface:i,actionElement:o});const u={user:r,filePath:s.file_id,setIsCreatingSharedLink:()=>{},anchorRef:l,browseFile:s,zIndexOverride:500,yOffsetDistance:8,userActionSurfaceLogValue:a.ActionSurfaceLogValue.FLEXIBLE_SHARING_ENTRYPOINT,actionSurface:i,origin:"previews"===i?a.SHARE_ACTION_ORIGIN_TYPE.PREVIEW_PAGE:"split_share_menu"===o?a.SHARE_ACTION_ORIGIN_TYPE.BROWSE_GLOBAL_ACTIONS:a.SHARE_ACTION_ORIGIN_TYPE.BROWSE_FILE_ACTIONS};p("copy_link",!0),n(),y.fn(u)}),[n,t,p,d,y]),x=$e.default.useCallback((()=>{const e=t.$props.get(),i=e.actionSurface,n=e.actionElement,o=e.fileOrFolder;m(),d.select(Me).emit({action:mt.COPY_LINK,fileExtension:a.getExtension$1(o),isDir:o.is_dir,actionSurface:i,actionElement:n})}),[t,m,d]),v=$e.default.useCallback((()=>{const e=t.$props.get(),i=e.actionSurface,s=e.actionElement,l=e.fileOrFolder,r=e.shareModalExtras,c=t.$openFlexibleEntryPointTimestamp.get(),_=c&&Date.now()-c,u=e.user;d.select(Re).emit({action:mt.INVITE,fileExtension:a.getExtension$1(l),timeToAction:_,isDir:l.is_dir,actionSurface:i,actionElement:s}),p("invite",!0),n(),o.share(l,u,null,Object.assign(Object.assign({},r),{isFromFlexibleSharingEntrypoint:!0}))}),[t,n,p,d]),h=$e.default.useCallback((()=>{const e=t.$props.get(),i=e.actionSurface,n=e.actionElement,o=e.fileOrFolder;m(),d.select(Me).emit({action:mt.INVITE,fileExtension:a.getExtension$1(o),isDir:o.is_dir,actionSurface:i,actionElement:n})}),[t,m,d]),S=$e.default.useCallback((()=>{const e=t.$props.get(),i=e.actionSurface,n=e.actionElement,o=e.fileOrFolder;m(),d.select(Me).emit({action:mt.TRANSFER,fileExtension:a.getExtension$1(o),isDir:o.is_dir,actionSurface:i,actionElement:n})}),[t,m,d]),w=$e.default.useCallback((()=>{const e=t.$props.get(),i=e.actionSurface,o=e.actionElement,s=e.fileOrFolder,c=t.$openFlexibleEntryPointTimestamp.get(),_=c&&Date.now()-c,u=e.user;d.select(Re).emit({action:mt.TRANSFER,fileExtension:a.getExtension$1(s),timeToAction:_,isDir:s.is_dir,actionSurface:i,actionElement:o}),p(mt.TRANSFER,!0),n();const m=`${a.RetrievalSourceValue.BROWSE}_${a.ActionSurfaceLogValue.FLEXIBLE_SHARING_ENTRYPOINT}`,f=[s];l.asyncShowBrowseEntryPointOnboardingModal({primaryActionOnClick:()=>r.redirectToCreateTransferWithFiles(f,m),userId:u.id})}),[t,n,p,d]),T=$e.default.useMemo((()=>{if(f.is_dir){return"ON"===E&&r.folderEligibleForTransfer(f)}return g.find((e=>e.app_id===o.TRANSFER_FP_APP_ID))}),[g,E,f]);return $e.default.createElement("div",{className:Ze},$e.default.createElement(c.EqualizeHeightsGroup,null,$e.default.createElement("div",{className:Je},$e.default.createElement(ut,{buttonSize:T?"large":"small",icon:_.EmailLine,onClick:v,onMouseEnter:h,onMouseLeave:()=>p("invite",!1),label:(O=s.intl,O.formatMessage({id:"ZWKEgA",defaultMessage:"Share via email"})),variant:"secondary"}),$e.default.createElement(ut,{buttonSize:"small",icon:a.LinkLine,onClick:b,onMouseEnter:x,onMouseLeave:()=>p("copy_link",!1),label:Fe(s.intl),variant:"secondary"}),T&&$e.default.createElement(ut,{buttonSize:"small",icon:u.SendLine,onClick:w,onMouseEnter:S,onMouseLeave:()=>p("transfer",!1),label:Ae(s.intl),variant:"secondary"}))));var O};Et.displayName="Body",t.FlexibleShareEntryPoint=pt}));
//# sourceMappingURL=c_sharing_flexible-share-entry-point_index.js-vflooqWfq.map
