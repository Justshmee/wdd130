define(["exports","react","react-dom"],(function(t,e,o){"use strict";function n(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(o){if("default"!==o){var n=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(e,o,n.get?n:{enumerable:!0,get:function(){return t[o]}})}})),e.default=t,Object.freeze(e)}var s=n(e),l=n(o);class i extends s.Component{constructor(){super(...arguments),this.portalRootElement=null,this.portalContentElementRef=null}componentWillUnmount(){this.portalRootElement&&this.unMountPortal()}componentDidMount(){!this.portalRootElement&&this.props.isShowInitially&&this.mountPortal()}mountPortal(t){if(!this.portalRootElement){this.portalRootElement=document.createElement("div");(this.props.parentElement||document.body).appendChild(this.portalRootElement);const e=s.createElement("div",{"aria-hidden":!1,className:this.props.className||"mc-portal-content",id:this.props.id,role:this.props.role,ref:t=>this.portalContentElementRef=t},this.props.children);l.render(e,this.portalRootElement,t)}}unMountPortal(){if(this.portalRootElement){l.unmountComponentAtNode(this.portalRootElement);(this.props.parentElement||document.body).removeChild(this.portalRootElement),this.portalRootElement=null,this.portalContentElementRef=null}}render(){return null}}i.displayName="Portal";class r extends s.Component{constructor(t){super(t),this.portalInstance=null,this.portalContentElementRef=null,this.wrapperElementRef=null,this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.handleOnFocus=this.handleOnFocus.bind(this),this.handleOnBlur=this.handleOnBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.closePortal=this.closePortal.bind(this),this.handleKeyEvent=this.handleKeyEvent.bind(this),this.handleScrollEvent=this.handleScrollEvent.bind(this),this.state={isShown:!!t.isShowInitially}}componentDidMount(){this.state.isShown&&this.portalInstance&&this.portalInstance.mountPortal((()=>{this.resolvePortalPosition()}))}componentDidUpdate(){this.state.isShown&&this.portalInstance?(this.mountListeners(),this.props.onWillShow&&this.props.onWillShow(),this.portalInstance.mountPortal((()=>{this.props.onDidShow&&this.props.onDidShow(),this.resolvePortalPosition()}))):this.portalInstance&&(this.unMountListeners(),this.props.onWillClose&&this.props.onWillClose(),this.portalInstance.unMountPortal(),this.wrapperElementRef=null)}componentWillUnmount(){this.portalInstance&&this.portalInstance.unMountPortal()}mountListeners(){document.addEventListener("keydown",this.handleKeyEvent,!1),document.addEventListener("scroll",this.handleScrollEvent,!1)}unMountListeners(){document.removeEventListener("keydown",this.handleKeyEvent,!1),document.removeEventListener("scroll",this.handleScrollEvent,!1)}handleOnFocus(t){this.props.showOnClick||this.showPortal()}handleOnBlur(t){this.props.closeOnBlur&&this.closePortal()}handleMouseOver(t){this.props.showOnMouseMove&&this.showPortal()}handleMouseOut(t){this.props.showOnMouseMove&&this.hidePortal()}handleClick(t){this.props.showOnClick&&(this.showPortal(),t.stopPropagation())}handleKeyEvent(t){27===t.keyCode&&this.closePortal()}handleScrollEvent(){this.state.isShown&&this.resolvePortalPosition()}closePortal(){this.hidePortal(),this.props.onDidClose&&this.props.onDidClose()}showPortal(){this.setState({isShown:!0})}hidePortal(){this.setState({isShown:!1})}resolvePortalPosition(){if(this.portalInstance&&this.wrapperElementRef){const t=function(t,e,o,n=0){let s={top:0,left:0};const l=t.getBoundingClientRect(),i=e.getBoundingClientRect();switch(o){case"below":s={top:l.top+l.height+n,left:l.left+l.width/2-i.width/2};break;case"left":s={top:l.top+l.height/2-i.height/2,left:l.left-i.width-n};break;case"right":s={top:l.top+l.height/2-i.height/2,left:l.left+l.width+n};break;case"above":s={top:l.top-i.height-n,left:l.left+l.width/2-i.width/2}}return s}(this.wrapperElementRef.childElementCount<2&&this.wrapperElementRef.firstElementChild||this.wrapperElementRef,this.portalInstance.portalContentElementRef,this.props.positioning||"above",this.props.positionOffset);this.portalInstance.portalContentElementRef.style.top=t.top+"px",this.portalInstance.portalContentElementRef.style.left=t.left+"px"}}render(){return s.createElement("div",{"aria-describedby":this.props.id,onMouseOver:this.handleMouseOver,onMouseLeave:this.handleMouseOut,onFocusCapture:this.handleOnFocus,onBlur:this.handleOnBlur,onClick:this.handleClick,className:this.props.wrapperClassName?this.props.wrapperClassName:"mc-positioned-portal-wrapper",ref:t=>this.wrapperElementRef=t},s.createElement(i,{ref:t=>this.portalInstance=t,className:"mc-positioned-portal-content",parentElement:this.props.portalParentElement},this.props.renderContent&&this.props.renderContent()||null),this.props.children)}}r.displayName="PositionedPortal",t.Portal=i,t.PositionedPortal=r}));
//# sourceMappingURL=c_spectrum_positioned_portal.js-vflpCQ8Qs.map
