(this["webpackJsonpreact-spa"]=this["webpackJsonpreact-spa"]||[]).push([[0],{58:function(e,a,t){e.exports=t(96)},63:function(e,a,t){},93:function(e,a){},96:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(53),s=t.n(l),o=(t(63),t(3));function c(e){var a=e.onFileDataSubmit;return r.a.createElement("form",{className:"file-input"},r.a.createElement("label",{htmlFor:"import-input"},"Choose a file to import data from:"),r.a.createElement("input",{type:"file",id:"import-input","data-testid":"import-input",name:"import",onChange:function(e){var t=e.target.files[0],n=t.size,r=new FileReader;r.onloadend=function(e){if(e.target.readyState===FileReader.DONE){var t=JSON.parse(e.target.result);return a(t)}},r.readAsBinaryString(t.slice(0,n))},accept:"application/json"}),r.a.createElement("br",null),r.a.createElement("small",{className:"form-text text-muted"},"You can export a data file when a graph is plotted, for importing later."))}var i={small_pox:{label:"Small Pox",regular_transmission_start_day:10,high_transmission_start_day:16,last_day:22,regular_transmission_rate:.05,high_transmission_rate:.5,death_rate:.2},sars:{label:"SARS",regular_transmission_start_day:5,high_transmission_start_day:10,last_day:23,regular_transmission_rate:.025,high_transmission_rate:.25,death_rate:.1},covid_19:{label:"COVID-19",regular_transmission_start_day:5,high_transmission_start_day:20,last_day:40,regular_transmission_rate:.025,high_transmission_rate:.25,death_rate:.2}};function m(){var e=i.small_pox;return r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Disease Dynamics"),r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"disease_name"},"Disease Name"),r.a.createElement("select",{"data-testid":"select-disease",name:"disease_name",onChange:function(e){var a=i[e.target.value];["regular_transmission_start_day","high_transmission_start_day","last_day","regular_transmission_rate","high_transmission_rate","death_rate"].map((function(e){document.getElementById(e).value=a[e]}))},className:"form-control form-control-sm",id:"disease_name","aria-describedby":"disease_name",placeholder:"Disease Name",defaultValue:"small_pox"},Object.keys(i).map((function(e){return r.a.createElement("option",{key:e,value:e},i[e].label)})))),r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"regular_transmission_start_day"},"Regular Transmission Start Day"),r.a.createElement("input",{type:"text",name:"regular_transmission_start_day",className:"form-control form-control-sm",id:"regular_transmission_start_day","aria-describedby":"regular_transmission_start_day",placeholder:"Regular Transmission Start Day",defaultValue:e.regular_transmission_start_day})),r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"high_transmission_start_day"},"High Transmission Start Day"),r.a.createElement("input",{type:"text",name:"high_transmission_start_day",className:"form-control form-control-sm",id:"high_transmission_start_day","aria-describedby":"high_transmission_start_day",placeholder:"High Transmission Start Day",defaultValue:e.high_transmission_start_day})),r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"last_day"},"Last Day"),r.a.createElement("input",{type:"text",name:"last_day",className:"form-control form-control-sm",id:"last_day","aria-describedby":"last_day",placeholder:"Last Day",defaultValue:e.last_day})),r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"regular_transmission_rate"},"Regular Transmission Rate"),r.a.createElement("input",{type:"text",name:"regular_transmission_rate",className:"form-control form-control-sm",id:"regular_transmission_rate","aria-describedby":"regular_transmission_rate",placeholder:"Regular Transmission Rate",defaultValue:e.regular_transmission_rate})),r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"high_transmission_rate"},"High Transmission Rate"),r.a.createElement("input",{type:"text",name:"high_transmission_rate",className:"form-control form-control-sm",id:"high_transmission_rate","aria-describedby":"high_transmission_rate",placeholder:"High Transmission Rate",defaultValue:e.high_transmission_rate})),r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"death_rate"},"Death Rate"),r.a.createElement("input",{type:"text",name:"death_rate",className:"form-control form-control-sm",id:"death_rate","aria-describedby":"death_rate",placeholder:"Death Rate",defaultValue:e.death_rate})))}function u(){return r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Interventions"),r.a.createElement("small",{className:"form-text text-muted"},"Only the active interventions will be taken into consideration"),r.a.createElement(d,null),r.a.createElement(_,null),r.a.createElement(p,null))}function d(){var e=Object(n.useState)(!0),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"custom-control custom-switch switch-right"},r.a.createElement("input",{onChange:function(e){l(e.target.checked)},type:"checkbox",checked:t,className:"custom-control-input",id:"vaccine-switch"}),r.a.createElement("label",{className:"custom-control-label col-form-label-sm",htmlFor:"vaccine-switch"},"Vaccination")),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"vaccinate_at"},"Vaccinate At"),r.a.createElement("input",{type:"number",name:"vaccinate_at",className:"form-control form-control-sm",id:"vaccinate_at","aria-describedby":"vaccinate_at",placeholder:"Vaccinate At",defaultValue:"5000"})),r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"vaccinate_percentage"},"Vaccinate Percentage"),r.a.createElement("input",{type:"number",name:"vaccinate_percentage",className:"form-control form-control-sm",id:"vaccinate_percentage","aria-describedby":"vaccinate_percentage",placeholder:"Vaccinate Percentage",defaultValue:"0.2",step:"any"}))))}function _(){var e=Object(n.useState)(!0),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"custom-control custom-switch switch-right"},r.a.createElement("input",{onChange:function(e){l(e.target.checked)},type:"checkbox",checked:t,className:"custom-control-input",id:"lockdown-switch"}),r.a.createElement("label",{className:"custom-control-label col-form-label-sm",htmlFor:"lockdown-switch"},"Lockdown")),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"lockdown_at_number_of_infections"},"Lockdown at number of infections"),r.a.createElement("input",{type:"number",name:"lockdown_at_number_of_infections",className:"form-control form-control-sm",id:"lockdown_at_number_of_infections","aria-describedby":"lockdown_at_number_of_infections",placeholder:"Lockdown At(number of infections)",defaultValue:"100",step:"any"})),r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"essential_workers_population"},"Essentials Workers Population"),r.a.createElement("input",{type:"number",name:"essential_workers_population",className:"form-control form-control-sm",id:"essential_workers_population","aria-describedby":"essential_workers_population",placeholder:"Emergency Workers Population",defaultValue:"0.1",step:"any"}))))}function p(){var e=Object(n.useState)(!0),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"custom-control custom-switch switch-right"},r.a.createElement("input",{onChange:function(e){l(e.target.checked)},type:"checkbox",checked:t,className:"custom-control-input",id:"hospital-switch"}),r.a.createElement("label",{className:"custom-control-label col-form-label-sm",htmlFor:"hospital-switch"},"Hospital Spread")),t&&r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"hospital_spread_rate_threshold"},"Hospital Spread Rate Threshold"),r.a.createElement("input",{type:"number",name:"hospital_spread_rate_threshold",className:"form-control form-control-sm",id:"hospital_spread_rate_threshold","aria-describedby":"hospital_spread_rate_threshold",placeholder:"Hospital Spread Rate Threshold",defaultValue:"100",step:"any"})))}function h(e){var a=e.onDataSubmit;return r.a.createElement("form",{className:"user-inputs",onSubmit:function(e){e.preventDefault();var t={};new FormData(e.target).forEach((function(e,a){["number_of_agents","grid_size","simulation_hrs","public_transport_percentage","working_percentage","vaccinate_at","vaccinate_percentage","death_rate","high_transmission_rate","high_transmission_start_day","last_day","regular_transmission_rate","regular_transmission_start_day","lockdown_at_number_of_infections","essential_workers_population","hospital_spread_rate_threshold"].includes(a)&&(e=Number(e)),t[a]=e})),a(t)},"data-testid":"simulationForm"},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col inputs"},r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Population"),r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"number_of_agents"},"Number of Agents"),r.a.createElement("input",{type:"number",name:"number_of_agents",className:"form-control form-control-sm",id:"number_of_agents","aria-describedby":"number_of_agents",placeholder:"Number of Agents",defaultValue:"10000"})),r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"public_transport_percentage"},"Public Transport Percentage"),r.a.createElement("input",{type:"number",name:"public_transport_percentage",className:"form-control form-control-sm",id:"public_transport_percentage","aria-describedby":"public_transport_percentage",placeholder:"Public Transport Percentage",defaultValue:"0.2",step:"any"})),r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"working_percentage"},"Working Percentage"),r.a.createElement("input",{type:"number",name:"working_percentage",className:"form-control form-control-sm",id:"working_percentage","aria-describedby":"working_percentage",placeholder:"Working Percentage",min:"0",max:"1",defaultValue:"0.7",step:"any"}))),r.a.createElement("fieldset",null,r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"grid_size"},"Grid Size"),r.a.createElement("input",{type:"number",name:"grid_size",className:"form-control form-control-sm",id:"grid_size","aria-describedby":"grid_size",placeholder:"Grid Size",defaultValue:"250"})),r.a.createElement("div",{className:"input-control"},r.a.createElement("label",{className:"col-form-label-sm",htmlFor:"simulation_hrs"},"Simulation Hours"),r.a.createElement("input",{type:"number",name:"simulation_hrs",className:"form-control form-control-sm",id:"simulation_hrs","aria-describedby":"simulation_hrs",placeholder:"Simulation Hours",defaultValue:"10000"})))),r.a.createElement(m,null),r.a.createElement(u,null)),r.a.createElement("div",{className:"col actions"},r.a.createElement("button",{type:"submit",className:"btn btn-primary",id:"submitBtn"},"Start"))))}function b(e){var a=e.onSubmit,t=e.onFileDataInput;return r.a.createElement("div",{className:"graph-input"},r.a.createElement(h,{onDataSubmit:function(e){var t;(t=e,fetch("http://localhost:3000/simulation/init",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).then(a())}}),r.a.createElement(c,{onFileDataSubmit:function(e){t(e)}}))}var f=t(54),g=t.n(f),E=t(35),y=t(55);function N(e){var a=e.dataBuffer,t=e.enableExport,l=void 0!==t&&t,s=Object(n.useState)(null),c=Object(o.a)(s,2),i=c[0],m=c[1];return Object(n.useEffect)((function(){if(0===a.length)return i&&i.destroy(),void m();if(i)i.updateOptions({file:a});else{var e=new y.a(document.getElementById("vis"),a,{labels:["hour","susceptible","infected","quarantined","recovered","deceased"],legend:"always",animatedZooms:!0,title:"Time Series Graph",ylabel:"Number of Agents",xlabel:"Hours",showRoller:!0});m(e)}}),[i,a]),r.a.createElement("div",{className:"graph-wrap"},r.a.createElement("div",{id:"vis","data-testid":"visualization"}),r.a.createElement("div",{className:"graph-actions"},r.a.createElement("p",{className:"action"},"Zoom: ",r.a.createElement("span",{className:"control"},"click-drag")),r.a.createElement("p",{className:"action"},"Pan: ",r.a.createElement("span",{className:"control"},"shift-click-drag")),r.a.createElement("p",{className:"action"},"Restore: ",r.a.createElement("span",{className:"control"},"double-click")),r.a.createElement("button",{onClick:function(){var e=document.createElement("a");e.download="export.json",e.href="data:application/json;charset=utf-8;,"+encodeURIComponent(JSON.stringify(a)),e.target="_blank",document.body.appendChild(e),e.click(),document.body.removeChild(e)},className:"btn btn-secondary",disabled:!l},"Export graph")))}function v(e){var a=e.socket,t=Object(n.useState)([]),l=Object(o.a)(t,2),s=l[0],c=l[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),u=m[0],d=m[1];return Object(n.useEffect)((function(){if(a){var e=[];a.on("epidemicStats",(function(a){var t=JSON.parse(a),n=!1;if("simulation_ended"in t)n=!0;else{var r=t.hour,l=t.susceptible,s=t.infected,o=t.quarantined,i=t.recovered,m=t.deceased;e.push([r,l,s,o,i,m])}(t.hour%100===0||n)&&c((function(a){var t=[].concat(Object(E.a)(a),Object(E.a)(e));return e=[],t})),n&&d(!0)}))}else c([])}),[a]),r.a.createElement(N,{dataBuffer:s,enableExport:u})}var k=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],l=a[1],s=Object(n.useState)([]),c=Object(o.a)(s,2),i=c[0],m=c[1];function u(){l(g()("http://localhost:3000/"))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{onFileDataInput:function(e){t&&(t.close(),l(null)),m(e)},onSubmit:function(){t&&(t.close(),l(null)),i.length>1&&m([]),fetch("http://localhost:3000/simulation",{method:"POST",headers:{"Content-Type":"application/json"}}).then(u)}}),i.length>1?r.a.createElement(N,{dataBuffer:i}):r.a.createElement(v,{socket:t}))};var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"EpiViz")),r.a.createElement("div",{className:"container-fluid mt-4"},r.a.createElement(k,null)))};s.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.3b8c73fd.chunk.js.map