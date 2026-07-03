var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/ifycyslojjqn39E7LT0J/c0J83GNcIAEnSvXUJfoQ/dYCQtHo0A.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
var cycleOrder = ["Euiv_mQhL", "V3SGfDdE_", "ESY0mcXK1"];
var serializationHash = "framer-LsgUF";
var variantClassNames = { ESY0mcXK1: "framer-v-1dytb0s", Euiv_mQhL: "framer-v-1q5ax0b", V3SGfDdE_: "framer-v-1c09cos" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { Desktop: "Euiv_mQhL", Phone: "ESY0mcXK1", Tablet: "V3SGfDdE_" };
var Variants = motion.create(React.Fragment);
var getProps = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "Euiv_mQhL" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "Euiv_mQhL", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-1q5ax0b", className, classNames), "data-framer-name": "Desktop", layoutDependency, layoutId: "Spacersamehightasfooter__Euiv_mQhL", ref: refBinding, style: { ...style }, ...addPropertyOverrides({ ESY0mcXK1: { "data-framer-name": "Phone" }, V3SGfDdE_: { "data-framer-name": "Tablet" } }, baseVariant, gestureVariant) }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-LsgUF.framer-iq7mpq, .framer-LsgUF .framer-iq7mpq { display: block; }", ".framer-LsgUF.framer-1q5ax0b { height: auto; overflow: hidden; position: relative; width: 100%; }", ".framer-LsgUF.framer-v-1c09cos.framer-1q5ax0b { height: auto; width: 100%; }", ".framer-LsgUF.framer-v-1dytb0s.framer-1q5ax0b { height: auto; width: 100%; }"];
var FramerdYCQtHo0A = withCSS(Component, css, "framer-LsgUF");
var dYCQtHo0A_default = FramerdYCQtHo0A;
FramerdYCQtHo0A.displayName = "Spacer (same hight as footer)";
FramerdYCQtHo0A.defaultProps = { height: 800, width: 1200 };
addPropertyControls(FramerdYCQtHo0A, { variant: { options: ["Euiv_mQhL", "V3SGfDdE_", "ESY0mcXK1"], optionTitles: ["Desktop", "Tablet", "Phone"], title: "Variant", type: ControlType.Enum } });
addFonts(FramerdYCQtHo0A, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerdYCQtHo0A", "slots": [], "annotations": { "framerIntrinsicWidth": "1200", "framerImmutableVariables": "true", "framerColorSyntax": "true", "framerIntrinsicHeight": "800", "framerDisplayContentsDiv": "false", "framerContractVersion": "1", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"V3SGfDdE_":{"layout":["fixed","fixed"]},"ESY0mcXK1":{"layout":["fixed","fixed"]}}}', "framerComponentViewportWidth": "true", "framerAutoSizeImages": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  dYCQtHo0A_default as default
};
