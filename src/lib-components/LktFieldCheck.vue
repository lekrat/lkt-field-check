<script lang="ts">
export default {name: "LktFieldCheck", inheritAttrs: false}
</script>

<script lang="ts" setup>
// Emits
import {generateRandomString} from "lkt-string-tools";
import {computed, nextTick, ref, useSlots, watch} from "vue";

const emits = defineEmits(['update:modelValue', 'focus', 'blur', 'click', 'click-info', 'click-error']);

// Slots
const slots = useSlots();

// Props
const props = defineProps({
    modelValue: {type: Boolean, default: false},

    placeholder: {type: String, default: ''},
    label: {type: String, default: ''},
    palette: {type: String, default: ''},
    name: {type: String, default: generateRandomString(16)},
    valid: {type: Boolean, default: false},
    autocomplete: {type: Boolean, default: true},
    disabled: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    readMode: {type: Boolean, default: false},
    allowReadModeSwitch: {type: Boolean, default: false},
    tabindex: {type: Number, default: undefined},
    mandatory: {type: Boolean, default: false},
    reset: {type: Boolean, default: false},
    resetMessage: {type: String, default: ''},
    mandatoryMessage: {type: String, default: ''},
    infoMessage: {type: String, default: ''},
    errorMessage: {type: String, default: ''},
    switchEditionMessage: {type: String, default: ''}
});

// Constant data
const Identifier = generateRandomString(16);


// Components refs
const inputElement = ref(null);

// Reactive data
const originalValue = ref(props.modelValue),
    value = ref(props.modelValue),
    inputLikeValue = ref(value.value ? 'true' : 'false'),
    focusing = ref(false),
    editable = ref(!props.readMode);


const isValid = computed(() => {
        // @ts-ignore
        if (typeof props.valid === 'function') return props.valid();
        return props.valid;
    }),
    changed = computed(() => value.value !== originalValue.value),
    classes = computed(() => {
        const r = ['lkt-field', 'lkt-field-check'];

        if (props.palette) r.push(`lkt-field--${props.palette}`);
        if (changed.value) r.push('is-changed');
        if (props.disabled) r.push('is-disabled');
        if (focusing.value) r.push('has-focus');

        r.push(isValid.value ? 'is-valid' : 'is-error');
        r.push(!!props.modelValue ? 'is-filled' : 'is-empty');

        return r.join(' ');
    });

const focus = () => {
    nextTick(() => {
        if (inputElement.value) {
            //@ts-ignore
            inputElement.value.focus();
        }
    });
};


// Watch data
watch(() => props.readMode, (v) => editable.value = !v)
watch(() => props.modelValue, (v) => value.value = v)
watch(value, (v) => (inputLikeValue.value = value.value ? 'true' : 'false') && emits('update:modelValue', v))

const reset = () => value.value = originalValue.value,
    getValue = () => value.value;

defineExpose({
    Identifier,
    reset,
    focus,
    value: getValue,
    isMandatory: () => props.mandatory
});
</script>


<template>
    <div v-bind:class="classes"
         v-bind:data-labeled="!!!slots.label">
        <slot name="prefix"></slot>
        <input v-model="value"
               type="checkbox"
               :ref="(el:any) => inputElement = el"
               v-bind:name="name"
               v-bind:id="Identifier"
               v-bind:disabled="!editable || disabled"
               v-bind:readonly="!editable || readonly"
               v-bind:placeholder="placeholder"
               v-bind:value="inputLikeValue"
               v-bind:checked="value">
        <slot v-if="!!slots.label" name="label"></slot>
        <label v-if="!!!slots.label" :for="Identifier" v-html="label"></label>
    </div>
</template>