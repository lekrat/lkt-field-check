import { defineComponent as L, useSlots as E, ref as o, computed as r, watch as m, openBlock as v, createElementBlock as y, normalizeClass as N, unref as d, renderSlot as h, withDirectives as T, createElementVNode as $, vModelCheckbox as F, createCommentVNode as k, nextTick as H } from "vue";
import { generateRandomString as g } from "lkt-string-tools";
const R = ["data-labeled"], j = ["name", "id", "disabled", "readonly", "placeholder", "value", "checked"], z = ["for", "innerHTML"], A = { name: "LktFieldCheck", inheritAttrs: !1 }, D = /* @__PURE__ */ L({
  ...A,
  props: {
    modelValue: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: g(16) },
    valid: { type: Boolean, default: !1 },
    autocomplete: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    tabindex: { type: Number, default: void 0 },
    mandatory: { type: Boolean, default: !1 },
    reset: { type: Boolean, default: !1 },
    resetMessage: { type: String, default: "" },
    mandatoryMessage: { type: String, default: "" },
    infoMessage: { type: String, default: "" },
    errorMessage: { type: String, default: "" },
    switchEditionMessage: { type: String, default: "" }
  },
  emits: ["update:modelValue", "focus", "blur", "click", "click-info", "click-error"],
  setup(t, { expose: b, emit: V }) {
    const S = V, n = E(), l = t, u = g(16), s = o(null), f = o(l.modelValue), a = o(l.modelValue), c = o(a.value ? "true" : "false"), M = o(!1);
    o(!l.readMode);
    const B = r(() => typeof l.valid == "function" ? l.valid() : l.valid), x = r(() => a.value !== f.value), C = r(() => {
      const e = ["lkt-field", "lkt-field-check"];
      return l.palette && e.push(`lkt-field--${l.palette}`), x.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), M.value && e.push("has-focus"), e.push(B.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), w = () => {
      H(() => {
        s.value && s.value.focus();
      });
    };
    return m(() => l.modelValue, (e) => a.value = e), m(a, (e) => (c.value = a.value ? "true" : "false") && S("update:modelValue", e)), b({
      Identifier: u,
      reset: () => a.value = f.value,
      focus: w,
      value: () => a.value,
      isMandatory: () => l.mandatory
    }), (e, p) => (v(), y("div", {
      class: N(C.value),
      "data-labeled": !d(n).label
    }, [
      h(e.$slots, "prefix"),
      T($("input", {
        "onUpdate:modelValue": p[0] || (p[0] = (i) => a.value = i),
        type: "checkbox",
        ref: (i) => s.value = i,
        name: t.name,
        id: d(u),
        disabled: t.disabled,
        readonly: t.readonly,
        placeholder: t.placeholder,
        value: c.value,
        checked: a.value
      }, null, 8, j), [
        [F, a.value]
      ]),
      d(n).label ? h(e.$slots, "label", { key: 0 }) : k("", !0),
      d(n).label ? k("", !0) : (v(), y("label", {
        key: 1,
        for: d(u),
        innerHTML: t.label
      }, null, 8, z))
    ], 10, R));
  }
}), J = {
  install: (t) => {
    t.component("lkt-field-check", D);
  }
};
export {
  J as default
};
