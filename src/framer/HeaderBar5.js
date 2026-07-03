var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/UE7uQqyK5kmJvgL6NMmI/N82XP7w7GxwFKH6vpknP/yl4YMO2JK.js
import { jsx as _jsx3, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls3, ComponentViewportProvider, ControlType as ControlType3, cx as cx3, forwardLoader, getFonts, getFontsFromSharedStyle, RichText, SmartComponentScopedContainer, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS3, withVariantAppearEffect } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React3 from "react";
import { useRef as useRef3 } from "react";

// http-url:https://framerusercontent.com/modules/Pv4ZUYoe25scUbjrloXU/8IoNdPijWWQwtGmCQglr/WfkfeFvL9.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["Inter-SemiBold", "Inter-Bold", "Inter-BoldItalic", "Inter-Italic"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css = [`.framer-4CPIs .framer-styles-preset-14ok5w5:not(.rich-text-wrapper), .framer-4CPIs .framer-styles-preset-14ok5w5.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on, 'ss01' on, 'cv01' on, 'cv02' on, 'cv10' on, 'cv07' on, 'zero' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.2px; --framer-line-height: 1.1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className = "framer-4CPIs";

// http-url:https://framerusercontent.com/modules/oubwU7bLuugZph3xO4jI/7h3ujDKguZsbx0cPY7zH/IwQFBVaW_.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getLoadingLazyAtYPosition, Image, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
var serializationHash = "framer-KYFn7";
var variantClassNames = { FMXNBOETu: "framer-v-1f2u4bw" };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ height, id, lgoImage, width, ...props }) => {
  return { ...props, De9UXQuLp: lgoImage ?? props.De9UXQuLp ?? { pixelHeight: 96, pixelWidth: 98, src: "https://framerusercontent.com/images/R8HuchsoCEZXT4ReU5z5RGQ.png?width=98&height=96" } };
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
  const { style, className: className2, layoutId, variant, De9UXQuLp, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "FMXNBOETu", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Image, { ...restProps, ...gestureHandlers, background: { alt: "Headshot of *Designer Name*", fit: "fit", loading: getLoadingLazyAtYPosition(componentViewport?.y || 0), pixelHeight: 96, pixelWidth: 98, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(De9UXQuLp), ...{ positionX: "center", positionY: "center" } }, className: cx(scopingClassNames, "framer-1f2u4bw", className2, classNames), "data-framer-name": "default", layoutDependency, layoutId: "HeaderBar__FMXNBOETu", ref: refBinding, style: { ...style } }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-KYFn7.framer-10uf93u, .framer-KYFn7 .framer-10uf93u { display: block; }", ".framer-KYFn7.framer-1f2u4bw { height: auto; overflow: visible; position: relative; width: 100%; }"];
var FramerIwQFBVaW_ = withCSS(Component, css2, "framer-KYFn7");
var IwQFBVaW_default = FramerIwQFBVaW_;
FramerIwQFBVaW_.displayName = "Logo Picture";
FramerIwQFBVaW_.defaultProps = { height: 15, width: 15 };
addPropertyControls(FramerIwQFBVaW_, { De9UXQuLp: { __defaultAssetReference: "data:framer/asset-reference,R8HuchsoCEZXT4ReU5z5RGQ.png?originalFilename=Logo.png&width=98&height=96", title: "Lgo Image", type: ControlType.ResponsiveImage } });
addFonts(FramerIwQFBVaW_, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/fbsY9XjmebVNToN5wZ6B/TQpbb2NTf47rbfZIBTaG/xZ17cqp1p.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React2 from "react";
import { useRef as useRef2 } from "react";
var cycleOrder = ["GWO_yXhF6", "DQ1EsnHzt"];
var serializationHash2 = "framer-Qz2rg";
var variantClassNames2 = { DQ1EsnHzt: "framer-v-smy2sk", GWO_yXhF6: "framer-v-8mfccz" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { delay: 0, duration: 1, ease: [0.85, -0.02, 0.31, 0.96], type: "tween" };
var Transition2 = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion2.create(React2.Fragment);
var humanReadableVariantMap = { End: "DQ1EsnHzt", Start: "GWO_yXhF6" };
var getProps2 = ({ color, height, id, opacity, width, ...props }) => {
  return { ...props, eV0W9xNCm: opacity ?? props.eV0W9xNCm ?? 0.12, L7khgg0dA: color ?? props.L7khgg0dA ?? "rgb(0, 0, 0)", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "GWO_yXhF6" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className: className2, layoutId, variant, L7khgg0dA, eV0W9xNCm, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder, defaultVariant: "GWO_yXhF6", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx2(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx2(motion2.div, { ...restProps, ...gestureHandlers, className: cx2(scopingClassNames, "framer-8mfccz", className2, classNames), "data-framer-name": "Start", layoutDependency, layoutId: "HeaderBar__GWO_yXhF6", ref: refBinding, style: { ...style }, ...addPropertyOverrides({ DQ1EsnHzt: { "data-framer-name": "End" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-kogd32", layoutDependency, layoutId: "HeaderBar__vvMGv_h0X", style: { backgroundColor: L7khgg0dA, opacity: 1 }, variants: { DQ1EsnHzt: { opacity: eV0W9xNCm } } }) }) }) }) });
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Qz2rg.framer-11a606z, .framer-Qz2rg .framer-11a606z { display: block; }", ".framer-Qz2rg.framer-8mfccz { height: auto; overflow: visible; position: relative; width: 100%; }", ".framer-Qz2rg .framer-kogd32 { flex: none; height: 1px; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 1px; }", ".framer-Qz2rg.framer-v-smy2sk .framer-kogd32 { width: 100%; }"];
var FramerxZ17cqp1p = withCSS2(Component2, css3, "framer-Qz2rg");
var xZ17cqp1p_default = FramerxZ17cqp1p;
FramerxZ17cqp1p.displayName = "Animated line";
FramerxZ17cqp1p.defaultProps = { height: 1, width: 200 };
addPropertyControls2(FramerxZ17cqp1p, { variant: { options: ["GWO_yXhF6", "DQ1EsnHzt"], optionTitles: ["Start", "End"], title: "Variant", type: ControlType2.Enum }, L7khgg0dA: { defaultValue: "rgb(0, 0, 0)", title: "Color", type: ControlType2.Color }, eV0W9xNCm: { defaultValue: 0.12, max: 1, min: 0, step: 0.01, title: "Opacity", type: ControlType2.Number } });
addFonts2(FramerxZ17cqp1p, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/UE7uQqyK5kmJvgL6NMmI/N82XP7w7GxwFKH6vpknP/yl4YMO2JK.js
var AnimatedLineFonts = getFonts(xZ17cqp1p_default);
var AnimatedLineWithVariantAppearEffect = withVariantAppearEffect(xZ17cqp1p_default);
var LogoPictureFonts = getFonts(IwQFBVaW_default);
var serializationHash3 = "framer-56PWM";
var variantClassNames3 = { XVfLFf08R: "framer-v-kztnlk" };
var transition13 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var toResponsiveImage2 = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var Transition3 = ({ value, children }) => {
  const config = React3.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx3(MotionConfigContext3.Provider, { value: contextValue, children });
};
var Variants3 = motion3.create(React3.Fragment);
var getProps3 = ({ height, id, lgoImage, title, width, ...props }) => {
  return { ...props, bxqAmDYWN: title ?? props.bxqAmDYWN ?? "text", Uy7bykZ34: lgoImage ?? props.Uy7bykZ34 ?? { pixelHeight: 96, pixelWidth: 98, src: "https://framerusercontent.com/images/R8HuchsoCEZXT4ReU5z5RGQ.png?width=98&height=96" } };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const fallbackRef = useRef3(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
  const { activeLocale, setLocale } = useLocaleInfo3();
  const componentViewport = useComponentViewport3();
  const { style, className: className2, layoutId, variant, bxqAmDYWN, Uy7bykZ34, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ defaultVariant: "XVfLFf08R", ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx3(serializationHash3, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx3(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition3, { value: transition13, children: /* @__PURE__ */ _jsxs(motion3.div, { ...restProps, ...gestureHandlers, className: cx3(scopingClassNames, "framer-kztnlk", className2, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "HeaderBar__XVfLFf08R", ref: refBinding, style: { ...style }, children: [/* @__PURE__ */ _jsx3(ComponentViewportProvider, { height: 1, y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 25.5) - 0 - 1) / 2), children: /* @__PURE__ */ _jsx3(SmartComponentScopedContainer, { className: "framer-1idvd5d-container", layoutDependency, layoutId: "HeaderBar__AmN2QDJZx-container", nodeId: "AmN2QDJZx", rendersWithMotion: true, scopeId: "yl4YMO2JK", style: { rotate: 180 }, children: /* @__PURE__ */ _jsx3(AnimatedLineWithVariantAppearEffect, { __framer__animateOnce: true, __framer__obscuredVariantId: "GWO_yXhF6", __framer__threshold: 0.5, __framer__variantAppearEffectEnabled: true, __framer__visibleVariantId: "DQ1EsnHzt", eV0W9xNCm: 0.12, height: "100%", id: "AmN2QDJZx", L7khgg0dA: "var(--token-3f9fd497-b700-4c59-baf4-76f1d1f44dcd, rgb(255, 255, 255))", layoutId: "HeaderBar__AmN2QDJZx", style: { height: "100%", width: "100%" }, variant: matchVariant("GWO_yXhF6"), width: "100%" }) }) }), /* @__PURE__ */ _jsxs(motion3.div, { className: "framer-6h48gh", "data-framer-name": "Details", layoutDependency, layoutId: "HeaderBar__E_0k6xLXl", style: { backgroundColor: "var(--token-5a162143-67c5-4226-a46e-87df1a71b300, rgb(51, 51, 51))", borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30 }, children: [/* @__PURE__ */ _jsx3(ComponentViewportProvider, { height: 14, width: "13px", y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 25.5) - 0 - 25.4) / 2) + 5.7, children: /* @__PURE__ */ _jsx3(SmartComponentScopedContainer, { className: "framer-1hs8d4r-container", "data-framer-name": "Logo", layoutDependency, layoutId: "HeaderBar__VSVxfXRnc-container", name: "Logo", nodeId: "VSVxfXRnc", rendersWithMotion: true, scopeId: "yl4YMO2JK", children: /* @__PURE__ */ _jsx3(IwQFBVaW_default, { De9UXQuLp: toResponsiveImage2(Uy7bykZ34), height: "100%", id: "VSVxfXRnc", layoutId: "HeaderBar__VSVxfXRnc", name: "Logo", style: { height: "100%", width: "100%" }, width: "100%" }) }) }), /* @__PURE__ */ _jsx3(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx3(React3.Fragment, { children: /* @__PURE__ */ _jsx3(motion3.p, { className: "framer-styles-preset-14ok5w5", "data-styles-preset": "WfkfeFvL9", dir: "auto", children: "text" }) }), className: "framer-182aotc", fonts: ["Inter"], layoutDependency, layoutId: "HeaderBar__LLXO2Sd88", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: bxqAmDYWN, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsx3(ComponentViewportProvider, { height: 1, y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 25.5) - 0 - 1) / 2), children: /* @__PURE__ */ _jsx3(SmartComponentScopedContainer, { className: "framer-1tfsg0a-container", layoutDependency, layoutId: "HeaderBar__n799J8SL9-container", nodeId: "n799J8SL9", rendersWithMotion: true, scopeId: "yl4YMO2JK", children: /* @__PURE__ */ _jsx3(AnimatedLineWithVariantAppearEffect, { __framer__animateOnce: true, __framer__obscuredVariantId: "GWO_yXhF6", __framer__threshold: 0.5, __framer__variantAppearEffectEnabled: true, __framer__visibleVariantId: "DQ1EsnHzt", eV0W9xNCm: 0.12, height: "100%", id: "n799J8SL9", L7khgg0dA: "var(--token-3f9fd497-b700-4c59-baf4-76f1d1f44dcd, rgb(255, 255, 255))", layoutId: "HeaderBar__n799J8SL9", style: { height: "100%", width: "100%" }, variant: matchVariant("GWO_yXhF6"), width: "100%" }) }) })] }) }) }) });
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-56PWM.framer-1tcrvbw, .framer-56PWM .framer-1tcrvbw { display: block; }", ".framer-56PWM.framer-kztnlk { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-56PWM .framer-1idvd5d-container, .framer-56PWM .framer-1tfsg0a-container { flex: 1 0 0px; height: 1px; position: relative; width: 1px; }", ".framer-56PWM .framer-6h48gh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 5px 8px 5px 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-56PWM .framer-1hs8d4r-container { aspect-ratio: 0.9230769230769231 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 14px); position: relative; width: 13px; }", ".framer-56PWM .framer-182aotc { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ...css];
var Frameryl4YMO2JK = withCSS3(Component3, css4, "framer-56PWM");
var yl4YMO2JK_default = Frameryl4YMO2JK;
Frameryl4YMO2JK.displayName = "Header Bar";
Frameryl4YMO2JK.defaultProps = { height: 25.5, width: 1200 };
addPropertyControls3(Frameryl4YMO2JK, { bxqAmDYWN: { defaultValue: "text", displayTextArea: false, title: "Title", type: ControlType3.String }, onbxqAmDYWNChange: { changes: "bxqAmDYWN", type: ControlType3.ChangeHandler }, Uy7bykZ34: { __defaultAssetReference: "data:framer/asset-reference,R8HuchsoCEZXT4ReU5z5RGQ.png?originalFilename=Logo.png&width=98&height=96", title: "Lgo Image", type: ControlType3.ResponsiveImage } });
addFonts3(Frameryl4YMO2JK, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...AnimatedLineFonts, ...LogoPictureFonts, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });
Frameryl4YMO2JK.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader(xZ17cqp1p_default, {}, context), forwardLoader(IwQFBVaW_default, {}, context)]);
} };
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "Frameryl4YMO2JK", "slots": [], "annotations": { "framerVariables": '{"bxqAmDYWN":"title","Uy7bykZ34":"lgoImage"}', "framerDisplayContentsDiv": "false", "framerImmutableVariables": "true", "framerColorSyntax": "true", "framerIntrinsicWidth": "1200", "framerIntrinsicHeight": "25.5", "framerAutoSizeImages": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}', "framerContractVersion": "1", "framerComponentViewportWidth": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  yl4YMO2JK_default as default
};
