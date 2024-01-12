(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("vue"),require("lkt-string-tools")):typeof define=="function"&&define.amd?define(["vue","lkt-string-tools"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.LktFieldCheck=n(e.Vue,e.LktStringTools))})(this,function(e,n){"use strict";const m=["data-labeled"],h=["name","id","disabled","readonly","placeholder","value","checked"],k=["for","innerHTML"],y={name:"LktFieldCheck",inheritAttrs:!1},g=e.defineComponent({...y,props:{modelValue:{type:Boolean,default:!1},placeholder:{type:String,default:""},label:{type:String,default:""},palette:{type:String,default:""},name:{type:String,default:n.generateRandomString(16)},valid:{type:Boolean,default:!1},autocomplete:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},readMode:{type:Boolean,default:!1},allowReadModeSwitch:{type:Boolean,default:!1},tabindex:{type:Number,default:void 0},mandatory:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},resetMessage:{type:String,default:""},mandatoryMessage:{type:String,default:""},infoMessage:{type:String,default:""},errorMessage:{type:String,default:""},switchEditionMessage:{type:String,default:""}},emits:["update:modelValue","focus","blur","click","click-info","click-error"],setup(o,{expose:b,emit:V}){const S=V,d=e.useSlots(),t=o,i=n.generateRandomString(16),s=e.ref(null),f=e.ref(t.modelValue),a=e.ref(t.modelValue),c=e.ref(a.value?"true":"false"),B=e.ref(!1),r=e.ref(!t.readMode),M=e.computed(()=>typeof t.valid=="function"?t.valid():t.valid),C=e.computed(()=>a.value!==f.value),v=e.computed(()=>{const l=["lkt-field","lkt-field-check"];return t.palette&&l.push(`lkt-field--${t.palette}`),C.value&&l.push("is-changed"),t.disabled&&l.push("is-disabled"),B.value&&l.push("has-focus"),l.push(M.value?"is-valid":"is-error"),l.push(t.modelValue?"is-filled":"is-empty"),l.join(" ")}),L=()=>{e.nextTick(()=>{s.value&&s.value.focus()})};return e.watch(()=>t.readMode,l=>r.value=!l),e.watch(()=>t.modelValue,l=>a.value=l),e.watch(a,l=>(c.value=a.value?"true":"false")&&S("update:modelValue",l)),b({Identifier:i,reset:()=>a.value=f.value,focus:L,value:()=>a.value,isMandatory:()=>t.mandatory}),(l,p)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(v.value),"data-labeled":!e.unref(d).label},[e.renderSlot(l.$slots,"prefix"),e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":p[0]||(p[0]=u=>a.value=u),type:"checkbox",ref:u=>s.value=u,name:o.name,id:e.unref(i),disabled:!r.value||o.disabled,readonly:!r.value||o.readonly,placeholder:o.placeholder,value:c.value,checked:a.value},null,8,h),[[e.vModelCheckbox,a.value]]),e.unref(d).label?e.renderSlot(l.$slots,"label",{key:0}):e.createCommentVNode("",!0),e.unref(d).label?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("label",{key:1,for:e.unref(i),innerHTML:o.label},null,8,k))],10,m))}}),w="";return{install:o=>{o.component("lkt-field-check")===void 0&&o.component("lkt-field-check",g)}}});
