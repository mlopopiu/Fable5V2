var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/oRIg7wmxd0jJ64c6z8Vn/jcZuWtpq6DJloFxsJfL4/bKNPtxweb.js
import { jsx as _jsx9, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts3, ComponentViewportProvider as ComponentViewportProvider2, cx as cx8, forwardLoader as forwardLoader2, getFonts as getFonts2, getFontsFromSharedStyle as getFontsFromSharedStyle2, RichText as RichText2, SmartComponentScopedContainer as SmartComponentScopedContainer2, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS8, withFX } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion9, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React8 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/bNORwvR02wGMbARQ266w/8cSPQQ8U1lGNf08znwmV/P57b8hxa6.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, useSVGTemplate, withCSS } from "./_framer-runtime.js";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
var mask = "var(--framer-icon-mask)";
var Base = /* @__PURE__ */ forwardRef2(function(props, ref) {
  return /* @__PURE__ */ _jsx("svg", { ...props, ref, children: props.children });
});
var MotionSVG = motion.create(Base);
var SVG = /* @__PURE__ */ forwardRef2((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx(MotionSVG, { ...rest, layoutId, ref, children }) : /* @__PURE__ */ _jsx("svg", { ...rest, ref, children });
});
var svg = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="18px" id="ZAwn0e2yN" transform="translate(3 3)" width="18px"/><path d="M 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 Z" fill="transparent" height="18px" id="bq5comQIv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 3)" width="18px"/><path d="M 0 0 L 0 5.25 L 5.25 5.25" fill="transparent" height="5.25px" id="xmvtAEC_v" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 6.75)" width="5.25px"/></svg>';
var getProps = ({ alpha, color, height, id, width, width1, ...props }) => {
  return { ...props, ezTt3ayMo: color ?? props.ezTt3ayMo ?? "rgb(0, 0, 0)", lschgej4H: width1 ?? props.lschgej4H ?? 1.5, qxTvv_EBh: alpha ?? props.qxTvv_EBh };
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { style, className: className3, layoutId, variant, ezTt3ayMo, lschgej4H, qxTvv_EBh, ...restProps } = getProps(props);
  const href = useSVGTemplate("1727193461", svg);
  return /* @__PURE__ */ _jsx(SVG, { ...restProps, className: cx("framer-d4tNk", className3), layoutId, ref, role: "presentation", style: { "--1m6trwb": qxTvv_EBh, "--21h8s6": ezTt3ayMo, "--pgex8v": lschgej4H, ...style }, viewBox: "0 0 24 24", children: /* @__PURE__ */ _jsx("use", { href }) });
});
var css = [`.framer-d4tNk { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 24px; }`];
var Icon = withCSS(Component, css, "framer-d4tNk");
Icon.displayName = "Clock";
var P57b8hxa6_default = Icon;
addPropertyControls(Icon, { ezTt3ayMo: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Color", type: ControlType.Color }, lschgej4H: { defaultValue: 1.5, displayStepper: true, hidden: false, max: 6, min: 0, step: 0.5, title: "Width", type: ControlType.Number }, qxTvv_EBh: { defaultValue: 0, displayStepper: true, hidden: false, max: 1, min: 0, step: 0.1, title: "Alpha", type: ControlType.Number } });

// http-url:https://framerusercontent.com/modules/lGjONevu0Qs1ZIO2v8WJ/9dhBJaKhHHBOoaR9HIyB/dZkd7bSHY.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, motion as motion2, useSVGTemplate as useSVGTemplate2, withCSS as withCSS2 } from "./_framer-runtime.js";
import * as React2 from "react";
import { forwardRef as forwardRef4 } from "react";
var mask2 = "var(--framer-icon-mask)";
var Base2 = /* @__PURE__ */ forwardRef4(function(props, ref) {
  return /* @__PURE__ */ _jsx2("svg", { ...props, ref, children: props.children });
});
var MotionSVG2 = motion2.create(Base2);
var SVG2 = /* @__PURE__ */ forwardRef4((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx2(MotionSVG2, { ...rest, layoutId, ref, children }) : /* @__PURE__ */ _jsx2("svg", { ...rest, ref, children });
});
var svg2 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 9.749 15.477 L 14.879 18.632 C 15.151 18.797 15.496 18.782 15.753 18.594 C 16.01 18.406 16.128 18.082 16.053 17.772 L 14.658 11.886 L 19.223 7.948 C 19.461 7.739 19.552 7.409 19.455 7.108 C 19.357 6.806 19.09 6.592 18.774 6.563 L 12.783 6.075 L 10.475 0.488 C 10.354 0.193 10.068 0 9.749 0 C 9.431 0 9.144 0.193 9.023 0.488 L 6.715 6.075 L 0.724 6.563 C 0.406 6.59 0.136 6.806 0.038 7.109 C -0.06 7.412 0.034 7.745 0.275 7.953 L 4.84 11.89 L 3.445 17.772 C 3.37 18.082 3.488 18.406 3.745 18.594 C 4.002 18.782 4.347 18.797 4.619 18.632 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="18.746261605760054px" id="t6hF1mhP1" transform="translate(2.251 2.25)" width="19.49332240036336px"/><path d="M 9.749 15.477 L 14.879 18.632 C 15.151 18.797 15.496 18.782 15.753 18.594 C 16.01 18.406 16.128 18.082 16.053 17.772 L 14.658 11.886 L 19.223 7.948 C 19.461 7.739 19.552 7.409 19.455 7.108 C 19.357 6.806 19.09 6.592 18.774 6.563 L 12.783 6.075 L 10.475 0.488 C 10.354 0.193 10.068 0 9.749 0 C 9.431 0 9.144 0.193 9.023 0.488 L 6.715 6.075 L 0.724 6.563 C 0.406 6.59 0.136 6.806 0.038 7.109 C -0.06 7.412 0.034 7.745 0.275 7.953 L 4.84 11.89 L 3.445 17.772 C 3.37 18.082 3.488 18.406 3.745 18.594 C 4.002 18.782 4.347 18.797 4.619 18.632 Z" fill="transparent" height="18.746261605760054px" id="b0GcHZb5O" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.251 2.25)" width="19.49332240036336px"/></svg>';
var getProps2 = ({ alpha, color, height, id, width, width1, ...props }) => {
  return { ...props, ezTt3ayMo: color ?? props.ezTt3ayMo ?? "rgb(0, 0, 0)", lschgej4H: width1 ?? props.lschgej4H ?? 1.5, qxTvv_EBh: alpha ?? props.qxTvv_EBh };
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const { style, className: className3, layoutId, variant, ezTt3ayMo, lschgej4H, qxTvv_EBh, ...restProps } = getProps2(props);
  const href = useSVGTemplate2("2930526878", svg2);
  return /* @__PURE__ */ _jsx2(SVG2, { ...restProps, className: cx2("framer-YnhV6", className3), layoutId, ref, role: "presentation", style: { "--1m6trwb": qxTvv_EBh, "--21h8s6": ezTt3ayMo, "--pgex8v": lschgej4H, ...style }, viewBox: "0 0 24 24", children: /* @__PURE__ */ _jsx2("use", { href }) });
});
var css2 = [`.framer-YnhV6 { -webkit-mask: ${mask2}; aspect-ratio: 1; display: block; mask: ${mask2}; width: 24px; }`];
var Icon2 = withCSS2(Component2, css2, "framer-YnhV6");
Icon2.displayName = "Star";
var dZkd7bSHY_default = Icon2;
addPropertyControls2(Icon2, { ezTt3ayMo: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Color", type: ControlType2.Color }, lschgej4H: { defaultValue: 1.5, displayStepper: true, hidden: false, max: 6, min: 0, step: 0.5, title: "Width", type: ControlType2.Number }, qxTvv_EBh: { defaultValue: 0, displayStepper: true, hidden: false, max: 1, min: 0, step: 0.1, title: "Alpha", type: ControlType2.Number } });

// http-url:https://framerusercontent.com/modules/q6AdYuVdn7nqnxRYPtBb/OYrLlDFAClRhsX9vzOMl/bDZjksbCJ.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls3, ControlType as ControlType3, cx as cx3, motion as motion3, useSVGTemplate as useSVGTemplate3, withCSS as withCSS3 } from "./_framer-runtime.js";
import * as React3 from "react";
import { forwardRef as forwardRef6 } from "react";
var mask3 = "var(--framer-icon-mask)";
var Base3 = /* @__PURE__ */ forwardRef6(function(props, ref) {
  return /* @__PURE__ */ _jsx3("svg", { ...props, ref, children: props.children });
});
var MotionSVG3 = motion3.create(Base3);
var SVG3 = /* @__PURE__ */ forwardRef6((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx3(MotionSVG3, { ...rest, layoutId, ref, children }) : /* @__PURE__ */ _jsx3("svg", { ...rest, ref, children });
});
var svg3 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 16.5 0 C 17.328 0 18 0.672 18 1.5 L 18 15 L 18 15 L 0 15 L 0 15 L 0 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="15px" id="p1fpTQK7F" transform="translate(3 4.5)" width="18px"/><path d="M 18 15 L 0 15 L 0 0" fill="transparent" height="15px" id="LOKQVnF_E" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 4.5)" width="18px"/><path d="M 15.75 0 L 9 6.75 L 6 3.75 L 0 9.75" fill="transparent" height="9.75px" id="YJGYU62So" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 6.75)" width="15.75px"/><path d="M 3.75 3.75 L 3.75 0 L 0 0" fill="transparent" height="3.75px" id="LN0V1ajm1" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(15 6.75)" width="3.75px"/></svg>';
var getProps3 = ({ alpha, color, height, id, width, width1, ...props }) => {
  return { ...props, ezTt3ayMo: color ?? props.ezTt3ayMo ?? "rgb(0, 0, 0)", lschgej4H: width1 ?? props.lschgej4H ?? 1.5, qxTvv_EBh: alpha ?? props.qxTvv_EBh };
};
var Component3 = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const { style, className: className3, layoutId, variant, ezTt3ayMo, lschgej4H, qxTvv_EBh, ...restProps } = getProps3(props);
  const href = useSVGTemplate3("987190984", svg3);
  return /* @__PURE__ */ _jsx3(SVG3, { ...restProps, className: cx3("framer-DkID7", className3), layoutId, ref, role: "presentation", style: { "--1m6trwb": qxTvv_EBh, "--21h8s6": ezTt3ayMo, "--pgex8v": lschgej4H, ...style }, viewBox: "0 0 24 24", children: /* @__PURE__ */ _jsx3("use", { href }) });
});
var css3 = [`.framer-DkID7 { -webkit-mask: ${mask3}; aspect-ratio: 1; display: block; mask: ${mask3}; width: 24px; }`];
var Icon3 = withCSS3(Component3, css3, "framer-DkID7");
Icon3.displayName = "Chart Line Up";
var bDZjksbCJ_default = Icon3;
addPropertyControls3(Icon3, { ezTt3ayMo: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Color", type: ControlType3.Color }, lschgej4H: { defaultValue: 1.5, displayStepper: true, hidden: false, max: 6, min: 0, step: 0.5, title: "Width", type: ControlType3.Number }, qxTvv_EBh: { defaultValue: 0, displayStepper: true, hidden: false, max: 1, min: 0, step: 0.1, title: "Alpha", type: ControlType3.Number } });

// http-url:https://framerusercontent.com/modules/VQZhf4yGLPXL6Yh3mWu2/TNMHAESDDcxZsWuLccGi/CeofsNecv.js
import { jsx as _jsx4 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls4, ControlType as ControlType4, cx as cx4, motion as motion4, useSVGTemplate as useSVGTemplate4, withCSS as withCSS4 } from "./_framer-runtime.js";
import * as React4 from "react";
import { forwardRef as forwardRef8 } from "react";
var mask4 = "var(--framer-icon-mask)";
var Base4 = /* @__PURE__ */ forwardRef8(function(props, ref) {
  return /* @__PURE__ */ _jsx4("svg", { ...props, ref, children: props.children });
});
var MotionSVG4 = motion4.create(Base4);
var SVG4 = /* @__PURE__ */ forwardRef8((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx4(MotionSVG4, { ...rest, layoutId, ref, children }) : /* @__PURE__ */ _jsx4("svg", { ...rest, ref, children });
});
var svg4 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 3.75 5.25 L 0.75 5.25 C 0.336 5.25 0 4.914 0 4.5 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 3.75 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="5.25px" id="OMUW8cHPn" transform="translate(0.75 14.25)" width="3.75px"/><path d="M 5.625 7.5 C 6.661 7.5 7.5 8.34 7.5 9.375 L 7.5 9.375 C 7.5 10.411 6.661 11.25 5.625 11.25 L 6 11.25 L 9.542 10.437 C 11.608 8.913 14.25 6.491 14.25 3.75 C 14.25 1.717 12.593 0 10.551 0 C 9.057 -0.017 7.702 0.873 7.125 2.25 C 6.548 0.873 5.193 -0.017 3.699 0 C 1.657 0 0 1.717 0 3.75 C 0 5.115 0.656 6.348 1.568 7.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="11.250254159727405px" id="eyuI7e0k7" transform="translate(7.5 3.75)" width="14.25px"/><path d="M 3.75 5.25 L 0.75 5.25 C 0.336 5.25 0 4.914 0 4.5 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 3.75 0" fill="transparent" height="5.25px" id="LA2UnsY5a" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(0.75 14.25)" width="3.75px"/><path d="M 6 3.75 L 9 3.75 L 15.281 2.305 C 15.749 2.177 16.25 2.274 16.637 2.568 C 17.023 2.863 17.249 3.32 17.25 3.805 L 17.25 3.805 C 17.25 4.395 16.917 4.934 16.389 5.198 L 12.75 6.75 L 6.75 8.25 L 0 8.25 L 0 3 L 2.344 0.656 C 2.767 0.235 3.34 -0.001 3.938 0 L 8.625 0 C 9.661 0 10.5 0.839 10.5 1.875 L 10.5 1.875 C 10.5 2.911 9.661 3.75 8.625 3.75 Z" fill="transparent" height="8.25000677472812px" id="oXsWt7oFf" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 11.25)" width="17.250000132121865px"/><path d="M 1.568 7.5 C 0.656 6.349 0 5.115 0 3.75 C 0 1.717 1.657 0 3.699 0 C 5.193 -0.017 6.548 0.873 7.125 2.25 C 7.702 0.873 9.057 -0.017 10.551 0 C 12.593 0 14.25 1.717 14.25 3.75 C 14.25 6.491 11.608 8.913 9.542 10.437" fill="transparent" height="10.436504159727402px" id="qx4mWa9WU" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(7.5 3.75)" width="14.25px"/></svg>';
var getProps4 = ({ alpha, color, height, id, width, width1, ...props }) => {
  return { ...props, ezTt3ayMo: color ?? props.ezTt3ayMo ?? "rgb(0, 0, 0)", lschgej4H: width1 ?? props.lschgej4H ?? 1.5, qxTvv_EBh: alpha ?? props.qxTvv_EBh };
};
var Component4 = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  const { style, className: className3, layoutId, variant, ezTt3ayMo, lschgej4H, qxTvv_EBh, ...restProps } = getProps4(props);
  const href = useSVGTemplate4("1210562455", svg4);
  return /* @__PURE__ */ _jsx4(SVG4, { ...restProps, className: cx4("framer-jwiil", className3), layoutId, ref, role: "presentation", style: { "--1m6trwb": qxTvv_EBh, "--21h8s6": ezTt3ayMo, "--pgex8v": lschgej4H, ...style }, viewBox: "0 0 24 24", children: /* @__PURE__ */ _jsx4("use", { href }) });
});
var css4 = [`.framer-jwiil { -webkit-mask: ${mask4}; aspect-ratio: 1; display: block; mask: ${mask4}; width: 24px; }`];
var Icon4 = withCSS4(Component4, css4, "framer-jwiil");
Icon4.displayName = "Hand Heart";
var CeofsNecv_default = Icon4;
addPropertyControls4(Icon4, { ezTt3ayMo: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Color", type: ControlType4.Color }, lschgej4H: { defaultValue: 1.5, displayStepper: true, hidden: false, max: 6, min: 0, step: 0.5, title: "Width", type: ControlType4.Number }, qxTvv_EBh: { defaultValue: 0, displayStepper: true, hidden: false, max: 1, min: 0, step: 0.1, title: "Alpha", type: ControlType4.Number } });

// http-url:https://framerusercontent.com/modules/7fA14HghkRURr4VgYMoY/i95hCAoO8d9u6Hd1tsfr/RclsH2sb2.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["Inter-Medium", "Inter-Bold", "Inter-BoldItalic", "Inter-Italic"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css5 = ['.framer-gyINX .framer-styles-preset-1rd67x7:not(.rich-text-wrapper), .framer-gyINX .framer-styles-preset-1rd67x7.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.9px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-background-corner-shape: superellipse(1); --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-gyINX .framer-styles-preset-1rd67x7:not(.rich-text-wrapper), .framer-gyINX .framer-styles-preset-1rd67x7.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.9px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-background-corner-shape: superellipse(1); --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-gyINX .framer-styles-preset-1rd67x7:not(.rich-text-wrapper), .framer-gyINX .framer-styles-preset-1rd67x7.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.9px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-background-corner-shape: superellipse(1); --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }'];
var className = "framer-gyINX";

// http-url:https://framerusercontent.com/modules/K39XzxWtOKhMo9Uw0svk/rEMxtX3cqaMVZuvnGsN5/N6LcmJYKm.js
import { jsx as _jsx8, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls8, ComponentViewportProvider, ControlType as ControlType8, cx as cx7, forwardLoader, getFonts, getFontsFromSharedStyle, Instance, RichText, SmartComponentScopedContainer, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS7, withVariantAppearEffect } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion8, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React7 from "react";
import { useRef as useRef3 } from "react";

// http-url:https://framerusercontent.com/modules/BLjRczXRCa2XMZlRX1af/3JLV0naPYn0LHwD9pOLX/ljGcHeWyh.js
import { jsx as _jsx5 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls5, ControlType as ControlType5, cx as cx5, motion as motion5, useSVGTemplate as useSVGTemplate5, withCSS as withCSS5 } from "./_framer-runtime.js";
import * as React5 from "react";
import { forwardRef as forwardRef10 } from "react";
var mask5 = "var(--framer-icon-mask)";
var Base5 = /* @__PURE__ */ forwardRef10(function(props, ref) {
  return /* @__PURE__ */ _jsx5("svg", { ...props, ref, children: props.children });
});
var MotionSVG5 = motion5.create(Base5);
var SVG5 = /* @__PURE__ */ forwardRef10((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx5(MotionSVG5, { ...rest, layoutId, ref, children }) : /* @__PURE__ */ _jsx5("svg", { ...rest, ref, children });
});
var svg5 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 16.5 0 L 16.5 1.5 C 16.5 6.469 8.25 9.75 8.25 12 C 8.25 9.75 0 6.469 0 1.5 L 0 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="12px" id="UWATVa9XL" transform="translate(3.75 10.5)" width="16.5px"/><path d="M 16.5 0 L 16.5 1.5 C 16.5 6.469 8.25 9.75 8.25 12 C 8.25 9.75 0 6.469 0 1.5 L 0 0" fill="transparent" height="12px" id="XNw3JzEbP" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 10.5)" width="16.5px"/><path d="M 4.5 0 L 13.5 0 C 15.985 0 18 2.015 18 4.5 L 18 4.5 C 18 4.914 17.664 5.25 17.25 5.25 L 0.75 5.25 C 0.336 5.25 0 4.914 0 4.5 L 0 4.5 C 0 2.015 2.015 0 4.5 0 Z" fill="transparent" height="5.25px" id="ArKPFwza7" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 5.25)" width="18px"/><path d="M 0 3.75 L 0 3 C 0 1.343 1.343 0 3 0" fill="transparent" height="3.75px" id="SpNktFhkk" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 1.5)" width="3px"/></svg>';
var getProps5 = ({ alpha, color, height, id, width, width1, ...props }) => {
  return { ...props, ezTt3ayMo: color ?? props.ezTt3ayMo ?? "rgb(0, 0, 0)", lschgej4H: width1 ?? props.lschgej4H ?? 1.5, qxTvv_EBh: alpha ?? props.qxTvv_EBh };
};
var Component5 = /* @__PURE__ */ React5.forwardRef(function(props, ref) {
  const { style, className: className3, layoutId, variant, ezTt3ayMo, lschgej4H, qxTvv_EBh, ...restProps } = getProps5(props);
  const href = useSVGTemplate5("907517132", svg5);
  return /* @__PURE__ */ _jsx5(SVG5, { ...restProps, className: cx5("framer-2zajc", className3), layoutId, ref, role: "presentation", style: { "--1m6trwb": qxTvv_EBh, "--21h8s6": ezTt3ayMo, "--pgex8v": lschgej4H, ...style }, viewBox: "0 0 24 24", children: /* @__PURE__ */ _jsx5("use", { href }) });
});
var css6 = [`.framer-2zajc { -webkit-mask: ${mask5}; aspect-ratio: 1; display: block; mask: ${mask5}; width: 24px; }`];
var Icon5 = withCSS5(Component5, css6, "framer-2zajc");
Icon5.displayName = "Acorn";
var ljGcHeWyh_default = Icon5;
addPropertyControls5(Icon5, { ezTt3ayMo: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Color", type: ControlType5.Color }, lschgej4H: { defaultValue: 1.5, displayStepper: true, hidden: false, max: 6, min: 0, step: 0.5, title: "Width", type: ControlType5.Number }, qxTvv_EBh: { defaultValue: 0, displayStepper: true, hidden: false, max: 1, min: 0, step: 0.1, title: "Alpha", type: ControlType5.Number } });

// http-url:https://framerusercontent.com/modules/jPr6lPrh3tKXtEZkW02u/v2lSM1RFG3d2HZmTHO44/CounterPro.js
import { jsx as _jsx6, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState, startTransition, useMemo, useLayoutEffect } from "react";
import { motion as motion6, useInView, useSpring, useTransform } from "framer-motion";
import { addPropertyControls as addPropertyControls6, ControlType as ControlType6 } from "./_framer-runtime.js";
function useFontMetrics(font) {
  const ref = useRef(null);
  const [height, setHeight] = useState(null);
  useLayoutEffect(() => {
    if (!ref.current)
      return;
    const el = ref.current;
    const measure = () => {
      const h = el.offsetHeight;
      if (h > 0) {
        setHeight(h);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    if (document.fonts) {
      document.fonts.ready.then(measure).catch(() => {
      });
    }
    return () => {
      ro.disconnect();
    };
  }, [font?.fontSize, font?.lineHeight, font?.fontFamily, font?.fontWeight, font?.letterSpacing]);
  return { ref, height };
}
function Digit({ place, value, digitHeight, duration, font, useMotionBlur, motionBlurIntensity, verticalSpacing }) {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace, { stiffness: 100, damping: 30, mass: 1 });
  const letterSpacing = font?.letterSpacing || "0em";
  const letterSpacingValue = typeof letterSpacing === "string" ? parseFloat(letterSpacing) || 0 : letterSpacing;
  const digitWidth = `calc(1ch + ${letterSpacing})`;
  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);
  const blur = useTransform(animatedValue, (latest) => {
    if (!useMotionBlur)
      return 0;
    const velocity = animatedValue.getVelocity();
    const blurAmount = Math.min(Math.abs(velocity) * motionBlurIntensity * 0.1, motionBlurIntensity * 5);
    return blurAmount;
  });
  return /* @__PURE__ */ _jsx6(motion6.div, { style: { height: digitHeight, position: "relative", width: digitWidth, overflow: "hidden", fontVariantNumeric: "tabular-nums", filter: useTransform(blur, (b) => b > 0 ? `blur(${b}px)` : "none"), marginLeft: `${verticalSpacing / 2}px`, marginRight: `${verticalSpacing / 2}px`, display: "block" }, children: Array.from({ length: 10 }, (_, i) => /* @__PURE__ */ _jsx6(AnimatedDigit, { mv: animatedValue, number: i, digitHeight }, i)) });
}
function AnimatedDigit({ mv, number, digitHeight }) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * digitHeight;
    if (offset > 5) {
      memo -= 10 * digitHeight;
    }
    return memo;
  });
  return /* @__PURE__ */ _jsx6(motion6.span, { style: { y, position: "absolute", top: 0, left: 0, right: 0, height: digitHeight, lineHeight: "1", display: "block", textAlign: "center" }, children: number });
}
function CounterPro(props) {
  const { from = 0, to = 100, duration = 2, delay = 0, startOnView = true, textColor = "#000000", font, prefix = "", suffix = "", useSeparator = false, separatorChar = ",", separatorPosition = 3, decimalPlaces = 0, decimalChar = ".", useGlow = false, glowColor = "#0099FF", glowIntensity = 20, useMotionBlur = false, motionBlurIntensity = 1, verticalSpacing = 0, style } = props;
  const { ref: fontMeasureRef, height: measuredDigitHeight } = useFontMetrics(font);
  const FALLBACK_DIGIT_HEIGHT = useMemo(() => {
    const fontSize = font?.fontSize;
    if (typeof fontSize === "string") {
      const n = parseFloat(fontSize);
      if (!isNaN(n)) {
        return fontSize.endsWith("rem") ? n * 16 : n;
      }
    }
    if (typeof fontSize === "number")
      return fontSize;
    return 40;
  }, [font?.fontSize]);
  const digitHeight = measuredDigitHeight ?? FALLBACK_DIGIT_HEIGHT;
  const rawDecimalPlaces = decimalPlaces;
  const safeDecimalPlaces = useMemo(() => {
    const n = Number(rawDecimalPlaces);
    if (!Number.isFinite(n) || isNaN(n))
      return 0;
    const clamped = Math.max(0, Math.min(4, Math.floor(n)));
    return clamped;
  }, [rawDecimalPlaces]);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [currentValue, setCurrentValue] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const animationInProgressRef = useRef(false);
  const hasSetFinalValueRef = useRef(false);
  useEffect(() => {
    startTransition(() => {
      setCurrentValue(from);
      setHasAnimated(false);
      setAnimationKey(0);
    });
    animationInProgressRef.current = false;
    hasSetFinalValueRef.current = false;
  }, []);
  useEffect(() => {
    startTransition(() => {
      setCurrentValue(from);
      setHasAnimated(false);
      setAnimationKey((prev) => prev + 1);
    });
    animationInProgressRef.current = false;
    hasSetFinalValueRef.current = false;
  }, [from, to]);
  useEffect(() => {
    if (isInView) {
      hasSetFinalValueRef.current = false;
      startTransition(() => {
        setHasAnimated(false);
      });
    } else {
      hasSetFinalValueRef.current = false;
    }
  }, [isInView]);
  useEffect(() => {
    if (!startOnView || !isInView)
      return;
    if (hasAnimated)
      return;
    const timer = setTimeout(() => {
      startTransition(() => {
        setAnimationKey((prev) => prev + 1);
      });
    }, 50);
    return () => clearTimeout(timer);
  }, [isInView, startOnView, hasAnimated]);
  const shouldStart = !startOnView || isInView && !hasSetFinalValueRef.current;
  useEffect(() => {
    if (!shouldStart)
      return;
    if (animationInProgressRef.current || hasSetFinalValueRef.current)
      return;
    animationInProgressRef.current = true;
    startTransition(() => {
      setHasAnimated(true);
    });
    const capturedStartValue = currentValue;
    const timer = setTimeout(() => {
      const startTime = Date.now();
      const difference = to - capturedStartValue;
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / (duration * 1e3), 1);
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const newValue = capturedStartValue + difference * easeOutCubic;
        if (progress < 1) {
          startTransition(() => {
            setCurrentValue(newValue);
          });
          requestAnimationFrame(animate);
        } else {
          startTransition(() => {
            setCurrentValue(to);
          });
          animationInProgressRef.current = false;
          hasSetFinalValueRef.current = true;
        }
      };
      requestAnimationFrame(animate);
    }, delay * 1e3);
    return () => {
      clearTimeout(timer);
      animationInProgressRef.current = false;
    };
  }, [shouldStart, to, duration, delay, animationKey]);
  const decimalData = useMemo(() => {
    const absValue = Math.abs(currentValue);
    const integerPart = Math.floor(absValue);
    if (safeDecimalPlaces <= 0) {
      return { integerPart, decimalDigits: "", hasValidDecimals: false, decimalValue: 0 };
    }
    const scale = Math.pow(10, safeDecimalPlaces);
    let decimalValue = 0;
    let decimalDigits = "";
    let hasValidDecimals = false;
    try {
      const scaled = Math.floor(absValue * scale);
      decimalValue = scaled % scale;
      decimalDigits = decimalValue.toString().padStart(safeDecimalPlaces, "0");
      hasValidDecimals = decimalDigits.length === safeDecimalPlaces;
    } catch (e) {
      decimalValue = 0;
      decimalDigits = "0".repeat(Math.max(0, safeDecimalPlaces));
      hasValidDecimals = safeDecimalPlaces > 0;
    }
    return { integerPart, decimalDigits, hasValidDecimals, decimalValue };
  }, [currentValue, safeDecimalPlaces]);
  const maxDigits = useMemo(() => {
    const maxValue = Math.max(Math.abs(Math.floor(from)).toString().length, Math.abs(Math.floor(to)).toString().length, Math.abs(Math.floor(currentValue)).toString().length);
    return Math.max(maxValue, 1);
  }, [from, to, currentValue]);
  const places = useMemo(() => {
    return Array.from({ length: maxDigits }, (_, i) => Math.pow(10, maxDigits - i - 1));
  }, [maxDigits]);
  const renderDigitsWithSeparators = () => {
    const digits = [];
    places.forEach((place, index) => {
      const staggerFactor = maxDigits - index - 1;
      if (useSeparator && separatorChar && index > 0) {
        const digitsFromRight = maxDigits - index;
        if (digitsFromRight % separatorPosition === 0) {
          digits.push(/* @__PURE__ */ _jsx6("span", { style: { opacity: 0.7 }, children: separatorChar }, `sep-${index}-${animationKey}`));
        }
      }
      digits.push(/* @__PURE__ */ _jsx6(Digit, { place, value: decimalData.integerPart, digitHeight, duration, font, useMotionBlur, motionBlurIntensity, verticalSpacing }, `digit-${index}-${animationKey}`));
    });
    return digits;
  };
  const glowStyle = useGlow ? { textShadow: `
					0 0 ${glowIntensity * 0.5}px ${glowColor},
					0 0 ${glowIntensity}px ${glowColor},
					0 0 ${glowIntensity * 1.5}px ${glowColor},
					0 0 ${glowIntensity * 2}px ${glowColor}
				` } : {};
  const decimalAnimatedValue = useSpring(currentValue, { stiffness: 100, damping: 30, mass: 1 });
  useEffect(() => {
    decimalAnimatedValue.set(currentValue);
  }, [currentValue, decimalAnimatedValue]);
  const decimalBlur = useTransform(decimalAnimatedValue, (latest) => {
    if (!useMotionBlur)
      return 0;
    const velocity = Math.abs(decimalAnimatedValue.getVelocity());
    const blurAmount = Math.min(velocity * motionBlurIntensity * 0.2, motionBlurIntensity * 10);
    return blurAmount;
  });
  const decimalFilter = useTransform(decimalBlur, (b) => b > 0 ? `blur(${b}px)` : "none");
  return /* @__PURE__ */ _jsxs("div", { ref, style: { position: "relative", height: digitHeight, minHeight: digitHeight, alignItems: "center", display: "flex", color: textColor, ...font, ...glowStyle, ...style }, children: [/* @__PURE__ */ _jsx6("span", { ref: fontMeasureRef, style: { ...font, position: "absolute", visibility: "hidden", whiteSpace: "nowrap", pointerEvents: "none", lineHeight: "1" }, children: "0" }), prefix && /* @__PURE__ */ _jsx6("span", { style: { marginRight: `${verticalSpacing}px`, whiteSpace: "pre" }, children: prefix }), currentValue < 0 && /* @__PURE__ */ _jsx6("span", { style: { marginRight: `${verticalSpacing / 2}px` }, children: "-" }), /* @__PURE__ */ _jsx6("div", { style: { display: "flex", alignItems: "center" }, children: renderDigitsWithSeparators() }), safeDecimalPlaces > 0 && decimalData.hasValidDecimals && decimalData.decimalDigits && decimalChar && /* @__PURE__ */ _jsxs("div", { style: { display: "flex", alignItems: "center" }, children: [/* @__PURE__ */ _jsx6(motion6.span, { style: { opacity: 0.7, filter: decimalFilter }, children: decimalChar }), Array.from(decimalData.decimalDigits).map((digit, index) => /* @__PURE__ */ _jsx6(Digit, { place: Math.pow(10, safeDecimalPlaces - index - 1), value: Math.floor(Math.abs(currentValue) * Math.pow(10, safeDecimalPlaces)), digitHeight, duration, font, useMotionBlur, motionBlurIntensity, verticalSpacing }, `decimal-${index}-${animationKey}`))] }), suffix && /* @__PURE__ */ _jsx6("span", { style: { marginLeft: `${verticalSpacing}px`, whiteSpace: "pre" }, children: suffix })] });
}
CounterPro.displayName = "Counter Pro";
addPropertyControls6(CounterPro, { from: { type: ControlType6.Number, title: "From", defaultValue: 0, step: 0.01 }, to: { type: ControlType6.Number, title: "To", defaultValue: 99, step: 0.01 }, startOnView: { type: ControlType6.Boolean, title: "Start on View", defaultValue: true, enabledTitle: "On", disabledTitle: "Off" }, font: { type: ControlType6.Font, title: "Font", controls: "extended", defaultFontType: "sans-serif", defaultValue: { fontSize: "40px", variant: "Bold", letterSpacing: "-0.02em", lineHeight: "1em" } }, textColor: { type: ControlType6.Color, title: "Text Color", defaultValue: "#000000" }, prefix: { type: ControlType6.String, title: "Prefix", defaultValue: "", placeholder: "$, \u20AC, etc." }, suffix: { type: ControlType6.String, title: "Suffix", defaultValue: "", placeholder: "kg, mph, etc." }, useSeparator: { type: ControlType6.Boolean, title: "Use Separator", defaultValue: false, enabledTitle: "On", disabledTitle: "Off" }, separatorChar: { type: ControlType6.String, title: "Separator", defaultValue: ",", placeholder: ",", hidden: ({ useSeparator }) => !useSeparator }, separatorPosition: { type: ControlType6.Number, title: "Separator Position", defaultValue: 3, min: 1, max: 10, step: 1, displayStepper: true, hidden: ({ useSeparator }) => !useSeparator }, decimalPlaces: { type: ControlType6.Number, title: "Decimal Places", defaultValue: 0, min: 0, max: 4, step: 1, displayStepper: true }, decimalChar: { type: ControlType6.String, title: "Decimal Char", defaultValue: ".", placeholder: ".", hidden: ({ decimalPlaces }) => decimalPlaces === 0 }, verticalSpacing: { type: ControlType6.Number, title: "Spacing", defaultValue: 0, max: 20, step: 1, unit: "px" }, duration: { type: ControlType6.Number, title: "Duration", defaultValue: 2, min: 0.1, max: 10, step: 0.1, unit: "s" }, delay: { type: ControlType6.Number, title: "Delay", defaultValue: 0, min: 0, max: 5, step: 0.1, unit: "s" }, useGlow: { type: ControlType6.Boolean, title: "Glow Effect", defaultValue: false, enabledTitle: "On", disabledTitle: "Off" }, glowColor: { type: ControlType6.Color, title: "Glow Color", defaultValue: "#0099FF", hidden: ({ useGlow }) => !useGlow }, glowIntensity: { type: ControlType6.Number, title: "Glow Intensity", defaultValue: 2, min: 1, max: 50, step: 1, hidden: ({ useGlow }) => !useGlow }, useMotionBlur: { type: ControlType6.Boolean, title: "Motion Blur", defaultValue: false, enabledTitle: "On", disabledTitle: "Off", description: "[Click here](https://tinyurl.com/avirallakhanpaul) to get more exciting components!" }, motionBlurIntensity: { type: ControlType6.Number, title: "Blur Intensity", defaultValue: 1, min: 0.1, max: 3, step: 0.1, hidden: ({ useMotionBlur }) => !useMotionBlur } });

// http-url:https://framerusercontent.com/modules/Pv4ZUYoe25scUbjrloXU/8IoNdPijWWQwtGmCQglr/WfkfeFvL9.js
import { fontStore as fontStore2 } from "./_framer-runtime.js";
fontStore2.loadFonts(["Inter-SemiBold", "Inter-Bold", "Inter-BoldItalic", "Inter-Italic"]);
var fonts2 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css7 = [`.framer-4CPIs .framer-styles-preset-14ok5w5:not(.rich-text-wrapper), .framer-4CPIs .framer-styles-preset-14ok5w5.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on, 'ss01' on, 'cv01' on, 'cv02' on, 'cv10' on, 'cv07' on, 'zero' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.2px; --framer-line-height: 1.1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className2 = "framer-4CPIs";

// http-url:https://framerusercontent.com/modules/fbsY9XjmebVNToN5wZ6B/TQpbb2NTf47rbfZIBTaG/xZ17cqp1p.js
import { jsx as _jsx7 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls7, ControlType as ControlType7, cx as cx6, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS6 } from "./_framer-runtime.js";
import { LayoutGroup, motion as motion7, MotionConfigContext } from "framer-motion";
import * as React6 from "react";
import { useRef as useRef2 } from "react";
var cycleOrder = ["GWO_yXhF6", "DQ1EsnHzt"];
var serializationHash = "framer-Qz2rg";
var variantClassNames = { DQ1EsnHzt: "framer-v-smy2sk", GWO_yXhF6: "framer-v-8mfccz" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { delay: 0, duration: 1, ease: [0.85, -0.02, 0.31, 0.96], type: "tween" };
var Transition = ({ value, children }) => {
  const config = React6.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx7(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion7.create(React6.Fragment);
var humanReadableVariantMap = { End: "DQ1EsnHzt", Start: "GWO_yXhF6" };
var getProps6 = ({ color, height, id, opacity, width, ...props }) => {
  return { ...props, eV0W9xNCm: opacity ?? props.eV0W9xNCm ?? 0.12, L7khgg0dA: color ?? props.L7khgg0dA ?? "rgb(0, 0, 0)", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "GWO_yXhF6" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component6 = /* @__PURE__ */ React6.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React6.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className3, layoutId, variant, L7khgg0dA, eV0W9xNCm, ...restProps } = getProps6(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "GWO_yXhF6", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx6(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx7(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx7(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx7(Transition, { value: transition1, children: /* @__PURE__ */ _jsx7(motion7.div, { ...restProps, ...gestureHandlers, className: cx6(scopingClassNames, "framer-8mfccz", className3, classNames), "data-framer-name": "Start", layoutDependency, layoutId: "Stats__GWO_yXhF6", ref: refBinding, style: { ...style }, ...addPropertyOverrides({ DQ1EsnHzt: { "data-framer-name": "End" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx7(motion7.div, { className: "framer-kogd32", layoutDependency, layoutId: "Stats__vvMGv_h0X", style: { backgroundColor: L7khgg0dA, opacity: 1 }, variants: { DQ1EsnHzt: { opacity: eV0W9xNCm } } }) }) }) }) });
});
var css8 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Qz2rg.framer-11a606z, .framer-Qz2rg .framer-11a606z { display: block; }", ".framer-Qz2rg.framer-8mfccz { height: auto; overflow: visible; position: relative; width: 100%; }", ".framer-Qz2rg .framer-kogd32 { flex: none; height: 1px; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 1px; }", ".framer-Qz2rg.framer-v-smy2sk .framer-kogd32 { width: 100%; }"];
var FramerxZ17cqp1p = withCSS6(Component6, css8, "framer-Qz2rg");
var xZ17cqp1p_default = FramerxZ17cqp1p;
FramerxZ17cqp1p.displayName = "Animated line";
FramerxZ17cqp1p.defaultProps = { height: 1, width: 200 };
addPropertyControls7(FramerxZ17cqp1p, { variant: { options: ["GWO_yXhF6", "DQ1EsnHzt"], optionTitles: ["Start", "End"], title: "Variant", type: ControlType7.Enum }, L7khgg0dA: { defaultValue: "rgb(0, 0, 0)", title: "Color", type: ControlType7.Color }, eV0W9xNCm: { defaultValue: 0.12, max: 1, min: 0, step: 0.01, title: "Opacity", type: ControlType7.Number } });
addFonts(FramerxZ17cqp1p, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/K39XzxWtOKhMo9Uw0svk/rEMxtX3cqaMVZuvnGsN5/N6LcmJYKm.js
var CounterProFonts = getFonts(CounterPro);
var AnimatedLineFonts = getFonts(xZ17cqp1p_default);
var AnimatedLineWithVariantAppearEffect = withVariantAppearEffect(xZ17cqp1p_default);
var serializationHash2 = "framer-Vq9PV";
var variantClassNames2 = { Go9OO6WSW: "framer-v-1eexgic" };
var transition12 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var Transition2 = ({ value, children }) => {
  const config = React7.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React7.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx8(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion8.create(React7.Fragment);
var getProps7 = ({ additionalText, height, icon, iconBottomVisible, id, number, prefix, suffix, text, title, width, ...props }) => {
  return { ...props, aR15O6a64: number ?? props.aR15O6a64 ?? 40, G91bdL0xG: title ?? props.G91bdL0xG ?? "Client Satisfaction", j9Zr4_Bv1: additionalText ?? props.j9Zr4_Bv1, LE_A6_j3J: text ?? props.LE_A6_j3J ?? "Clients stay, recommend, and return", o2qOGMNFM: iconBottomVisible ?? props.o2qOGMNFM ?? true, uqhZeSZuK: prefix ?? props.uqhZeSZuK, VONpjtAb3: suffix ?? props.VONpjtAb3 ?? "+", zVjEIirtP: icon ?? props.zVjEIirtP ?? ljGcHeWyh_default };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component7 = /* @__PURE__ */ React7.forwardRef(function(props, ref) {
  const fallbackRef = useRef3(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React7.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className: className3, layoutId, variant, G91bdL0xG, uqhZeSZuK, aR15O6a64, VONpjtAb3, j9Zr4_Bv1, LE_A6_j3J, o2qOGMNFM, zVjEIirtP, ...restProps } = getProps7(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ defaultVariant: "Go9OO6WSW", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [className2];
  const scopingClassNames = cx7(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx8(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx8(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx8(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx8(motion8.div, { ...restProps, ...gestureHandlers, className: cx7(scopingClassNames, "framer-1eexgic", className3, classNames), "data-framer-name": "Desktop", layoutDependency, layoutId: "Stats__Go9OO6WSW", ref: refBinding, style: { backgroundColor: "var(--token-5a162143-67c5-4226-a46e-87df1a71b300, rgb(20, 20, 20))", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, ...style }, children: /* @__PURE__ */ _jsxs2(motion8.div, { className: "framer-120je2p", "data-framer-name": "Stat Card Details", layoutDependency, layoutId: "Stats__vcSPWUrd8", children: [/* @__PURE__ */ _jsx8(motion8.div, { className: "framer-16thb42", "data-framer-name": "Title", layoutDependency, layoutId: "Stats__qNvTG1VVm", children: /* @__PURE__ */ _jsx8(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React7.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.p, { className: "framer-styles-preset-14ok5w5", "data-styles-preset": "WfkfeFvL9", dir: "auto", children: "Client Satisfaction" }) }), className: "framer-1hu7rx5", "data-framer-name": "Text", fonts: ["Inter"], layoutDependency, layoutId: "Stats__i8ANCTx33", style: { "--framer-paragraph-spacing": "0px" }, text: G91bdL0xG, verticalAlignment: "top", withExternalLayout: true }) }), /* @__PURE__ */ _jsxs2(motion8.div, { className: "framer-15p9u1d", "data-framer-name": "Content", layoutDependency, layoutId: "Stats__m7wnGSKz1", children: [/* @__PURE__ */ _jsxs2(motion8.div, { className: "framer-5pghx4", "data-framer-name": "Numbers", layoutDependency, layoutId: "Stats__UEXck5TMx", children: [/* @__PURE__ */ _jsx8(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer, { className: "framer-1symlbu-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Stats__hK9fXlnU5-container", nodeId: "hK9fXlnU5", rendersWithMotion: true, scopeId: "N6LcmJYKm", children: /* @__PURE__ */ _jsx8(CounterPro, { decimalChar: ".", decimalPlaces: 0, delay: 0, duration: 2, font: { fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontSize: "48px", fontStyle: "normal", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: "1em" }, from: 0, glowColor: "var(--token-e0e21b2d-c287-48c6-b16f-fdbc795f05a4, rgb(0, 0, 0))", glowIntensity: 2, height: "100%", id: "hK9fXlnU5", layoutId: "Stats__hK9fXlnU5", motionBlurIntensity: 1, prefix: uqhZeSZuK, separatorChar: ",", separatorPosition: 3, startOnView: true, suffix: VONpjtAb3, textColor: "var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255))", to: aR15O6a64, useGlow: false, useMotionBlur: false, useSeparator: false, verticalSpacing: 0, width: "100%" }) }) }), /* @__PURE__ */ _jsx8(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React7.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.p, { dir: "auto", style: { "--font-selector": "R0Y7R2Vpc3QtcmVndWxhcg==", "--framer-font-family": '"Geist", "Geist Placeholder", sans-serif', "--framer-font-size": "18px", "--framer-line-height": "1.4em", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-60791b38-971f-4c63-8dcd-603e6d766451, rgb(201, 201, 201)))" }, children: "Content" }) }), className: "framer-1b44fk5", "data-framer-name": "Stat Card Description Line 1", fonts: ["GF;Geist-regular"], layoutDependency, layoutId: "Stats__Oxh_f9yUi", style: { "--extracted-r6o4lv": "var(--token-60791b38-971f-4c63-8dcd-603e6d766451, rgb(201, 201, 201))", "--framer-paragraph-spacing": "0px" }, text: j9Zr4_Bv1, verticalAlignment: "center", withExternalLayout: true })] }), /* @__PURE__ */ _jsx8(motion8.div, { className: "framer-fx438y", "data-framer-name": "Line", layoutDependency, layoutId: "Stats__w9mHTw2jF", children: /* @__PURE__ */ _jsx8(ComponentViewportProvider, { height: 1, width: `max(${componentViewport?.width || "100vw"} - 40px, 1px)`, y: (componentViewport?.y || 0) + 20 + (((componentViewport?.height || 346) - 40 - (Math.max(0, ((componentViewport?.height || 346) - 40 - 0) / 1) * 1 + 0)) / 2 + 0 + 0) + 0 + (0 + 31.4 + (Math.max(0, ((componentViewport?.height || 346) - 40 - 0) / 1) * 1 - 0 - 239.4) / 1 * 1) + 0 + 98 + 10, children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer, { className: "framer-1kdyn6c-container", layoutDependency, layoutId: "Stats__mRZe5m6Hz-container", nodeId: "mRZe5m6Hz", rendersWithMotion: true, scopeId: "N6LcmJYKm", children: /* @__PURE__ */ _jsx8(AnimatedLineWithVariantAppearEffect, { __framer__animateOnce: false, __framer__obscuredVariantId: "GWO_yXhF6", __framer__threshold: 0.5, __framer__variantAppearEffectEnabled: true, __framer__visibleVariantId: "DQ1EsnHzt", eV0W9xNCm: 0.12, height: "100%", id: "mRZe5m6Hz", L7khgg0dA: "var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255))", layoutId: "Stats__mRZe5m6Hz", style: { height: "100%", width: "100%" }, variant: matchVariant("GWO_yXhF6"), width: "100%" }) }) }) }), /* @__PURE__ */ _jsxs2(motion8.div, { className: "framer-1s142ow", "data-framer-name": "Stat Card Description Container", layoutDependency, layoutId: "Stats__mF_5bMege", children: [/* @__PURE__ */ _jsx8(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React7.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.p, { className: "framer-styles-preset-14ok5w5", "data-styles-preset": "WfkfeFvL9", dir: "auto", children: "Clients stay, recommend, and return" }) }), className: "framer-qr6due", "data-framer-name": "Stat Card Description Line 1", fonts: ["Inter"], layoutDependency, layoutId: "Stats__t7TavVuCL", style: { "--framer-paragraph-spacing": "0px" }, text: LE_A6_j3J, verticalAlignment: "center", withExternalLayout: true }), o2qOGMNFM !== false && /* @__PURE__ */ _jsx8(Instance, { animated: true, className: "framer-1m3ss8x", Component: zVjEIirtP, layoutDependency, layoutId: "Stats__hbisI6wne", style: { "--1m6trwb": 0, "--21h8s6": "var(--token-60791b38-971f-4c63-8dcd-603e6d766451, rgb(201, 201, 201))", "--pgex8v": 1.5 } })] })] })] }) }) }) }) });
});
var css9 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Vq9PV.framer-zm58p2, .framer-Vq9PV .framer-zm58p2 { display: block; }", ".framer-Vq9PV.framer-1eexgic { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: visible; padding: 20px; position: relative; width: 100%; }", ".framer-Vq9PV .framer-120je2p { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-Vq9PV .framer-16thb42 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px 12px 0px 0px; position: relative; width: 100%; }", ".framer-Vq9PV .framer-1hu7rx5 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-Vq9PV .framer-15p9u1d { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-Vq9PV .framer-5pghx4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-Vq9PV .framer-1symlbu-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-Vq9PV .framer-1b44fk5 { flex: none; height: 20px; position: relative; white-space: pre-wrap; width: 96px; word-break: break-word; word-wrap: break-word; }", ".framer-Vq9PV .framer-fx438y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 10px 0px 10px 0px; position: relative; width: 100%; }", ".framer-Vq9PV .framer-1kdyn6c-container { flex: 1 0 0px; height: 1px; position: relative; width: 1px; }", ".framer-Vq9PV .framer-1s142ow { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-Vq9PV .framer-qr6due { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 162px; word-break: break-word; word-wrap: break-word; }", ".framer-Vq9PV .framer-1m3ss8x { flex: none; height: var(--framer-aspect-ratio-supported, 40px); position: relative; width: 40px; }", ...css7];
var FramerN6LcmJYKm = withCSS7(Component7, css9, "framer-Vq9PV");
var N6LcmJYKm_default = FramerN6LcmJYKm;
FramerN6LcmJYKm.displayName = "Stats Card";
FramerN6LcmJYKm.defaultProps = { height: 346, width: 282 };
addPropertyControls8(FramerN6LcmJYKm, { G91bdL0xG: { defaultValue: "Client Satisfaction", displayTextArea: false, title: "Title", type: ControlType8.String }, onG91bdL0xGChange: { changes: "G91bdL0xG", type: ControlType8.ChangeHandler }, uqhZeSZuK: { defaultValue: "", placeholder: "Prefix", title: "Prefix", type: ControlType8.String }, onuqhZeSZuKChange: { changes: "uqhZeSZuK", type: ControlType8.ChangeHandler }, aR15O6a64: { defaultValue: 40, title: "Number", type: ControlType8.Number }, onaR15O6a64Change: { changes: "aR15O6a64", type: ControlType8.ChangeHandler }, VONpjtAb3: { defaultValue: "+", placeholder: "Suffix", title: "Suffix", type: ControlType8.String }, onVONpjtAb3Change: { changes: "VONpjtAb3", type: ControlType8.ChangeHandler }, j9Zr4_Bv1: { defaultValue: "", displayTextArea: false, title: "Additional text", type: ControlType8.String }, onj9Zr4_Bv1Change: { changes: "j9Zr4_Bv1", type: ControlType8.ChangeHandler }, LE_A6_j3J: { defaultValue: "Clients stay, recommend, and return", displayTextArea: false, title: "Text", type: ControlType8.String }, onLE_A6_j3JChange: { changes: "LE_A6_j3J", type: ControlType8.ChangeHandler }, o2qOGMNFM: { defaultValue: true, title: "Icon bottom Visible", type: ControlType8.Boolean }, ono2qOGMNFMChange: { changes: "o2qOGMNFM", type: ControlType8.ChangeHandler }, zVjEIirtP: { defaultValue: { identifier: "module:BLjRczXRCa2XMZlRX1af/3JLV0naPYn0LHwD9pOLX/ljGcHeWyh.js:default", moduleId: "BLjRczXRCa2XMZlRX1af" }, setModuleId: "omX0gWFPqDwhaiWwf6ab", title: "Icon", type: ControlType8.VectorSetItem } });
addFonts2(FramerN6LcmJYKm, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2", weight: "500" }, { cssFamilyName: "Geist", source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v4/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4mJPby1QNtA.woff2", weight: "400" }] }, ...CounterProFonts, ...AnimatedLineFonts, ...getFontsFromSharedStyle(fonts2)], { supportsExplicitInterCodegen: true });
FramerN6LcmJYKm.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader(xZ17cqp1p_default, {}, context)]);
} };

// http-url:https://framerusercontent.com/modules/oRIg7wmxd0jJ64c6z8Vn/jcZuWtpq6DJloFxsJfL4/bKNPtxweb.js
var StatsCardFonts = getFonts2(N6LcmJYKm_default);
var MotionDivWithFX = withFX(motion9.div);
var serializationHash3 = "framer-CY5F2";
var variantClassNames3 = { zx9ny50Q8: "framer-v-1qq0zms" };
var transition13 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var animation = { opacity: 1e-3, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 };
var transition2 = { delay: 0.03, duration: 0.9, ease: [0.44, 0, 0.13, 0.96], type: "tween" };
var textEffect = { effect: animation, repeat: false, startDelay: 0, threshold: 0, tokenization: "word", transition: transition2, trigger: "onInView", type: "appear" };
var animation1 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 };
var transition3 = { bounce: 0, delay: 0, duration: 1.2, type: "spring" };
var animation2 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition3, x: 0, y: 0 };
var transition4 = { bounce: 0, delay: 0.2, duration: 1.2, type: "spring" };
var animation3 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition4, x: 0, y: 0 };
var transition5 = { bounce: 0, delay: 0.4, duration: 1.2, type: "spring" };
var animation4 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition5, x: 0, y: 0 };
var transition6 = { bounce: 0, delay: 0.6, duration: 1.2, type: "spring" };
var animation5 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition6, x: 0, y: 0 };
var Transition3 = ({ value, children }) => {
  const config = React8.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React8.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx9(MotionConfigContext3.Provider, { value: contextValue, children });
};
var Variants3 = motion9.create(React8.Fragment);
var getProps8 = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component8 = /* @__PURE__ */ React8.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React8.useId();
  const { activeLocale, setLocale } = useLocaleInfo3();
  const componentViewport = useComponentViewport3();
  const { style, className: className3, layoutId, variant, ...restProps } = getProps8(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ defaultVariant: "zx9ny50Q8", ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx8(serializationHash3, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx9(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx9(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx9(Transition3, { value: transition13, children: /* @__PURE__ */ _jsx9(motion9.section, { ...restProps, ...gestureHandlers, className: cx8(scopingClassNames, "framer-1qq0zms", className3, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "Stats__zx9ny50Q8", ref: refBinding, style: { backgroundColor: "var(--token-e0e21b2d-c287-48c6-b16f-fdbc795f05a4, rgb(0, 0, 0))", ...style }, children: /* @__PURE__ */ _jsxs3(motion9.div, { className: "framer-1fubviz", "data-framer-name": "Metrics", layoutDependency, layoutId: "Stats__Pz6lud0V1", children: [/* @__PURE__ */ _jsxs3(motion9.div, { className: "framer-qmibzm", "data-framer-name": "Details", layoutDependency, layoutId: "Stats__bOtEQNP5t", children: [/* @__PURE__ */ _jsx9(motion9.div, { className: "framer-1au4rfj", "data-framer-name": "Filler", layoutDependency, layoutId: "Stats__T9BMO7Tqp" }), /* @__PURE__ */ _jsx9(motion9.div, { className: "framer-1yw8flc", "data-framer-name": "Text", layoutDependency, layoutId: "Stats__XgqFD3ls0", children: /* @__PURE__ */ _jsx9(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx9(React8.Fragment, { children: /* @__PURE__ */ _jsx9(motion9.p, { className: "framer-styles-preset-1rd67x7", "data-styles-preset": "RclsH2sb2", dir: "auto", children: "         Good design pays dividends. We combine creative strategy with technical precision to deliver results that you can actually measure, turning visitors into loyal customers." }) }), className: "framer-tahwg8", effect: textEffect, fonts: ["Inter"], layoutDependency, layoutId: "Stats__OOz62dHrj", style: { "--framer-paragraph-spacing": "0px" }, verticalAlignment: "top", withExternalLayout: true }) })] }), /* @__PURE__ */ _jsxs3(motion9.div, { className: "framer-4xyzds", "data-framer-name": "Stats Section", layoutDependency, layoutId: "Stats__U2nhvC5s2", children: [/* @__PURE__ */ _jsx9(MotionDivWithFX, { __framer__animate: { transition: transition3 }, __framer__animateOnce: true, __framer__enter: animation1, __framer__exit: animation2, __framer__styleAppearEffectEnabled: true, __framer__threshold: 0.5, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: "framer-28a6lg", "data-framer-name": "Stat Card", layoutDependency, layoutId: "Stats__CzR0svuML", children: /* @__PURE__ */ _jsx9(ComponentViewportProvider2, { height: 346, width: `calc(((${componentViewport?.width || "100vw"} - 48px) / 4 - 1px) * 0.98)`, y: (componentViewport?.y || 0) + 100 + (((componentViewport?.height || 900) - 200 - 778) / 2 + 0 + 0) + 0 + 272 + 0 + 0, children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer2, { className: "framer-1qxh0jd-container", layoutDependency, layoutId: "Stats__A7xLWCnyd-container", nodeId: "A7xLWCnyd", rendersWithMotion: true, scopeId: "bKNPtxweb", children: /* @__PURE__ */ _jsx9(N6LcmJYKm_default, { aR15O6a64: 98, G91bdL0xG: "Client Satisfaction", height: "100%", id: "A7xLWCnyd", j9Zr4_Bv1: "", layoutId: "Stats__A7xLWCnyd", LE_A6_j3J: "Avg. across all projects", o2qOGMNFM: true, style: { width: "100%" }, uqhZeSZuK: "", VONpjtAb3: "%", width: "100%", zVjEIirtP: CeofsNecv_default }) }) }) }), /* @__PURE__ */ _jsx9(MotionDivWithFX, { __framer__animate: { transition: transition4 }, __framer__animateOnce: true, __framer__enter: animation1, __framer__exit: animation3, __framer__styleAppearEffectEnabled: true, __framer__threshold: 0.5, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: "framer-1xvgxng", "data-framer-name": "Stat Card", layoutDependency, layoutId: "Stats__Ifng6iv9y", children: /* @__PURE__ */ _jsx9(ComponentViewportProvider2, { height: 346, width: `calc(((${componentViewport?.width || "100vw"} - 48px) / 4 - 1px) * 0.98)`, y: (componentViewport?.y || 0) + 100 + (((componentViewport?.height || 900) - 200 - 778) / 2 + 0 + 0) + 0 + 272 + 0 + 160, children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer2, { className: "framer-mdd3j7-container", layoutDependency, layoutId: "Stats__c0UIAWhZK-container", nodeId: "c0UIAWhZK", rendersWithMotion: true, scopeId: "bKNPtxweb", children: /* @__PURE__ */ _jsx9(N6LcmJYKm_default, { aR15O6a64: 7, G91bdL0xG: "Years active", height: "100%", id: "c0UIAWhZK", j9Zr4_Bv1: "Years", layoutId: "Stats__c0UIAWhZK", LE_A6_j3J: "In the industry", o2qOGMNFM: true, style: { width: "100%" }, uqhZeSZuK: "", VONpjtAb3: "+", width: "100%", zVjEIirtP: P57b8hxa6_default }) }) }) }), /* @__PURE__ */ _jsx9(MotionDivWithFX, { __framer__animate: { transition: transition5 }, __framer__animateOnce: true, __framer__enter: animation1, __framer__exit: animation4, __framer__styleAppearEffectEnabled: true, __framer__threshold: 0.5, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: "framer-1orylca", "data-framer-name": "Stat Card", layoutDependency, layoutId: "Stats__qKcEp4eW7", children: /* @__PURE__ */ _jsx9(ComponentViewportProvider2, { height: 346, width: `calc(((${componentViewport?.width || "100vw"} - 48px) / 4 - 1px) * 0.98)`, y: (componentViewport?.y || 0) + 100 + (((componentViewport?.height || 900) - 200 - 778) / 2 + 0 + 0) + 0 + 272 + 0 + 0, children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer2, { className: "framer-1l34r3g-container", layoutDependency, layoutId: "Stats__rqWNUcEzH-container", nodeId: "rqWNUcEzH", rendersWithMotion: true, scopeId: "bKNPtxweb", children: /* @__PURE__ */ _jsx9(N6LcmJYKm_default, { aR15O6a64: 100, G91bdL0xG: "Delivered Projects", height: "100%", id: "rqWNUcEzH", j9Zr4_Bv1: "", layoutId: "Stats__rqWNUcEzH", LE_A6_j3J: "Shipped on time", o2qOGMNFM: true, style: { width: "100%" }, uqhZeSZuK: "", VONpjtAb3: "+", width: "100%", zVjEIirtP: dZkd7bSHY_default }) }) }) }), /* @__PURE__ */ _jsx9(MotionDivWithFX, { __framer__animate: { transition: transition6 }, __framer__animateOnce: true, __framer__enter: animation1, __framer__exit: animation5, __framer__styleAppearEffectEnabled: true, __framer__threshold: 0.5, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: "framer-1c9ck87", "data-framer-name": "Stat Card", layoutDependency, layoutId: "Stats__fZ0Xm7CAo", children: /* @__PURE__ */ _jsx9(ComponentViewportProvider2, { height: 346, width: `calc(((${componentViewport?.width || "100vw"} - 48px) / 4 - 1px) * 0.98)`, y: (componentViewport?.y || 0) + 100 + (((componentViewport?.height || 900) - 200 - 778) / 2 + 0 + 0) + 0 + 272 + 0 + 160, children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer2, { className: "framer-16d5xmb-container", layoutDependency, layoutId: "Stats__x5IC4NgCp-container", nodeId: "x5IC4NgCp", rendersWithMotion: true, scopeId: "bKNPtxweb", children: /* @__PURE__ */ _jsx9(N6LcmJYKm_default, { aR15O6a64: 3.5, G91bdL0xG: "Average ROI", height: "100%", id: "x5IC4NgCp", j9Zr4_Bv1: "", layoutId: "Stats__x5IC4NgCp", LE_A6_j3J: "For our clients", o2qOGMNFM: true, style: { width: "100%" }, uqhZeSZuK: "", VONpjtAb3: "X", width: "100%", zVjEIirtP: bDZjksbCJ_default }) }) }) })] })] }) }) }) }) });
});
var css10 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-CY5F2.framer-1odeiqh, .framer-CY5F2 .framer-1odeiqh { display: block; }", ".framer-CY5F2.framer-1qq0zms { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 24px 100px 24px; position: relative; width: 100%; }", ".framer-CY5F2 .framer-1fubviz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-CY5F2 .framer-qmibzm { display: grid; flex: none; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-CY5F2 .framer-1au4rfj { align-self: start; flex: none; height: 100%; justify-self: start; overflow: hidden; position: relative; width: 100%; }", ".framer-CY5F2 .framer-1yw8flc { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; grid-column: span 3; height: min-content; justify-content: flex-start; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-CY5F2 .framer-tahwg8 { flex: 1 0 0px; height: auto; max-width: 925px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-CY5F2 .framer-4xyzds { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-CY5F2 .framer-28a6lg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 160px 1px; position: relative; width: 25%; }", ".framer-CY5F2 .framer-1qxh0jd-container, .framer-CY5F2 .framer-mdd3j7-container, .framer-CY5F2 .framer-1l34r3g-container, .framer-CY5F2 .framer-16d5xmb-container { flex: none; height: auto; position: relative; width: 98%; }", ".framer-CY5F2 .framer-1xvgxng { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 160px 0px 0px 1px; position: relative; width: 25%; }", ".framer-CY5F2 .framer-1orylca { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 1px 160px 0px; position: relative; width: 25%; }", ".framer-CY5F2 .framer-1c9ck87 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 160px 1px 0px 0px; position: relative; width: 25%; }", ...css5];
var FramerbKNPtxweb = withCSS8(Component8, css10, "framer-CY5F2");
var bKNPtxweb_default = FramerbKNPtxweb;
FramerbKNPtxweb.displayName = "Stats";
FramerbKNPtxweb.defaultProps = { height: 900, width: 1184 };
addFonts3(FramerbKNPtxweb, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...StatsCardFonts, ...getFontsFromSharedStyle2(fonts)], { supportsExplicitInterCodegen: true });
FramerbKNPtxweb.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader2(N6LcmJYKm_default, {}, context)]);
} };
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerbKNPtxweb", "slots": [], "annotations": { "framerComponentViewportWidth": "true", "framerAutoSizeImages": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}', "framerIntrinsicHeight": "900", "framerDisplayContentsDiv": "false", "framerImmutableVariables": "true", "framerIntrinsicWidth": "1184", "framerColorSyntax": "true", "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  bKNPtxweb_default as default
};
