!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1059)}({1059:function(e,t,r){"use strict";var n;function a(){for(var e=React.createClass({displayName:"MorePartnersToolTip",render:function(){var e=[];for(var t in this.props.partnerships)this.props.partnerships.hasOwnProperty(t)&&e.push(this.props.partnerships[t]);var r=this,n=0,a=e.map(function(t){if(n++,r.props.primaryOrgId!==t[0].organisation.id){for(var a,o=[],i=0;i<t.length;i++)o.indexOf(t[i].iati_organisation_role_label)<0&&o.push(t[i].iati_organisation_role_label);return a=n===e.length?React.createElement("span",null):React.createElement("hr",null),React.createElement("div",{className:"extra-partner-entry"},React.createElement("a",{href:"/en/organisation/"+t[0].organisation.id+"/"},t[0].organisation.long_name),React.createElement("br",null),o.join(", "),a)}});return React.createElement("div",{className:"tooltip right in"},React.createElement("div",{className:"tooltip-arrow"}),React.createElement("div",{className:"tooltip-inner"},a))}}),t=React.createClass({displayName:"MorePartnersApp",getInitialState:function(){return{hover:!1,hoverClosing:!1,partnerships:null}},componentDidMount:function(){new XMLHttpRequest;var e="more-partners-"+this.props.projectId;this.setState({partnerships:this.processPartners(JSON.parse(document.getElementById(e).innerHTML))})},processPartners:function(e){for(var t={},r=0;r<e.length;r++){var n=e[r];null!==n.organisation&&(n.organisation.id in t?t[n.organisation.id].push(n):t[n.organisation.id]=[n])}return t},partnersCount:function(){var e=-1,t=this.state.partnerships;for(var r in t)t.hasOwnProperty(r)&&++e;return e},handleMouseEnter:function(){this.setState({hover:!0,hoverClosing:!1})},handleMouseLeave:function(){if(this.state.hover){var e=this;this.setState({hoverClosing:!0}),setTimeout(function(){e.state.hoverClosing&&e.setState({hover:!1,hoverClosing:!1})},3e3)}},showTooltip:function(){return this.state.hover?React.createElement(e,{partnerships:this.state.partnerships,primaryOrgId:this.props.primaryOrgId}):React.createElement("span",null)},generateLink:function(){this.props.projectPage?function(e){for(var t=document.querySelectorAll(".project-tab"),r=document.querySelectorAll(".tab-link.selected"),n=document.querySelector("."+e),a=document.querySelector('.tab-link[href="#'+e+'"]'),o=0;o<t.length;o++)t[o].style.display="none";for(var i=0;i<r.length;i++)r[i].classList.remove("selected");n.style.display="block",a.classList.add("selected")}("partners"):window.location.assign(window.location.pathname.substring(0,4)+"project/"+this.props.projectId+"#partners")},render:function(){if(null===this.state.partnerships)return React.createElement("a",{href:"#partners",onClick:this.generateLink,className:"small moreLink tab-link"},React.createElement("i",{className:"fa fa-spin fa-spinner"})," ",n.partners);if(this.partnersCount()>0){var e=n.partners;return 1===this.partnersCount()&&(e=n.partner),React.createElement("div",null,React.createElement("a",{href:"#partners",onClick:this.generateLink,className:"small moreLink tab-link",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},"+ ",this.partnersCount()," ",e),this.showTooltip())}return React.createElement("span",null)}}),r=document.querySelectorAll(".morePartners"),a=0;a<r.length;a++){var o=r[a],i=o.getAttribute("projectId"),s=o.getAttribute("primaryOrgId"),l=o.getAttribute("projectPage");ReactDOM.render(React.createElement(t,{projectId:parseInt(i),primaryOrgId:parseInt(s),projectPage:"true"===l}),r[a])}}csrftoken=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var r=document.cookie.split(";"),n=0;n<r.length;n++){var a=r[n].trim();if(a.substring(0,e.length+1)==e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t}("csrftoken");var o=function(e,t,r){var n=document.createElement("script");n.src=e,n.onload=t,n.onreadystatechange=t,r.appendChild(n)};document.addEventListener("DOMContentLoaded",function(){n=JSON.parse(document.getElementById("more-link-translations").innerHTML),JSON.parse(document.getElementById("data-endpoints").innerHTML),"undefined"!=typeof React&&"undefined"!=typeof ReactDOM?a():function(){console.log("No React, load again.");var e=document.getElementById("react").src;o(e,function(){var e=document.getElementById("react-dom").src;o(e,a,document.body)},document.body)}()})}});
//# sourceMappingURL=morePartners.js.map