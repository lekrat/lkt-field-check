import { defineComponent as E, useSlots as N, ref as o, computed as f, watch as c, openBlock as y, createElementBlock as h, normalizeClass as T, unref as d, renderSlot as k, withDirectives as $, createElementVNode as F, vModelCheckbox as H, createCommentVNode as g, nextTick as R } from "vue";
import { generateRandomString as b } from "lkt-string-tools";
const j = ["data-labeled"], z = ["name", "id", "disabled", "readonly", "placeholder", "value", "checked"], A = ["for", "innerHTML"], D = { name: "LktFieldCheck", inheritAttrs: !1 }, I = /* @__PURE__ */ E({
  ...D,
  props: {
    modelValue: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: b(16) },
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
  setup(t, { expose: V, emit: M }) {
    const S = M, u = N(), l = t, n = b(16), s = o(null), p = o(l.modelValue), a = o(l.modelValue), m = o(a.value ? "true" : "false"), B = o(!1), i = o(!l.readMode), x = f(() => typeof l.valid == "function" ? l.valid() : l.valid), C = f(() => a.value !== p.value), w = f(() => {
      const e = ["lkt-field", "lkt-field-check"];
      return l.palette && e.push(`lkt-field--${l.palette}`), C.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), B.value && e.push("has-focus"), e.push(x.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), L = () => {
      R(() => {
        s.value && s.value.focus();
      });
    };
    return c(() => l.readMode, (e) => i.value = !e), c(() => l.modelValue, (e) => a.value = e), c(a, (e) => (m.value = a.value ? "true" : "false") && S("update:modelValue", e)), V({
      Identifier: n,
      reset: () => a.value = p.value,
      focus: L,
      value: () => a.value,
      isMandatory: () => l.mandatory
    }), (e, v) => (y(), h("div", {
      class: T(w.value),
      "data-labeled": !d(u).label
    }, [
      k(e.$slots, "prefix"),
      $(F("input", {
        "onUpdate:modelValue": v[0] || (v[0] = (r) => a.value = r),
        type: "checkbox",
        ref: (r) => s.value = r,
        name: t.name,
        id: d(n),
        disabled: !i.value || t.disabled,
        readonly: !i.value || t.readonly,
        placeholder: t.placeholder,
        value: m.value,
        checked: a.value
      }, null, 8, z), [
        [H, a.value]
      ]),
      d(u).label ? k(e.$slots, "label", { key: 0 }) : g("", !0),
      d(u).label ? g("", !0) : (y(), h("label", {
        key: 1,
        for: d(n),
        innerHTML: t.label
      }, null, 8, A))
    ], 10, j));
  }
}), K = {
  install: (t) => {
    t.component("lkt-field-check", I);
  }
};
export {
  K as default
};
