(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"00d8":function(t,e){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&a.rotl(t,8)|4278255360&a.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=a.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],a=0,r=0;a<t.length;a++,r+=8)e[r>>>5]|=t[a]<<24-r%32;return e},wordsToBytes:function(t){for(var e=[],a=0;a<32*t.length;a+=8)e.push(t[a>>>5]>>>24-a%32&255);return e},bytesToHex:function(t){for(var e=[],a=0;a<t.length;a++)e.push((t[a]>>>4).toString(16)),e.push((15&t[a]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],a=0;a<t.length;a+=2)e.push(parseInt(t.substr(a,2),16));return e},bytesToBase64:function(t){for(var a=[],r=0;r<t.length;r+=3)for(var s=t[r]<<16|t[r+1]<<8|t[r+2],n=0;n<4;n++)8*r+6*n<=8*t.length?a.push(e.charAt(s>>>6*(3-n)&63)):a.push("=");return a.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var a=[],r=0,s=0;r<t.length;s=++r%4)0!=s&&a.push((e.indexOf(t.charAt(r-1))&Math.pow(2,-2*s+8)-1)<<2*s|e.indexOf(t.charAt(r))>>>6-2*s);return a}};t.exports=a})()},1037:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("result",{attrs:{isSuccess:!0,content:!1,title:t.email,description:t.description}},[a("template",{slot:"action"},[a("a-button",{attrs:{size:"large",type:"primary"}},[t._v("查看邮箱")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{size:"large"},on:{click:t.goHomeHandle}},[t._v("返回首页")])],1)],2)},s=[],n=a("9a3d"),i={name:"RegisterResult",components:{Result:n["a"]},data:function(){return{description:"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。",form:{}}},computed:{email:function(){var t=this.form&&this.form.email||"xxx",e="你的账户：".concat(t," 注册成功");return e}},created:function(){this.form=this.$route.params},methods:{goHomeHandle:function(){this.$router.push({name:"login"})}}},o=i,l=a("2877"),c=Object(l["a"])(o,r,s,!1,null,"a07bc7a0",null);e["default"]=c.exports},"12c0":function(t,e,a){"use strict";var r=a("7899"),s=a.n(r);s.a},1348:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"main user-layout-register"},[e._m(0),r("a-form",{ref:"formRegister",attrs:{autoFormCreate:function(e){t.form=e},id:"formRegister"}},[r("a-form-item",{attrs:{fieldDecoratorId:"email",fieldDecoratorOptions:{rules:[{required:!0,type:"email",message:"请输入邮箱地址"}],validateTrigger:["change","blur"]}}},[r("a-input",{attrs:{size:"large",type:"text",placeholder:"邮箱"}})],1),r("a-popover",{attrs:{placement:"rightTop",trigger:"click",visible:e.state.passwordLevelChecked}},[r("template",{slot:"content"},[r("div",{style:{width:"240px"}},[r("div",{class:["user-register",e.passwordLevelClass]},[e._v("强度："),r("span",[e._v(e._s(e.passwordLevelName))])]),r("a-progress",{attrs:{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor}}),r("div",{staticStyle:{"margin-top":"10px"}},[r("span",[e._v("请至少输入 6 个字符。请不要使用容易被猜到的密码。")])])],1)]),r("a-form-item",{attrs:{fieldDecoratorId:"password",fieldDecoratorOptions:{rules:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordLevel}],validateTrigger:["change","blur"]}}},[r("a-input",{attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"至少6位密码，区分大小写"},on:{click:e.handlePasswordInputClick}})],1)],2),r("a-form-item",{attrs:{fieldDecoratorId:"password2",fieldDecoratorOptions:{rules:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordCheck}],validateTrigger:["change","blur"]}}},[r("a-input",{attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"确认密码"}})],1),r("a-form-item",{attrs:{fieldDecoratorId:"mobile",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入正确的手机号",pattern:/^1[3456789]\d{9}$/},{validator:this.handlePhoneCheck}],validateTrigger:["change","blur"]}}},[r("a-input",{attrs:{size:"large",placeholder:"11 位手机号"}},[r("a-select",{attrs:{slot:"addonBefore",size:"large",defaultValue:"+86"},slot:"addonBefore"},[r("a-select-option",{attrs:{value:"+86"}},[e._v("+86")]),r("a-select-option",{attrs:{value:"+87"}},[e._v("+87")])],1)],1)],1),r("a-row",{attrs:{gutter:16}},[r("a-col",{staticClass:"gutter-row",attrs:{span:16}},[r("a-form-item",{attrs:{fieldDecoratorId:"captcha",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}}},[r("a-input",{attrs:{size:"large",type:"text",placeholder:"验证码"}},[r("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),r("a-col",{staticClass:"gutter-row",attrs:{span:8}},[r("a-button",{staticClass:"getCaptcha",attrs:{size:"large",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(e.state.smsSendBtn?e.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha(t)}}})],1)],1),r("a-form-item",[r("a-button",{staticClass:"register-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.registerBtn,disabled:e.registerBtn},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[e._v("注册\n      ")]),r("router-link",{staticClass:"login",attrs:{to:{name:"login"}}},[e._v("使用已有账户登录")])],1)],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("span",[t._v("注册")])])}],n=a("cebc"),i=a("ac0d"),o=a("7ded"),l={0:"低",1:"低",2:"中",3:"强"},c={0:"error",1:"error",2:"warning",3:"success"},u={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},d={name:"Register",components:{},mixins:[i["b"]],data:function(){return{form:null,state:{time:60,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},registerBtn:!1}},computed:{passwordLevelClass:function(){return c[this.state.passwordLevel]},passwordLevelName:function(){return l[this.state.passwordLevel]},passwordLevelColor:function(){return u[this.state.passwordLevel]}},methods:{handlePasswordLevel:function(t,e,a){var r=0;/[0-9]/.test(e)&&r++,/[a-zA-Z]/.test(e)&&r++,/[^0-9a-zA-Z_]/.test(e)&&r++,this.state.passwordLevel=r,this.state.percent=30*r,r>=2?(r>=3&&(this.state.percent=100),a()):(0===r&&(this.state.percent=10),a(new Error("密码强度不够")))},handlePasswordCheck:function(t,e,a){var r=this.form.getFieldValue("password");console.log("value",e),void 0===e&&a(new Error("请输入密码")),e&&r&&e.trim()!==r.trim()&&a(new Error("两次密码不一致")),a()},handlePhoneCheck:function(t,e,a){console.log("handlePhoneCheck, rule:",t),console.log("handlePhoneCheck, value",e),console.log("handlePhoneCheck, callback",a),a()},handlePasswordInputClick:function(){this.isMobile()?this.state.passwordLevelChecked=!1:this.state.passwordLevelChecked=!0},handleSubmit:function(){var t=this;this.form.validateFields(function(e,a){e||t.$router.push({name:"registerResult",params:Object(n["a"])({},a)})})},getCaptcha:function(t){var e=this;t.preventDefault();var a=this;this.form.validateFields(["mobile"],{force:!0},function(t,r){if(!t){e.state.smsSendBtn=!0;var s=window.setInterval(function(){a.state.time--<=0&&(a.state.time=60,a.state.smsSendBtn=!1,window.clearInterval(s))},1e3),n=e.$message.loading("验证码发送中..",0);Object(o["c"])({mobile:r.mobile}).then(function(t){setTimeout(n,2500),e.$notification["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+t.result.captcha,duration:8})}).catch(function(t){setTimeout(n,1),clearInterval(s),a.state.time=60,a.state.smsSendBtn=!1,e.requestFailed(t)})}})},requestFailed:function(t){this.$notification["error"]({message:"错误",description:((t.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4}),this.registerBtn=!1}},watch:{"state.passwordLevel":function(t){console.log(t)}}},p=d,f=(a("5d18"),a("12c0"),a("2877")),m=Object(f["a"])(p,r,s,!1,null,"6eb556fb",null);e["default"]=m.exports},"1a08":function(t,e,a){},"2c25":function(t,e,a){"use strict";var r=a("8ddb"),s=a.n(r);s.a},"5d18":function(t,e,a){"use strict";var r=a("e236"),s=a.n(r);s.a},"6821f":function(t,e,a){(function(){var e=a("00d8"),r=a("9a63").utf8,s=a("044b"),n=a("9a63").bin,i=function(t,a){t.constructor==String?t=a&&"binary"===a.encoding?n.stringToBytes(t):r.stringToBytes(t):s(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var o=e.bytesToWords(t),l=8*t.length,c=1732584193,u=-271733879,d=-1732584194,p=271733878,f=0;f<o.length;f++)o[f]=16711935&(o[f]<<8|o[f]>>>24)|4278255360&(o[f]<<24|o[f]>>>8);o[l>>>5]|=128<<l%32,o[14+(l+64>>>9<<4)]=l;var m=i._ff,g=i._gg,h=i._hh,v=i._ii;for(f=0;f<o.length;f+=16){var b=c,y=u,C=d,w=p;c=m(c,u,d,p,o[f+0],7,-680876936),p=m(p,c,u,d,o[f+1],12,-389564586),d=m(d,p,c,u,o[f+2],17,606105819),u=m(u,d,p,c,o[f+3],22,-1044525330),c=m(c,u,d,p,o[f+4],7,-176418897),p=m(p,c,u,d,o[f+5],12,1200080426),d=m(d,p,c,u,o[f+6],17,-1473231341),u=m(u,d,p,c,o[f+7],22,-45705983),c=m(c,u,d,p,o[f+8],7,1770035416),p=m(p,c,u,d,o[f+9],12,-1958414417),d=m(d,p,c,u,o[f+10],17,-42063),u=m(u,d,p,c,o[f+11],22,-1990404162),c=m(c,u,d,p,o[f+12],7,1804603682),p=m(p,c,u,d,o[f+13],12,-40341101),d=m(d,p,c,u,o[f+14],17,-1502002290),u=m(u,d,p,c,o[f+15],22,1236535329),c=g(c,u,d,p,o[f+1],5,-165796510),p=g(p,c,u,d,o[f+6],9,-1069501632),d=g(d,p,c,u,o[f+11],14,643717713),u=g(u,d,p,c,o[f+0],20,-373897302),c=g(c,u,d,p,o[f+5],5,-701558691),p=g(p,c,u,d,o[f+10],9,38016083),d=g(d,p,c,u,o[f+15],14,-660478335),u=g(u,d,p,c,o[f+4],20,-405537848),c=g(c,u,d,p,o[f+9],5,568446438),p=g(p,c,u,d,o[f+14],9,-1019803690),d=g(d,p,c,u,o[f+3],14,-187363961),u=g(u,d,p,c,o[f+8],20,1163531501),c=g(c,u,d,p,o[f+13],5,-1444681467),p=g(p,c,u,d,o[f+2],9,-51403784),d=g(d,p,c,u,o[f+7],14,1735328473),u=g(u,d,p,c,o[f+12],20,-1926607734),c=h(c,u,d,p,o[f+5],4,-378558),p=h(p,c,u,d,o[f+8],11,-2022574463),d=h(d,p,c,u,o[f+11],16,1839030562),u=h(u,d,p,c,o[f+14],23,-35309556),c=h(c,u,d,p,o[f+1],4,-1530992060),p=h(p,c,u,d,o[f+4],11,1272893353),d=h(d,p,c,u,o[f+7],16,-155497632),u=h(u,d,p,c,o[f+10],23,-1094730640),c=h(c,u,d,p,o[f+13],4,681279174),p=h(p,c,u,d,o[f+0],11,-358537222),d=h(d,p,c,u,o[f+3],16,-722521979),u=h(u,d,p,c,o[f+6],23,76029189),c=h(c,u,d,p,o[f+9],4,-640364487),p=h(p,c,u,d,o[f+12],11,-421815835),d=h(d,p,c,u,o[f+15],16,530742520),u=h(u,d,p,c,o[f+2],23,-995338651),c=v(c,u,d,p,o[f+0],6,-198630844),p=v(p,c,u,d,o[f+7],10,1126891415),d=v(d,p,c,u,o[f+14],15,-1416354905),u=v(u,d,p,c,o[f+5],21,-57434055),c=v(c,u,d,p,o[f+12],6,1700485571),p=v(p,c,u,d,o[f+3],10,-1894986606),d=v(d,p,c,u,o[f+10],15,-1051523),u=v(u,d,p,c,o[f+1],21,-2054922799),c=v(c,u,d,p,o[f+8],6,1873313359),p=v(p,c,u,d,o[f+15],10,-30611744),d=v(d,p,c,u,o[f+6],15,-1560198380),u=v(u,d,p,c,o[f+13],21,1309151649),c=v(c,u,d,p,o[f+4],6,-145523070),p=v(p,c,u,d,o[f+11],10,-1120210379),d=v(d,p,c,u,o[f+2],15,718787259),u=v(u,d,p,c,o[f+9],21,-343485551),c=c+b>>>0,u=u+y>>>0,d=d+C>>>0,p=p+w>>>0}return e.endian([c,u,d,p])};i._ff=function(t,e,a,r,s,n,i){var o=t+(e&a|~e&r)+(s>>>0)+i;return(o<<n|o>>>32-n)+e},i._gg=function(t,e,a,r,s,n,i){var o=t+(e&r|a&~r)+(s>>>0)+i;return(o<<n|o>>>32-n)+e},i._hh=function(t,e,a,r,s,n,i){var o=t+(e^a^r)+(s>>>0)+i;return(o<<n|o>>>32-n)+e},i._ii=function(t,e,a,r,s,n,i){var o=t+(a^(e|~r))+(s>>>0)+i;return(o<<n|o>>>32-n)+e},i._blocksize=16,i._digestsize=16,t.exports=function(t,a){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var r=e.wordsToBytes(i(t,a));return a&&a.asBytes?r:a&&a.asString?n.bytesToString(r):e.bytesToHex(r)}})()},7899:function(t,e,a){},8713:function(t,e,a){"use strict";var r=a("1a08"),s=a.n(r);s.a},"881d":function(t,e,a){"use strict";var r=a("f2aa"),s=a.n(r);s.a},"8ddb":function(t,e,a){},"9a3d":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"result"},[a("div",[a("a-icon",{class:{icon:!0,success:t.isSuccess,error:!t.isSuccess},attrs:{type:t.isSuccess?"check-circle":"close-circle"}})],1),t.title?a("div",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),t.description?a("div",{staticClass:"description"},[t._v(t._s(t.description))]):t._e(),t.content?a("div",{staticClass:"content"},[t._t("default")],2):t._e(),a("div",{staticClass:"action"},[t._t("action")],2)])},s=[],n={name:"Result",props:{isSuccess:{type:Boolean,default:!1},title:{type:String,default:""},description:{type:String,default:""},content:{type:Boolean,default:!0}}},i=n,o=(a("881d"),a("2877")),l=Object(o["a"])(i,r,s,!1,null,"833e4bc6",null);e["a"]=l.exports},"9a63":function(t,e){var a={utf8:{stringToBytes:function(t){return a.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(a.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],a=0;a<t.length;a++)e.push(255&t.charCodeAt(a));return e},bytesToString:function(t){for(var e=[],a=0;a<t.length;a++)e.push(String.fromCharCode(t[a]));return e.join("")}}};t.exports=a},ac2a:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("a-form",{ref:"formLogin",staticClass:"user-layout-login",attrs:{id:"formLogin",form:t.form},on:{submit:t.handleSubmit}},[a("a-tabs",{attrs:{activeKey:t.customActiveKey,tabBarStyle:{textAlign:"center",borderBottom:"unset"}},on:{change:t.handleTabClick}},[a("a-tab-pane",{key:"tab1",attrs:{tab:"账号密码登陆"}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入帐户名或邮箱地址"},{validator:t.handleUsernameOrEmail}],validateTrigger:"change"}],expression:"[\n              'username',\n              {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}\n            ]"}],attrs:{size:"large",type:"text",placeholder:"帐户名或邮箱地址 / admin"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码"}],validateTrigger:"blur"}],expression:"[\n              'password',\n              {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}\n            ]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"密码 / admin"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1)],1),a("a-tab-pane",{key:"tab2",attrs:{tab:"手机号登陆"}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,pattern:/^1[34578]\d{9}$/,message:"请输入正确的手机号"}],validateTrigger:"change"}],expression:"['mobile', {rules: [{ required: true, pattern: /^1[34578]\\d{9}$/, message: '请输入正确的手机号' }], validateTrigger: 'change'}]"}],attrs:{size:"large",type:"text",placeholder:"手机号"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mobile"},slot:"prefix"})],1)],1),a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:16}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]"}],attrs:{size:"large",type:"text",placeholder:"验证码"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),a("a-col",{staticClass:"gutter-row",attrs:{span:8}},[a("a-button",{staticClass:"getCaptcha",attrs:{tabindex:"-1",disabled:t.state.smsSendBtn},domProps:{textContent:t._s(t.state.smsSendBtn?t.state.time+" s":"获取验证码")},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.getCaptcha(e)}}})],1)],1)],1)],1),a("a-form-item",[a("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["rememberMe"],expression:"['rememberMe']"}]},[t._v("自动登陆")]),a("router-link",{staticClass:"forge-password",staticStyle:{float:"right"},attrs:{to:{name:"recover",params:{user:"aaa"}}}},[t._v("忘记密码")])],1),a("a-form-item",{staticStyle:{"margin-top":"24px"}},[a("a-button",{staticClass:"login-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:t.state.loginBtn,disabled:t.state.loginBtn}},[t._v("确定")])],1),a("div",{staticClass:"user-login-other"},[a("span",[t._v("其他登陆方式")]),a("a",[a("a-icon",{staticClass:"item-icon",attrs:{type:"alipay-circle"}})],1),a("a",[a("a-icon",{staticClass:"item-icon",attrs:{type:"taobao-circle"}})],1),a("a",[a("a-icon",{staticClass:"item-icon",attrs:{type:"weibo-circle"}})],1),a("router-link",{staticClass:"register",attrs:{to:{name:"register"}}},[t._v("注册账户")])],1)],1),t.requiredTwoStepCaptcha?a("two-step-captcha",{attrs:{visible:t.stepCaptchaVisible},on:{success:t.stepCaptchaSuccess,cancel:t.stepCaptchaCancel}}):t._e()],1)},s=[],n=a("cebc"),i=a("6821f"),o=a.n(i),l=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("a-modal",{attrs:{centered:"",maskClosable:!1},on:{cancel:e.handleCancel},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[r("div",{style:{textAlign:"center"},attrs:{slot:"title"},slot:"title"},[e._v("两步验证")]),r("template",{slot:"footer"},[r("div",{style:{textAlign:"center"}},[r("a-button",{key:"back",on:{click:e.handleCancel}},[e._v("返回")]),r("a-button",{key:"submit",attrs:{type:"primary",loading:e.stepLoading},on:{click:e.handleStepOk}},[e._v("\n        继续\n      ")])],1)]),r("a-spin",{attrs:{spinning:e.stepLoading}},[r("a-form",{attrs:{layout:"vertical","auto-form-create":function(e){t.form=e}}},[r("div",{staticClass:"step-form-wrapper"},[e.stepLoading?r("p",{staticStyle:{"text-align":"center"}},[e._v("正在验证.."),r("br"),e._v("请稍后")]):r("p",{staticStyle:{"text-align":"center"}},[e._v("请在手机中打开 Google Authenticator 或两步验证 APP"),r("br"),e._v("输入 6 位动态码")]),r("a-form-item",{style:{textAlign:"center"},attrs:{hasFeedback:"",fieldDecoratorId:"stepCode",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入 6 位动态码!",pattern:/^\d{6}$/,len:6}]}}},[r("a-input",{style:{textAlign:"center"},attrs:{placeholder:"000000"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleStepOk(t):null}}})],1),r("p",{staticStyle:{"text-align":"center"}},[r("a",{on:{click:e.onForgeStepCode}},[e._v("遗失手机?")])])],1)])],1)],2)},c=[],u={props:{visible:{type:Boolean,default:!1}},data:function(){return{stepLoading:!1,form:null}},methods:{handleStepOk:function(){var t=this,e=this;this.stepLoading=!0,this.form.validateFields(function(a,r){if(!a)return console.log("values",r),void setTimeout(function(){e.stepLoading=!1,e.$emit("success",{values:r})},2e3);t.stepLoading=!1,t.$emit("error",{err:a})})},handleCancel:function(){this.visible=!1,this.$emit("cancel")},onForgeStepCode:function(){}}},d=u,p=(a("2c25"),a("2877")),f=Object(p["a"])(d,l,c,!1,null,"65cc6ca9",null),m=f.exports,g=a("2f62"),h=a("ca00"),v=a("7ded"),b={components:{TwoStepCaptcha:m},data:function(){return{customActiveKey:"tab1",loginBtn:!1,loginType:0,requiredTwoStepCaptcha:!1,stepCaptchaVisible:!1,form:this.$form.createForm(this),state:{time:60,loginBtn:!1,loginType:0,smsSendBtn:!1}}},created:function(){var t=this;Object(v["a"])({}).then(function(e){t.requiredTwoStepCaptcha=e.result.stepCode}).catch(function(){t.requiredTwoStepCaptcha=!1})},methods:Object(n["a"])({},Object(g["b"])(["Login","Logout"]),{handleUsernameOrEmail:function(t,e,a){var r=this.state,s=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;s.test(e)?r.loginType=0:r.loginType=1,a()},handleTabClick:function(t){this.customActiveKey=t},handleSubmit:function(t){var e=this;t.preventDefault();var a=this.form.validateFields,r=this.state,s=this.customActiveKey,i=this.Login;r.loginBtn=!0;var l="tab1"===s?["username","password"]:["mobile","captcha"];a(l,{force:!0},function(t,a){if(t)setTimeout(function(){r.loginBtn=!1},600);else{console.log("login form",a);var s=Object(n["a"])({},a);delete s.username,s[r.loginType?"username":"email"]=a.username,s.password=o()(a.password),i(s).then(function(t){return e.loginSuccess(t)}).catch(function(t){return e.requestFailed(t)}).finally(function(){r.loginBtn=!1})}})},getCaptcha:function(t){var e=this;t.preventDefault();var a=this.form.validateFields,r=this.state;a(["mobile"],{force:!0},function(t,a){if(!t){r.smsSendBtn=!0;var s=window.setInterval(function(){r.time--<=0&&(r.time=60,r.smsSendBtn=!1,window.clearInterval(s))},1e3),n=e.$message.loading("验证码发送中..",0);Object(v["c"])({mobile:a.mobile}).then(function(t){setTimeout(n,2500),e.$notification["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+t.result.captcha,duration:8})}).catch(function(t){setTimeout(n,1),clearInterval(s),r.time=60,r.smsSendBtn=!1,e.requestFailed(t)})}})},stepCaptchaSuccess:function(){this.loginSuccess()},stepCaptchaCancel:function(){var t=this;this.Logout().then(function(){t.loginBtn=!1,t.stepCaptchaVisible=!1})},loginSuccess:function(t){var e=this;console.log(t),this.$router.push({name:"dashboard"}),setTimeout(function(){e.$notification.success({message:"欢迎",description:"".concat(Object(h["a"])(),"，欢迎回来")})},1e3)},requestFailed:function(t){this.$notification["error"]({message:"错误",description:((t.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4})}})},y=b,C=(a("8713"),Object(p["a"])(y,r,s,!1,null,"d5dabe96",null));e["default"]=C.exports},e236:function(t,e,a){},f2aa:function(t,e,a){}}]);
//# sourceMappingURL=user.9661c461.js.map