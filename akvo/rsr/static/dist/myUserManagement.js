!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1063)}({1063:function(e,t,n){"use strict";var a,r,o,s,l,c,i,m,u,p;var d=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var r=n[a].trim();if(r.substring(0,e.length+1)==e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}("csrftoken");function h(){a=ReactBootstrap.Button,r=ReactBootstrap.MenuItem,o=ReactBootstrap.Modal,s=ReactBootstrap.SplitButton,l=ReactBootstrap.Table;var e=React.createClass({displayName:"InviteRow",getInitialState:function(){return{button_text:"+",button_style:"success"}},handleRowClick:function(){"success"===this.state.button_style?(this.props.addRow(),this.setState({button_text:"x",button_style:"danger"})):this.props.deleteRow(this.props.rowId)},render:function(){var e=m.map(function(e){return React.createElement("option",{key:e.id,value:e.id},e.name)}),t=u.map(function(e){return React.createElement("option",{key:e.id,value:e.id},e.name)}),n=React.createElement(a,{bsStyle:this.state.button_style,onClick:this.handleRowClick},this.state.button_text);return React.createElement("tr",{className:"invite-row"},React.createElement("td",null,React.createElement("input",{className:"form-control",type:"email",placeholder:p.email_text,maxLength:"254",required:"required"})),React.createElement("td",null,React.createElement("select",{className:"form-control org-select",defaultValue:""},React.createElement("option",{value:""},p.select_org_text),e)),React.createElement("td",null,React.createElement("select",{className:"form-control role-select",defaultValue:""},React.createElement("option",{value:""},p.select_role_text),t)),React.createElement("td",null,n))}}),t=React.createClass({displayName:"InviteTable",getInitialState:function(){return{rows:[0]}},addRow:function(){for(var e=this.state.rows,t=0,n=0;n<e.length;n++)e[n]>t&&(t=e[n]);e.push(t+1),this.setState({rows:e})},deleteRow:function(e){for(var t=this.state.rows,n=0;n<t.length;n++)if(t[n]===e){t.splice(n,1),this.setState({rows:t});break}},render:function(){var t=this,n=this.state.rows.map(function(n){return React.createElement(e,{key:n,rowId:n,addRow:t.addRow,deleteRow:t.deleteRow})});return React.createElement(l,{striped:!0,id:"invite-table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,p.email_text),React.createElement("th",null,p.organisations_text),React.createElement("th",null,p.role_text),React.createElement("th"))),React.createElement("tbody",null,n))}}),n=React.createClass({displayName:"InviteModal",getInitialState:function(){return{disable:!1,successes:0,showModal:!1}},close:function(){this.setState({showModal:!1})},open:function(){this.setState({showModal:!0})},inviteApiCall:function(e,t,n,a){var r=this;if(""===e&&""===t&&""===n);else{var o=new XMLHttpRequest;o.open("POST","/rest/v1/invite_user/?format=json",!0),o.setRequestHeader("X-CSRFToken",d),o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.onload=function(){var e=o.status;if(201===e){a.classList.add("has-success");var t=a.querySelector("button");t.parentNode.removeChild(t),setTimeout(function(){1===a.parentNode.querySelectorAll("tr").length&&r.close(),a.parentNode.removeChild(a)},3e3)}else if(400===e)for(var n=JSON.parse(o.responseText).missing_data,s=0;s<n.length;s++){var l=a.querySelectorAll("td"),c=n[s];"email"===c?l[0].classList.add("has-error"):"organisation"===c?l[1].classList.add("has-error"):"group"===c&&l[2].classList.add("has-error")}else a.classList.add("has-error")};var s="user_data="+JSON.stringify({email:e,organisation:t,group:n});o.send(s)}},sendInvite:function(){this.setState({disable:!0});for(var e=document.getElementById("invite-table").querySelectorAll(".invite-row"),t=0;t<e.length;t++){var n=e[t],a=n.querySelector("input").value,r=n.querySelector(".org-select").value,o=n.querySelector(".role-select").value;this.inviteApiCall(a,r,o,n)}var s=this;setTimeout(function(){s.setState({disable:!1})},5e3)},render:function(){var e=React.createElement(a,{className:"btn btn-default btn-sm",onClick:this.open},React.createElement("i",{className:"glyphicon glyphicon-user"})," +"),n=React.createElement(o,{show:this.state.showModal,onHide:this.close,bsSize:"large"},React.createElement(o.Header,{closeButton:!0},React.createElement(o.Title,null,p.invite_users_text)),React.createElement(o.Body,null,p.invite_users_heading,React.createElement("hr"),React.createElement(t)),React.createElement(o.Footer,null,React.createElement(a,{onClick:this.close},p.close_text),React.createElement(a,{onClick:this.sendInvite,bsStyle:"success",disabled:this.state.disable},p.invite_users_text)));return React.createElement("div",null,e,n)}}),h=React.createClass({displayName:"DeleteModal",getInitialState:function(){return{showModal:!1,showButton:!1}},componentDidMount:function(){this.props.employment.is_approved;this.isMounted()&&this.setState({showButton:!0})},close:function(){this.setState({showModal:!1})},open:function(){this.setState({showModal:!0})},deleteEmployment:function(){$.ajax({type:"DELETE",url:"/rest/v1/employment/"+this.props.employment.id+"/?format=json",success:function(e){this.handleDelete()}.bind(this),error:function(e,t,n){console.error(this.props.url,t,n.toString())}.bind(this)})},handleDelete:function(){this.props.onDeleteToggle()},render:function(){var e;e=this.state.showButton?React.createElement(a,{bsStyle:"danger",bsSize:"xsmall",onClick:this.open},"X"):React.createElement("span");var t=React.createElement(o,{show:this.state.showModal,onHide:this.close,employment:this.props.employment,onDeleteToggle:this.props.onDeleteToggle},React.createElement(o.Header,{closeButton:!0},React.createElement(o.Title,null,p.remove_user_text)),React.createElement(o.Body,null,p.remove_text+" "+this.props.employment.user.first_name+" "+this.props.employment.user.last_name+" "+p.from_text+" "+this.props.employment.organisation.name+"?"),React.createElement(o.Footer,null,React.createElement(a,{onClick:this.close},p.close_text),React.createElement(a,{onClick:this.deleteEmployment,bsStyle:"danger"},p.remove_button_text))),n=this.props.employment.group;return n&&"Admins"===n.name&&!i?React.createElement("span",null):React.createElement("span",null,e,t)}}),R=React.createClass({displayName:"ApproveModal",getInitialState:function(){return{showModal:!1,showButton:!1}},componentDidMount:function(){var e=this.props.employment.is_approved;this.setState({showButton:!e})},close:function(){this.setState({showModal:!1})},open:function(){this.setState({showModal:!0})},onApprove:function(){this.setState({showButton:!1})},approveEmployment:function(){var e=this;$.ajax({type:"POST",url:"/rest/v1/employment/"+this.props.employment.id+"/approve/?format=json",success:function(t){e.handleApprove()}.bind(this),error:function(e,t,n){console.error(this.props.url,t,n.toString())}.bind(this)})},handleApprove:function(){this.onApprove(),this.close()},render:function(){var e;e=this.state.showButton?React.createElement(a,{bsStyle:"success",bsSize:"xsmall",onClick:this.open},"√"):React.createElement("span");var t=React.createElement(o,{show:this.state.showModal,onHide:this.close},React.createElement(o.Header,{closeButton:!0},React.createElement(o.Title,null,p.approve_user_text)),React.createElement(o.Body,null,p.approve_text+" "+this.props.employment.user.first_name+" "+this.props.employment.user.last_name+" "+p.at_text+" "+this.props.employment.organisation.name+"?"),React.createElement(o.Footer,null,React.createElement(a,{onClick:this.close},p.close_text),React.createElement(a,{onClick:this.approveEmployment,bsStyle:"success"},p.approve_button_text))),n=this.props.employment.group;return n&&"Admins"===n.name&&!i?React.createElement("span",null):React.createElement("span",null,e,t)}}),f=(React.createClass({displayName:"CountryJobTitle",render:function(){var e=this.props.country,t=this.props.job_title;if(""===e&&""===t)return React.createElement("span",null," ");var n="(";return""!==t&&(n+=t),""!==e&&(""!==t&&(n+=" "),n+=p.in_text+" "+e),n+=")",React.createElement("span",{className:"small"},n,"   ")}}),React.createClass({displayName:"Employment",getInitialState:function(){return{visible:!0,error:!1,button_title:"("+p.none_text+")",loading:!1}},componentDidMount:function(){var e=this.props.employment.group;this.isMounted()&&null!==e&&this.setState({button_title:e.name})},isLoading:function(e){this.setState({loading:e})},onDelete:function(){this.setState({visible:!1})},setGroupName:function(e){this.setState({button_title:e})},disableButton:function(){var e=this.props.employment.group;return this.state.loading||e&&"Admins"===e.name&&!i},render:function(){var e=this,t=this.props.employment.id,n=this.setGroupName,a=this.state.button_title,o=this.isLoading,l=this.props.employment.other_groups.map(function(s){var l;return l=e.state.loading?React.createElement("i",{className:"fa fa-spin fa-spinner"}):React.createElement("span"),React.createElement(r,{eventKey:s.id,key:s.id,onSelect:function(){o(!0),$.ajax({type:"POST",url:"/rest/v1/employment/"+t+"/set_group/"+s.id+"/?format=json",success:function(t){n(s.name),e.setState({error:!1}),o(!1)}.bind(this),error:function(t,r,s){var l;n(a),o(!1);try{l=JSON.parse(t.responseText)}catch(e){l={error:t.statusText||e}}"Employment already exists."==l.error&&e.setState({error:!0})}.bind(this)})}},l,s.name)});return this.state.visible?e.state.error?React.createElement("span",null,React.createElement(s,{id:t,title:this.state.button_title,disabled:this.disableButton()},l),"  ",React.createElement(h,{employment:this.props.employment,onDeleteToggle:this.onDelete})," ",React.createElement(R,{employment:this.props.employment}),React.createElement("br"),React.createElement("span",{className:"employment-error"},p.employment_exists)):React.createElement("span",null,React.createElement(s,{id:t,title:this.state.button_title,disabled:this.disableButton()},l),"  ",React.createElement(h,{employment:this.props.employment,onDeleteToggle:this.onDelete})," ",React.createElement(R,{employment:this.props.employment})):React.createElement("span")}})),y=React.createClass({displayName:"EmploymentRow",render:function(){var e,t=this.props.employment,n=t.user,a=React.createElement(f,{employment:t,key:t.id});return n.can_be_restricted&&(e=n.is_restricted?p.edit_access+" ("+n.restricted_count+")":p.restrict_access),React.createElement("tr",null,React.createElement("td",null,n.email),n.first_name||n.last_name?React.createElement("td",null,n.first_name," ",n.last_name):React.createElement("td",null,p.user_with_id,n.id),React.createElement("td",null,t.organisation.name),n.can_be_restricted?React.createElement("td",null,React.createElement("a",{href:"/myrsr/user_projects/"+n.id+"/"},e)):React.createElement("td",null),React.createElement("td",{className:"text-right"},a))}}),E=React.createClass({displayName:"UserTable",getInitialState:function(){return{employments:[]}},componentDidMount:function(){var e=this.props.source;this.isMounted()&&this.setState({employments:e})},render:function(){var e=this.state.employments.map(function(e){return React.createElement(y,{key:e.id,employment:e})}),t=React.createElement("th",null,p.email_text),n=React.createElement("th",null,p.name),a=React.createElement("th",null,p.organisation),r=React.createElement("th",null,p.project_access),o=React.createElement("th",{className:"text-right"},p.role_text),s=React.createElement("tr",null,t,n,a,r,o),c=React.createElement("thead",null,s),i=React.createElement("tbody",null,e);return React.createElement(l,{striped:!0},c,i)}});ReactDOM.render(React.createElement(E,{source:c}),document.getElementById("user_table")),ReactDOM.render(React.createElement(n),document.getElementById("invite_button"))}var R=function(e,t,n){var a=document.createElement("script");a.src=e,a.onload=t,a.onreadystatechange=t,n.appendChild(a)};document.addEventListener("DOMContentLoaded",function(){c=JSON.parse(document.getElementById("initial-employment-data").innerHTML),i=JSON.parse(document.getElementById("org-admin").innerHTML).org_admin,m=JSON.parse(document.getElementById("organisation-data").innerHTML),u=JSON.parse(document.getElementById("roles").innerHTML),p=JSON.parse(document.getElementById("user-management-text").innerHTML),"undefined"!=typeof React&&"undefined"!=typeof ReactDOM&&"undefined"!=typeof ReactBootstrap?h():function(){function e(){var e=document.getElementById("react-bootstrap").src;R(e,h,document.body)}console.log("No React, load again.");var t=document.getElementById("react").src;R(t,function(){var t=document.getElementById("react-dom").src;R(t,e,document.body)},document.body)}()})}});
//# sourceMappingURL=myUserManagement.js.map