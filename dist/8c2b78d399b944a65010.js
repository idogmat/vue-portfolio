(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{420:function(t,a,r){"use strict";r.d(a,"a",(function(){return o}));var e=r(351),o=function(t){var a=e.a.defaults.baseURL;return"".concat(a,"/").concat(t)}},431:function(t,a,r){},448:function(t,a,r){"use strict";var e=r(431);r.n(e).a},461:function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"addWorks__content"},[r("div",{staticClass:"addWorks__content-caption-wrap"},["add"==t.mode?r("h2",{staticClass:"addWorks__content-caption"},[t._v("Добавление работы")]):"edit"==t.mode?r("h2",{staticClass:"addWorks__content-caption"},[t._v("Редактирование работы")]):t._e(),r("div",{staticClass:"addWorks__form"},[r("div",{staticClass:"addWorks__file",class:{imaged:t.hasImage,validErrorTextarea:t.validation.hasError("workData.photo")},style:{"background-image":"url("+this.photoURl+")"}},[r("div",{staticClass:"addWorks__file-upload"},[r("label",{staticClass:"addWorks__load-text",attrs:{for:"photoFile"}},[r("p",[t._v("Перетащите или загрузите для загрузки изображения")]),r("vue-dropzone",{staticClass:"dropzone",attrs:{id:"drop1",options:t.dropOptions}}),r("input",{staticClass:"addWorks__file-input",attrs:{type:"file",id:"photoFile",accept:"image/*"},on:{change:t.loadPhoto}}),r("button",{staticClass:"btn-save btn"},[t._v("Загрузить")])],1)])]),r("div",{staticClass:"addWorks__info"},[r("div",{staticClass:"addWorks__label-wrap"},[r("label",{staticClass:"addWorks__label",attrs:{for:"input-title"}},[t._v("Название")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.workData.title,expression:"workData.title"}],staticClass:"addWorks__input addWorks__input--title",class:{validError:t.validation.hasError("workData.title")},attrs:{type:"text",name:"title",id:"input-title"},domProps:{value:t.workData.title},on:{input:function(a){a.target.composing||t.$set(t.workData,"title",a.target.value)}}}),t.validation.firstError("workData.title")?r("div",{staticClass:"error-input"},[t._v(t._s(t.validation.firstError("workData.title")))]):t._e()]),r("div",{staticClass:"addWorks__label-wrap"},[r("label",{staticClass:"addWorks__label",attrs:{for:"input-link"}},[t._v("Ссылка")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.workData.link,expression:"workData.link"}],staticClass:"addWorks__input addWorks__input--link",class:{validError:t.validation.hasError("workData.link")},attrs:{type:"text",name:"link",id:"input-link"},domProps:{value:t.workData.link},on:{input:function(a){a.target.composing||t.$set(t.workData,"link",a.target.value)}}}),t.validation.firstError("workData.link")?r("div",{staticClass:"error-input"},[t._v(t._s(t.validation.firstError("workData.link")))]):t._e()]),r("div",{staticClass:"addWorks__label-wrap"},[r("label",{staticClass:"addWorks__label",attrs:{for:"input-desc"}},[t._v("Описание")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.workData.description,expression:"workData.description"}],staticClass:"addWorks__input addWorks__input--desc",class:{validErrorTextarea:t.validation.hasError("workData.description")},attrs:{name:"desc",id:"input-desc"},domProps:{value:t.workData.description},on:{input:function(a){a.target.composing||t.$set(t.workData,"description",a.target.value)}}}),t.validation.firstError("workData.description")?r("div",{staticClass:"error-input"},[t._v(t._s(t.validation.firstError("workData.description")))]):t._e()]),r("div",{staticClass:"addWorks__label-wrap"},[r("label",{staticClass:"addWorks__label",attrs:{for:"input-tag"}},[t._v("Добавление тега")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.workData.techs,expression:"workData.techs"}],staticClass:"addWorks__input addWorks__input--tags",class:{validError:t.validation.hasError("workData.techs")},attrs:{type:"text",name:"tag",id:"input-tag"},domProps:{value:t.workData.techs},on:{input:function(a){a.target.composing||t.$set(t.workData,"techs",a.target.value)}}}),t.validation.firstError("workData.techs")?r("div",{staticClass:"error-input"},[t._v(t._s(t.validation.firstError("workData.techs")))]):t._e()]),r("div",{staticClass:"addWorks__tags-list-wrap"},[r("ul",{staticClass:"addWorks__tags-list"},t._l(t.tagsArray,(function(a,e){return 0!=t.tagsArray&&""!=a?r("li",{staticClass:"addWorks__tags-item"},[t._v(t._s(a)),r("div",{staticClass:"deleteTag",on:{click:function(a){return t.removeTag(e)}}},[t._v("x")])]):t._e()})),0)]),r("div",{staticClass:"addWorks__buttons"},[r("button",{staticClass:"addWorks__reset",attrs:{type:"reset",name:"cancel",value:"Отменить"},on:{click:t.toogleAddingForm}},[t._v("Отменить")]),"add"==t.mode?r("button",{staticClass:"btn btn-save",attrs:{type:"submit",name:"submit",value:"Сохранить"},on:{click:t.addNewWorks}},[t._v("Сохранить")]):t._e(),"edit"==t.mode?r("button",{staticClass:"btn btn-save",attrs:{type:"submit",name:"submit",value:"Сохранить"},on:{click:t.updateCurrentWork}},[t._v("Сохранить")]):t._e()])])])])])};e._withStripped=!0;var o=r(52),i=r(420),s=r(350),n=r(447),d=r.n(n);function l(t,a,r,e,o,i,s){try{var n=t[i](s),d=n.value}catch(t){return void r(t)}n.done?a(d):Promise.resolve(d).then(e,o)}function c(t){return function(){var a=this,r=arguments;return new Promise((function(e,o){var i=t.apply(a,r);function s(t){l(i,e,o,s,n,"next",t)}function n(t){l(i,e,o,s,n,"throw",t)}s(void 0)}))}}function u(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.push.apply(r,e)}return r}function p(t){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?u(Object(r),!0).forEach((function(a){k(t,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(r,a))}))}return t}function k(t,a,r){return a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}var v={mixins:[r(350).mixin],validators:{"workData.title":function(t){return s.Validator.value(t).required("Поле название обязательно для заполнения")},"workData.link":function(t){return s.Validator.value(t).required("Поле ссылка обязательно для заполнения")},"workData.description":function(t){return s.Validator.value(t).required("Поле описание обязательно для заполнения")},"workData.techs":function(t){return s.Validator.value(t).required("Поле теги обязательно для заполнения")},"workData.photo":function(t){return s.Validator.value(t).required("Вставьте файл")}},components:{vueDropzone:d.a},props:{mode:String},data:function(){return{workData:{title:"",link:"",description:"",techs:"",photo:""},photoURl:"",hasImage:!1,tagsArray:[],dropOptions:{url:"https://httpbin.org/post",maxFilesize:1.5,maxFiles:1,chunking:!1,addRemoveLinks:!1}}},methods:p(p(p({},Object(o.b)("works",["addWork","updateWork"])),Object(o.b)("tooltips",["showTooltip","hideTooltip"])),{},{toogleAddingForm:function(){this.$emit("toogleAddingForm")},removeTag:function(t){console.log(t),this.tagsArray.splice(t,1),this.workData.techs=this.tagsArray.join(",")},loadPhoto:function(t){var a=this,r=t.target.files[0];this.workData.photo=r,this.hasImage=!0;var e=new FileReader;try{e.readAsDataURL(r),e.onload=function(){a.photoURl=e.result,console.log(a.photoURl)}}catch(t){alert(t.message),console.log(t.message)}},addNewWorks:function(){var t=this;return c(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$validate();case 2:if(a.t0=a.sent,!1!==a.t0){a.next=6;break}return t.showTooltip({type:"error",text:"Не все поля заполнены"}),a.abrupt("return");case 6:return a.prev=6,a.next=9,t.addWork(t.workData);case 9:t.showTooltip({type:"success",text:"Работа успешно добавлена"}),t.$emit("toogleAddingForm"),a.next=16;break;case 13:a.prev=13,a.t1=a.catch(6),t.showTooltip({type:"error",text:"Размер картинки больше 1,5 МБ"});case 16:case"end":return a.stop()}}),a,null,[[6,13]])})))()},updateCurrentWork:function(){var t=this;return c(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$validate();case 2:if(a.t0=a.sent,!1!==a.t0){a.next=7;break}return t.showTooltip({type:"error",text:"Не все поля заполнены"}),t.workData=p({},t.currentWork),a.abrupt("return");case 7:return a.prev=7,a.next=10,t.updateWork(t.workData);case 10:t.showTooltip({type:"success",text:"Работа успешно обновлена"}),t.$emit("toogleAddingForm"),a.next=17;break;case 14:a.prev=14,a.t1=a.catch(7),t.showTooltip({type:"error",text:"Размер картинки больше 1,5 МБ"});case 17:case"end":return a.stop()}}),a,null,[[7,14]])})))()},addingMode:function(){this.workData={title:"",link:"",description:"",techs:"",photo:""},this.photoURl=""},editingMode:function(){this.workData=p({},this.currentWork),this.photoURl=Object(i.a)(this.workData.photo)}}),watch:{"workData.techs":function(){this.tagsArray=this.workData.techs.split(",")},mode:function(){"add"==this.mode?(console.log("Режим добавления"),this.addingMode()):"edit"==this.mode&&(console.log("Режим редактирования"),this.editingMode())},currentWork:function(){this.workData=p({},this.currentWork),this.photoURl=Object(i.a)(this.workData.photo)}},computed:p({},Object(o.c)("works",{currentWork:function(t){return t.currentWork}})),created:function(){"add"==this.mode?this.addingMode():"edit"==this.mode&&this.editingMode()}},h=(r(448),r(97)),_=Object(h.a)(v,e,[],!1,null,"3aaed66e",null);_.options.__file="src/admin/components/works-add-new.vue";a.default=_.exports}}]);