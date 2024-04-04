define(["exports","react","./c_chips_index","./c_chip_index","./e_folder_viewer_src_main","./c_core_i18n","./c_resize-observer-polyfill_dist_ResizeObserver","./c_files_view_data_store","./c_init_data_runtime"],(function(e,t,a,n,i,r,s,l,o){"use strict";function c(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(a){if("default"!==a){var n=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,n.get?n:{enumerable:!0,get:function(){return e[a]}})}})),t.default=e,Object.freeze(t)}var g=c(t);const u=({howManyMore:e,onClick:t,className:a})=>g.default.createElement(i.Text,{size:"small",className:i.cx("itc-show-more-button",{clickable:void 0!==t},a),onClick:t},"+",e),_=function(e){const{showMoreWidth:a=60,containerMaxRows:n=2,itemsToMoreTooltipString:l,expandable:o=!0,renderItem:c,items:_,className:p,showMoreClassName:d,MoreButton:m=u}=e,[h,f]=g.default.useState(_.length),[T,v]=g.default.useState(!1),y=g.default.useMemo((()=>Array(_.length).fill(0).map((e=>t.createRef()))),[_]),[z,E]=t.useState(),x=[];if(_.map(((e,t)=>{(t<=h||T)&&x.push(c({item:e,ref:y[t],index:t}))})),y.length>h&&!T){const e=l(_.slice(h+1));x.push(g.default.createElement(i.Tooltip,{id:"more-button-tooltip",title:e,key:_.length},g.default.createElement(m,{howManyMore:y.length-(h+1),onClick:o?()=>v(!0):void 0,className:d})))}const[C,b]=function(){const e=t.useRef(null),a=t.useRef(),[n,i]=t.useState(),r=t.useCallback((()=>{a.current=new s.index((e=>i(e[0]))),(null==e?void 0:e.current)&&a.current.observe(e.current)}),[e.current]);return t.useLayoutEffect((()=>(r(),()=>{var e;return null===(e=a.current)||void 0===e?void 0:e.disconnect()})),[r]),[e,n]}();return g.default.useEffect((()=>{z&&(f(_.length),E(null))}),[null==b?void 0:b.contentRect.width]),g.default.useLayoutEffect((()=>{var e,t;if(!y||!y[0]||!z||0===z.clientWidth)return void(h!==_.length&&f(_.length));const i=((null===(t=null===(e=y[0])||void 0===e?void 0:e.current)||void 0===t?void 0:t.offsetHeight)||1)-1,r=(n-1)*i,s=y.findIndex((e=>{const t=e.current;if(t){const e=z.offsetLeft+z.clientWidth-(t.offsetLeft+t.clientWidth),s=t.offsetTop-z.offsetTop;if(e<a&&s>=r||s>=n*i)return!0}return!1}));f(s<0?_.length:s-1)}),[_.length,z]),g.default.createElement("div",{ref:C,className:i.cx("itc-container",p)},g.default.createElement("div",{key:_.length,className:"itc-items-container",ref:e=>E(e)},x),T&&g.default.createElement(i.Text,{size:"small",key:"show_less",id:"show-less",onClick:()=>v(!1),className:i.cx("itc-show-more-button clickable",d)},r.intl.formatMessage({id:"QSkw6O",defaultMessage:"show less"})))},p=i.requireCssWithComponent(_,["/static/metaserver/static/css/teams/admin/components/item_truncation_container-vflnj951-.css"]);i.injectInternalStyle("/static/metaserver/static/js/tagging/components/manual_tagging.module.out-vfl_iaZKX.css",(e=>"._tg-search_1pnzi_1 input._tg-input_1pnzi_1._tg-input-small-font-override_1pnzi_1{font-size:var(--type__body__small--fontsize)}._tg-search_1pnzi_1 ._tg-input-hashtag-accessory_1pnzi_5{line-height:var(--type__body__large--lineheight)}._tg-title_1pnzi_9{display:flex;flex-direction:row;justify-content:space-between;margin-bottom:var(--spacing__unit--0_5)}._tg-empty-state_1pnzi_16{display:flex;flex-direction:column;padding:var(--spacing__unit--3) var(--spacing__unit--2) var(--spacing__unit--3) var(--spacing__unit--2);text-align:start}._right-rail-tags-container_1pnzi_24{margin-top:var(--spacing__unit--1_5)}._right-rail-tags-container_1pnzi_24 ._right-rail-tag-chip_1pnzi_28{margin:var(--spacing__unit--0_5) var(--spacing__unit--0_5) 0 0}._tag-section-tooltip_1pnzi_32{color:var(--color__faint__text);display:block}._tags-container_1pnzi_37 ._tag-chip_1pnzi_37{max-width:100%}._tags-container_1pnzi_37 ._tag-chip_1pnzi_37._highlighted_1pnzi_41{background-color:var(--color__attention__background--faint)}._tags-container_1pnzi_37:hover ._tag-chip_1pnzi_37._highlighted_1pnzi_41:hover{background-color:var(--color__attention__background)}._tags-container_1pnzi_37 ._tag-chip-spaced_1pnzi_49{margin-right:var(--spacing__unit--1);margin-top:var(--spacing__unit--1)}"));const d={tgSearch:"_tg-search_1pnzi_1",tgInput:"_tg-input_1pnzi_1",tgInputSmallFontOverride:"_tg-input-small-font-override_1pnzi_1",tgInputHashtagAccessory:"_tg-input-hashtag-accessory_1pnzi_5",tgTitle:"_tg-title_1pnzi_9",tgEmptyState:"_tg-empty-state_1pnzi_16",rightRailTagsContainer:"_right-rail-tags-container_1pnzi_24",rightRailTagChip:"_right-rail-tag-chip_1pnzi_28",tagSectionTooltip:"_tag-section-tooltip_1pnzi_32",tagsContainer:"_tags-container_1pnzi_37",tagChip:"_tag-chip_1pnzi_37",highlighted:"_highlighted_1pnzi_41",tagChipSpaced:"_tag-chip-spaced_1pnzi_49"};function m(e){return e.map((e=>l.formatTag(e.tag_text))).join(" ")}const h=e=>{const{tags:t,highlightedIndexes:s=[],onTagClick:o,onTagDelete:c,containerClassName:u,chipClassName:_,chipSize:h,useDigChip:f,digChipSize:T}=e;if(0===t.length)return null;const v=t.filter(((e,t)=>!s.includes(t))),y=t.filter(((e,t)=>s.includes(t))),z={auto:!0,placement:"top"};return g.default.createElement(p,Object.assign({items:[...y,...v],itemsToMoreTooltipString:m,renderItem:({item:e,ref:t,index:s})=>{const u=s<y.length,p=c?a.InputChip:a.FilterChip,m=l.isSuggestedTag(e),v=m?{withIconLeft:g.default.createElement(i.UIIcon,{src:i.Twinkle2Line,size:"small"})}:{},E=f?g.default.createElement(n.Chip,{key:e.tag_text,ref:t,className:_,onClick:t=>null==o?void 0:o(e,t),size:T},g.default.createElement(n.Chip.Content,null,l.formatTypedTag(e))):g.default.createElement(p,Object.assign({},v,{key:e.tag_text,ref:t,className:i.cx(d.tagChip,{highlighted:u},"tag-chip-spaced"===_?d.tagChipSpaced:"right-rail-tag-chip"===_?d.rightRailTagChip:_),onClick:t=>null==o?void 0:o(e,t),onDelete:c?()=>null==c?void 0:c(e):void 0,size:h||"small"}),g.default.createElement(i.Truncate,{tooltipControlProps:z},l.formatTypedTag(e)));return m?g.default.createElement(i.Tooltip,{title:r.intl.formatMessage({id:"NXiDuW",defaultMessage:"Dropbox added this tag"})},E):E},className:i.cx(d.tagsContainer,"right-rail-tags-container"===u?d.rightRailTagsContainer:u)},e))};h.displayName="TagsContainer";const f=({placeholderText:e})=>g.createElement("div",{className:d.tgEmptyState},g.createElement(i.Text,{variant:"label",size:"small",color:"faint",tagName:"p"},e));f.displayName="EmptyState";const T=e=>{var{disabled:t,children:a}=e,n=o.__rest(e,["disabled","children"]);return t?g.createElement(g.Fragment,null,a):g.createElement(i.Tooltip,Object.assign({},n),a)};T.displayName="Tooltip";const v=({hasFocus:e})=>g.createElement(i.Text,{size:"small",color:e?"standard":"faint",className:d.tgInputHashtagAccessory},"#");v.displayName="LeftAccessory";const y=({user:e,maxTagsReached:t,readOnly:n=!1,excludeResults:r,onSelection:s,onInputFocus:o,onStartTyping:c,onInputBlur:u,getStrings:_,allTagsSuggestions:p,fetchAllTagsSuggestions:m})=>{const[h,y]=g.useState(""),[z,E]=g.useState([]),[x,C]=g.useState(!1),{addTypeaheadEmptyState:b,createTagPrefix:S,addTag:w,invalidCharsError:k,maxTagsReachedError:N,tooLongError:I,alreadyExistsError:R,readOnlyError:M}=_();g.useEffect((()=>{m({user:e})}),[]),g.useEffect((()=>{const e=h.toLowerCase();if(L(e)||void 0===p)return void E([]);const t=l.trimHashtags(e),a=l.getTagsSuggestions(t,p).filter(l.isUserGeneratedTag).map((e=>e.tag_text)).filter((e=>!r.includes(e)));E(a)}),[h,p,r]);const O=e=>g.createElement(a.Typeahead.Row,{key:`@${e}`,id:`@${e}`,value:e,withTitle:g.createElement(i.Text,{size:"small"},l.formatTag(e))}),j=e=>g.createElement(a.Typeahead.Row,{key:e,value:e,withTitle:S?g.createElement(i.Text,{size:"small"},S+" ",g.createElement(i.Text,{size:"small",isBold:!0},l.formatTag(e))):g.createElement(i.Text,{size:"small"},l.formatTag(e)),id:e}),L=e=>!(/^#*[\p{L}0-9_]+$/iu.test(e)&&e.length<=32||/^\#*$/i.test(e)),F=({currentTarget:{value:e}})=>{0===h.length&&1===e.length&&(null==c||c()),y(e)},P=t?N:n?M:void 0,W=h.toLowerCase(),H=l.trimHashtags(W),A=""!==H&&0===z.length&&r.includes(H),D=L(W)||A,B=D||r.includes(H)||z.includes(H)||""===H?[]:[W],$=n||t;return g.createElement(a.Typeahead.Wrapper,{onSelection:e=>{y(""),s(e)},onFocus:()=>{null==o||o(),C(!0)},onBlur:()=>{null==u||u(h),C(!1)},className:d.tgSearch},(({getTriggerProps:e,getContentProps:t,closeMenu:n})=>g.createElement(g.Fragment,null,g.createElement(T,{disabled:!$,id:"more-button-tooltip",title:P},g.createElement(i.TextInput,Object.assign({id:"trigger"},e({onChange:F}),{value:h,"aria-label":w,placeholder:w,disabled:$,withLeftAccessory:g.createElement(v,{hasFocus:x||h.length>0}),autoComplete:"off",isInvalid:D,className:i.cx(d.tgInput,d.tgInputSmallFontOverride),onKeyPress:e=>((e,t)=>{if(e.key===i.Key_enum.Key.Enter&&""!==h){if(L(h)||r.includes(H))return;const e=l.trimHashtags(h).toLowerCase();s(e),y(""),t({})}})(e,n)}))),D&&g.createElement(i.FormHelperText,{variant:"alert",id:"bad-parms-input-helper"},g.createElement(i.UIIcon,{src:i.FailLine,size:"small"}),h.length>=32?I:A?R:k),g.createElement(a.Typeahead.Container,Object.assign({},t(),{auto:!1,isEmptyQuery:0===h.length,placement:"bottom-start",emptyPrompt:g.createElement(f,{placeholderText:b})}),g.createElement(a.Typeahead.Results,{results:z.slice(0,3),renderRow:O}),g.createElement(a.Typeahead.Results,{results:B,renderRow:j})))))};y.displayName="TagsSearch",e.ItemTruncationContainerWithoutCss=_,e.TagsContainer=h,e.TagsSearch=y,e.classes=d}));
//# sourceMappingURL=c_tagging_components_tags_search.js-vflbJdabS.map
