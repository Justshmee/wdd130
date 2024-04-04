define(["require","exports","./c_init_data_runtime","react","./e_folder_viewer_src_main","./c_core_i18n","./c_files_view_data_store","./c_flows_redux_store","./c_flows_redux_actions"],(function(e,t,i,n,o,r,a,l,c){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}var u=d(n);function s({operation:t,folderFqPath:n,parentFqPath:l,surface:c,entryPoint:d,initialActionType:s,initialActionData:_,initialScreen:f,initialTriggerType:h,source:w,actionElement:P}){return i.__awaiter(this,void 0,void 0,(function*(){const{WorkflowBuilderComponent:i}=yield new Promise((function(t,i){e(["./c_flows_workflow_builder"],t,i)}));var m,p;m=i,p={operation:t,folderFqPath:n,parentFqPath:l,surface:c,entryPoint:d,initialActionType:s,initialScreen:f,initialActionData:_,initialTriggerType:h,source:w,actionElement:P},o.Modal$1.showInstance(u.default.createElement(o.Provider,{store:a.getStoreForBrowse()},u.default.createElement(r.Provider,{value:r.intl},u.default.createElement(m,Object.assign({},p)))))}))}t.asyncLaunchAddOrEditAutoFolderModal=function({fqPath:t,nsId:n,user:o,entryPoint:r,source:a,actionElement:d,shouldBlockInheritanceForCurrentPath:u}){return i.__awaiter(this,void 0,void 0,(function*(){if(u){l.getStoreForAutomations().dispatch(c.setInheritanceBlockingFqPaths([t]))}const{getFolderRuleForFqPath:i}=yield new Promise((function(t,i){e(["./c_components_modals_browse_adapter"],t,i)})),n=yield i(t);let o="add";null!=(null==n?void 0:n.folderRule)&&null!=(null==n?void 0:n.actionTag)&&(o="edit"),yield s({operation:o,folderFqPath:t,surface:"browse",entryPoint:r,source:a,actionElement:d})}))},t.asyncLaunchWorkflowBuilder=s}));
//# sourceMappingURL=c_flows_utils_async_modal_launchers.js-vflMGZb75.map
