define(["exports","./c_init_data_runtime","react","./e_folder_viewer_src_main","./c_file_viewer_collection_viewer","./c_common_activation-tooltip_index","./c_growth_user_action_tracker","./c_src_sink_index","./c_lodash-es_lodash","./c_react_query_helpers_helpers","./c_api_v2_client_base","./c_core_uri","./c_core_attribution_header","./c_csrf","metaserver/static/js/modules/constants/viewer","./e_edison","./c_apex-metrics_src_types","./c_init_data_edison","./c_core_xhr","./e_core_exception","./c_api_v2_noauth_client","./c_core_i18n","metaserver/static/js/langpack","./c_core_notify","react-dom","metaserver/static/js/modules/constants/web_experience_constants","metaserver/static/js/modules/constants/sharing","metaserver/static/js/modules/constants/locales","metaserver/static/js/modules/constants/file_viewer_configuration","metaserver/static/js/modules/constants/file_viewer_feature_experiments","metaserver/static/js/modules/constants/time","metaserver/static/js/modules/constants/login_and_register","metaserver/static/js/modules/constants/fingerprintjs_constants","./c_security_crypto","./c_growth_ui_api","./c_esm_misc_util","./c_files_view_data_store","./c_browse_models","./c_base64","./c_flux_store_listener","./c_pap-events_navigation_navigate_to_replay","./c_hooks_use_stabilized_callback","./c_stormcrow_gating_factory","./c_stormcrow_types_log_exposure","metaserver/static/js/modules/constants/pdf_editing","./c_ui-icon_line_restore","./c_growth_ui_teams_web_actions_logger_events","metaserver/static/js/modules/constants/search","./c_toolkit_dist_redux-toolkit","./c_home_store","./c_plugin_utils_getImageDefaultSizes","metaserver/static/js/modules/constants/unity","./c_referrer_cleansing_redirect","./c_cloud_docs_types","./c_keymaster","./c_es_hooks_useDispatch","./c_core_utils_browser_detection","./c_ui-icon_line_zoom-out","./c_campaigns_campaign_enums","./c_bolt_metaserver_clients","./c_skeleton_index","./c_ui-icon_line_team","./c_ui-icon_line_zip","./c_stormcrow_explicit_exposure_logging","./c_flows_logging_flows_loggers","./c_spectrum_util_raf_throttle","./c_flux_base_store","./c_cloud_docs_constants","./c_chips_index","./c_chip_index","metaserver/static/js/modules/constants/contacts","./c_spectrum_colorized_icon","./c_spectrum_svg_icon_bundle","./c_spectrum_positioned_portal","./c_user_centric_perf_metrics_component_visually_complete_component_visually_complete_calculator","./c_plugin_utils_drawWatermarkOnCanvas","./c_resize-observer-polyfill_dist_ResizeObserver","./c_badges_index","./c_badge_index","./c_react-error-boundary"],(function(e,t,o,i,r,s,n,c,_,a,l,u,d,p,g,v,m,T,f,y,h,w,S,b,k,E,x,C,P,j,I,O,R,A,N,L,z,M,B,W,D,F,G,H,V,U,Y,q,$,J,K,Q,X,Z,ee,te,oe,ie,re,se,ne,ce,_e,ae,le,ue,de,pe,ge,ve,me,Te,fe,ye,he,we,Se,be,ke,Ee){"use strict";function xe(e){return e&&e.__esModule?e:{default:e}}var Ce=xe(o);function Pe(e,o){return t.__awaiter(this,void 0,void 0,(function*(){if(e)try{yield e.track(o)}catch(e){c.getMetricsReporter().createStats({ns:"preview_tour",name:"track_action_failed"}).record(1)}}))}const je=({file:e,shareToken:c,user:_,linkOwnerName:a})=>{var l;const u=i.getExtension$1(e),[d,p]=o.useState(!1),[g,v]=o.useState(0),[m,T]=o.useState(!1),f=o.useRef(!1),y=()=>{_||window.localStorage.setItem("rrc_tooltip_tour_engaged","true")};let h;_&&(h=new n.PreviewTooltipTourTracker(_.id)),o.useEffect((()=>{f.current?T(!0):f.current=!0}),[e]);const w=r.getTooltipTourFileType(u),S=(e=>e?r.TooltipTourSurface.sharingLoggedInM0:r.TooltipTourSurface.sharingLoggedOutM0)(_),b=r.TooltipTourConfig[S][w],k=(()=>{if(d)return b[g];const e=w!==r.TooltipTourFileType.default&&_;return c.linkType===i.SharedLinkType.Content?e?r.PreviewTourTooltipType.SCLSharingEntrypointWithEditableFile:r.PreviewTourTooltipType.SCLSharingEntrypointWithNonEditableFile:e?r.PreviewTourTooltipType.ShmodelSharingEntrypointWithEditableFile:r.PreviewTourTooltipType.ShmodelSharingEntrypointWithNonEditableFile})(),E=r.TooltipTypeConfig[k],x=d?g+1:0,C=d?b.length:0,P=1===C,j=x===C,I=P?{}:{currentStep:x,totalSteps:C},O=o.useCallback(((t,o)=>{o.file_id=null==e?void 0:e.file_id,o.file_ext=u;const r=c.linkType===i.SharedLinkType.Shmodel?i.ShareTibEventLogger.get_shmodel_extra_for_logging(c,i.get_href()):i.ShareTibEventLogger.get_scl_extra_for_logging(c,i.get_href());o=Object.assign(Object.assign({},o),r),_?i.ShareTibEventLogger.log(_.id,t,i.SHARE_ACTION_ORIGIN_TYPE.SHARING_PREVIEW_PAGE,o):i.ShareTibEventLogger.log_unauth(t,i.SHARE_ACTION_ORIGIN_TYPE.SHARING_PREVIEW_PAGE,o)}),[c,_,e,u]);o.useEffect((()=>{O(i.TiburonEventName.RRCReceiverPreviewsTooltipTourView,{tour_surface:S,tooltip:k,current_step:x,total_steps:C})}),[S,k,x,C,O]);const R=e=>{O(i.TiburonEventName.RRCReceiverPreviewsTooltipTourClick,{tour_surface:S,tooltip:k,current_step:x,total_steps:C,cta_type:e})},A=((e,t,o)=>o?e||t?"gotit":"next":"showMe")(P,j,d);let N=E?s.getNodeByTooltipDataSelector(E.selector):void 0;const L=o.useMemo((()=>{if(N){const e=window.getComputedStyle(N),t={};return(null==E?void 0:E.additionalStyles)&&Object.keys(null==E?void 0:E.additionalStyles).forEach((o=>t[o]=e.getPropertyValue(o))),Object.assign({zIndex:e.zIndex,backgroundColor:e.backgroundColor,position:e.position,padding:e.padding},t)}}),[N]),z=()=>{var e;if(N&&L){let t;for(t in L){if(null===(e=null==E?void 0:E.stylesToPreserve)||void 0===e?void 0:e.includes(t))continue;const o=L[t];N.style[t]=null!=o?o:""}}};o.useEffect((()=>z),[]);const M=o.useCallback((()=>t.__awaiter(void 0,void 0,void 0,(function*(){T(!0),r.setCachedUserSeenTour(!0),yield Pe(h,n.PreviewTooltipTourActions.DISMISS)}))),[h]);o.useEffect((()=>N&&d&&E.shouldDismissTourOnClickInsideHighlights?(N.addEventListener("click",M),()=>{N.removeEventListener("click",M)}):()=>{}),[N,d,h,E,M]),o.useEffect((()=>{if(N&&d){const e=new MutationObserver((e=>{N&&!document.body.contains(N)&&M()}));return e.observe(document.body,{childList:!0,subtree:!0}),()=>e.disconnect()}return()=>{}}),[N,d,h,E,M]);const B=()=>{var e;if(N=s.getNodeByTooltipDataSelector(E.selector),N){const t=window.getComputedStyle(N).position,o=Object.assign({zIndex:"1",backgroundColor:"var(--dig-color__background__raised)",padding:"8px",position:"static"===t?"relative":t},null==E?void 0:E.additionalStyles);let i;for(i in o)(null===(e=null==E?void 0:E.stylesToPreserve)||void 0===e?void 0:e.includes(i))||(N.style[i]=o[i])}},W=()=>{y(),z(),j?T(!0):v((e=>e+1)),R(A)},D=()=>t.__awaiter(void 0,void 0,void 0,(function*(){y(),z(),T(!0),r.setCachedUserSeenTour(!0),yield Pe(h,n.PreviewTooltipTourActions.DISMISS)})),F="skip",G=()=>{D(),R(F)},H=()=>t.__awaiter(void 0,void 0,void 0,(function*(){y(),p(!0),r.setCachedUserSeenTour(!0),R(A),yield Pe(h,n.PreviewTooltipTourActions.START)}));return null===(l=E.extraAction)||void 0===l||l.call(E),m?null:d?Ce.default.createElement(s.ActivationTooltip,Object.assign({},E,{primaryButtonType:A,onPrimaryButtonClick:W,onTooltipClose:D,onComponentWillAnchor:B,disableClicksOutside:!0},I)):Ce.default.createElement("div",{"data-testid":"sharing-preview-tour-entrypoint-tooltip"},Ce.default.createElement(s.ActivationTooltip,Object.assign({},E,{titleFormatter:{linkOwnerName:a},primaryButtonType:A,onPrimaryButtonClick:H,secondaryButtonType:F,onSecondaryButtonClick:G})))};je.displayName="SharingPreviewTour",e.SharingPreviewTour=je}));
//# sourceMappingURL=c_file_viewer_preview_tour_sharing_tour.js-vflPq3EWW.map
