define(["exports","./e_folder_viewer_src_main","./e_edison","./c_core_i18n"],(function(e,o,s,i){"use strict";var l,t,a;e.PaperNewFileTypes=void 0,(l=e.PaperNewFileTypes||(e.PaperNewFileTypes={})).PAPER="paper",l.PAPER_TEMPLATE="papert",l.PAPER_BINDER="binder",function(e){e.PAPER="paper",e.PAPER_TEMPLATE="papert",e.PAPER_BINDER="binder"}(t||(t={})),e.GoogleFileTypes=void 0,(a=e.GoogleFileTypes||(e.GoogleFileTypes={})).GOOGLE_DSS_DOC="gdoc",a.GOOGLE_DSS_SHEET="gsheet",a.GOOGLE_DSS_SLIDES="gslides";const r={[e.GoogleFileTypes.GOOGLE_DSS_DOC]:i.intl.formatMessage({id:"mh13Sm",defaultMessage:"Google Doc"}),[e.GoogleFileTypes.GOOGLE_DSS_SHEET]:i.intl.formatMessage({id:"EA8pnR",defaultMessage:"Google Sheet"}),[e.GoogleFileTypes.GOOGLE_DSS_SLIDES]:i.intl.formatMessage({id:"gYrVaF",defaultMessage:"Google Slides"})};var n;e.PointerFileTypes=void 0,(e.PointerFileTypes||(e.PointerFileTypes={})).SIMPLE_POINTER="dlink",function(e){e.WORD="docx",e.EXCEL="xlsx",e.POWERPOINT="pptx"}(n||(n={}));const g={[n.WORD]:i.intl.formatMessage({id:"cyrNQG",defaultMessage:"Microsoft Word"}),[n.EXCEL]:i.intl.formatMessage({id:"8bvHYq",defaultMessage:"Microsoft Excel"}),[n.POWERPOINT]:i.intl.formatMessage({id:"0brU3J",defaultMessage:"Microsoft Powerpoint"})},_={[e.GoogleFileTypes.GOOGLE_DSS_DOC]:n.WORD,[e.GoogleFileTypes.GOOGLE_DSS_SHEET]:n.EXCEL,[e.GoogleFileTypes.GOOGLE_DSS_SLIDES]:n.POWERPOINT},E={[n.WORD]:e.GoogleFileTypes.GOOGLE_DSS_DOC,[n.EXCEL]:e.GoogleFileTypes.GOOGLE_DSS_SHEET,[n.POWERPOINT]:e.GoogleFileTypes.GOOGLE_DSS_SLIDES};var S,d;e.MicrosoftEditors=void 0,(S=e.MicrosoftEditors||(e.MicrosoftEditors={})).WORD="word",S.EXCEL="excel",S.POWERPOINT="powerpoint",e.NewFileMenuFromType=void 0,(d=e.NewFileMenuFromType||(e.NewFileMenuFromType={})).HOME="new_file_menu_home",d.BROWSE="new_file_menu_browse",d.NAV="new_file_menu_nav",d.DRAG_DROP="new_file_menu_drag_drop",d.GLOBAL_CREATE="new_file_menu_global_create",d.VIDEO="new_file_menu_video",i.intl.formatMessage({id:"GqeH/g",defaultMessage:"preview"}),i.intl.formatMessage({id:"Y9FcUQ",defaultMessage:"Word for the web"}),i.intl.formatMessage({id:"o3mRdr",defaultMessage:"Excel for the web"}),i.intl.formatMessage({id:"RTj2SO",defaultMessage:"PowerPoint for the web"}),i.intl.formatMessage({id:"+HsOFj",defaultMessage:"Google Docs"}),i.intl.formatMessage({id:"cpuRML",defaultMessage:"Google Sheets"}),i.intl.formatMessage({id:"PcJCVL",defaultMessage:"Google Slides"}),i.intl.formatMessage({id:"neBk7u",defaultMessage:"Dropbox Paper"}),i.intl.formatMessage({id:"Rvv7NR",defaultMessage:"Dropbox Paper Template"}),i.intl.formatMessage({id:"X5Hrgk",defaultMessage:"Dropbox Binder"});const p={[e.GoogleFileTypes.GOOGLE_DSS_DOC]:s.static_url("/static/metaserver/static/images/cloud_docs/gdoc-vfljy0OpJ.svg"),[e.GoogleFileTypes.GOOGLE_DSS_SHEET]:s.static_url("/static/metaserver/static/images/cloud_docs/gsheet-vflWVpJ8G.svg"),[e.GoogleFileTypes.GOOGLE_DSS_SLIDES]:s.static_url("/static/metaserver/static/images/cloud_docs/gslides-vflvsGNC8.svg")},O={[e.GoogleFileTypes.GOOGLE_DSS_DOC]:i.intl.formatMessage({id:"+HsOFj",defaultMessage:"Google Docs"}),[e.GoogleFileTypes.GOOGLE_DSS_SHEET]:i.intl.formatMessage({id:"cpuRML",defaultMessage:"Google Sheets"}),[e.GoogleFileTypes.GOOGLE_DSS_SLIDES]:i.intl.formatMessage({id:"PcJCVL",defaultMessage:"Google Slides"})},G={[e.GoogleFileTypes.GOOGLE_DSS_DOC]:[".docx",".gdoc"],[e.GoogleFileTypes.GOOGLE_DSS_SHEET]:[".xlsx",".gsheet"],[e.GoogleFileTypes.GOOGLE_DSS_SLIDES]:[".pptx",".gslides"]},c=new Set(["web"]),f=new Set(["binder","paper","papert","web","gdoc","gsheet","gslides"]),T=new Set(Object.values(e.GoogleFileTypes)),u=new Set(Object.values(n)),M=new Set(["doc","docx","pdf","ppsx","ppt","pptx","jpg","jpeg","png","xls","xlsx","txt","html","gif"]),D=new Set(["doc","docx","pdf","ppt","pptx","key"]),P=new Set(["bmp","jpg","jpeg","png","svg","tiff","webp","gif","heic"]),F=new Set([...D,...P]),L=e=>(e&&"."===e[0]&&(e=e.slice(1)),e?e.toLowerCase():e),y=e=>Boolean(e&&T.has(L(e)));var m;e.ActionSourceValue=void 0,(m=e.ActionSourceValue||(e.ActionSourceValue={})).WEB="web",m.WEB_HOME="web_home",m.WEB_BROWSE="web_browse",m.UNKOWN="unknown";e.CLOUD_DOCS_AMP_NAMESPACE="cloud_docs_perf",e.DSS_TYPE_TO_OPEN_WITH_ICONS=p,e.DSS_TYPE_TO_SUPPORTED_EXTS=G,e.DSS_TYPE_TO_TEXT=O,e.GoogleFileLabels=r,e.GoogleToMicrosoftFileTypes=_,e.LOADING_PAGE_URL="/cloud_docs/new",e.MicrosoftFileLabels=g,e.MicrosoftToGoogleFileTypes=E,e.getGoogleFileTypeByPath=e=>{if(!e)return null;const s=o.file_extension(e);return y(s)?s:null},e.getMicrosoftFileTypeByPath=e=>{if(!e)return null;const s=o.file_extension(e);return(e=>Boolean(e&&u.has(L(e))))(s)?s:null},e.isCloudBasedFileByExtension=e=>Boolean(e&&f.has(L(e))),e.isDocsendSupportedFile=(e,o)=>!!o&&(o=L(o),P.has(o)?e<104857600:F.has(o)&&e<2147483648),e.isGoogleFileByExtension=y,e.isGoogleFileType=e=>T.has(e),e.isHellosignFileByExtension=e=>Boolean(e&&M.has(L(e))),e.isMicrosoftFileType=e=>u.has(e),e.isPointerByExtension=e=>c.has(o.file_extension(e)),e.isPointerFileType=o=>Object.values(e.PointerFileTypes).includes(o)}));
//# sourceMappingURL=c_cloud_docs_constants.js-vflAG9y9G.map
