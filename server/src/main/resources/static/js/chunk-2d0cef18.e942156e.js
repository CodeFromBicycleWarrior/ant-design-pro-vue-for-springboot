(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cef18"],{6239:function(e,a,r){"use strict";r.r(a);var s=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("a-card",{attrs:{"body-style":{padding:"24px 32px"},bordered:!1}},[r("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[r("a-form-item",{attrs:{label:"标题",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入标题"}]}],expression:"[\n          'name',\n          {rules: [{ required: true, message: '请输入标题' }]}\n        ]"}],attrs:{name:"name",placeholder:"给目标起个名字"}})],1),r("a-form-item",{attrs:{label:"起止日期",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[r("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["buildTime",{rules:[{required:!0,message:"请选择起止日期"}]}],expression:"[\n          'buildTime',\n          {rules: [{ required: true, message: '请选择起止日期' }]}\n        ]"}],staticStyle:{width:"100%"},attrs:{name:"buildTime"}})],1),r("a-form-item",{attrs:{label:"目标描述",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!0,message:"请输入目标描述"}]}],expression:"[\n          'description',\n          {rules: [{ required: true, message: '请输入目标描述' }]}\n        ]"}],attrs:{rows:"4",placeholder:"请输入你阶段性工作目标"}})],1),r("a-form-item",{attrs:{label:"衡量标准",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"请输入衡量标准"}]}],expression:"[\n          'type',\n          {rules: [{ required: true, message: '请输入衡量标准' }]}\n        ]"}],attrs:{rows:"4",placeholder:"请输入衡量标准"}})],1),r("a-form-item",{attrs:{label:"客户",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["customer",{rules:[{required:!0,message:"请描述你服务的客户"}]}],expression:"[\n          'customer',\n          {rules: [{ required: true, message: '请描述你服务的客户' }]}\n        ]"}],attrs:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}})],1),r("a-form-item",{attrs:{label:"邀评人",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}},required:!1}},[r("a-input",{attrs:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}})],1),r("a-form-item",{attrs:{label:"权重",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}},required:!1}},[r("a-input-number",{attrs:{min:0,max:100}}),r("span",[e._v(" %")])],1),r("a-form-item",{attrs:{label:"目标公开",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}},required:!1,help:"客户、邀评人默认被分享"}},[r("a-radio-group",{model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},[r("a-radio",{attrs:{value:1}},[e._v("公开")]),r("a-radio",{attrs:{value:2}},[e._v("部分公开")]),r("a-radio",{attrs:{value:3}},[e._v("不公开")])],1),r("a-form-item",[2===e.value?r("a-select",{attrs:{mode:"multiple"}},[r("a-select-option",{attrs:{value:"4"}},[e._v("同事一")]),r("a-select-option",{attrs:{value:"5"}},[e._v("同事二")]),r("a-select-option",{attrs:{value:"6"}},[e._v("同事三")])],1):e._e()],1)],1),r("a-form-item",{staticStyle:{"text-align":"center"},attrs:{wrapperCol:{span:24}}},[r("a-button",{attrs:{htmlType:"submit",type:"primary"}},[e._v("提交")]),r("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("保存")])],1)],1)],1)},t=[],l={name:"BaseForm",data:function(){return{description:"表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",value:1,form:this.$form.createForm(this)}},methods:{handleSubmit:function(e){e.preventDefault(),this.form.validateFields(function(e,a){e||console.log("Received values of form: ",a)})}}},n=l,o=r("2877"),i=Object(o["a"])(n,s,t,!1,null,null,null);a["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0cef18.e942156e.js.map