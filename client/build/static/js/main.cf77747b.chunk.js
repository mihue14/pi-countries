(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{79:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(22),i=n.n(r),s=n(13),o=n(4),l=n(25),u=n(19),d=n(2),j=n(6),b=n(7),p=n(15),h=n(10),f=n.n(h),O=n(14),x=n.n(O),m="GET_ALL_COUNTRIES",v="GET_ALL_ACTIVITIES",y="GET_COUNTRY_BY_NAME",g="GET_COUNTRY_BY_ID",C="DELETE_COUNTRY_DETAIL",N="FILTER_BY_CONTINENT",w="FILTER_BY_ACTIVITY",A="ORDER_BY_AZ",E="ORDER_BY_POPULATION",S="POST_ACTIVITY",T="DELETE_ACTIVITY",k="MODIFY_ACTIVITY",R=function(){return function(e){x.a.get("http://localhost:3001/countries").then((function(t){return e({type:m,payload:t.data})}))}},D=function(e,t){return function(){var n=Object(p.a)(f.a.mark((function n(a){var c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,x.a.put("http://localhost:3001/activities/modify/".concat(e),t);case 3:return c=n.sent,n.abrupt("return",c);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},_=(n(79),n(0)),I=function(){var e=new RegExp(/^([a-zA-Z]|[^0-9]\S)([^0-9]*){1,}$/),t=Object(b.b)(),n=Object(o.f)(),c=Object(a.useState)({}),r=Object(j.a)(c,2),i=r[0],s=r[1],h=Object(b.c)((function(e){return e.allCountries}));Object(a.useEffect)((function(){t(R())}),[t]);var O=Object(a.useState)({name:"",difficulty:"",duration:"",season:"",country:[]}),m=Object(j.a)(O,2),v=m[0],y=m[1],g=function(e){y(Object(d.a)(Object(d.a)({},v),{},Object(u.a)({},e.target.name,e.target.value))),s(function(e){var t={},n=new RegExp(/^([a-zA-Z]|[^0-9]\S)([^0-9]*){1,}$/);return console.log(e.name),e.name?n.test(e.name)?e.difficulty?e.duration?e.season?e.country||(t.country="country required"):t.season="season required":t.duration="duration required":t.difficulty="difficulty required":t.nameValidate="the name can only contain letters":t.name="name required",t}(Object(d.a)(Object(d.a)({},v),{},Object(u.a)({},e.target.name,e.target.value))))},C=function(a){if(a.preventDefault(),!v.name)return alert("Entry a name please...");if(!e.test(v.name))return alert("The name can only contain letters...");if(!v.difficulty)return alert("Entry a difficulty please...");if(v.difficulty<1||v.difficulty>5)return alert("Enter a difficulty from 1 to 5 please...");if(!v.duration)return alert("Entry a duration please...");if(v.duration<1)return alert("Enter a duration greater than 1 please...");if(!v.season)return alert("Entry a season please...");if(!v.country.length)return alert("Select a country please...");var c,r=v.name.toLowerCase();t((c={name:r[0].toUpperCase()+r.slice(1),difficulty:v.difficulty,duration:v.duration,season:v.season,country:v.country},function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post("http://localhost:3001/activities/create",c);case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),alert("Activity created!"),y({name:"",difficulty:"",duration:"",season:"",country:[]}),n.push("/home")};return console.log(v),Object(_.jsx)("div",{className:"container-create",children:Object(_.jsxs)("form",{onSubmit:function(e){return C(e)},className:"form-create",children:[Object(_.jsx)("h1",{className:"h1-create",children:"Create Activity"}),Object(_.jsxs)("div",{className:"name-create",children:[Object(_.jsx)("label",{children:"Name: "}),Object(_.jsx)("input",{type:"text",value:v.name,name:"name",onChange:g}),i.name&&Object(_.jsx)("p",{style:{color:"red"},children:i.name}),i.nameValidate&&Object(_.jsx)("p",{style:{color:"red"},children:i.nameValidate})]}),Object(_.jsxs)("div",{className:"difficulty-create",children:[Object(_.jsx)("label",{children:"Difficulty (1-5): "}),Object(_.jsx)("input",{type:"number",value:v.difficulty,name:"difficulty",min:"1",max:"5",onChange:g,style:{width:"174px"}}),i.difficulty&&Object(_.jsx)("p",{style:{color:"red"},children:i.difficulty})]}),Object(_.jsxs)("div",{className:"duration-create",children:[Object(_.jsx)("label",{children:"Duration: "}),Object(_.jsx)("input",{type:"number",value:v.duration,name:"duration",min:"1",onChange:g}),Object(_.jsx)("span",{children:" minutes"}),i.duration&&Object(_.jsx)("p",{style:{color:"red"},children:i.duration})]}),Object(_.jsxs)("div",{className:"season-create",children:[Object(_.jsx)("label",{children:"Season: "}),Object(_.jsxs)("select",{name:"season",onChange:g,style:{width:"182px"},children:[Object(_.jsx)("option",{disabled:!0,selected:!0,children:"Select a season"}),Object(_.jsx)("option",{value:"Spring",children:"Spring"}),Object(_.jsx)("option",{value:"Summer",children:"Summer"}),Object(_.jsx)("option",{value:"Autumn",children:"Autumn"}),Object(_.jsx)("option",{value:"Winter",children:"Winter"})]}),i.season&&Object(_.jsx)("p",{style:{color:"red"},children:i.season})]}),Object(_.jsxs)("div",{className:"country-create",children:[Object(_.jsx)("label",{children:"Country: "}),Object(_.jsxs)("select",{onChange:function(e){return function(e){if(v.country.includes(e.target.value))return alert("Select another country please...");y(Object(d.a)(Object(d.a)({},v),{},{country:[].concat(Object(l.a)(v.country),[e.target.value])}))}(e)},style:{width:"182px"},children:[Object(_.jsx)("option",{disabled:!0,selected:!0,children:"Select a country"}),h.map((function(e){return Object(_.jsx)("option",{value:e.name,children:e.name})}))]}),Object(_.jsx)("ul",{children:v.country.map((function(e){return Object(_.jsxs)("div",{style:{marginLeft:"-40px"},children:[e,Object(_.jsx)("button",{onClick:function(){return function(e){y(Object(d.a)(Object(d.a)({},v),{},{country:v.country.filter((function(t){return t!==e}))}))}(e)},className:"button-delete-country",children:"x"})]},e)}))}),i.country&&Object(_.jsx)("p",{style:{color:"red"},children:i.country})]}),Object(_.jsxs)("div",{className:"buttons-create",children:[Object(_.jsx)("button",{onClick:function(){return n.push("/home")},style:{marginLeft:"55px"},className:"back-create",children:"Back"}),Object(_.jsx)("button",{style:{marginRight:"55px"},className:"button-create",children:"Create \ud83c\udf0d"})]})]})})},P=(n(86),n(87),function(e){var t=Object(b.b)(),n=Object(o.f)(),c=e.match.params.id,r=Object(b.c)((function(e){return e.detail})),i=Object(a.useState)({name:"",duration:"",difficulty:"",season:""}),s=Object(j.a)(i,2),l=s[0],u=s[1],d=Object(_.jsxs)("div",{children:["This activity maybe in other countries.",Object(_.jsx)("span",{children:"Delete activity?"})]});return Object(a.useEffect)((function(){return t(function(e){return function(){var t=Object(p.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("http://localhost:3001/countries/".concat(e));case 2:return a=t.sent,t.abrupt("return",n({type:g,payload:a.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(c)),function(){var e;t({type:C,payload:e})}}),[t,c]),Object(_.jsxs)("div",{className:"detail-container",children:[console.log(r),r.name?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("img",{src:r.flag,alt:"flag",className:"detail-flag"}),Object(_.jsxs)("h1",{className:"detail-name",children:["Country: ",r.name]}),Object(_.jsxs)("h2",{className:"detail-id",children:["ID: ",r.id]}),Object(_.jsxs)("h2",{className:"detail-continent",children:["Continent: ",r.continent]}),Object(_.jsxs)("h3",{className:"detail-capital",children:["Capital: ",r.capital]}),Object(_.jsxs)("h3",{className:"detail-subregion",children:["Subregion: ",r.subregion]}),Object(_.jsxs)("h3",{className:"detail-area",children:["Area: ",r.area," km",Object(_.jsx)("sup",{children:"2"})]}),Object(_.jsxs)("h3",{className:"detail-population",children:["Population: ",r.population," inhabitants"]}),Object(_.jsx)("div",{children:Object(_.jsx)("button",{onClick:function(){return n.push("/home")},className:"detail-backButton",children:"Back"})}),Object(_.jsxs)("div",{className:"detail-activity",children:[Object(_.jsx)("h1",{style:{color:"yellow"},children:"Activities"}),r.activities&&r.activities[0]?r.activities.map((function(e){var n=e.id;return Object(_.jsxs)("div",{children:[Object(_.jsxs)("h3",{className:"inputName-change",children:[Object(_.jsxs)("span",{style:{width:"180px"},children:["Name: ",e.name]}),Object(_.jsxs)("div",{style:{marginRight:"300px"},children:[Object(_.jsx)("input",{type:"text",placeholder:"Enter a new name...",style:{borderRadius:"5px"},onChange:function(e){return u({name:e.target.value})}}),Object(_.jsx)("button",{onClick:function(){var e=new RegExp(/^([a-zA-Z]|[^0-9]\\S)([^0-9]*){1,}$/);if(!l.name)return alert("Enter a new name please.");if(!e.test(l.name))return alert("The name can only contain letters");var a=l.name.toLowerCase();l.name=a[0].toUpperCase()+a.slice(1),t(D(n,l)),alert("Name changed"),window.location.reload()},style:{backgroundColor:"yellow",borderRadius:"10px",cursor:"pointer"},children:"Change"})]})]}),Object(_.jsxs)("h3",{className:"inputDuration-change",children:[Object(_.jsxs)("span",{style:{width:"180px"},children:["Duration: ",e.duration," min"]}),Object(_.jsxs)("div",{style:{marginRight:"300px"},children:[Object(_.jsx)("input",{type:"text",style:{borderRadius:"5px"},placeholder:"Enter a new duartion...",onChange:function(e){return u({duration:e.target.value})}}),Object(_.jsx)("button",{onClick:function(){var e=new RegExp(/^[0-9]*(\.?)[0-9]+$/);return l.duration?e.test(l.duration)?l.duration<1?alert("Enter a duration greater than 1 please."):(t(D(n,l)),alert("Duration changed"),void window.location.reload()):alert("The duration can only contain numbers"):alert("Enter a new duration please.")},style:{backgroundColor:"yellow",borderRadius:"10px",cursor:"pointer"},children:"Change"})]})]}),Object(_.jsxs)("h3",{className:"inputDifficulty-change",children:[Object(_.jsxs)("span",{style:{width:"180px"},children:["Difficulty: ",e.difficulty]}),Object(_.jsxs)("div",{style:{marginRight:"300px"},children:[Object(_.jsx)("input",{style:{borderRadius:"5px"},type:"text",placeholder:"Enter a new difficulty...",onChange:function(e){return u({difficulty:e.target.value})}}),Object(_.jsx)("button",{onClick:function(){var e=new RegExp(/^[0-9]*(\.?)[0-9]+$/);return l.difficulty?e.test(l.difficulty)?l.difficulty<1||l.difficulty>5?alert("Enter a difficulty from 1 to 5 please."):(t(D(n,l)),alert("Difficulty changed"),void window.location.reload()):alert("The difficulty can only contain numbers"):alert("Enter a new difficulty please.")},style:{backgroundColor:"yellow",borderRadius:"10px",cursor:"pointer"},children:"Change"})]})]}),Object(_.jsxs)("h3",{className:"inputSeason-change",children:[Object(_.jsxs)("span",{style:{width:"180px"},children:["Season: ",e.season]}),Object(_.jsxs)("div",{style:{marginRight:"300px"},children:[Object(_.jsxs)("select",{onChange:function(e){u({season:e.target.value})},style:{width:"182px",borderRadius:"5px"},children:[Object(_.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Enter a new season"}),Object(_.jsx)("option",{value:"Spring",children:"Spring"}),Object(_.jsx)("option",{value:"Summer",children:"Summer"}),Object(_.jsx)("option",{value:"Autumn",children:"Autumn"}),Object(_.jsx)("option",{value:"Winter",children:"Winter"})]}),Object(_.jsx)("button",{onClick:function(){if(!l.season)return alert("Enter a new season please.");t(D(n,l)),alert("Season changed"),window.location.reload()},style:{backgroundColor:"yellow",borderRadius:"10px",cursor:"pointer"},children:"Change"})]})]}),Object(_.jsx)("button",{onClick:function(){console.log(d),window.confirm("This activity maybe in other countries.\nDelete activity?")&&(t(function(e,t){return function(){var n=Object(p.a)(f.a.mark((function n(a){var c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,x.a.delete("http://localhost:3001/activities/delete/".concat(e),t);case 3:return c=n.sent,n.abrupt("return",c);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}(n)),alert("Activity deleted!"),window.location.reload())},className:"detail-deleteButton",style:{marginLeft:"5px",margin:"10px",borderRadius:"5px"},children:"delete activity"})]})})):Object(_.jsxs)("div",{children:[Object(_.jsx)("h3",{className:"detail-activityError",children:"This country has not activities created"}),Object(_.jsx)("button",{onClick:function(){return n.push("/create")},className:"detail-createActivity",children:"Create"})]})]})]}):Object(_.jsx)("div",{style:{color:"white"},children:"Loading..."})]})}),L=(n(88),function(e){var t=e.flag,n=e.name,a=e.continent,c=e.id;return Object(_.jsxs)("div",{children:[Object(_.jsx)(s.b,{to:"/detail/".concat(c),children:Object(_.jsx)("img",{className:"flag",src:t,alt:"flag"})}),Object(_.jsx)("h3",{className:"name",children:n}),Object(_.jsx)("h5",{className:"continent",children:a})]})}),B=(n(89),function(e){for(var t=e.countriesPerPage,n=(e.setCountriesPerPage,e.allCountries),a=e.paged,c=e.currentPage,r=e.prev,i=e.next,s=e.waitePaged,o=[],l=1;l<=Math.ceil(n/t);l++)o.push(l);var u=o.length;return Object(_.jsx)("div",{className:"container-paged",children:Object(_.jsx)("nav",{className:"root-paged",children:Object(_.jsxs)("ul",{children:[Object(_.jsx)("button",{onClick:c>1?function(){a(1),s()}:null,className:"page",children:"<<"}),Object(_.jsx)("button",{onClick:c>1?function(){r(),s()}:null,className:"page",children:"<"}),null===o||void 0===o?void 0:o.map((function(e){return Object(_.jsx)("button",{onClick:function(){a(e),s()},className:c===e?"current-page":"page",children:e})})),Object(_.jsx)("button",{onClick:c<u?function(){i(),s()}:null,className:"page",children:">"}),Object(_.jsx)("button",{onClick:c<u?function(){a(u),s()}:null,className:"page",children:">>"})]})})})}),Y=(n(90),function(e){var t=e.paged,n=e.waite,c=Object(b.b)(),r=Object(a.useState)(""),i=Object(j.a)(r,2),s=i[0],o=i[1],l=function(e){s?(n(),e.preventDefault(),c(function(e){return function(){var t=Object(p.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get("http://localhost:3001/countries?name=".concat(e));case 3:return a=t.sent,t.abrupt("return",n({type:y,payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),alert("Country not found");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(s)),t(1),o("")):(e.preventDefault(),alert("Enter a country please..."))};return Object(_.jsx)("div",{children:Object(_.jsxs)("form",{children:[Object(_.jsx)("input",{className:"input-search",type:"text",placeholder:"Search country...",onChange:function(e){return function(e){e.preventDefault(),o(e.target.value)}(e)},value:s}),Object(_.jsx)("button",{type:"submit",onClick:function(e){return l(e)},className:"button-search",children:"\ud83d\udd0e"})]})})}),Z=(n(91),function(){var e=Object(b.b)(),t=Object(o.f)(),n=Object(b.c)((function(e){return e.countries})),c=Object(b.c)((function(e){return e.activities})),r=Object(a.useState)(1),i=Object(j.a)(r,2),s=i[0],l=i[1],u=Object(a.useState)(10),d=Object(j.a)(u,2),h=d[0],O=d[1],m=Object(a.useState)(!0),y=Object(j.a)(m,2),g=y[0],C=y[1],S=s*h,T=S-h,k=n.slice(T,S),D=function(e){l(e)},I=function(t){var n;t.preventDefault(),e((n=t.target.value,{type:N,payload:n})),D(1),G()},P=function(t){var n;t.preventDefault(),e((n=t.target.value,{type:w,payload:n})),D(1),G()},Z=Object(a.useState)(""),V=Object(j.a)(Z,2),U=(V[0],V[1]),F=function(t){var n;t.preventDefault(),e((n=t.target.value,{type:A,payload:n})),D(1),U("Order ".concat(t.target.value)),G()},q=function(t){var n;t.preventDefault(),e((n=t.target.value,{type:E,payload:n})),D(1),U("Order ".concat(t.target.value)),G()};Object(a.useEffect)((function(){e(R()),e(function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:3001/activities");case 2:return n=e.sent,e.abrupt("return",t({type:v,payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),setTimeout((function(){C(!1)}),1500)}),[e]);var G=function(){C(!0),setTimeout((function(){C(!1)}),1e3)},M=function(){C(!0),setTimeout((function(){C(!1)}),1500)};return Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:"navbar",children:[Object(_.jsx)("button",{onClick:function(){return t.push("/create")},className:"buttonCreate",children:"Create activity"}),Object(_.jsx)(Y,{paged:D,waite:G})]}),Object(_.jsxs)("div",{className:"root-filters",children:[Object(_.jsx)("button",{onClick:function(t){t.preventDefault(),e(R()),D(1),M()},className:"refreshDog",children:"Refresh \ud83d\udd04"}),Object(_.jsxs)("div",{children:[Object(_.jsxs)("select",{onChange:function(e){return I(e)},className:"filterContinent",children:[Object(_.jsx)("option",{disabled:!0,selected:!0,children:"Filter by continent"}),Object(_.jsx)("option",{value:"All",children:"All"}),Object(_.jsx)("option",{value:"Africa",children:"Africa"}),Object(_.jsx)("option",{value:"Antarctica",children:"Antarctica"}),Object(_.jsx)("option",{value:"Asia",children:"Asia"}),Object(_.jsx)("option",{value:"Europe",children:"Europe"}),Object(_.jsx)("option",{value:"North America",children:"North America"}),Object(_.jsx)("option",{value:"South America",children:"South America"})]}),Object(_.jsxs)("select",{onChange:function(e){return P(e)},className:"filterActivity",children:[Object(_.jsx)("option",{disabled:!0,selected:!0,children:"Filter by activity"}),c.length?c.map((function(e){return Object(_.jsx)("option",{value:e.name,children:e.name})})):Object(_.jsx)("option",{disabled:"true",children:"No activities created"})]})]}),Object(_.jsxs)("div",{children:[Object(_.jsxs)("select",{onChange:function(e){return F(e)},className:"orderName",children:[Object(_.jsx)("option",{disabled:!0,selected:!0,children:"Alphabetically"}),Object(_.jsx)("option",{value:"AtoZ",children:"A-Z"}),Object(_.jsx)("option",{value:"ZtoA",children:"Z-A"})]}),Object(_.jsxs)("select",{onChange:function(e){return q(e)},className:"orderPopulation",children:[Object(_.jsx)("option",{disabled:!0,selected:!0,children:"Population"}),Object(_.jsx)("option",{value:"StoB",children:"Smallest countries to biggest"}),Object(_.jsx)("option",{value:"BtoS",children:"Biggest countries to smallest"})]})]})]}),Object(_.jsx)(B,{countriesPerPage:h,allCountries:n.length,paged:D,currentPage:s,setCountriesPerPage:O,prev:function(){l(s-1)},next:function(){l(s+1)},waitePaged:function(){C(!0),setTimeout((function(){C(!1)}),350)}}),g?Object(_.jsx)("div",{style:{marginLeft:"900px",marginTop:"200px"},children:"Loading..."}):k.length?k.map((function(e){return Object(_.jsx)("div",{className:"card",children:Object(_.jsx)(L,{flag:e.flag,name:e.name,continent:e.continent,id:e.id})})})):Object(_.jsx)("div",{children:"error"})]})}),V=(n(92),function(){return Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)("h1",{className:"welcome",children:"Countries APP"}),Object(_.jsx)("h3",{className:"info",children:"all information about countries!"}),Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:"country",src:"https://cdn.picpng.com/flags/countries-country-flags-globe-58974.png",alt:"",style:{height:"400px"}})}),Object(_.jsx)(s.b,{to:"/home",children:Object(_.jsx)("button",{className:"button-landing",children:"Let\xb4s Go!"})})]})]})});var U=function(){return Object(_.jsx)(s.a,{children:Object(_.jsxs)(o.c,{children:[Object(_.jsx)(o.a,{exact:!0,path:"/",component:V}),Object(_.jsx)(o.a,{path:"/home",component:Z}),Object(_.jsx)(o.a,{path:"/detail/:id",component:P}),Object(_.jsx)(o.a,{path:"/create",component:I})]})})},F=(n(93),n(24)),q=n(44),G=n(45),M={allCountries:[],countries:[],activities:[],detail:[]};var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(d.a)(Object(d.a)({},e),{},{allCountries:t.payload,countries:t.payload});case v:return Object(d.a)(Object(d.a)({},e),{},{activities:t.payload});case S:return Object(d.a)({},e);case T:return Object(d.a)(Object(d.a)({},e),{},{countries:t.payload});case k:return Object(d.a)(Object(d.a)({},e),{},{activities:t.payload});case y:return Object(d.a)(Object(d.a)({},e),{},{countries:t.payload});case g:return Object(d.a)(Object(d.a)({},e),{},{detail:t.payload});case C:return Object(d.a)(Object(d.a)({},e),{},{detail:[]});case N:var n=e.allCountries,a=function(){switch(t.payload){case"All":default:return n;case"South America":case"North America":case"Antarctica":case"Africa":case"Asia":case"Europe":return n.filter((function(e){return e.continent===t.payload}))}};return Object(d.a)(Object(d.a)({},e),{},{countries:a()});case w:for(var c=e.allCountries,r=[],i=0;i<c.length;i++)if(c[i].activities.length)for(var s=0;s<c[i].activities.length;s++)c[i].activities[s].name===t.payload&&r.push(c[i]);return Object(d.a)(Object(d.a)({},e),{},{countries:r});case A:var o=e.allCountries,l=o.sort((function(e,n){return"AtoZ"===t.payload?e.name<n.name?-1:e.name>n.name?1:0:"ZtoA"===t.payload?e.name>n.name?-1:e.name<n.name?1:0:void 0}));return Object(d.a)(Object(d.a)({},e),{},{countries:l});case E:var u=e.allCountries,j=u.sort((function(e,n){return"StoB"===t.payload?e.population<n.population?-1:e.population>n.population?1:0:"BtoS"===t.payload?e.population>n.population?-1:e.population<n.population?1:0:void 0}));return Object(d.a)(Object(d.a)({},e),{},{countries:j});default:return e}},$=Object(F.createStore)(W,Object(q.composeWithDevTools)(Object(F.applyMiddleware)(G.a)));i.a.render(Object(_.jsx)(b.a,{store:$,children:Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(U,{})})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.cf77747b.chunk.js.map