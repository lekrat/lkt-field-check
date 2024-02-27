declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    valid: {
        type: BooleanConstructor;
        default: boolean;
    };
    autocomplete: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    readMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowReadModeSwitch: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: NumberConstructor;
        default: undefined;
    };
    mandatory: {
        type: BooleanConstructor;
        default: boolean;
    };
    reset: {
        type: BooleanConstructor;
        default: boolean;
    };
    resetMessage: {
        type: StringConstructor;
        default: string;
    };
    mandatoryMessage: {
        type: StringConstructor;
        default: string;
    };
    infoMessage: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    switchEditionMessage: {
        type: StringConstructor;
        default: string;
    };
}, {
    Identifier: string;
    reset: () => boolean;
    focus: () => void;
    value: () => boolean;
    isMandatory: () => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    blur: (...args: any[]) => void;
    click: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "click-info": (...args: any[]) => void;
    "click-error": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    valid: {
        type: BooleanConstructor;
        default: boolean;
    };
    autocomplete: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    readMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowReadModeSwitch: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: NumberConstructor;
        default: undefined;
    };
    mandatory: {
        type: BooleanConstructor;
        default: boolean;
    };
    reset: {
        type: BooleanConstructor;
        default: boolean;
    };
    resetMessage: {
        type: StringConstructor;
        default: string;
    };
    mandatoryMessage: {
        type: StringConstructor;
        default: string;
    };
    infoMessage: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    switchEditionMessage: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onClick-info"?: ((...args: any[]) => any) | undefined;
    "onClick-error"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    label: string;
    reset: boolean;
    autocomplete: boolean;
    disabled: boolean;
    readonly: boolean;
    mandatory: boolean;
    placeholder: string;
    tabindex: number;
    modelValue: boolean;
    palette: string;
    valid: boolean;
    readMode: boolean;
    allowReadModeSwitch: boolean;
    resetMessage: string;
    mandatoryMessage: string;
    infoMessage: string;
    errorMessage: string;
    switchEditionMessage: string;
}, {}>, {
    prefix?(_: {}): any;
    label?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
