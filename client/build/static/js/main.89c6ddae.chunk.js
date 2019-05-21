(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(30),o=a.n(r),c=a(2),l=(a(74),a(17)),i=a.n(l),u=(a(75),a(76),a(77),a(21)),m=a(18),p=a(3),h=a(4),d=a(7),f=a(5),g=a(6),b=a(62),E=a.n(b),v=a(11),O=a.n(v),y=function(e){return{type:"SAVE_USER",payload:e}},j=function(){return{type:"REMOVE_USER"}},S=function(e,t,a){return{type:"AUTH_STATUS",payload:{status:e,css:t,msg:a}}},N=function(e){return{type:"SEARCH_USER",payload:e}},k=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(s)))).logout=function(){O.a.delete("/api/users/logout",{headers:{"x-auth":a.props.user.auth.token}}).then(function(e){a.props.props.history.push("/login"),a.props.dispatch(j()),localStorage.removeItem("user"),a.props.socket.emit("logout",a.props.user.auth.id)})},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){i()("body").on("click",function(){i()(".dropDownMenu").slideUp()}),i()(".dropdown").on("click",function(e){e.stopPropagation(),i()(this).siblings().slideToggle()})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"top themeBg"},s.a.createElement("img",{className:"userIcon",src:"https://via.placeholder.com/100x100",alt:""}),s.a.createElement("div",{className:"menu"},s.a.createElement("div",null,s.a.createElement("button",{className:"dropdown"},s.a.createElement("i",{className:"fa fa-ellipsis-v"})),s.a.createElement("div",{className:"dropDownMenu"},s.a.createElement("button",{onClick:function(){e.logout()}},"Logout")))))}}]),t}(s.a.Component),w=Object(c.b)(function(e){return{user:e.user}})(k),C=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(s)))).searchUser=function(e){var t=e.target.value.toLowerCase(),n=a.props.user.users.filter(function(e){return e.fullname.toLowerCase().includes(t)});a.props.dispatch(N(n))},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"search themeBg"},s.a.createElement("input",{type:"text",placeholder:"Search Here",onChange:this.searchUser}),s.a.createElement("i",{className:"fa fa-search"}))}}]),t}(s.a.Component),_=Object(c.b)(function(e){return{user:e.user}})(C),L=function(){return s.a.createElement("div",{className:"spinner-border"})},U=function(e,t){return{type:"SELECT_USER",payload:{user:e,fullname:t}}},A=function(e){return{type:"IS_LOADED",payload:e}},x=function(e){return{type:"SHOW_MESSAGES",payload:e}},R=function(e){return{type:"SEND_MESSAGE",payload:e}},B=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).selectUser=function(e,t){a.props.dispatch(U(e,t)),O.a.get("/api/chat/messages/".concat(e),{headers:{"x-auth":a.props.user.auth.token}}).then(function(e){a.props.dispatch(x(e.data)),a.props.dispatch(A(!0))})},a.state={isLoaded:!1},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/api/chat/users",{headers:{"x-auth":this.props.user.auth.token}}).then(function(t){var a=t.data.filter(function(t){return t._id!==e.props.user.auth.id});e.props.dispatch(function(e){return{type:"SAVE_ALL_USERS",payload:e}}(a)),e.setState(function(){return{isLoaded:!0}})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"users"},this.state.isLoaded?this.props.user.filteredUsers.map(function(t){return s.a.createElement("div",{key:t._id,className:"item",onClick:function(){e.selectUser(t._id,t.fullname)}},s.a.createElement("img",{className:"userIcon",src:"https://via.placeholder.com/100x100",alt:""}),s.a.createElement("div",{className:"details"},s.a.createElement("h4",null,t.fullname),s.a.createElement("p",null,"...")))}):s.a.createElement("div",{className:"text-center mt-4 mb-4"},s.a.createElement(L,null)))}}]),t}(s.a.Component),D=Object(c.b)(function(e){return{user:e.user,chat:e.chat}})(B),M=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"leftWrapper"},s.a.createElement(w,{props:this.props.props,socket:this.props.socket}),s.a.createElement(_,null),s.a.createElement(D,null))}}]),t}(s.a.Component),T=Object(c.b)(function(e){return{user:e.user}})(M),I=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(s)))).handleClose=function(){a.props.dispatch(A(!1))},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"top themeBg"},s.a.createElement("button",{className:"backButton",onClick:function(){e.handleClose()}},s.a.createElement("i",{className:"fa fa-chevron-left"})),s.a.createElement("img",{className:"userIcon",src:"https://via.placeholder.com/100x100",alt:""}),s.a.createElement("div",{className:"menu"},s.a.createElement("div",{className:"name"},s.a.createElement("h4",null,this.props.chat.fullname),s.a.createElement("p",null,"...")),s.a.createElement("div",null,s.a.createElement("button",{className:"dropdown"},s.a.createElement("i",{className:"fa fa-ellipsis-v"})),s.a.createElement("div",{className:"dropDownMenu"}))))}}]),t}(s.a.Component),H=Object(c.b)(function(e){return{user:e.user,chat:e.chat}})(I),W=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){var e=this.messageList.scrollHeight-this.messageList.clientHeight;this.messageList.scrollTop=e>0?e:0}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"msgBox",ref:function(t){e.messageList=t}},this.props.chat.messages.map(function(t){return s.a.createElement("div",{key:t._id,className:t.from===e.props.user.auth.id?"rightMsg":"leftMsg"},t.message)}))}}]),t}(s.a.Component),F=Object(c.b)(function(e){return{user:e.user,chat:e.chat}})(W),V=a(63),G=a.n(V),J=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).handleChange=function(e){e.persist(),a.setState(function(){return{message:e.target.value}})},a.handleSubmit=function(e){e.preventDefault();var t={message:a.state.message,to:a.props.chat.id,from:a.props.user.auth.id,sentAt:Date.now(),_id:G()()};a.setState(function(){return{message:""}}),O.a.post("/api/chat/messages",t,{headers:{"x-auth":a.props.user.auth.token}}).then(function(e){a.props.dispatch(R(e.data)),a.props.socket.emit("sendMessage",{from:a.props.user.auth.id,to:a.props.chat.id,message:e.data})}).catch(function(e){console.log(e)})},a.state={message:""},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"msgInput"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{type:"text",placeholder:"Type your message",onChange:this.handleChange,value:this.state.message}),s.a.createElement("button",null,s.a.createElement("i",{className:"fa fa-paper-plane"}))))}}]),t}(s.a.Component),P=Object(c.b)(function(e){return{user:e.user,chat:e.chat}})(J),$=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.socket.emit("addUser",this.props.user.auth.id);var e=this;this.props.socket.on("newMessage",function(t){t.from===e.props.chat.id&&t.to===e.props.user.auth.id&&e.props.dispatch(R(t.message))})}},{key:"render",value:function(){return s.a.createElement("div",{className:"rightWrapper"},this.props.chat.isLoaded&&s.a.createElement(s.a.Fragment,null,s.a.createElement(H,null),s.a.createElement("div",{className:"msg"},s.a.createElement(F,{socket:this.props.socket}),s.a.createElement(P,{socket:this.props.socket}))))}}]),t}(s.a.Component),q=Object(c.b)(function(e){return{user:e.user,chat:e.chat}})($),z=E()("/"),K=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={isLoaded:!1},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.user.auth?this.setState(function(){return{isLoaded:!0}}):this.props.history.push("/login"),document.title="Chat Room"}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.state.isLoaded&&s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"wrapper"},s.a.createElement(T,{props:this.props,socket:z}),s.a.createElement(q,{socket:z}))))}}]),t}(s.a.Component),Q=Object(c.b)(function(e){return{user:e.user}})(K),X=a(20),Y=function(e){function t(e){var a;Object(p.a)(this,t);var n=e.user.formStatus;return(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t={username_email:a.state.username_email,password:a.state.password};a.setState(function(){return{submitBtn:""}}),a.props.dispatch(S(!1,"","")),O.a.post("/api/users/login",t).then(function(e){e.data.errors?a.setState(function(){return{formStatus:{status:!0,msg:e.data.errors,css:"danger"},password:"",submitBtn:"Login"}}):(a.props.dispatch(y(e.data)),localStorage.setItem("user",JSON.stringify(e.data)),a.props.history.push("/"))})},a.handleChange=function(e){e.persist(),a.setState(function(){return Object(X.a)({},e.target.name,e.target.value)})},a.state={username_email:"",password:"",formStatus:{status:n?n.status:"",msg:n?n.msg:"",css:n?n.css:""},submitBtn:"Login"},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){document.title="Login"}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"loginBlock"},s.a.createElement("div",null,s.a.createElement("h2",null,"Login "),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{type:"text",name:"username_email",value:this.state.username_email,onChange:this.handleChange,className:"form-control",placeholder:"Username / Email"}),s.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,className:"form-control",placeholder:"Password"}),this.state.formStatus.status&&s.a.createElement("p",{className:"formStatus text-".concat(this.state.formStatus.css)},this.state.formStatus.msg),s.a.createElement("div",{className:"loginFooter"},s.a.createElement("button",{type:"submit",className:"btn"},"Login"===this.state.submitBtn?"Login":s.a.createElement("i",{className:"fa fa-spin fa-spinner"})),s.a.createElement(u.b,{to:"/register"},"Create an account"))))))}}]),t}(s.a.Component),Z=Object(c.b)(function(e){return{user:e.user}})(Y),ee=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).handleChange=function(e){e.persist(),a.setState(function(){return Object(X.a)({},e.target.name,e.target.value)})},a.handleSubmit=function(e){e.preventDefault();var t={fullname:a.state.fullname,username:a.state.username,email:a.state.email,password:a.state.password};a.setState(function(){return{submitBtn:""}}),O.a.post("/api/users/register",t).then(function(e){e.data.errors?a.setState(function(){return{errors:e.data.errors,submitBtn:"Register"}}):(a.props.dispatch(S(!0,"success","Registered Successfully")),a.props.history.push("/login"))})},a.state={fullname:"",username:"",email:"",password:"",errors:{},submitBtn:"Register"},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"loginBlock"},s.a.createElement("div",null,s.a.createElement("h2",null,"Register "),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{type:"text",name:"fullname",value:this.state.fullname,onChange:this.handleChange,className:"form-control",placeholder:"Full Name"}),this.state.errors.fullname&&s.a.createElement("p",{className:"text-danger"},this.state.errors.fullname.message),s.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,className:"form-control",placeholder:"Username"}),this.state.errors.username&&s.a.createElement("p",{className:"text-danger"},this.state.errors.username.message),s.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleChange,className:"form-control",placeholder:"Email"}),this.state.errors.email&&s.a.createElement("p",{className:"text-danger"},this.state.errors.email.message),s.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,className:"form-control",placeholder:"Password"}),this.state.errors.password&&s.a.createElement("p",{className:"text-danger"},this.state.errors.password.message),s.a.createElement("div",{className:"loginFooter"},s.a.createElement("button",{type:"submit",className:"btn"},"Register"===this.state.submitBtn?"Register":s.a.createElement("i",{className:"fa fa-spin fa-spinner"})),s.a.createElement(u.b,{to:"/login"},"Already have an account ?")))))}}]),t}(s.a.Component),te=Object(c.b)()(ee),ae=function(){return s.a.createElement(u.a,null,s.a.createElement(m.c,null,s.a.createElement(m.a,{path:"/",component:Q,exact:!0}),s.a.createElement(m.a,{path:"/login",component:Z}),s.a.createElement(m.a,{path:"/register",component:te})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=a(23),se=a(15),re=localStorage.getItem("user")?{auth:JSON.parse(localStorage.getItem("user"))}:{},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_STATUS":return Object(se.a)({},e,{formStatus:t.payload});case"SAVE_USER":return Object(se.a)({},e,{auth:t.payload});case"REMOVE_USER":return{};case"SAVE_ALL_USERS":return Object(se.a)({},e,{users:t.payload,filteredUsers:t.payload});case"SEARCH_USER":return Object(se.a)({},e,{filteredUsers:t.payload});default:return e}},ce={},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_USER":return Object(se.a)({},e,{id:t.payload.user,fullname:t.payload.fullname});case"IS_LOADED":return Object(se.a)({},e,{isLoaded:t.payload});case"SHOW_MESSAGES":return Object(se.a)({},e,{messages:t.payload});case"SEND_MESSAGE":return Object(se.a)({},e,{messages:e.messages.concat(t.payload)});default:return e}},ie=function(){return Object(ne.c)(Object(ne.b)({user:oe,chat:le}))}();ie.subscribe(function(){console.log(ie.getState())});var ue=s.a.createElement(c.a,{store:ie},s.a.createElement(ae,null));o.a.render(ue,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,a){e.exports=a(132)},77:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.89c6ddae.chunk.js.map