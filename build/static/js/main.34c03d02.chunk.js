(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{242:function(e,t,a){},244:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(27),l=a.n(s),i=a(12),o=a(13),c=a(15),u=a(14),p=a(16),d=a(94),h=a.n(d),m=a(65),f=a.n(m),b=a(246),v=a(247),g=a(39),y=a(28),x=a(95),E=a.n(x),j={underlineStyle:{borderColor:"#bababa"}},w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getType=function(e){return"password_plain"===e?"password":e},a.state={type:"",visited:!1,data:e.value||"",errorText:e.errorText},a.validate=a.validate.bind(Object(y.a)(Object(y.a)(a))),a._validate=a._validate.bind(Object(y.a)(Object(y.a)(a))),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=this.validate(e.target.value);this.setState({data:e.target.value,visited:!0,errorText:t}),this.props.onChange(e)}},{key:"componentDidUpdate",value:function(e){var t=this.props.value;t!==e.value&&this.setState({data:t,errorText:this.validate(t)})}},{key:"_validate",value:function(e){var t=this.validate(this.state.data);return this.setState({errorText:t}),null===t}},{key:"validate",value:function(e){var t=this.props,a=t.required,n=t.floatingLabelText,r=t.type,s=new RegExp(this.state.pattern);if(!e&&a)return"".concat(n," can not be empty");if(!e&&!a)return null;if(null===e&&a)return"".concat(n," can not be empty");if("text"===this.props.type){if(e.length>15)return"".concat(n," can not be more than 15 characters");if(e.length<3)return"".concat(n," can not be less than 3 characters")}if("password"===this.props.type){if(e.length>15)return"".concat(n," can not be more than 15 characters");if(e.length<3)return"".concat(n," can not be less than 3 characters")}if(!s.test(e)){if("text"===r)return"invalid user name";if("password"===r)return"invalid password format"}return null}},{key:"onBlur",value:function(){if(!this.state.visited){var e=this.props.required,t=this.props.autoFocus,a=this.props.floatingLabelText;this.setState({visited:!0}),this.state.data||(e||t)&&this.setState({errorText:"".concat(a," can not be empty")},function(){return!1})}}},{key:"getPattern",value:function(e){return"password"===e.type?"^[A-Z0-9]{5}(?:List)?$":"^.+$"}},{key:"componentWillMount",value:function(){this.setState({pattern:this.getPattern(Object(g.a)({},this.props))})}},{key:"render",value:function(){var e=this.props,t=e.required,a=e.floatingLabelText,n=e.type,s=t?r.a.createElement("span",null,a,r.a.createElement("span",{className:"error-text"},"*")):r.a.createElement("span",null,a);return r.a.createElement(E.a,Object.assign({value:this.state.data},this.props,{type:this.getType(n),floatingLabelText:s,className:this.props.disabled?"input-disabled":"",errorText:this.props.errorText||this.state.errorText,inputStyle:{boxShadow:"none"},onBlur:this.onBlur.bind(this),onChange:this.handleChange.bind(this),fullWidth:!0,underlineStyle:j.underlineStyle,id:"textinput_"+(this.props.name&&this.props.name.replace(/\./g,"_")||this.props.floatingLabelText&&this.props.floatingLabelText.replace(/\./g,"_")||"unnamed")}))}}]),t}(r.a.Component),T=a(43),O=a.n(T),S={underlineStyle:{borderColor:"#bababa"},floatingLabelStyle:{color:"black"},floatingLabelFocusStyle:{color:"black"},style:{width:"100%"}},k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).canProceed=function(){var e=!0;if(null==a.state.data)return!1;if(void 0===a.state.data.username||a.state.data.username<1)return a.setState({error:!0,errorType:"username_empty"}),!1;if(void 0===a.state.data.password||a.state.data.password<1)return a.setState({error:!0,errorType:"password_empty"}),!1;a.fields.forEach(function(t){null!==t&&(t._validate()||(e=!1))});var t=a.props.data.filter(function(e){return console.log("jsadksahjlajfljlaf;>>>",e),e.name===a.state.data.username&&e.birth_year===a.state.data.password});return console.log("success text !!!!!!!!!!!",t),t&&t.length>1&&(e=!0),e&&(alert("success !"),a.props.history.push("/search")),e},a.changeUsername=function(e){a.setState({data:Object(g.a)({},a.state.data,{username:e.target.value})})},a.changePassword=function(e){a.setState({data:Object(g.a)({},a.state.data,{password:e.target.value})})},a.state={data:{username:"",password:""},visited:{},error:null,errorType:null},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.fields=[],console.log("state data <><><><><><",this.state),r.a.createElement("div",{className:"login-style card container"},r.a.createElement("p",{className:"login-tittle"},"Login"),r.a.createElement("div",{className:"login-field-layout"},r.a.createElement("div",null,r.a.createElement(w,{type:"text",ref:function(t){e.fields.push(t)},required:!0,name:"username",fullWidth:!0,value:this.state.data.username,onBlur:this.setVisited,underlineStyle:S.underlineStyle,hintText:"Luke Skywalker",onChange:this.changeUsername,floatingLabelText:"Enter user name",errorText:this.state.error&&"username_empty"===this.state.errorType?"user name empty":null})),r.a.createElement("div",null,r.a.createElement(w,{type:"password",ref:function(t){e.fields.push(t)},required:!0,name:"password",fullWidth:!0,value:this.state.data.password,onBlur:this.setVisited,underlineStyle:S.underlineStyle,hintText:"19BBY",onChange:this.changePassword,floatingLabelText:"Enter password",errorText:this.state.error&&"password_empty"===this.state.errorType?"password empty":null})),r.a.createElement("div",{className:"btn-login-container"},r.a.createElement(O.a,{className:"save-button",labelStyle:{color:"#fff",textTransform:"capitalize"},label:"Login",style:{borderRadius:"20px"},primary:!0,onClick:this.canProceed})),this.state.error&&r.a.createElement("span",{className:"section-heading-error error-msg-style"}," entered credentials are not correct")))}}]),t}(n.Component),C=a(44),L=a.n(C),P=a(96),N=a.n(P),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={peopleData:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;L.a.get("https://swapi.co/api/people/").then(function(t){e.setState({peopleData:t.data.results})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.peopleData,a=e.planentData;return console.log("planet data <<<<",t,a),r.a.createElement("div",null,r.a.createElement("div",{className:"col-lg-12 image-style"},r.a.createElement("img",{className:"app-main full-width fix-header",alt:"",src:N.a})),r.a.createElement("div",null,r.a.createElement(k,{data:t})))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).changePlanet=function(e){var t=e.target.value;if(a.setState({searchText:t}),a.state.planets.results){var n=a.state.planets.results.filter(function(e){return!0===e.name.toLowerCase().includes(t.toLowerCase())});a.setState({relatedPlanet:n})}},a.state={searchText:"",planets:[],relatedPlanet:[],selectedPlanet:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;L.a.get("https://swapi.co/api/planets/").then(function(e){return e.json()}).then(function(t){return e.setState({planets:t})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},r.a.createElement(w,{name:"searchedPlanet",fullWidth:!0,value:this.state.data.searchedPlanet,hintText:"Jupiter",onChange:this.changePlanet,floatingLabelText:"Enter planet name"})),r.a.createElement("ul",null,this.state.relatedPlanet.map(function(t){return r.a.createElement("div",null,r.a.createElement("p",{className:"list-options",key:t.name},e.props.props))})),r.a.createElement("div",{className:"btn-login-container"},r.a.createElement(O.a,{className:"save-button",labelStyle:{color:"#fff",textTransform:"capitalize"},label:"Login",style:{borderRadius:"20px"},primary:!0,onClick:this.canProceed})),r.a.createElement("div",{className:"text-center selectedPlanet"},""!==this.state.selectedPlanet&&r.a.createElement("p",null,"You submitted the planet ",this.state.selectedPlanet)))}}]),t}(n.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{muiTheme:f()()},r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(v.a,{exact:!0,path:"/",component:_}),r.a.createElement(v.a,{path:"/search",component:B})))))}}]),t}(n.Component);a(242);l.a.render(r.a.createElement(D,null),document.getElementById("root"))},96:function(e,t,a){e.exports=a.p+"static/media/fwd-login-splash.03c32693.jpg"},99:function(e,t,a){e.exports=a(244)}},[[99,2,1]]]);
//# sourceMappingURL=main.34c03d02.chunk.js.map