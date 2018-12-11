!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1060)}({1060:function(e,t,n){"use strict";var r,a,o,s,i,l,c="/rest/v1/typeaheads/organisations?format=json",m="/rest/v1/typeaheads/countries?format=json";var p=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),r=0;r<n.length;r++){var a=n[r].trim();if(a.substring(0,e.length+1)==e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t}("csrftoken");function d(){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(e.readyState==XMLHttpRequest.DONE&&200==e.status){var t=JSON.parse(e.responseText);c=t.results,(s=c).forEach(function(e){var t,n,r=(t=e.name,n=e.long_name,t===n?t:n?t+" ("+n+")":t);e.filterOption=e.name+" "+e.long_name,e.displayOption=r});var n=new XMLHttpRequest;n.onreadystatechange=function(){if(n.readyState==XMLHttpRequest.DONE&&200==n.status){var e=JSON.parse(n.responseText);r=e.results,function(){l=ReactTypeahead.Typeahead;var e=React.createClass({displayName:"Employment",getInitialState:function(){return{visible:!0,deleting:!1}},handleDelete:function(){this.setState({deleting:!0});var e=new XMLHttpRequest,t=this;e.onreadystatechange=function(){if(e.readyState==XMLHttpRequest.DONE&&(t.setState({deleting:!1}),e.status>=200&&e.status<400))return t.props.removeEmployment(t.props.employment.id),!1},e.open("DELETE","/rest/v1/employment/"+this.props.employment.id+"/",!0),e.setRequestHeader("X-CSRFToken",p),e.send()},render:function(){if(!this.state.visible)return React.createElement("li",{});var e;if(e=this.state.deleting?React.createElement("i",{className:"fa fa-spinner fa-spin"}):React.createElement("i",{className:"fa fa-times help-block-error",style:{cursor:"pointer"},onClick:this.handleDelete}),this.props.employment.is_approved){var t=React.createElement("i",null,"(",this.props.employment.group.name.slice(0,-1),")"),n=React.createElement("li",{},this.props.employment.organisation_full.name," ",t," ",e);return React.createElement("b",null,n)}var r=React.createElement("i",null,"(",a.not_approved_text,")");return React.createElement("li",{},this.props.employment.organisation_full.name," ",r," ",e)}}),t=React.createClass({displayName:"EmploymentList",render:function(){var t=this,n=this.props.employments.map(function(n){return React.createElement(e,{key:n.id,employment:n,removeEmployment:t.props.removeEmployment})});return React.createElement("ul",null,n)}}),n=React.createClass({displayName:"OrganisationInput",typeaheadCallback:function(e){document.getElementById("organisationInput").setAttribute("value",e.id)},render:function(){var e={id:"organisationInput"};this.props.loading&&(e.disabled=!0);var t=React.createElement(l,{placeholder:a.organisation_text,maxVisible:10,options:s,onOptionSelected:this.typeaheadCallback,displayOption:"displayOption",filterOption:"filterOption",customClasses:{input:"form-control"},inputProps:e});return React.createFactory("div")({className:this.props.orgError?"form-group has-error":"form-group"},t)}}),c=React.createClass({displayName:"ErrorNode",render:function(){return this.props.visible?React.createElement("div",{className:"help-block-error"},"* "+this.props.errorText):React.createElement("span")}}),m=React.createClass({displayName:"CountryInput",typeaheadCallback:function(e){document.getElementById("countryInput").setAttribute("value",e.code)},render:function(){var e={id:"countryInput"};this.props.loading&&(e.disabled=!0);var t=React.createElement(l,{placeholder:a.country_text,maxVisible:5,options:r,onOptionSelected:this.typeaheadCallback,displayOption:"name",filterOption:"name",customClasses:{input:"form-control"},inputProps:e});return React.createFactory("div")({className:"form-group"},t)}}),d=React.createClass({displayName:"JobTitleInput",render:function(){var e=React.createFactory("input"),t={className:"form-control",type:"text",placeholder:a.job_title_text,id:"jobtitleInput"};this.props.loading&&(t.disabled=!0);var n=e(t);return React.createFactory("div")({className:"form-group"},n)}}),u=React.createClass({displayName:"FormButton",handleAddEmployment:function(){this.props.addEmployment()},render:function(){var e=React.createElement("i",{className:"fa fa-spinner fa-spin"}),t=React.createFactory("button");return this.props.loading?t({onClick:this.handleAddEmployment,className:"btn btn-default btn-sm",type:"button",disabled:!0},e," ",a.sending_request_text):t({onClick:this.handleAddEmployment,className:"btn btn-default btn-sm",type:"button"},a.request_join_text)}}),y=React.createClass({displayName:"AddEmploymentForm",getInitialState:function(){return{buttonText:a.request_join_text,loading:!1,showError:!1,errorText:""}},handleAddEmployment:function(e){this.props.addEmployment(e)},checkExistingEmployment:function(e){return this.props.existingEmployment(e)},getFormData:function(){return{organisation:document.getElementById("organisationInput").getAttribute("value"),country:document.getElementById("countryInput").getAttribute("value"),job_title:document.getElementById("jobtitleInput").value}},addEmployment:function(){var e=this.getFormData();if(this.setState({loading:!0,showError:!1,errorText:""}),""===e.organisation)return this.setState({loading:!1,showError:!0,errorText:a.required_text}),!1;try{var t=parseInt(e.organisation);if(this.checkExistingEmployment(t))return this.setState({loading:!1,showError:!0,errorText:a.already_connected_text}),!1}catch(e){return this.setState({loading:!1,showError:!0,errorText:a.not_connected_text}),!1}var n=new XMLHttpRequest,r=this;n.onreadystatechange=function(){if(n.readyState==XMLHttpRequest.DONE){if(r.setState({loading:!1}),200==n.status){r.setState({loading:!1,showError:!1,errorText:""});var e=JSON.parse(n.responseText);return r.handleAddEmployment(e),!1}return 409==n.status?(r.setState({loading:!1,showError:!0,errorText:a.already_connected_text}),!1):(r.setState({loading:!1,showError:!0,errorText:a.not_connected_text}),!1)}},n.open("POST",this.props.link+"?format=json",!0),n.setRequestHeader("X-CSRFToken",p),n.setRequestHeader("Content-type","application/json; charset=UTF-8"),n.send(JSON.stringify(e))},render:function(){var e=React.createElement("h4",null,a.connect_employer_text),t=React.createElement(c,{visible:this.state.showError,errorText:this.state.errorText}),r=React.createElement(n,{orgError:this.state.showError,loading:this.state.loading}),o=React.createElement(m,{loading:this.state.loading}),s=React.createElement(d,{loading:this.state.loading}),i=React.createElement(u,{addEmployment:this.addEmployment,loading:this.state.loading}),l=React.createElement("form",null,t,r,o,s,i);return React.createElement("span",null,e,l)}}),f=React.createClass({displayName:"EmploymentApp",getInitialState:function(){return{employments:[]}},componentDidMount:function(){this.isMounted()&&this.setState({employments:this.props.employments})},existingEmployment:function(e){for(var t=0;t<this.state.employments.length;t++)if(this.state.employments[t].organisation_full.id===e&&"Users"===this.state.employments[t].group.name)return!0;return!1},addEmployment:function(e){this.setState({employments:this.state.employments.concat([e])})},removeEmployment:function(e){for(var t=0;t<this.state.employments.length;t++)if(this.state.employments[t].id===e){var n=this.state.employments;n.splice(t,1),this.setState({employments:n});break}},render:function(){React.createFactory("i")({className:"fa fa-users"});var e=React.createElement("h4",null," ",a.my_organisations_text),n=React.createElement(t,{employments:this.state.employments,removeEmployment:this.removeEmployment}),r=React.createElement(y,{link:this.props.link,org_link:this.props.org_link,country_link:this.props.country_link,addEmployment:this.addEmployment,existingEmployment:this.existingEmployment});return React.createElement("span",null,e,n,r)}});ReactDOM.render(React.createElement(f,{employments:o.user.employments,link:i.link,org_link:i.org_rest_link,country_link:i.country_rest_link}),document.getElementById("organisations"))}()}},n.open("GET",m,!0),n.send()}var c},e.open("GET",c,!0),e.send()}var u=function(e,t,n){var r=document.createElement("script");r.src=e,r.onload=t,r.onreadystatechange=t,n.appendChild(r)};document.addEventListener("DOMContentLoaded",function(){o=JSON.parse(document.getElementById("initial-data").innerHTML),i=JSON.parse(document.getElementById("user-request-link").innerHTML),a=JSON.parse(document.getElementById("my-details-text").innerHTML),"undefined"!=typeof React&&"undefined"!=typeof ReactDOM&&"undefined"!=typeof ReactTypeahead?d():function(){function e(){var e=document.getElementById("react-typeahead").src;u(e,d,document.body)}console.log("No React, load again.");var t=document.getElementById("react").src;u(t,function(){var t=document.getElementById("react-dom").src;u(t,e,document.body)},document.body)}()})}});
//# sourceMappingURL=myDetailsEmployments.js.map