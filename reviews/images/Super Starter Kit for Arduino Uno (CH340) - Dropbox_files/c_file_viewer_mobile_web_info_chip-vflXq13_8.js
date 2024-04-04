define(["exports","react","./e_folder_viewer_src_main","./c_core_utils_time_utils","./c_preview_audio_video_helper_utils"],(function(e,t,a,i,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var l=r(t);a.injectInternalStyle("/static/js/file_viewer/mobile_web/info_chip.module.out-vflFmS0Cd.css",(e=>"._infoChipLayer_87mrn_1{align-self:flex-start}._infoChip_87mrn_1{background-color:rgba(30,25,25,.6);border-radius:var(--dig-radius__small);margin-left:var(--dig-spacing__micro__small);margin-top:var(--dig-spacing__micro__small);min-width:-webkit-max-content;min-width:max-content;padding:var(--dig-spacing__micro__xsmall) var(--dig-spacing__micro__small);position:absolute}"));const o=({content:e})=>l.default.createElement(a.Layer,{isPortaled:!1,className:"_infoChipLayer_87mrn_1"},l.default.createElement("div",{className:"_infoChip_87mrn_1"},l.default.createElement(a.ThemeProvider,{mode:"dark"},(({getThemeProps:t})=>l.default.createElement(a.Text,Object.assign({size:"small",isBold:!0},t()),e)))));o.displayName="MobileInfoChip";const s=({currentPage:e,totalPages:t})=>{const i=a.useIntl().formatMessage({id:"ThxFth",defaultMessage:"{currentPage} of {totalPages}"},{currentPage:e,totalPages:t});return l.default.createElement(o,{content:i})};s.displayName="MobilePageInfoChip";const _=({player:e,duration:t})=>{const[a,r]=l.default.useState(0);return l.default.useEffect((()=>{e&&n.setupVideoJsEvents(e,{timeupdate:()=>r(e.currentTime())})}),[e]),t?l.default.createElement(o,{content:i.formatTime(a,t)}):null};_.displayName="MobileTimestampInfoChip",e.MobilePageInfoChip=s,e.MobileTimestampInfoChip=_}));
//# sourceMappingURL=c_file_viewer_mobile_web_info_chip.js-vflG4eTne.map
