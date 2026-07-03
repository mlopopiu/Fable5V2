var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/dw9rgorzAcgVxioAR5C9/9HuLFdyf22yUp5aeGKpv/zKNPghbgp.js
import { jsx as _jsx7, jsxs as _jsxs6 } from "react/jsx-runtime";
import { addFonts as addFonts6, addPropertyControls as addPropertyControls7, ComponentViewportProvider as ComponentViewportProvider3, ControlType as ControlType7, cx as cx6, forwardLoader as forwardLoader2, getFonts as getFonts3, getFontsFromSharedStyle as getFontsFromSharedStyle3, Link as Link3, RichText as RichText3, SmartComponentScopedContainer as SmartComponentScopedContainer3, useActiveVariantCallback as useActiveVariantCallback3, useComponentViewport as useComponentViewport6, useLocaleInfo as useLocaleInfo6, useVariantState as useVariantState6, withCSS as withCSS6 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup6, motion as motion7, MotionConfigContext as MotionConfigContext6 } from "framer-motion";
import * as React6 from "react";
import { useRef as useRef6 } from "react";

// http-url:https://framerusercontent.com/modules/x81aPXn2GfpCoPgEFXtJ/AFrmVGbXzkVN62qp6pHo/KQTQTeOy9.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["Inter-SemiBold", "Inter-Bold", "Inter-BoldItalic", "Inter-SemiBoldItalic"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/vxBnBhH8768IFAXAb4Qf6wQHKs.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/zSsEuoJdh8mcFVk976C05ZfQr8.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/b8ezwLrN7h2AUoPEENcsTMVJ0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/mvNEIBLyHbscgHtwfsByjXUz3XY.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/6FI2EneKzM3qBy5foOZXey7coCA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/fuyXZpVvOjq8NesCOfgirHCWyg.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/NHHeAKJVP0ZWHk5YZnQQChIsBM.woff2", weight: "600" }] }];
var css = [`.framer-uh5xN .framer-styles-preset-9jmi73:not(.rich-text-wrapper), .framer-uh5xN .framer-styles-preset-9jmi73.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.04px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className = "framer-uh5xN";

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
  const { style, className: className4, layoutId, variant, De9UXQuLp, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "FMXNBOETu", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Image, { ...restProps, ...gestureHandlers, background: { alt: "Headshot of *Designer Name*", fit: "fit", loading: getLoadingLazyAtYPosition(componentViewport?.y || 0), pixelHeight: 96, pixelWidth: 98, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(De9UXQuLp), ...{ positionX: "center", positionY: "center" } }, className: cx(scopingClassNames, "framer-1f2u4bw", className4, classNames), "data-framer-name": "default", layoutDependency, layoutId: "Navbar__FMXNBOETu", ref: refBinding, style: { ...style } }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-KYFn7.framer-10uf93u, .framer-KYFn7 .framer-10uf93u { display: block; }", ".framer-KYFn7.framer-1f2u4bw { height: auto; overflow: visible; position: relative; width: 100%; }"];
var FramerIwQFBVaW_ = withCSS(Component, css2, "framer-KYFn7");
var IwQFBVaW_default = FramerIwQFBVaW_;
FramerIwQFBVaW_.displayName = "Logo Picture";
FramerIwQFBVaW_.defaultProps = { height: 15, width: 15 };
addPropertyControls(FramerIwQFBVaW_, { De9UXQuLp: { __defaultAssetReference: "data:framer/asset-reference,R8HuchsoCEZXT4ReU5z5RGQ.png?originalFilename=Logo.png&width=98&height=96", title: "Lgo Image", type: ControlType.ResponsiveImage } });
addFonts(FramerIwQFBVaW_, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/Q0sMdtcLinb3lFDiiZZ3/BN7sjEr5woq39vMwem0n/JgVeYniJA.js
import { jsx as _jsx5, jsxs as _jsxs4 } from "react/jsx-runtime";
import { addFonts as addFonts4, addPropertyControls as addPropertyControls5, ComponentViewportProvider as ComponentViewportProvider2, ControlType as ControlType5, cx as cx4, forwardLoader, getFonts as getFonts2, ResolveLinks, SmartComponentScopedContainer as SmartComponentScopedContainer2, useActiveVariantCallback, useComponentViewport as useComponentViewport4, useLocaleInfo as useLocaleInfo4, useRouter, useVariantState as useVariantState4, withCSS as withCSS4 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup4, motion as motion5, MotionConfigContext as MotionConfigContext4 } from "framer-motion";
import * as React4 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/broupNMRKGlsuripOFLt/sh4d4mcKA7hdoqmj67li/sYkYAkPAt.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, getFontsFromSharedStyle, Link, RichText, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React2 from "react";
import { useRef as useRef2 } from "react";
var enabledGestures = { zdYjUyj4f: { hover: true } };
var serializationHash2 = "framer-iIlJa";
var variantClassNames2 = { zdYjUyj4f: "framer-v-vf9st4" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition2 = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion2.create(React2.Fragment);
var getProps2 = ({ height, id, link, number, title, width, ...props }) => {
  return { ...props, i83LM0fHv: number ?? props.i83LM0fHv, OKr5AJd5k: link ?? props.OKr5AJd5k, wSDtEcD_o: title ?? props.wSDtEcD_o ?? "Title" };
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
  const { style, className: className4, layoutId, variant, wSDtEcD_o, i83LM0fHv, OKr5AJd5k, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ defaultVariant: "zdYjUyj4f", enabledGestures, ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx2(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx2(Link, { href: OKr5AJd5k, motionChild: true, nodeId: "zdYjUyj4f", scopeId: "sYkYAkPAt", smoothScroll: false, children: /* @__PURE__ */ _jsxs(motion2.a, { ...restProps, ...gestureHandlers, className: `${cx2(scopingClassNames, "framer-vf9st4", className4, classNames)} framer-1os9du1`, "data-framer-name": "Default", layoutDependency, layoutId: "Navbar__zdYjUyj4f", ref: refBinding, style: { ...style }, ...addPropertyOverrides({ "zdYjUyj4f-hover": { "data-framer-name": void 0 } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React2.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.p, { className: "framer-styles-preset-9jmi73", "data-styles-preset": "KQTQTeOy9", dir: "auto", children: "Title" }) }), className: "framer-1oeo9ms", fonts: ["Inter"], layoutDependency, layoutId: "Navbar__r4UxV65oy", style: { "--framer-paragraph-spacing": "0px", opacity: 1 }, text: wSDtEcD_o, variants: { "zdYjUyj4f-hover": { opacity: 0.6 } }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React2.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.p, { dir: "auto", style: { "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--framer-font-size": "9px", "--framer-font-weight": "600", "--framer-letter-spacing": "-0.04em", "--framer-line-height": "100%", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(230, 197, 37)))" }, children: "Content" }) }), className: "framer-wg5581", fonts: ["Inter-SemiBold"], layoutDependency, layoutId: "Navbar__fHteyMGZb", style: { "--extracted-r6o4lv": "var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(230, 197, 37))", "--framer-paragraph-spacing": "0px" }, text: i83LM0fHv, verticalAlignment: "top", withExternalLayout: true })] }) }) }) }) });
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-iIlJa.framer-1os9du1, .framer-iIlJa .framer-1os9du1 { display: block; }", ".framer-iIlJa.framer-vf9st4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }", ".framer-iIlJa .framer-1oeo9ms { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-iIlJa .framer-wg5581 { flex: none; height: auto; position: absolute; right: -12px; top: -1px; white-space: pre; width: auto; z-index: 1; }", ...css];
var FramersYkYAkPAt = withCSS2(Component2, css3, "framer-iIlJa");
var sYkYAkPAt_default = FramersYkYAkPAt;
FramersYkYAkPAt.displayName = "Menu item";
FramersYkYAkPAt.defaultProps = { height: 17.5, width: 34 };
addPropertyControls2(FramersYkYAkPAt, { wSDtEcD_o: { defaultValue: "Title", displayTextArea: false, title: "Title", type: ControlType2.String }, onwSDtEcD_oChange: { changes: "wSDtEcD_o", type: ControlType2.ChangeHandler }, i83LM0fHv: { defaultValue: "", displayTextArea: false, title: "Number", type: ControlType2.String }, oni83LM0fHvChange: { changes: "i83LM0fHv", type: ControlType2.ChangeHandler }, OKr5AJd5k: { title: "Link", type: ControlType2.Link } });
addFonts2(FramersYkYAkPAt, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2", weight: "600" }] }, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/B0kjxHiHxaFxnRLblNyb/7jhnYjkV4xAEej9co0uP/ZfRLUDToh.js
import { jsx as _jsx4, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls4, ComponentViewportProvider, ControlType as ControlType4, cx as cx3, getFonts, getFontsFromSharedStyle as getFontsFromSharedStyle2, Link as Link2, RichText as RichText2, SmartComponentScopedContainer, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS3 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion4, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React3 from "react";
import { useRef as useRef3 } from "react";

// http-url:https://framerusercontent.com/modules/FiiQ0BKlVUNzxXjo8hFs/wP5ls8Ui6wqb7IsgWCbt/RollingTextHover_Prod.js
import { jsx as _jsx3, jsxs as _jsxs2 } from "react/jsx-runtime";
import { useState, useId as useId3 } from "react";
import { addPropertyControls as addPropertyControls3, ControlType as ControlType3 } from "./_framer-runtime.js";
import { motion as motion3 } from "framer-motion";
function RollingText({ text, transition, stagger, reverse, font, color, textTransform, tag, padding }) {
  const [isHovered, setIsHovered] = useState(false);
  const reactId = useId3();
  const innerClassName = `rolling-text-inner-${reactId.replace(/:/g, "")}`;
  const Tag = tag;
  const fontSizeStr = font?.fontSize ?? "16px";
  const letterSpacingStr = font?.letterSpacing ?? "0px";
  const rawLineHeight = font?.lineHeight;
  const fontFamily = font?.fontFamily ?? "Inter";
  const fontSizeNum = parseInt(fontSizeStr, 10) || 16;
  let absoluteLineHeightPx;
  if (typeof rawLineHeight === "number") {
    absoluteLineHeightPx = fontSizeNum * rawLineHeight;
  } else if (typeof rawLineHeight === "string" && rawLineHeight.includes("em")) {
    const emValue = parseFloat(rawLineHeight) || 1.2;
    absoluteLineHeightPx = fontSizeNum * emValue;
  } else if (typeof rawLineHeight === "string") {
    const pxValue = parseFloat(rawLineHeight);
    absoluteLineHeightPx = isNaN(pxValue) ? rawLineHeight : `${pxValue}px`;
  } else {
    absoluteLineHeightPx = fontSizeNum * 1.2;
  }
  const absoluteLineHeightStr = typeof absoluteLineHeightPx === "number" ? `${absoluteLineHeightPx}px` : absoluteLineHeightPx;
  const yOffset = `-${absoluteLineHeightStr}`;
  const styles = `
    .${innerClassName} {
      --font-size: ${fontSizeStr};
      --text: ${color};
      --line-height-abs: ${absoluteLineHeightStr};
      box-sizing: border-box; margin: 0; padding: 0; vertical-align: top;
      display: flex; overflow: hidden; width: max-content;
      font-family: ${fontFamily}; font-size: ${fontSizeStr};
      text-transform: ${textTransform}; user-select: none;
      text-shadow: 0 var(--line-height-abs) 0 var(--text);
    }
    .${innerClassName} span {
      display: block; -webkit-backface-visibility: hidden; backface-visibility: hidden;
      white-space: pre; flex-shrink: 0;
      font-family: inherit; font-weight: inherit; font-style: inherit;
      font-size: inherit; letter-spacing: inherit;
      line-height: ${rawLineHeight ?? 1.2};
      color: var(--text);
    }
  `;
  const wrapperStyle = { display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", overflow: "hidden", padding, boxSizing: "border-box" };
  const spanVariants = { initial: { y: "0%" }, hover: { y: yOffset } };
  const baseDuration = typeof transition?.duration === "number" ? transition.duration : 0.5;
  const staggerFactor = stagger / 100;
  return /* @__PURE__ */ _jsxs2("div", { style: wrapperStyle, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [/* @__PURE__ */ _jsx3(Tag, { className: innerClassName, children: [...text].map((str, index) => {
    const charIndex = reverse ? text.length - 1 - index : index;
    const delay = text.length > 0 ? baseDuration / text.length * charIndex * staggerFactor : 0;
    const motionSpanStyle = { display: "block", ...font };
    return /* @__PURE__ */ _jsx3(motion3.span, { variants: spanVariants, initial: "initial", animate: isHovered ? "hover" : "initial", transition: { ...transition, delay }, style: motionSpanStyle, children: str === " " ? "\xA0" : str }, index);
  }) }), /* @__PURE__ */ _jsx3("style", { children: styles })] });
}
RollingText.displayName = "Rolling Text";
var defaultFont = { fontFamily: "Inter", fontWeight: "400", fontSize: "16px", fontStyle: "normal", letterSpacing: "0px", lineHeight: 1.2 };
var defaultTransition = { type: "spring", duration: 0.4, bounce: 0 };
addPropertyControls3(RollingText, {
  text: { type: ControlType3.String, title: "Text", defaultValue: "Rolling Text" },
  font: { type: ControlType3.Font, title: "Font", controls: "extended", defaultValue: defaultFont },
  color: { type: ControlType3.Color, title: "Color", defaultValue: "#808080" },
  transition: { type: ControlType3.Transition, title: "Transition", defaultValue: defaultTransition },
  // Added Stagger control
  stagger: { title: "Stagger", type: ControlType3.Number, min: 0, max: 100, step: 1, defaultValue: 35, unit: "%" },
  padding: { title: "Padding", type: ControlType3.Padding, defaultValue: "0px" },
  reverse: { type: ControlType3.Boolean, title: "Reverse", defaultValue: false, enabledTitle: "Yes", disabledTitle: "No" },
  textTransform: { title: "Transform", type: ControlType3.Enum, defaultValue: "none", options: ["none", "uppercase", "lowercase", "capitalize"], optionTitles: ["None", "Uppercase", "Lowercase", "Capitalize"] },
  tag: { type: ControlType3.Enum, title: "Tag", options: ["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"], optionTitles: ["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"], defaultValue: "p", description: "More components at [Framer University](https://frameruni.link/cc)." }
});

// http-url:https://framerusercontent.com/modules/b0DQhwVpgF61SO5yz5vI/n4lfvlKqorWsWwilNae6/Kst9xRM8v.js
import { fontStore as fontStore2 } from "./_framer-runtime.js";
fontStore2.loadFonts(["Inter-Bold", "Inter-Black", "Inter-BlackItalic", "Inter-Italic"]);
var fonts2 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/rZ5DdENNqIdFTIyQQiP5isO7M.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/3ZmXbBKToJifDV9gwcifVd1tEY.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/gcnfba68tfm7qAyrWRCf9r34jg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css4 = ['.framer-0LoBs .framer-styles-preset-cbutxb:not(.rich-text-wrapper), .framer-0LoBs .framer-styles-preset-cbutxb.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-0LoBs .framer-styles-preset-cbutxb:not(.rich-text-wrapper), .framer-0LoBs .framer-styles-preset-cbutxb.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-0LoBs .framer-styles-preset-cbutxb:not(.rich-text-wrapper), .framer-0LoBs .framer-styles-preset-cbutxb.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 19px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className2 = "framer-0LoBs";

// http-url:https://framerusercontent.com/modules/ISZuzsUT9Xdd5ePLXb7x/We0E0j0wDeFfdxz3rfhJ/pVdNGAxZO.js
import { fontStore as fontStore3 } from "./_framer-runtime.js";
fontStore3.loadFonts(["Inter-Bold", "Inter-Black", "Inter-BlackItalic", "Inter-Italic"]);
var fonts3 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/rZ5DdENNqIdFTIyQQiP5isO7M.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/3ZmXbBKToJifDV9gwcifVd1tEY.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/gcnfba68tfm7qAyrWRCf9r34jg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css5 = [`.framer-Bew3a .framer-styles-preset-1q6zu6t:not(.rich-text-wrapper), .framer-Bew3a .framer-styles-preset-1q6zu6t.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04px; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className3 = "framer-Bew3a";

// http-url:https://framerusercontent.com/modules/B0kjxHiHxaFxnRLblNyb/7jhnYjkV4xAEej9co0uP/ZfRLUDToh.js
var RollingTextFonts = getFonts(RollingText);
var cycleOrder = ["bWvFCpGqZ", "dXoH4aW9S", "SfsVyg8AH"];
var serializationHash3 = "framer-1Vmdk";
var variantClassNames3 = { bWvFCpGqZ: "framer-v-68f7ea", dXoH4aW9S: "framer-v-j4wlk6", SfsVyg8AH: "framer-v-ktx50s" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var radiusForCorner = (value, cornerIndex) => {
  if (typeof value === "number" && Number.isFinite(value))
    return Math.max(0, value) + "px";
  if (typeof value !== "string" || typeof cornerIndex !== "number")
    return void 0;
  const segments = value.split(" ");
  return segments[cornerIndex] || segments[cornerIndex - 2] || segments[0];
};
var transition13 = { damping: 40, delay: 0, mass: 1, stiffness: 350, type: "spring" };
var Transition3 = ({ value, children }) => {
  const config = React3.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx4(MotionConfigContext3.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { " tertiary": "SfsVyg8AH", "Secondary ": "dXoH4aW9S", Primary: "bWvFCpGqZ" };
var Variants3 = motion4.create(React3.Fragment);
var getProps3 = ({ bGFill, height, id, link, newTab, normalTextVisible, radius, rollingTextVisible, smoothScroll, textColor, title, width, ...props }) => {
  return { ...props, CSyo3aTPk: newTab ?? props.CSyo3aTPk, eKuI9CoCg: textColor ?? props.eKuI9CoCg ?? "var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255))", Gh9QOfeLM: title ?? props.Gh9QOfeLM ?? "Text", JQPbxOZrF: link ?? props.JQPbxOZrF, O2hjEQwNf: normalTextVisible ?? props.O2hjEQwNf, oTM8e0FLR: radius ?? props.oTM8e0FLR ?? "259px", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "bWvFCpGqZ", vZZm_o9LA: smoothScroll ?? props.vZZm_o9LA, WoiFDjxIJ: bGFill ?? props.WoiFDjxIJ ?? "var(--token-7e7f72de-b42b-44cb-b318-42bed5ea0287, rgb(15, 128, 84))", xeTdFG4YU: rollingTextVisible ?? props.xeTdFG4YU ?? true };
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
  const { style, className: className4, layoutId, variant, Gh9QOfeLM, JQPbxOZrF, vZZm_o9LA, CSyo3aTPk, WoiFDjxIJ, eKuI9CoCg, oTM8e0FLR, xeTdFG4YU, O2hjEQwNf, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ cycleOrder, defaultVariant: "bWvFCpGqZ", ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const sharedStyleClassNames = [className2, className, className3];
  const scopingClassNames = cx3(serializationHash3, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx4(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition3, { value: transition13, children: /* @__PURE__ */ _jsx4(Link2, { href: JQPbxOZrF, motionChild: true, nodeId: "bWvFCpGqZ", openInNewTab: CSyo3aTPk, scopeId: "ZfRLUDToh", smoothScroll: vZZm_o9LA, children: /* @__PURE__ */ _jsxs3(motion4.a, { ...restProps, ...gestureHandlers, className: `${cx3(scopingClassNames, "framer-68f7ea", className4, classNames)} framer-igryma`, "data-framer-name": "Primary", layoutDependency, layoutId: "Navbar__bWvFCpGqZ", ref: refBinding, style: { backgroundColor: WoiFDjxIJ, borderBottomLeftRadius: radiusForCorner(oTM8e0FLR, 3), borderBottomRightRadius: radiusForCorner(oTM8e0FLR, 2), borderTopLeftRadius: radiusForCorner(oTM8e0FLR, 0), borderTopRightRadius: radiusForCorner(oTM8e0FLR, 1), ...style }, ...addPropertyOverrides2({ dXoH4aW9S: { "data-framer-name": "Secondary " }, SfsVyg8AH: { "data-framer-name": " tertiary" } }, baseVariant, gestureVariant), children: [xeTdFG4YU !== false && /* @__PURE__ */ _jsx4(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-16bqd1p-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Navbar__kQPiP8BvJ-container", nodeId: "kQPiP8BvJ", rendersWithMotion: true, scopeId: "ZfRLUDToh", children: /* @__PURE__ */ _jsx4(RollingText, { color: eKuI9CoCg, font: { fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontSize: "20px", fontStyle: "normal", fontWeight: 700, letterSpacing: "-0.3px", lineHeight: "1em" }, height: "100%", id: "kQPiP8BvJ", layoutId: "Navbar__kQPiP8BvJ", padding: "0px", reverse: false, stagger: 55, style: { width: "100%" }, tag: "p", text: Gh9QOfeLM, textTransform: "none", transition: { delay: 0, duration: 0.4, ease: [0.82, 0.08, 0.29, 1], type: "tween" }, width: "100%", ...addPropertyOverrides2({ dXoH4aW9S: { font: { fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontSize: "16px", fontStyle: "normal", fontWeight: 600, letterSpacing: "-0.3px", lineHeight: "16px" } }, SfsVyg8AH: { font: { fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontSize: "16px", fontStyle: "normal", fontWeight: 700, letterSpacing: "-0.3px", lineHeight: "18px" } } }, baseVariant, gestureVariant) }) }) }), O2hjEQwNf !== false && /* @__PURE__ */ _jsx4(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React3.Fragment, { children: /* @__PURE__ */ _jsx4(motion4.p, { className: "framer-styles-preset-cbutxb", "data-styles-preset": "Kst9xRM8v", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-eKuI9CoCg-ZfRLUDToh))" }, children: "Text" }) }), className: "framer-lnwosa", fonts: ["Inter"], layoutDependency, layoutId: "Navbar__mDX2NZxsX", style: { "--extracted-r6o4lv": "var(--variable-reference-eKuI9CoCg-ZfRLUDToh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-eKuI9CoCg-ZfRLUDToh": eKuI9CoCg }, text: Gh9QOfeLM, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides2({ dXoH4aW9S: { children: /* @__PURE__ */ _jsx4(React3.Fragment, { children: /* @__PURE__ */ _jsx4(motion4.p, { className: "framer-styles-preset-9jmi73", "data-styles-preset": "KQTQTeOy9", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-eKuI9CoCg-ZfRLUDToh))" }, children: "Text" }) }) }, SfsVyg8AH: { children: /* @__PURE__ */ _jsx4(React3.Fragment, { children: /* @__PURE__ */ _jsx4(motion4.p, { className: "framer-styles-preset-1q6zu6t", "data-styles-preset": "pVdNGAxZO", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-eKuI9CoCg-ZfRLUDToh))" }, children: "Text" }) }) } }, baseVariant, gestureVariant) })] }) }) }) }) });
});
var css6 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-1Vmdk.framer-igryma, .framer-1Vmdk .framer-igryma { display: block; }", ".framer-1Vmdk.framer-68f7ea { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px; position: relative; text-decoration: none; width: 200px; will-change: var(--framer-will-change-override, transform); }", ".framer-1Vmdk .framer-16bqd1p-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-1Vmdk .framer-lnwosa { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-1Vmdk.framer-v-j4wlk6.framer-68f7ea, .framer-1Vmdk.framer-v-ktx50s.framer-68f7ea { padding: 8px; width: min-content; }", ".framer-1Vmdk.framer-v-j4wlk6 .framer-16bqd1p-container, .framer-1Vmdk.framer-v-ktx50s .framer-16bqd1p-container { flex: none; width: auto; }", ...css4, ...css, ...css5];
var FramerZfRLUDToh = withCSS3(Component3, css6, "framer-1Vmdk");
var ZfRLUDToh_default = FramerZfRLUDToh;
FramerZfRLUDToh.displayName = "Primary Button";
FramerZfRLUDToh.defaultProps = { height: 40, width: 200 };
addPropertyControls4(FramerZfRLUDToh, { variant: { options: ["bWvFCpGqZ", "dXoH4aW9S", "SfsVyg8AH"], optionTitles: ["Primary", "Secondary ", " tertiary"], title: "Variant", type: ControlType4.Enum }, Gh9QOfeLM: { defaultValue: "Text", displayTextArea: false, title: "Title", type: ControlType4.String }, onGh9QOfeLMChange: { changes: "Gh9QOfeLM", type: ControlType4.ChangeHandler }, JQPbxOZrF: { title: "Link", type: ControlType4.Link }, vZZm_o9LA: { defaultValue: false, title: "Smooth Scroll", type: ControlType4.Boolean }, onvZZm_o9LAChange: { changes: "vZZm_o9LA", type: ControlType4.ChangeHandler }, CSyo3aTPk: { defaultValue: false, title: "New Tab", type: ControlType4.Boolean }, onCSyo3aTPkChange: { changes: "CSyo3aTPk", type: ControlType4.ChangeHandler }, WoiFDjxIJ: { defaultValue: 'var(--token-7e7f72de-b42b-44cb-b318-42bed5ea0287, rgb(15, 128, 84)) /* {"name":"Green"} */', title: "BG Fill", type: ControlType4.Color }, eKuI9CoCg: { defaultValue: 'var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255)) /* {"name":"White"} */', title: "Text Color", type: ControlType4.Color }, oTM8e0FLR: { defaultValue: "259px", title: "Radius", type: ControlType4.BorderRadius }, xeTdFG4YU: { defaultValue: true, title: "Rolling Text Visible", type: ControlType4.Boolean }, onxeTdFG4YUChange: { changes: "xeTdFG4YU", type: ControlType4.ChangeHandler }, O2hjEQwNf: { defaultValue: false, title: "Normal Text Visible", type: ControlType4.Boolean }, onO2hjEQwNfChange: { changes: "O2hjEQwNf", type: ControlType4.ChangeHandler } });
addFonts3(FramerZfRLUDToh, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...RollingTextFonts, ...getFontsFromSharedStyle2(fonts2), ...getFontsFromSharedStyle2(fonts), ...getFontsFromSharedStyle2(fonts3)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/Q0sMdtcLinb3lFDiiZZ3/BN7sjEr5woq39vMwem0n/JgVeYniJA.js
var MenuItemFonts = getFonts2(sYkYAkPAt_default);
var PrimaryButtonFonts = getFonts2(ZfRLUDToh_default);
var cycleOrder2 = ["gFBNzA0rA", "yp8by6VlZ"];
var serializationHash4 = "framer-BpYbi";
var variantClassNames4 = { gFBNzA0rA: "framer-v-1nhly1w", yp8by6VlZ: "framer-v-1nkt3p1" };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition14 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var Transition4 = ({ value, children }) => {
  const config = React4.useContext(MotionConfigContext4);
  const transition = value ?? config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx5(MotionConfigContext4.Provider, { value: contextValue, children });
};
var humanReadableVariantMap2 = { Desktop: "gFBNzA0rA", Mobile: "yp8by6VlZ" };
var Variants4 = motion5.create(React4.Fragment);
var getProps4 = ({ height, id, mouseLeave, width, ...props }) => {
  return { ...props, NXPdtflRE: mouseLeave ?? props.NXPdtflRE, variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "gFBNzA0rA" };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component4 = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React4.useId();
  const { activeLocale, setLocale } = useLocaleInfo4();
  const componentViewport = useComponentViewport4();
  const { style, className: className4, layoutId, variant, NXPdtflRE, ...restProps } = getProps4(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState4({ cycleOrder: cycleOrder2, defaultVariant: "gFBNzA0rA", ref: refBinding, variant, variantClassNames: variantClassNames4 });
  const layoutDependency = createLayoutDependency4(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onMouseLeaveuh03wb = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: false });
    if (NXPdtflRE) {
      const res = await NXPdtflRE(...args);
      if (res === false)
        return false;
    }
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx4(serializationHash4, ...sharedStyleClassNames);
  const router = useRouter();
  return /* @__PURE__ */ _jsx5(LayoutGroup4, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx5(Variants4, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx5(Transition4, { value: transition14, children: /* @__PURE__ */ _jsxs4(motion5.nav, { ...restProps, ...gestureHandlers, className: cx4(scopingClassNames, "framer-1nhly1w", className4, classNames), "data-framer-name": "Desktop", "data-highlight": true, layoutDependency, layoutId: "Navbar__gFBNzA0rA", onMouseLeave: onMouseLeaveuh03wb, ref: refBinding, style: { ...style }, ...addPropertyOverrides3({ yp8by6VlZ: { "data-framer-name": "Mobile" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx5(ResolveLinks, { links: [{ href: { webPageId: "r4FeDXwj1" }, implicitPathVariables: void 0 }, { href: { webPageId: "r4FeDXwj1" }, implicitPathVariables: void 0 }], children: (resolvedLinks) => /* @__PURE__ */ _jsx5(ComponentViewportProvider2, { height: 17, y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 34) - 0 - 17) / 2), ...addPropertyOverrides3({ yp8by6VlZ: { y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 142.5) - 0 - 139) / 2 + 0 + 0) } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer2, { className: "framer-sj5bp8-container", layoutDependency, layoutId: "Navbar__ViT3pfQ6l-container", nodeId: "ViT3pfQ6l", rendersWithMotion: true, scopeId: "JgVeYniJA", children: /* @__PURE__ */ _jsx5(sYkYAkPAt_default, { height: "100%", i83LM0fHv: "", id: "ViT3pfQ6l", layoutId: "Navbar__ViT3pfQ6l", OKr5AJd5k: resolvedLinks[0], width: "100%", wSDtEcD_o: "Studio", ...addPropertyOverrides3({ yp8by6VlZ: { OKr5AJd5k: resolvedLinks[1] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx5(ResolveLinks, { links: [{ href: { webPageId: "rD51Sum5U" }, implicitPathVariables: void 0 }, { href: { webPageId: "rD51Sum5U" }, implicitPathVariables: void 0 }], children: (resolvedLinks1) => /* @__PURE__ */ _jsx5(ComponentViewportProvider2, { height: 17, y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 34) - 0 - 17) / 2), ...addPropertyOverrides3({ yp8by6VlZ: { y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 142.5) - 0 - 139) / 2 + 17 + 16) } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer2, { className: "framer-wbii6c-container", layoutDependency, layoutId: "Navbar__XYFQr7ML5-container", nodeId: "XYFQr7ML5", rendersWithMotion: true, scopeId: "JgVeYniJA", children: /* @__PURE__ */ _jsx5(sYkYAkPAt_default, { height: "100%", i83LM0fHv: "07", id: "XYFQr7ML5", layoutId: "Navbar__XYFQr7ML5", OKr5AJd5k: resolvedLinks1[0], width: "100%", wSDtEcD_o: "Projects", ...addPropertyOverrides3({ yp8by6VlZ: { OKr5AJd5k: resolvedLinks1[1] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx5(ResolveLinks, { links: [{ href: { webPageId: "sS219XaHf" }, implicitPathVariables: void 0 }, { href: { webPageId: "sS219XaHf" }, implicitPathVariables: void 0 }], children: (resolvedLinks2) => /* @__PURE__ */ _jsx5(ComponentViewportProvider2, { height: 17, y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 34) - 0 - 17) / 2), ...addPropertyOverrides3({ yp8by6VlZ: { y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 142.5) - 0 - 139) / 2 + 34 + 32) } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer2, { className: "framer-1e685om-container", layoutDependency, layoutId: "Navbar__qFBbmn5KE-container", nodeId: "qFBbmn5KE", rendersWithMotion: true, scopeId: "JgVeYniJA", children: /* @__PURE__ */ _jsx5(sYkYAkPAt_default, { height: "100%", i83LM0fHv: "", id: "qFBbmn5KE", layoutId: "Navbar__qFBbmn5KE", OKr5AJd5k: resolvedLinks2[0], width: "100%", wSDtEcD_o: "Blog", ...addPropertyOverrides3({ yp8by6VlZ: { OKr5AJd5k: resolvedLinks2[1] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx5(ResolveLinks, { links: [{ href: { webPageId: "xZe_hsvJk" }, implicitPathVariables: void 0 }, { href: { webPageId: "xZe_hsvJk" }, implicitPathVariables: void 0 }], children: (resolvedLinks3) => /* @__PURE__ */ _jsx5(ComponentViewportProvider2, { height: 40, y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 34) - 0 - 40) / 2), ...addPropertyOverrides3({ yp8by6VlZ: { y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 142.5) - 0 - 139) / 2 + 51 + 48) } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer2, { className: "framer-t8m218-container", layoutDependency, layoutId: "Navbar__kuQdaWbVa-container", nodeId: "kuQdaWbVa", rendersWithMotion: true, scopeId: "JgVeYniJA", children: /* @__PURE__ */ _jsx5(ZfRLUDToh_default, { CSyo3aTPk: false, eKuI9CoCg: "var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255))", Gh9QOfeLM: "Contact", height: "100%", id: "kuQdaWbVa", JQPbxOZrF: resolvedLinks3[0], layoutId: "Navbar__kuQdaWbVa", O2hjEQwNf: false, oTM8e0FLR: "30px", variant: matchVariant("SfsVyg8AH"), vZZm_o9LA: false, width: "100%", WoiFDjxIJ: "var(--token-7e7f72de-b42b-44cb-b318-42bed5ea0287, rgb(15, 128, 84))", xeTdFG4YU: true, ...addPropertyOverrides3({ yp8by6VlZ: { JQPbxOZrF: resolvedLinks3[1], O2hjEQwNf: true, xeTdFG4YU: false } }, baseVariant, gestureVariant) }) }) }) })] }) }) }) });
});
var css7 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-BpYbi.framer-1tx5ryt, .framer-BpYbi .framer-1tx5ryt { display: block; }", ".framer-BpYbi.framer-1nhly1w { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-BpYbi .framer-sj5bp8-container, .framer-BpYbi .framer-wbii6c-container, .framer-BpYbi .framer-1e685om-container, .framer-BpYbi .framer-t8m218-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-BpYbi.framer-v-1nkt3p1.framer-1nhly1w { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 16px; width: 100%; }"];
var FramerJgVeYniJA = withCSS4(Component4, css7, "framer-BpYbi");
var JgVeYniJA_default = FramerJgVeYniJA;
FramerJgVeYniJA.displayName = "Nav Links";
FramerJgVeYniJA.defaultProps = { height: 34, width: 313 };
addPropertyControls5(FramerJgVeYniJA, { variant: { options: ["gFBNzA0rA", "yp8by6VlZ"], optionTitles: ["Desktop", "Mobile"], title: "Variant", type: ControlType5.Enum }, NXPdtflRE: { title: "Mouse Leave", type: ControlType5.EventHandler } });
addFonts4(FramerJgVeYniJA, [{ explicitInter: true, fonts: [] }, ...MenuItemFonts, ...PrimaryButtonFonts], { supportsExplicitInterCodegen: true });
FramerJgVeYniJA.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader(sYkYAkPAt_default, {}, context), forwardLoader(ZfRLUDToh_default, {}, context)]);
} };

// http-url:https://framerusercontent.com/modules/Nh7NT5EWy3LWfQ8epONp/yogdaIotrBnGI5XrtuW2/XUtGkX0Jr.js
import { jsx as _jsx6, jsxs as _jsxs5 } from "react/jsx-runtime";
import { addFonts as addFonts5, addPropertyControls as addPropertyControls6, ControlType as ControlType6, cx as cx5, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport5, useLocaleInfo as useLocaleInfo5, useOnVariantChange, useVariantState as useVariantState5, withCSS as withCSS5 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup5, motion as motion6, MotionConfigContext as MotionConfigContext5 } from "framer-motion";
import * as React5 from "react";
import { useRef as useRef5 } from "react";
var cycleOrder3 = ["dThlLD_65", "VrWcrYsYk", "SdumMtmTu", "acOImDZpv", "T8ptW9rDZ"];
var serializationHash5 = "framer-ohtV5";
var variantClassNames5 = { acOImDZpv: "framer-v-1m3ne32", dThlLD_65: "framer-v-2e79q6", SdumMtmTu: "framer-v-u09ids", T8ptW9rDZ: "framer-v-g4jtbg", VrWcrYsYk: "framer-v-v7n4gu" };
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition15 = { bounce: 0, delay: 0, duration: 0.6, type: "spring" };
var Transition5 = ({ value, children }) => {
  const config = React5.useContext(MotionConfigContext5);
  const transition = value ?? config.transition;
  const contextValue = React5.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx6(MotionConfigContext5.Provider, { value: contextValue, children });
};
var Variants5 = motion6.create(React5.Fragment);
var humanReadableVariantMap3 = { "Dot 1": "VrWcrYsYk", "Dot 2": "SdumMtmTu", "Dot 3": "acOImDZpv", Default: "dThlLD_65", X: "T8ptW9rDZ" };
var getProps5 = ({ height, id, mouseClick, mouseEnter, width, ...props }) => {
  return { ...props, FtoTLHMJY: mouseEnter ?? props.FtoTLHMJY, mQfSgck7Q: mouseClick ?? props.mQfSgck7Q, variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "dThlLD_65" };
};
var createLayoutDependency5 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component5 = /* @__PURE__ */ React5.forwardRef(function(props, ref) {
  const fallbackRef = useRef5(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React5.useId();
  const { activeLocale, setLocale } = useLocaleInfo5();
  const componentViewport = useComponentViewport5();
  const { style, className: className4, layoutId, variant, FtoTLHMJY, mQfSgck7Q, ...restProps } = getProps5(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState5({ cycleOrder: cycleOrder3, defaultVariant: "dThlLD_65", ref: refBinding, variant, variantClassNames: variantClassNames5 });
  const layoutDependency = createLayoutDependency5(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback2(baseVariant);
  const onTap13csbq = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (mQfSgck7Q) {
      const res = await mQfSgck7Q(...args);
      if (res === false)
        return false;
    }
  });
  const onAppear1ua8nmn = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("VrWcrYsYk"), 400);
  });
  const onMouseEntercv2029 = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: true });
    if (FtoTLHMJY) {
      const res = await FtoTLHMJY(...args);
      if (res === false)
        return false;
    }
  });
  const onAppear1fge74q = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("SdumMtmTu"), 400);
  });
  const onAppear1lgii9p = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("acOImDZpv"), 400);
  });
  const onAppear1wxv8ka = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("dThlLD_65"), 400);
  });
  useOnVariantChange(baseVariant, { acOImDZpv: onAppear1wxv8ka, default: onAppear1ua8nmn, SdumMtmTu: onAppear1lgii9p, T8ptW9rDZ: void 0, VrWcrYsYk: onAppear1fge74q });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx5(serializationHash5, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx6(LayoutGroup5, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx6(Variants5, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx6(Transition5, { value: transition15, children: /* @__PURE__ */ _jsxs5(motion6.div, { ...restProps, ...gestureHandlers, className: cx5(scopingClassNames, "framer-2e79q6", className4, classNames), "data-framer-name": "Default", "data-highlight": true, layoutDependency, layoutId: "Navbar__dThlLD_65", onMouseEnter: onMouseEntercv2029, onTap: onTap13csbq, ref: refBinding, style: { ...style }, ...addPropertyOverrides4({ acOImDZpv: { "data-framer-name": "Dot 3" }, SdumMtmTu: { "data-framer-name": "Dot 2" }, T8ptW9rDZ: { "data-framer-name": "X" }, VrWcrYsYk: { "data-framer-name": "Dot 1" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx6(motion6.div, { className: "framer-109yfzd", "data-framer-name": "dot 1", layoutDependency, layoutId: "Navbar__VK8O1gxu9", style: { backgroundColor: "var(--token-3f9fd497-b700-4c59-baf4-76f1d1f44dcd, rgb(255, 255, 255))", borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24, rotate: 0 }, variants: { T8ptW9rDZ: { rotate: -45 }, VrWcrYsYk: { backgroundColor: "var(--token-7e7f72de-b42b-44cb-b318-42bed5ea0287, rgb(15, 128, 84))" } } }), /* @__PURE__ */ _jsx6(motion6.div, { className: "framer-1hhss8n", "data-framer-name": "dot 2", layoutDependency, layoutId: "Navbar__cVt45Mcz3", style: { backgroundColor: "var(--token-3f9fd497-b700-4c59-baf4-76f1d1f44dcd, rgb(255, 255, 255))", borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24, opacity: 1 }, variants: { SdumMtmTu: { backgroundColor: "var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(230, 197, 37))" }, T8ptW9rDZ: { opacity: 0 } } }), /* @__PURE__ */ _jsx6(motion6.div, { className: "framer-kv3uuz", "data-framer-name": "dot 3", layoutDependency, layoutId: "Navbar__U4gk_hi4Z", style: { backgroundColor: "var(--token-3f9fd497-b700-4c59-baf4-76f1d1f44dcd, rgb(255, 255, 255))", borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24, rotate: 0 }, variants: { acOImDZpv: { backgroundColor: "var(--token-7e7f72de-b42b-44cb-b318-42bed5ea0287, rgb(15, 128, 84))" }, T8ptW9rDZ: { rotate: 45 } } })] }) }) }) });
});
var css8 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-ohtV5.framer-1ixubsa, .framer-ohtV5 .framer-1ixubsa { display: block; }", ".framer-ohtV5.framer-2e79q6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-ohtV5 .framer-109yfzd { flex: none; height: 4px; left: calc(12.500000000000021% - 4px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 4px / 2); width: 4px; z-index: 1; }", ".framer-ohtV5 .framer-1hhss8n { flex: none; height: 4px; left: calc(50.00000000000002% - 4px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 4px / 2); width: 4px; z-index: 1; }", ".framer-ohtV5 .framer-kv3uuz { flex: none; height: 4px; left: calc(87.50000000000003% - 4px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 4px / 2); width: 4px; z-index: 1; }", ".framer-ohtV5.framer-v-v7n4gu .framer-109yfzd, .framer-ohtV5.framer-v-u09ids .framer-1hhss8n, .framer-ohtV5.framer-v-1m3ne32 .framer-kv3uuz { height: 12px; top: calc(37.50000000000002% - 12px / 2); }", ".framer-ohtV5.framer-v-g4jtbg .framer-109yfzd, .framer-ohtV5.framer-v-g4jtbg .framer-kv3uuz { height: 20px; left: calc(50.00000000000002% - 2px / 2); top: calc(50.00000000000002% - 20px / 2); width: 2px; }"];
var FramerXUtGkX0Jr = withCSS5(Component5, css8, "framer-ohtV5");
var XUtGkX0Jr_default = FramerXUtGkX0Jr;
FramerXUtGkX0Jr.displayName = "Dots";
FramerXUtGkX0Jr.defaultProps = { height: 24, width: 24 };
addPropertyControls6(FramerXUtGkX0Jr, { variant: { options: ["dThlLD_65", "VrWcrYsYk", "SdumMtmTu", "acOImDZpv", "T8ptW9rDZ"], optionTitles: ["Default", "Dot 1", "Dot 2", "Dot 3", "X"], title: "Variant", type: ControlType6.Enum }, FtoTLHMJY: { title: "Mouse Enter", type: ControlType6.EventHandler }, mQfSgck7Q: { title: "Mouse Click", type: ControlType6.EventHandler } });
addFonts5(FramerXUtGkX0Jr, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/dw9rgorzAcgVxioAR5C9/9HuLFdyf22yUp5aeGKpv/zKNPghbgp.js
var LogoPictureFonts = getFonts3(IwQFBVaW_default);
var DotsFonts = getFonts3(XUtGkX0Jr_default);
var NavLinksFonts = getFonts3(JgVeYniJA_default);
var cycleOrder4 = ["o6WhTRvY1", "FVf2onDyD", "puyVmY8Uy", "ZLOkMW0qS", "KEbqQXDy5"];
var serializationHash6 = "framer-Pv1lh";
var variantClassNames6 = { FVf2onDyD: "framer-v-1bs2q1b", KEbqQXDy5: "framer-v-13ut543", o6WhTRvY1: "framer-v-13qhoo1", puyVmY8Uy: "framer-v-1iwv40h", ZLOkMW0qS: "framer-v-1azaiju" };
function addPropertyOverrides5(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition16 = { bounce: 0.2, delay: 0, duration: 0.6, type: "spring" };
var matchVariant2 = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var transformTemplate1 = (_, t) => `translateY(-50%) ${t}`;
var Transition6 = ({ value, children }) => {
  const config = React6.useContext(MotionConfigContext6);
  const transition = value ?? config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx7(MotionConfigContext6.Provider, { value: contextValue, children });
};
var humanReadableVariantMap4 = { "Mobile Closed": "ZLOkMW0qS", "Mobile Open": "KEbqQXDy5", "Nav Closed": "FVf2onDyD", "Nav Default": "o6WhTRvY1", "Nav Open": "puyVmY8Uy" };
var Variants6 = motion7.create(React6.Fragment);
var getProps6 = ({ click, contactForm, height, id, width, ...props }) => {
  return { ...props, BJr0cBP_y: click ?? props.BJr0cBP_y, variant: humanReadableVariantMap4[props.variant] ?? props.variant ?? "o6WhTRvY1", XorP3wUOx: contactForm ?? props.XorP3wUOx };
};
var createLayoutDependency6 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component6 = /* @__PURE__ */ React6.forwardRef(function(props, ref) {
  const fallbackRef = useRef6(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React6.useId();
  const { activeLocale, setLocale } = useLocaleInfo6();
  const componentViewport = useComponentViewport6();
  const { style, className: className4, layoutId, variant, XorP3wUOx, BJr0cBP_y, ...restProps } = getProps6(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState6({ cycleOrder: cycleOrder4, defaultVariant: "o6WhTRvY1", ref: refBinding, variant, variantClassNames: variantClassNames6 });
  const layoutDependency = createLayoutDependency6(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback3(baseVariant);
  const onTaph675vi = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (BJr0cBP_y) {
      const res = await BJr0cBP_y(...args);
      if (res === false)
        return false;
    }
  });
  const onMouseLeave1kkwvl7 = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: false });
    setVariant("FVf2onDyD");
  });
  const onTapb8xgx1 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("ZLOkMW0qS"), 100);
  });
  const mQfSgck7Q242iqh = activeVariantCallback(async (...args) => {
    setVariant("KEbqQXDy5");
  });
  const mQfSgck7Qb8xgx1 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("ZLOkMW0qS"), 100);
  });
  const FtoTLHMJYgal9f9 = activeVariantCallback(async (...args) => {
    setVariant("puyVmY8Uy");
  });
  const NXPdtflRElux3ij = activeVariantCallback(async (...args) => {
    if (XorP3wUOx) {
      const res = await XorP3wUOx(...args);
      if (res === false)
        return false;
    }
    await delay(() => setVariant("ZLOkMW0qS"), 100);
  });
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx6(serializationHash6, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (["ZLOkMW0qS", "KEbqQXDy5"].includes(baseVariant))
      return true;
    return false;
  };
  const isDisplayed1 = () => {
    if (["ZLOkMW0qS", "KEbqQXDy5"].includes(baseVariant))
      return false;
    return true;
  };
  const isDisplayed2 = () => {
    if (baseVariant === "KEbqQXDy5")
      return true;
    return false;
  };
  return /* @__PURE__ */ _jsx7(LayoutGroup6, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx7(Variants6, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx7(Transition6, { value: transition16, children: /* @__PURE__ */ _jsxs6(motion7.nav, { ...restProps, ...gestureHandlers, className: cx6(scopingClassNames, "framer-13qhoo1", className4, classNames), "data-framer-name": "Nav Default", "data-highlight": true, layoutDependency, layoutId: "Navbar__o6WhTRvY1", onTap: onTaph675vi, ref: refBinding, style: { backdropFilter: "blur(10px)", backgroundColor: "var(--token-5a162143-67c5-4226-a46e-87df1a71b300, rgb(51, 51, 51))", borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30, WebkitBackdropFilter: "blur(10px)", ...style }, variants: { KEbqQXDy5: { borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 } }, ...addPropertyOverrides5({ FVf2onDyD: { "data-framer-name": "Nav Closed" }, KEbqQXDy5: { "data-framer-name": "Mobile Open" }, puyVmY8Uy: { "data-framer-name": "Nav Open", onMouseLeave: onMouseLeave1kkwvl7 }, ZLOkMW0qS: { "data-framer-name": "Mobile Closed" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs6(motion7.div, { className: "framer-hvptk2", "data-framer-name": "Details / Mobile Dots", layoutDependency, layoutId: "Navbar__wicrrE7s4", children: [/* @__PURE__ */ _jsx7(Link3, { href: { webPageId: "DABAdk_Rz" }, motionChild: true, nodeId: "vHGWfd4WD", openInNewTab: false, scopeId: "zKNPghbgp", children: /* @__PURE__ */ _jsxs6(motion7.a, { className: "framer-iuxyts framer-1vmpzkj", "data-framer-name": "Profile Pic / Name", layoutDependency, layoutId: "Navbar__vHGWfd4WD", ...addPropertyOverrides5({ KEbqQXDy5: { "data-highlight": true, onTap: onTapb8xgx1 } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx7(ComponentViewportProvider3, { height: 15, y: (componentViewport?.y || 0) + (5 + ((componentViewport?.height || 42) - 10 - 19.2) / 2) + 0 + 2.1, ...addPropertyOverrides5({ FVf2onDyD: { y: (componentViewport?.y || 0) + (5 + ((componentViewport?.height || 34) - 10 - 19.2) / 2) + 0 + 2.1 }, KEbqQXDy5: { y: (componentViewport?.y || 0) + 5 + 0 + 2.4 + 2.1 }, ZLOkMW0qS: { y: (componentViewport?.y || 0) + 5 + 0 + 2.4 + 2.1 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx7(SmartComponentScopedContainer3, { className: "framer-1my2d5x-container", "data-framer-name": "Logo", layoutDependency, layoutId: "Navbar__duTZFASK5-container", name: "Logo", nodeId: "duTZFASK5", rendersWithMotion: true, scopeId: "zKNPghbgp", children: /* @__PURE__ */ _jsx7(IwQFBVaW_default, { height: "100%", id: "duTZFASK5", layoutId: "Navbar__duTZFASK5", name: "Logo", width: "100%" }) }) }), /* @__PURE__ */ _jsx7(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx7(React6.Fragment, { children: /* @__PURE__ */ _jsx7(motion7.p, { className: "framer-styles-preset-9jmi73", "data-styles-preset": "KQTQTeOy9", dir: "auto", children: "MATTTER\xAE" }) }), className: "framer-18xwep1", fonts: ["Inter"], layoutDependency, layoutId: "Navbar__xIGitgE7V", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--framer-paragraph-spacing": "0px" }, verticalAlignment: "top", withExternalLayout: true })] }) }), isDisplayed() && /* @__PURE__ */ _jsx7(ComponentViewportProvider3, { ...addPropertyOverrides5({ KEbqQXDy5: { height: 24, y: (componentViewport?.y || 0) + 5 + 0 + 0 }, ZLOkMW0qS: { height: 24, y: (componentViewport?.y || 0) + 5 + 0 + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx7(SmartComponentScopedContainer3, { className: "framer-1wsl8gy-container", "data-framer-name": "Mobile Dots", layoutDependency, layoutId: "Navbar__ExnP38Rkn-container", name: "Mobile Dots", nodeId: "ExnP38Rkn", rendersWithMotion: true, scopeId: "zKNPghbgp", style: { opacity: 0 }, variants: { KEbqQXDy5: { opacity: 1 }, ZLOkMW0qS: { opacity: 1 } }, children: /* @__PURE__ */ _jsx7(XUtGkX0Jr_default, { height: "100%", id: "ExnP38Rkn", layoutId: "Navbar__ExnP38Rkn", name: "Mobile Dots", variant: matchVariant2("dThlLD_65"), width: "100%", ...addPropertyOverrides5({ KEbqQXDy5: { mQfSgck7Q: mQfSgck7Qb8xgx1, variant: matchVariant2("T8ptW9rDZ") }, ZLOkMW0qS: { mQfSgck7Q: mQfSgck7Q242iqh } }, baseVariant, gestureVariant) }) }) })] }), isDisplayed1() && /* @__PURE__ */ _jsxs6(motion7.div, { className: "framer-185x0kp", "data-framer-name": "Links / Dots", layoutDependency, layoutId: "Navbar__OgR37s6Zc", children: [/* @__PURE__ */ _jsx7(ComponentViewportProvider3, { height: 32, y: (componentViewport?.y || 0) + (5 + ((componentViewport?.height || 42) - 10 - 32) / 2) + 0, ...addPropertyOverrides5({ FVf2onDyD: { y: (componentViewport?.y || 0) + (5 + ((componentViewport?.height || 34) - 10 - 24) / 2) + -4 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx7(SmartComponentScopedContainer3, { className: "framer-ro1iai-container", layoutDependency, layoutId: "Navbar__CdZfw_Nba-container", nodeId: "CdZfw_Nba", rendersWithMotion: true, scopeId: "zKNPghbgp", style: { opacity: 1 }, variants: { FVf2onDyD: { opacity: 0 }, puyVmY8Uy: { opacity: 1 } }, ...addPropertyOverrides5({ FVf2onDyD: { transformTemplate: transformTemplate1 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx7(JgVeYniJA_default, { height: "100%", id: "CdZfw_Nba", layoutId: "Navbar__CdZfw_Nba", variant: matchVariant2("gFBNzA0rA"), width: "100%" }) }) }), /* @__PURE__ */ _jsx7(ComponentViewportProvider3, { height: 24, y: (componentViewport?.y || 0) + (5 + ((componentViewport?.height || 42) - 10 - 32) / 2) + 4, ...addPropertyOverrides5({ FVf2onDyD: { y: (componentViewport?.y || 0) + (5 + ((componentViewport?.height || 34) - 10 - 24) / 2) + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx7(SmartComponentScopedContainer3, { className: "framer-1c9t8hg-container", layoutDependency, layoutId: "Navbar__tgtmZgks2-container", nodeId: "tgtmZgks2", rendersWithMotion: true, scopeId: "zKNPghbgp", style: { opacity: 0 }, transformTemplate: transformTemplate1, variants: { FVf2onDyD: { opacity: 1 } }, ...addPropertyOverrides5({ FVf2onDyD: { transformTemplate: void 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx7(XUtGkX0Jr_default, { height: "100%", id: "tgtmZgks2", layoutId: "Navbar__tgtmZgks2", variant: matchVariant2("dThlLD_65"), width: "100%", ...addPropertyOverrides5({ FVf2onDyD: { FtoTLHMJY: FtoTLHMJYgal9f9 } }, baseVariant, gestureVariant) }) }) })] }), isDisplayed2() && /* @__PURE__ */ _jsx7(ComponentViewportProvider3, { ...addPropertyOverrides5({ KEbqQXDy5: { height: 32, width: `calc(${componentViewport?.width || "100vw"} - 24px)`, y: (componentViewport?.y || 0) + 5 + 40 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx7(SmartComponentScopedContainer3, { className: "framer-5boqpx-container", layoutDependency, layoutId: "Navbar__LYnoryq4T-container", nodeId: "LYnoryq4T", rendersWithMotion: true, scopeId: "zKNPghbgp", children: /* @__PURE__ */ _jsx7(JgVeYniJA_default, { height: "100%", id: "LYnoryq4T", layoutId: "Navbar__LYnoryq4T", NXPdtflRE: NXPdtflRElux3ij, style: { width: "100%" }, variant: matchVariant2("yp8by6VlZ"), width: "100%" }) }) })] }) }) }) });
});
var css9 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Pv1lh.framer-1vmpzkj, .framer-Pv1lh .framer-1vmpzkj { display: block; }", ".framer-Pv1lh.framer-13qhoo1 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 5px 5px 5px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-Pv1lh .framer-hvptk2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-Pv1lh .framer-iuxyts { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }", ".framer-Pv1lh .framer-1my2d5x-container, .framer-Pv1lh .framer-ro1iai-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-Pv1lh .framer-18xwep1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-Pv1lh .framer-1wsl8gy-container { flex: none; height: auto; pointer-events: none; position: relative; width: auto; z-index: 1; }", ".framer-Pv1lh .framer-185x0kp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-Pv1lh .framer-1c9t8hg-container { flex: none; height: auto; left: 0px; position: absolute; top: 50%; width: auto; z-index: 1; }", ".framer-Pv1lh .framer-5boqpx-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-Pv1lh.framer-v-1bs2q1b.framer-13qhoo1 { gap: 32px; padding: 5px 10px 5px 10px; }", ".framer-Pv1lh.framer-v-1bs2q1b .framer-ro1iai-container { left: 0px; pointer-events: none; position: absolute; top: 50%; z-index: 1; }", ".framer-Pv1lh.framer-v-1bs2q1b .framer-1c9t8hg-container { left: unset; position: relative; top: unset; }", ".framer-Pv1lh.framer-v-1azaiju.framer-13qhoo1 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 32px; padding: 5px 12px 5px 10px; }", ".framer-Pv1lh.framer-v-1azaiju .framer-1wsl8gy-container, .framer-Pv1lh.framer-v-13ut543 .framer-1wsl8gy-container { pointer-events: auto; }", ".framer-Pv1lh.framer-v-13ut543.framer-13qhoo1 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 16px; padding: 5px 12px 12px 12px; }", ".framer-Pv1lh.framer-v-13ut543 .framer-iuxyts { cursor: pointer; }", ".framer-Pv1lh.framer-v-13ut543 .framer-5boqpx-container { align-self: stretch; flex: none; width: auto; }", ...css];
var FramerzKNPghbgp = withCSS6(Component6, css9, "framer-Pv1lh");
var zKNPghbgp_default = FramerzKNPghbgp;
FramerzKNPghbgp.displayName = "Navbar";
FramerzKNPghbgp.defaultProps = { height: 42, width: 508.5 };
addPropertyControls7(FramerzKNPghbgp, { variant: { options: ["o6WhTRvY1", "FVf2onDyD", "puyVmY8Uy", "ZLOkMW0qS", "KEbqQXDy5"], optionTitles: ["Nav Default", "Nav Closed", "Nav Open", "Mobile Closed", "Mobile Open"], title: "Variant", type: ControlType7.Enum }, XorP3wUOx: { title: "Contact Form", type: ControlType7.EventHandler }, BJr0cBP_y: { title: "Click", type: ControlType7.EventHandler } });
addFonts6(FramerzKNPghbgp, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...LogoPictureFonts, ...DotsFonts, ...NavLinksFonts, ...getFontsFromSharedStyle3(fonts)], { supportsExplicitInterCodegen: true });
FramerzKNPghbgp.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader2(IwQFBVaW_default, {}, context), forwardLoader2(XUtGkX0Jr_default, {}, context), forwardLoader2(JgVeYniJA_default, {}, context)]);
} };
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FramerzKNPghbgp", "slots": [], "annotations": { "framerIntrinsicHeight": "42", "framerDisplayContentsDiv": "false", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"FVf2onDyD":{"layout":["auto","auto"]},"puyVmY8Uy":{"layout":["auto","auto"]},"ZLOkMW0qS":{"layout":["auto","auto"]},"KEbqQXDy5":{"layout":["auto","auto"]}}}', "framerImmutableVariables": "true", "framerIntrinsicWidth": "508.5", "framerColorSyntax": "true", "framerAutoSizeImages": "true", "framerVariables": '{"XorP3wUOx":"contactForm","BJr0cBP_y":"click"}', "framerContractVersion": "1", "framerComponentViewportWidth": "true" } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  zKNPghbgp_default as default
};
