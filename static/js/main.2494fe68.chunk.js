(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(3),s=n.n(o),i=(n(16),n(4)),r=n(5),d=n(6),u=n(11),b=n(10),l=n(0),j=function(e){var t=e.title,n=e.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:t}),n]})},h=n(7),f=n.n(h),p=function(e){return Object(l.jsx)(l.Fragment,{children:e.options.map((function(t){return Object(l.jsx)("button",{className:f.a.button,id:t,type:"button",onClick:function(t){e.onLeaveFeedback(t)},children:t},t)}))})},O=n(8),g=n.n(O),v=function(e){var t=e.message;return Object(l.jsx)("h2",{className:g.a.title,children:t})},x=n(9),k=n.n(x),F=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return Object(l.jsxs)("div",{className:k.a.section,children:[Object(l.jsxs)("span",{children:["Good: ",t]}),Object(l.jsxs)("span",{children:["Neutral: ",n]}),Object(l.jsxs)("span",{children:["Bad: ",a]}),Object(l.jsxs)("span",{children:["Total: ",c]}),Object(l.jsxs)("span",{children:["Positive feedback: ",o,"%"]})]})},m=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){t.preventDefault(),e.setState((function(e){return Object(i.a)({},t.target.id,e[t.target.id]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(100/e.countTotalFeedback()*e.state.good)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{title:"Please leave feedback",children:Object(l.jsx)(p,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback})}),Object(l.jsx)(j,{title:"Statistics",children:this.countTotalFeedback()?Object(l.jsx)(F,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(l.jsx)(v,{message:"No feedback given"})})]})}}]),n}(c.a.Component),_=m;s.a.render(Object(l.jsx)(_,{}),document.getElementById("root"))},7:function(e,t,n){e.exports={button:"FeedbackOptions_button__39ZxG"}},8:function(e,t,n){e.exports={title:"Notification_title__lq3mn"}},9:function(e,t,n){e.exports={section:"Statistics_section__19vZg"}}},[[18,1,2]]]);
//# sourceMappingURL=main.2494fe68.chunk.js.map