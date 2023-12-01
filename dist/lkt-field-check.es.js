import { defineComponent as w, useSlots as E, ref as o, computed as r, watch as p, openBlock as m, createElementBlock as y, normalizeClass as L, unref as d, renderSlot as v, withDirectives as N, createElementVNode as T, vModelCheckbox as $, createCommentVNode as h, nextTick as F } from "vue";
import { generateRandomString as g } from "lkt-string-tools";
import "lkt-events";
const H = ["data-labeled"], R = ["name", "id", "disabled", "readonly", "placeholder", "value"], j = ["for", "innerHTML"], z = { name: "LktFieldCheck", inheritAttrs: !1 }, A = /* @__PURE__ */ w({
  ...z,
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
  setup(a, { expose: b, emit: k }) {
    const V = k, n = E(), l = a, s = g(16), i = o(null), f = o(l.modelValue), t = o(l.modelValue), S = o(!1);
    o(!l.readMode);
    const M = r(() => typeof l.valid == "function" ? l.valid() : l.valid), B = r(() => t.value !== f.value), x = r(() => {
      const e = ["lkt-field", "lkt-field-check"];
      return l.palette && e.push(`lkt-field--${l.palette}`), B.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), S.value && e.push("has-focus"), e.push(M.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), C = () => {
      F(() => {
        i.value && i.value.focus();
      });
    };
    return p(() => l.modelValue, (e) => t.value = e), p(t, (e) => V("update:modelValue", e)), b({
      Identifier: s,
      reset: () => t.value = f.value,
      focus: C,
      value: () => t.value,
      isMandatory: () => l.mandatory
    }), (e, c) => (m(), y("div", {
      class: L(x.value),
      "data-labeled": !d(n).label
    }, [
      v(e.$slots, "prefix"),
      N(T("input", {
        "onUpdate:modelValue": c[0] || (c[0] = (u) => t.value = u),
        type: "checkbox",
        ref: (u) => i.value = u,
        name: a.name,
        id: d(s),
        disabled: a.disabled,
        readonly: a.readonly,
        placeholder: a.placeholder,
        value: t.value ? "true" : "false"
      }, null, 8, R), [
        [$, t.value]
      ]),
      d(n).label ? v(e.$slots, "label", { key: 0 }) : h("", !0),
      d(n).label ? h("", !0) : (m(), y("label", {
        key: 1,
        for: d(s),
        innerHTML: a.label
      }, null, 8, j))
    ], 10, H));
  }
}), J = {
  install: (a) => {
    a.component("lkt-field-check", A);
  }
};
export {
  J as default
};
