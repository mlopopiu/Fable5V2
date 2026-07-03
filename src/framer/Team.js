var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/jEp5TVBLZMFrzL47FI9q/YprdYJlGvXp6NhEJMXwy/mYL5B2Z7j.js
import { jsx as _jsx5, jsxs as _jsxs5 } from "react/jsx-runtime";
import { addFonts as addFonts3, ComponentViewportProvider as ComponentViewportProvider2, cx as cx3, forwardLoader, getFonts as getFonts2, getFontsFromSharedStyle as getFontsFromSharedStyle3, ResolveLinks, RichText as RichText3, SmartComponentScopedContainer as SmartComponentScopedContainer2, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useRouter, useVariantState as useVariantState3, withCSS as withCSS3, withFX } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion4, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React4 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/B0Op9SiG8XdlZLWxIqpe/JcOivKjq2w1K5aTSUsOE/curvedCarousel.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { addPropertyControls, ControlType, RenderTarget } from "./_framer-runtime.js";
function radToDeg(rad) {
  return rad * 180 / Math.PI;
}
function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}
function getDemoInstances() {
  const base = { width: 80, height: 60, borderRadius: 10, background: "#e7e7e7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#333" };
  return Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ _jsxs("div", { style: base, children: ["Item ", i + 1] }, i));
}
function CurvedCarousel(props) {
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const containerRef = React.useRef(null);
  const [diameter, setDiameter] = React.useState(1);
  const rotationRef = React.useRef(0);
  const [renderTrigger, setRenderTrigger] = React.useState(0);
  const forceRender = () => setRenderTrigger((n) => n + 1);
  const isDragging = React.useRef(false);
  const lastMousePosition = React.useRef(null);
  const lastTimestamp = React.useRef(null);
  const velocity = React.useRef(0);
  const momentumAnimationRef = React.useRef(null);
  const autoMoveAnimationRef = React.useRef(null);
  const discreteTimeoutRef = React.useRef(null);
  const discreteAnimationRef = React.useRef(null);
  React.useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el)
      return;
    const update = () => {
      const w = el.offsetWidth || 1;
      setDiameter(w);
    };
    update();
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(update);
      ro.observe(el);
      return () => ro.disconnect();
    }
    __dai_window.addEventListener("resize", update);
    return () => __dai_window.removeEventListener("resize", update);
  }, []);
  const width = Math.max(1, diameter);
  const sourceItems = React.useMemo(() => {
    if (props.instances && props.instances.length > 0)
      return props.instances;
    return getDemoInstances();
  }, [props.instances]);
  const itemCount = Math.max(1, sourceItems.length);
  const measureRef = React.useRef(null);
  const [avgWidth, setAvgWidth] = React.useState(200);
  const [maxHeight, setMaxHeight] = React.useState(120);
  React.useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el)
      return;
    const update = () => {
      const children = Array.from(el.children);
      const totalW = el.offsetWidth || 0;
      let mh = 0;
      for (const c of children)
        mh = Math.max(mh, c.offsetHeight || 0);
      const avg = itemCount > 0 ? totalW / itemCount : 200;
      setAvgWidth(avg > 1 ? avg : 200);
      setMaxHeight(mh > 1 ? mh : 120);
    };
    update();
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(update);
      ro.observe(el);
      return () => ro.disconnect();
    }
    __dai_window.addEventListener("resize", update);
    return () => __dai_window.removeEventListener("resize", update);
  }, [itemCount, props.gap]);
  const topPad = Math.max(0, maxHeight);
  const gapPx = Math.max(0, props.gap);
  const pitch = Math.max(1, avgWidth + gapPx);
  const bend = Math.max(0, props.bend);
  const stopAutoMove = React.useCallback(() => {
    if (autoMoveAnimationRef.current) {
      cancelAnimationFrame(autoMoveAnimationRef.current);
      autoMoveAnimationRef.current = null;
    }
    if (discreteTimeoutRef.current) {
      clearTimeout(discreteTimeoutRef.current);
      discreteTimeoutRef.current = null;
    }
    if (discreteAnimationRef.current) {
      cancelAnimationFrame(discreteAnimationRef.current);
      discreteAnimationRef.current = null;
    }
  }, []);
  const startContinuousAutoMove = React.useCallback(() => {
    if (props.autoMove === "none" || props.moveType !== "continuous" || isCanvas)
      return;
    if (autoMoveAnimationRef.current)
      return;
    const direction = props.autoMove === "left" ? 1 : -1;
    const speedMultiplier = props.speed;
    const animate = () => {
      rotationRef.current += direction * speedMultiplier;
      forceRender();
      autoMoveAnimationRef.current = requestAnimationFrame(animate);
    };
    autoMoveAnimationRef.current = requestAnimationFrame(animate);
  }, [props.autoMove, props.moveType, props.speed, isCanvas]);
  const startDiscreteAutoMove = React.useCallback(() => {
    if (props.autoMove === "none" || props.moveType !== "discrete" || isCanvas)
      return;
    if (discreteTimeoutRef.current || discreteAnimationRef.current)
      return;
    const direction = props.autoMove === "left" ? 1 : -1;
    const pauseMs = props.pauseDuration;
    const animationDuration = Math.max(150, 300 / props.speed);
    const animateToTarget = (startRotation, endRotation, startTime) => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(1, elapsed / animationDuration);
      const eased = 1 - Math.pow(1 - progress, 3);
      rotationRef.current = startRotation + (endRotation - startRotation) * eased;
      forceRender();
      if (progress < 1) {
        discreteAnimationRef.current = requestAnimationFrame(() => animateToTarget(startRotation, endRotation, startTime));
      } else {
        discreteAnimationRef.current = null;
        scheduleNextMove();
      }
    };
    const moveOneItem = () => {
      const startRotation = rotationRef.current;
      const endRotation = startRotation + direction * pitch;
      animateToTarget(startRotation, endRotation, performance.now());
    };
    const scheduleNextMove = () => {
      discreteTimeoutRef.current = setTimeout(() => {
        discreteTimeoutRef.current = null;
        moveOneItem();
      }, pauseMs);
    };
    scheduleNextMove();
  }, [props.autoMove, props.moveType, props.speed, props.pauseDuration, pitch, isCanvas]);
  const startAutoMove = React.useCallback(() => {
    if (props.autoMove === "none" || isCanvas)
      return;
    if (props.moveType === "continuous") {
      startContinuousAutoMove();
    } else {
      startDiscreteAutoMove();
    }
  }, [props.autoMove, props.moveType, startContinuousAutoMove, startDiscreteAutoMove, isCanvas]);
  React.useEffect(() => {
    if (isCanvas)
      return;
    stopAutoMove();
    startAutoMove();
    return () => stopAutoMove();
  }, [props.autoMove, props.moveType, props.speed, props.pauseDuration, isCanvas, pitch]);
  const applyMomentum = React.useCallback(() => {
    if (Math.abs(velocity.current) < 0.1) {
      momentumAnimationRef.current = null;
      velocity.current = 0;
      return;
    }
    rotationRef.current += velocity.current;
    velocity.current *= 0.95;
    forceRender();
    momentumAnimationRef.current = requestAnimationFrame(applyMomentum);
  }, []);
  const handleMouseDown = React.useCallback((e) => {
    if (!props.draggable)
      return;
    e.preventDefault();
    if (momentumAnimationRef.current) {
      cancelAnimationFrame(momentumAnimationRef.current);
      momentumAnimationRef.current = null;
    }
    isDragging.current = true;
    lastMousePosition.current = e.clientX;
    lastTimestamp.current = performance.now();
    velocity.current = 0;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing";
    }
  }, [props.draggable]);
  const handleMouseMove = React.useCallback((e) => {
    if (!isDragging.current || lastMousePosition.current === null)
      return;
    const currentTime = performance.now();
    const timeElapsed = currentTime - (lastTimestamp.current || currentTime);
    const deltaX = e.clientX - lastMousePosition.current;
    const rotationDelta = -deltaX;
    if (timeElapsed > 0) {
      velocity.current = rotationDelta / timeElapsed * 16;
    }
    rotationRef.current += rotationDelta;
    forceRender();
    lastMousePosition.current = e.clientX;
    lastTimestamp.current = currentTime;
  }, []);
  const handleMouseUp = React.useCallback(() => {
    if (!isDragging.current)
      return;
    isDragging.current = false;
    lastMousePosition.current = null;
    if (Math.abs(velocity.current) > 0.5) {
      momentumAnimationRef.current = requestAnimationFrame(applyMomentum);
    }
    if (containerRef.current) {
      containerRef.current.style.cursor = props.draggable ? "grab" : "default";
    }
  }, [applyMomentum, props.draggable]);
  const handleTouchStart = React.useCallback((e) => {
    if (!props.draggable)
      return;
    if (momentumAnimationRef.current) {
      cancelAnimationFrame(momentumAnimationRef.current);
      momentumAnimationRef.current = null;
    }
    isDragging.current = true;
    lastMousePosition.current = e.touches[0].clientX;
    lastTimestamp.current = performance.now();
    velocity.current = 0;
  }, [props.draggable]);
  const handleTouchMove = React.useCallback((e) => {
    if (!isDragging.current || lastMousePosition.current === null)
      return;
    const currentTime = performance.now();
    const timeElapsed = currentTime - (lastTimestamp.current || currentTime);
    const touchX = e.touches[0].clientX;
    const deltaX = touchX - lastMousePosition.current;
    const rotationDelta = -deltaX;
    if (timeElapsed > 0) {
      velocity.current = rotationDelta / timeElapsed * 16;
    }
    rotationRef.current += rotationDelta;
    forceRender();
    lastMousePosition.current = touchX;
    lastTimestamp.current = currentTime;
  }, []);
  const handleTouchEnd = React.useCallback(() => {
    if (!isDragging.current)
      return;
    isDragging.current = false;
    lastMousePosition.current = null;
    if (Math.abs(velocity.current) > 0.5) {
      momentumAnimationRef.current = requestAnimationFrame(applyMomentum);
    }
  }, [applyMomentum]);
  React.useEffect(() => {
    if (isCanvas || !props.draggable)
      return;
    const element = containerRef.current;
    if (!element)
      return;
    element.addEventListener("mousedown", handleMouseDown);
    __dai_window.addEventListener("mousemove", handleMouseMove);
    __dai_window.addEventListener("mouseup", handleMouseUp);
    __dai_window.addEventListener("mouseleave", handleMouseUp);
    element.addEventListener("touchstart", handleTouchStart);
    element.addEventListener("touchmove", handleTouchMove);
    element.addEventListener("touchend", handleTouchEnd);
    element.addEventListener("touchcancel", handleTouchEnd);
    return () => {
      element.removeEventListener("mousedown", handleMouseDown);
      __dai_window.removeEventListener("mousemove", handleMouseMove);
      __dai_window.removeEventListener("mouseup", handleMouseUp);
      __dai_window.removeEventListener("mouseleave", handleMouseUp);
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchmove", handleTouchMove);
      element.removeEventListener("touchend", handleTouchEnd);
      element.removeEventListener("touchcancel", handleTouchEnd);
      if (momentumAnimationRef.current) {
        cancelAnimationFrame(momentumAnimationRef.current);
      }
    };
  }, [isCanvas, props.draggable, handleMouseDown, handleMouseMove, handleMouseUp, handleTouchStart, handleTouchMove, handleTouchEnd]);
  const rotation = rotationRef.current;
  const overflowStyle = props.overflow || "hidden";
  const calculateTotalSlots = () => {
    if (bend <= 1e-3) {
      return Math.max(itemCount * 3, Math.ceil(width * 3 / pitch) + 2);
    }
    const s2 = clamp(bend / 4 * (width / 2), 0, width / 2);
    const halfChord2 = width / 2;
    const r2 = Math.max(halfChord2, (s2 * s2 + halfChord2 * halfChord2) / (2 * s2));
    const fullCircumference = 2 * Math.PI * r2;
    return Math.max(itemCount * 3, Math.ceil(fullCircumference / pitch));
  };
  const totalSlots = calculateTotalSlots();
  const singleSetWidth = itemCount * pitch;
  if (bend <= 1e-3) {
    const height2 = Math.max(1, topPad + 1);
    const y = topPad;
    const normalizedRotation = (rotation % singleSetWidth + singleSetWidth) % singleSetWidth;
    return /* @__PURE__ */ _jsxs("div", { ref: containerRef, style: { width: "100%", height: height2, minHeight: height2, position: "relative", overflow: overflowStyle, userSelect: "none", cursor: props.draggable ? "grab" : "default" }, children: [/* @__PURE__ */ _jsx("div", { ref: measureRef, style: { position: "absolute", visibility: "hidden", pointerEvents: "none", display: "flex", gap: gapPx, opacity: 0, left: -99999, top: -99999 }, children: sourceItems.map((n, i) => /* @__PURE__ */ _jsx("div", { children: n }, `m-${i}`)) }), Array.from({ length: totalSlots }).map((_, i) => {
      const baseX = (i - Math.floor(totalSlots / 2)) * pitch;
      const x = baseX + normalizedRotation;
      const node = sourceItems[(i % itemCount + itemCount) % itemCount];
      return /* @__PURE__ */ _jsx("div", { style: { position: "absolute", left: "50%", top: y, transform: `translateX(calc(-50% + ${x}px)) translateY(-100%)`, transformOrigin: "50% 100%", pointerEvents: isCanvas ? "none" : "auto", willChange: "transform" }, children: node }, `petal-${i}`);
    })] });
  }
  const s = clamp(bend / 4 * (width / 2), 0, width / 2);
  const halfChord = width / 2;
  const r = Math.max(halfChord, (s * s + halfChord * halfChord) / (2 * s));
  const cx4 = width / 2;
  const chordY = topPad + s;
  const cy = topPad + r;
  const height = Math.max(1, chordY);
  const circumference = 2 * Math.PI * r;
  const angularRotation = rotation / circumference * (2 * Math.PI);
  const angularSpacing = 2 * Math.PI / totalSlots;
  return /* @__PURE__ */ _jsxs("div", { ref: containerRef, style: { width: "100%", height, minHeight: height, position: "relative", overflow: overflowStyle, userSelect: "none", cursor: props.draggable ? "grab" : "default" }, children: [/* @__PURE__ */ _jsx("div", { ref: measureRef, style: { position: "absolute", visibility: "hidden", pointerEvents: "none", display: "flex", gap: gapPx, opacity: 0, left: -99999, top: -99999 }, children: sourceItems.map((n, i) => /* @__PURE__ */ _jsx("div", { children: n }, `m-${i}`)) }), Array.from({ length: totalSlots }).map((_, i) => {
    const baseAngle = Math.PI / 2 + i * angularSpacing;
    const phi = baseAngle + angularRotation;
    const x = cx4 + r * Math.cos(phi);
    const y = cy - r * Math.sin(phi);
    const outwardAngle = Math.atan2(y - cy, x - cx4);
    const itemRotation = radToDeg(outwardAngle) + 90;
    const node = sourceItems[(i % itemCount + itemCount) % itemCount];
    return /* @__PURE__ */ _jsx("div", { style: { position: "absolute", left: x, top: y, transform: `translate(-50%, -100%) rotate(${itemRotation}deg)`, transformOrigin: "50% 100%", pointerEvents: isCanvas ? "none" : "auto", willChange: "transform" }, children: node }, `petal-${i}`);
  })] });
}
CurvedCarousel.defaultProps = { bend: 2, gap: 16, draggable: false, autoMove: "none", moveType: "continuous", speed: 1, pauseDuration: 2e3, overflow: "hidden" };
addPropertyControls(CurvedCarousel, { instances: { type: ControlType.Array, title: "Instances", control: { type: ControlType.ComponentInstance } }, bend: { type: ControlType.Number, title: "Bend", min: 0, max: 4, step: 0.05, defaultValue: 2, displayStepper: true }, gap: { type: ControlType.Number, title: "Gap", min: 0, max: 200, step: 1, defaultValue: 16 }, overflow: { type: ControlType.Enum, title: "Overflow", options: ["hidden", "visible"], optionTitles: ["Hidden", "Visible"], defaultValue: "hidden", displaySegmentedControl: true }, draggable: { type: ControlType.Boolean, title: "Draggable", defaultValue: false }, autoMove: { type: ControlType.Enum, title: "Auto Move", options: ["none", "left", "right"], optionTitles: ["None", "Left", "Right"], defaultValue: "none" }, moveType: { type: ControlType.Enum, title: "Move Type", options: ["continuous", "discrete"], optionTitles: ["Continuous", "Discrete"], defaultValue: "continuous", displaySegmentedControl: true, hidden: (props) => props.autoMove === "none" }, speed: { type: ControlType.Number, title: "Speed", min: 0.1, max: 1e3, step: 0.1, defaultValue: 1, displayStepper: true, hidden: (props) => props.autoMove === "none" }, pauseDuration: { type: ControlType.Number, title: "Pause Duration", min: 100, max: 1e4, step: 100, defaultValue: 2e3, unit: "ms", hidden: (props) => props.autoMove === "none" || props.moveType !== "discrete", description: "v1.0 \n[via SegmentUI](https://www.segmentUI.com)" } });

// http-url:https://framerusercontent.com/modules/tZaHOsBBqYBOm7FlCAkC/uqe47JAIXVtSjEZW9mzS/Bf3ONXiqf.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["Inter-SemiBold", "Inter-Bold", "Inter-BoldItalic", "Inter-SemiBoldItalic"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/vxBnBhH8768IFAXAb4Qf6wQHKs.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/zSsEuoJdh8mcFVk976C05ZfQr8.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/b8ezwLrN7h2AUoPEENcsTMVJ0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/mvNEIBLyHbscgHtwfsByjXUz3XY.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/6FI2EneKzM3qBy5foOZXey7coCA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/fuyXZpVvOjq8NesCOfgirHCWyg.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/NHHeAKJVP0ZWHk5YZnQQChIsBM.woff2", weight: "600" }] }];
var css = ['.framer-jjH2Z .framer-styles-preset-1tbvl3k:not(.rich-text-wrapper), .framer-jjH2Z .framer-styles-preset-1tbvl3k.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 144px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.06em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-background-corner-shape: superellipse(1); --framer-text-background-corner-shape-fallback: 1; --framer-text-background-radius: calc(0px*var(--one-if-corner-shape-supported,var(--framer-text-background-corner-shape-fallback,1))); --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-jjH2Z .framer-styles-preset-1tbvl3k:not(.rich-text-wrapper), .framer-jjH2Z .framer-styles-preset-1tbvl3k.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 99px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.06em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-background-corner-shape: superellipse(1); --framer-text-background-corner-shape-fallback: 1; --framer-text-background-radius: calc(0px*var(--one-if-corner-shape-supported,var(--framer-text-background-corner-shape-fallback,1))); --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-jjH2Z .framer-styles-preset-1tbvl3k:not(.rich-text-wrapper), .framer-jjH2Z .framer-styles-preset-1tbvl3k.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 60px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.06em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-background-corner-shape: superellipse(1); --framer-text-background-corner-shape-fallback: 1; --framer-text-background-radius: calc(0px*var(--one-if-corner-shape-supported,var(--framer-text-background-corner-shape-fallback,1))); --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }'];
var className = "framer-jjH2Z";

// http-url:https://framerusercontent.com/modules/VFPHGQo8x4f7Jwf5HYz0/JcbwPEG3sDNrV6SRLjGb/GU4P8Omjb.js
import { jsx as _jsx2, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx, getFontsFromSharedStyle, getLoadingLazyAtYPosition, Image as Image1, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React2 from "react";
import { useRef as useRef2 } from "react";

// http-url:https://framerusercontent.com/modules/wY0CeKYOluDBvdi5DmbO/fVEFLCC6K7wPc5d5Qmi9/jHOaSU1Vs.js
import { fontStore as fontStore2 } from "./_framer-runtime.js";
fontStore2.loadFonts(["Inter", "Inter-Bold", "Inter-BoldItalic", "Inter-Italic"]);
var fonts2 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css2 = ['.framer-GGTA2 .framer-styles-preset-1wyyzzi:not(.rich-text-wrapper), .framer-GGTA2 .framer-styles-preset-1wyyzzi.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.5px; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-3f9fd497-b700-4c59-baf4-76f1d1f44dcd, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className2 = "framer-GGTA2";

// http-url:https://framerusercontent.com/modules/qW2Pz0ks4fOVLVS5TrI5/NXz6AVX8bJ8r06293pX2/kKrcS48gC.js
import { fontStore as fontStore3 } from "./_framer-runtime.js";
fontStore3.loadFonts(["Inter-Medium", "Inter-Bold", "Inter-BoldItalic", "Inter-MediumItalic"]);
var fonts3 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/khkJkwSL66WFg8SX6Wa726c.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/0E7IMbDzcGABpBwwqNEt60wU0w.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/NTJ0nQgIF0gcDelS14zQ9NR9Q.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/QrcNhgEPfRl0LS8qz5Ln8olanl8.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JEXmejW8mXOYMtt0hyRg811kHac.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/Bo5CNzBv77CafbxOtKIkpw9egw.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/uy9s0iWuxiNnVt8EpTI3gzohpwo.woff2", weight: "500" }] }];
var css3 = [`.framer-PBk34 .framer-styles-preset-1sx21c1:not(.rich-text-wrapper), .framer-PBk34 .framer-styles-preset-1sx21c1.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className3 = "framer-PBk34";

// http-url:https://framerusercontent.com/modules/VFPHGQo8x4f7Jwf5HYz0/JcbwPEG3sDNrV6SRLjGb/GU4P8Omjb.js
var serializationHash = "framer-WJzY1";
var variantClassNames = { QRn5W5pZ_: "framer-v-x2ezsl" };
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var Transition = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React2.Fragment);
var getProps = ({ height, id, image, name1, roll, tag, width, ...props }) => {
  return { ...props, BBIx3Mhxu: name1 ?? props.BBIx3Mhxu ?? "Matt Anderson", HdLliSbyQ: roll ?? props.HdLliSbyQ ?? "Creative Director", NDdvw7UCa: image ?? props.NDdvw7UCa ?? { pixelHeight: 1136, pixelWidth: 896, src: "https://framerusercontent.com/images/bUAGTLjCvxWT626B6xhYH1g2bIE.jpg?width=896&height=1136", srcSet: "https://framerusercontent.com/images/bUAGTLjCvxWT626B6xhYH1g2bIE.jpg?scale-down-to=1024&width=896&height=1136 807w,https://framerusercontent.com/images/bUAGTLjCvxWT626B6xhYH1g2bIE.jpg?width=896&height=1136 896w" }, Ns2sDMYPk: tag ?? props.Ns2sDMYPk ?? "Strategy" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className7, layoutId, variant, NDdvw7UCa, BBIx3Mhxu, HdLliSbyQ, Ns2sDMYPk, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "QRn5W5pZ_", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className2, className3];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx2(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs2(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-x2ezsl", className7, classNames), "data-framer-name": "Default", layoutDependency, layoutId: "Team__QRn5W5pZ_", ref: refBinding, style: { borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, ...style }, children: [/* @__PURE__ */ _jsx2(Image1, { as: "figure", background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + 0), pixelHeight: 1136, pixelWidth: 896, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(NDdvw7UCa) }, className: "framer-1quqa7h", fitImageDimension: "height", layoutDependency, layoutId: "Team__XQN9hn2o9" }), /* @__PURE__ */ _jsxs2(motion.div, { className: "framer-4w507", layoutDependency, layoutId: "Team__Pf2H3VysP", style: { backgroundColor: "var(--token-5a162143-67c5-4226-a46e-87df1a71b300, rgb(20, 20, 20))" }, children: [/* @__PURE__ */ _jsx2(motion.div, { className: "framer-105802d", layoutDependency, layoutId: "Team__L_v_FHgnS", style: { backgroundColor: "rgba(0, 0, 0, 0)" }, children: /* @__PURE__ */ _jsx2(motion.div, { className: "framer-1ai1u3g", layoutDependency, layoutId: "Team__OnbJwt5b0", style: { backgroundColor: "var(--token-7e7f72de-b42b-44cb-b318-42bed5ea0287, rgb(15, 128, 84))", borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100 }, children: /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React2.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { className: "framer-styles-preset-1wyyzzi", "data-styles-preset": "jHOaSU1Vs", dir: "auto", children: "Strategy" }) }), className: "framer-1gmumi9", fonts: ["Inter"], layoutDependency, layoutId: "Team__Qwwbk3Rvl", text: Ns2sDMYPk, verticalAlignment: "top", withExternalLayout: true }) }) }), /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React2.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { className: "framer-styles-preset-1sx21c1", "data-styles-preset": "kKrcS48gC", dir: "auto", children: "Matt Anderson" }) }), className: "framer-v139db", fonts: ["Inter"], layoutDependency, layoutId: "Team__N_ijTRWbv", text: BBIx3Mhxu, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React2.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { className: "framer-styles-preset-1wyyzzi", "data-styles-preset": "jHOaSU1Vs", dir: "auto", children: "Creative Director" }) }), className: "framer-x37vd8", fonts: ["Inter"], layoutDependency, layoutId: "Team__cMwhduPJT", style: { opacity: 0.5 }, text: HdLliSbyQ, verticalAlignment: "top", withExternalLayout: true })] })] }) }) }) });
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-WJzY1.framer-1r4pzl9, .framer-WJzY1 .framer-1r4pzl9 { display: block; }", ".framer-WJzY1.framer-x2ezsl { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-WJzY1 .framer-1quqa7h { flex: none; height: auto; position: relative; width: 100%; }", ".framer-WJzY1 .framer-4w507 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 20px; position: relative; width: 100%; }", ".framer-WJzY1 .framer-105802d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", ".framer-WJzY1 .framer-1ai1u3g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 5px 8px 5px 8px; position: relative; width: min-content; }", ".framer-WJzY1 .framer-1gmumi9, .framer-WJzY1 .framer-v139db, .framer-WJzY1 .framer-x37vd8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ...css2, ...css3];
var FramerGU4P8Omjb = withCSS(Component, css4, "framer-WJzY1");
var GU4P8Omjb_default = FramerGU4P8Omjb;
FramerGU4P8Omjb.displayName = "Team Card";
FramerGU4P8Omjb.defaultProps = { height: 416, width: 240 };
addPropertyControls2(FramerGU4P8Omjb, { NDdvw7UCa: { __defaultAssetReference: "data:framer/asset-reference,bUAGTLjCvxWT626B6xhYH1g2bIE.jpg?originalFilename=image.jpg&width=896&height=1136", title: "Image", type: ControlType2.ResponsiveImage }, BBIx3Mhxu: { defaultValue: "Matt Anderson", displayTextArea: false, title: "Name", type: ControlType2.String }, onBBIx3MhxuChange: { changes: "BBIx3Mhxu", type: ControlType2.ChangeHandler }, HdLliSbyQ: { defaultValue: "Creative Director", displayTextArea: false, title: "Roll", type: ControlType2.String }, onHdLliSbyQChange: { changes: "HdLliSbyQ", type: ControlType2.ChangeHandler }, Ns2sDMYPk: { defaultValue: "Strategy", displayTextArea: false, title: "Tag", type: ControlType2.String }, onNs2sDMYPkChange: { changes: "Ns2sDMYPk", type: ControlType2.ChangeHandler } });
addFonts(FramerGU4P8Omjb, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts3)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/B0kjxHiHxaFxnRLblNyb/7jhnYjkV4xAEej9co0uP/ZfRLUDToh.js
import { jsx as _jsx4, jsxs as _jsxs4 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls4, ComponentViewportProvider, ControlType as ControlType4, cx as cx2, getFonts, getFontsFromSharedStyle as getFontsFromSharedStyle2, Link, RichText as RichText2, SmartComponentScopedContainer, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion3, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React3 from "react";
import { useRef as useRef3 } from "react";

// http-url:https://framerusercontent.com/modules/FiiQ0BKlVUNzxXjo8hFs/wP5ls8Ui6wqb7IsgWCbt/RollingTextHover_Prod.js
import { jsx as _jsx3, jsxs as _jsxs3 } from "react/jsx-runtime";
import { useState as useState2, useId as useId2 } from "react";
import { addPropertyControls as addPropertyControls3, ControlType as ControlType3 } from "./_framer-runtime.js";
import { motion as motion2 } from "framer-motion";
function RollingText({ text, transition, stagger, reverse, font, color, textTransform, tag, padding }) {
  const [isHovered, setIsHovered] = useState2(false);
  const reactId = useId2();
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
  return /* @__PURE__ */ _jsxs3("div", { style: wrapperStyle, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [/* @__PURE__ */ _jsx3(Tag, { className: innerClassName, children: [...text].map((str, index) => {
    const charIndex = reverse ? text.length - 1 - index : index;
    const delay = text.length > 0 ? baseDuration / text.length * charIndex * staggerFactor : 0;
    const motionSpanStyle = { display: "block", ...font };
    return /* @__PURE__ */ _jsx3(motion2.span, { variants: spanVariants, initial: "initial", animate: isHovered ? "hover" : "initial", transition: { ...transition, delay }, style: motionSpanStyle, children: str === " " ? "\xA0" : str }, index);
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

// http-url:https://framerusercontent.com/modules/x81aPXn2GfpCoPgEFXtJ/AFrmVGbXzkVN62qp6pHo/KQTQTeOy9.js
import { fontStore as fontStore4 } from "./_framer-runtime.js";
fontStore4.loadFonts(["Inter-SemiBold", "Inter-Bold", "Inter-BoldItalic", "Inter-SemiBoldItalic"]);
var fonts4 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/vxBnBhH8768IFAXAb4Qf6wQHKs.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/zSsEuoJdh8mcFVk976C05ZfQr8.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/b8ezwLrN7h2AUoPEENcsTMVJ0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/mvNEIBLyHbscgHtwfsByjXUz3XY.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/6FI2EneKzM3qBy5foOZXey7coCA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/fuyXZpVvOjq8NesCOfgirHCWyg.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/NHHeAKJVP0ZWHk5YZnQQChIsBM.woff2", weight: "600" }] }];
var css5 = [`.framer-uh5xN .framer-styles-preset-9jmi73:not(.rich-text-wrapper), .framer-uh5xN .framer-styles-preset-9jmi73.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.04px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className4 = "framer-uh5xN";

// http-url:https://framerusercontent.com/modules/b0DQhwVpgF61SO5yz5vI/n4lfvlKqorWsWwilNae6/Kst9xRM8v.js
import { fontStore as fontStore5 } from "./_framer-runtime.js";
fontStore5.loadFonts(["Inter-Bold", "Inter-Black", "Inter-BlackItalic", "Inter-Italic"]);
var fonts5 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/rZ5DdENNqIdFTIyQQiP5isO7M.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/3ZmXbBKToJifDV9gwcifVd1tEY.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/gcnfba68tfm7qAyrWRCf9r34jg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css6 = ['.framer-0LoBs .framer-styles-preset-cbutxb:not(.rich-text-wrapper), .framer-0LoBs .framer-styles-preset-cbutxb.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-0LoBs .framer-styles-preset-cbutxb:not(.rich-text-wrapper), .framer-0LoBs .framer-styles-preset-cbutxb.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-0LoBs .framer-styles-preset-cbutxb:not(.rich-text-wrapper), .framer-0LoBs .framer-styles-preset-cbutxb.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 19px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className5 = "framer-0LoBs";

// http-url:https://framerusercontent.com/modules/ISZuzsUT9Xdd5ePLXb7x/We0E0j0wDeFfdxz3rfhJ/pVdNGAxZO.js
import { fontStore as fontStore6 } from "./_framer-runtime.js";
fontStore6.loadFonts(["Inter-Bold", "Inter-Black", "Inter-BlackItalic", "Inter-Italic"]);
var fonts6 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/rZ5DdENNqIdFTIyQQiP5isO7M.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/3ZmXbBKToJifDV9gwcifVd1tEY.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/gcnfba68tfm7qAyrWRCf9r34jg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css7 = [`.framer-Bew3a .framer-styles-preset-1q6zu6t:not(.rich-text-wrapper), .framer-Bew3a .framer-styles-preset-1q6zu6t.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04px; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className6 = "framer-Bew3a";

// http-url:https://framerusercontent.com/modules/B0kjxHiHxaFxnRLblNyb/7jhnYjkV4xAEej9co0uP/ZfRLUDToh.js
var RollingTextFonts = getFonts(RollingText);
var cycleOrder = ["bWvFCpGqZ", "dXoH4aW9S", "SfsVyg8AH"];
var serializationHash2 = "framer-1Vmdk";
var variantClassNames2 = { bWvFCpGqZ: "framer-v-68f7ea", dXoH4aW9S: "framer-v-j4wlk6", SfsVyg8AH: "framer-v-ktx50s" };
function addPropertyOverrides(overrides, ...variants) {
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
var transition12 = { damping: 40, delay: 0, mass: 1, stiffness: 350, type: "spring" };
var Transition2 = ({ value, children }) => {
  const config = React3.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { " tertiary": "SfsVyg8AH", "Secondary ": "dXoH4aW9S", Primary: "bWvFCpGqZ" };
var Variants2 = motion3.create(React3.Fragment);
var getProps2 = ({ bGFill, height, id, link, newTab, normalTextVisible, radius, rollingTextVisible, smoothScroll, textColor, title, width, ...props }) => {
  return { ...props, CSyo3aTPk: newTab ?? props.CSyo3aTPk, eKuI9CoCg: textColor ?? props.eKuI9CoCg ?? "var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255))", Gh9QOfeLM: title ?? props.Gh9QOfeLM ?? "Text", JQPbxOZrF: link ?? props.JQPbxOZrF, O2hjEQwNf: normalTextVisible ?? props.O2hjEQwNf, oTM8e0FLR: radius ?? props.oTM8e0FLR ?? "259px", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "bWvFCpGqZ", vZZm_o9LA: smoothScroll ?? props.vZZm_o9LA, WoiFDjxIJ: bGFill ?? props.WoiFDjxIJ ?? "var(--token-7e7f72de-b42b-44cb-b318-42bed5ea0287, rgb(15, 128, 84))", xeTdFG4YU: rollingTextVisible ?? props.xeTdFG4YU ?? true };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const fallbackRef = useRef3(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className: className7, layoutId, variant, Gh9QOfeLM, JQPbxOZrF, vZZm_o9LA, CSyo3aTPk, WoiFDjxIJ, eKuI9CoCg, oTM8e0FLR, xeTdFG4YU, O2hjEQwNf, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder, defaultVariant: "bWvFCpGqZ", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [className5, className4, className6];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx4(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx4(Link, { href: JQPbxOZrF, motionChild: true, nodeId: "bWvFCpGqZ", openInNewTab: CSyo3aTPk, scopeId: "ZfRLUDToh", smoothScroll: vZZm_o9LA, children: /* @__PURE__ */ _jsxs4(motion3.a, { ...restProps, ...gestureHandlers, className: `${cx2(scopingClassNames, "framer-68f7ea", className7, classNames)} framer-igryma`, "data-framer-name": "Primary", layoutDependency, layoutId: "Team__bWvFCpGqZ", ref: refBinding, style: { backgroundColor: WoiFDjxIJ, borderBottomLeftRadius: radiusForCorner(oTM8e0FLR, 3), borderBottomRightRadius: radiusForCorner(oTM8e0FLR, 2), borderTopLeftRadius: radiusForCorner(oTM8e0FLR, 0), borderTopRightRadius: radiusForCorner(oTM8e0FLR, 1), ...style }, ...addPropertyOverrides({ dXoH4aW9S: { "data-framer-name": "Secondary " }, SfsVyg8AH: { "data-framer-name": " tertiary" } }, baseVariant, gestureVariant), children: [xeTdFG4YU !== false && /* @__PURE__ */ _jsx4(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-16bqd1p-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Team__kQPiP8BvJ-container", nodeId: "kQPiP8BvJ", rendersWithMotion: true, scopeId: "ZfRLUDToh", children: /* @__PURE__ */ _jsx4(RollingText, { color: eKuI9CoCg, font: { fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontSize: "20px", fontStyle: "normal", fontWeight: 700, letterSpacing: "-0.3px", lineHeight: "1em" }, height: "100%", id: "kQPiP8BvJ", layoutId: "Team__kQPiP8BvJ", padding: "0px", reverse: false, stagger: 55, style: { width: "100%" }, tag: "p", text: Gh9QOfeLM, textTransform: "none", transition: { delay: 0, duration: 0.4, ease: [0.82, 0.08, 0.29, 1], type: "tween" }, width: "100%", ...addPropertyOverrides({ dXoH4aW9S: { font: { fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontSize: "16px", fontStyle: "normal", fontWeight: 600, letterSpacing: "-0.3px", lineHeight: "16px" } }, SfsVyg8AH: { font: { fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontSize: "16px", fontStyle: "normal", fontWeight: 700, letterSpacing: "-0.3px", lineHeight: "18px" } } }, baseVariant, gestureVariant) }) }) }), O2hjEQwNf !== false && /* @__PURE__ */ _jsx4(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React3.Fragment, { children: /* @__PURE__ */ _jsx4(motion3.p, { className: "framer-styles-preset-cbutxb", "data-styles-preset": "Kst9xRM8v", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-eKuI9CoCg-ZfRLUDToh))" }, children: "Text" }) }), className: "framer-lnwosa", fonts: ["Inter"], layoutDependency, layoutId: "Team__mDX2NZxsX", style: { "--extracted-r6o4lv": "var(--variable-reference-eKuI9CoCg-ZfRLUDToh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-eKuI9CoCg-ZfRLUDToh": eKuI9CoCg }, text: Gh9QOfeLM, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ dXoH4aW9S: { children: /* @__PURE__ */ _jsx4(React3.Fragment, { children: /* @__PURE__ */ _jsx4(motion3.p, { className: "framer-styles-preset-9jmi73", "data-styles-preset": "KQTQTeOy9", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-eKuI9CoCg-ZfRLUDToh))" }, children: "Text" }) }) }, SfsVyg8AH: { children: /* @__PURE__ */ _jsx4(React3.Fragment, { children: /* @__PURE__ */ _jsx4(motion3.p, { className: "framer-styles-preset-1q6zu6t", "data-styles-preset": "pVdNGAxZO", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-eKuI9CoCg-ZfRLUDToh))" }, children: "Text" }) }) } }, baseVariant, gestureVariant) })] }) }) }) }) });
});
var css8 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-1Vmdk.framer-igryma, .framer-1Vmdk .framer-igryma { display: block; }", ".framer-1Vmdk.framer-68f7ea { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px; position: relative; text-decoration: none; width: 200px; will-change: var(--framer-will-change-override, transform); }", ".framer-1Vmdk .framer-16bqd1p-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-1Vmdk .framer-lnwosa { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-1Vmdk.framer-v-j4wlk6.framer-68f7ea, .framer-1Vmdk.framer-v-ktx50s.framer-68f7ea { padding: 8px; width: min-content; }", ".framer-1Vmdk.framer-v-j4wlk6 .framer-16bqd1p-container, .framer-1Vmdk.framer-v-ktx50s .framer-16bqd1p-container { flex: none; width: auto; }", ...css6, ...css5, ...css7];
var FramerZfRLUDToh = withCSS2(Component2, css8, "framer-1Vmdk");
var ZfRLUDToh_default = FramerZfRLUDToh;
FramerZfRLUDToh.displayName = "Primary Button";
FramerZfRLUDToh.defaultProps = { height: 40, width: 200 };
addPropertyControls4(FramerZfRLUDToh, { variant: { options: ["bWvFCpGqZ", "dXoH4aW9S", "SfsVyg8AH"], optionTitles: ["Primary", "Secondary ", " tertiary"], title: "Variant", type: ControlType4.Enum }, Gh9QOfeLM: { defaultValue: "Text", displayTextArea: false, title: "Title", type: ControlType4.String }, onGh9QOfeLMChange: { changes: "Gh9QOfeLM", type: ControlType4.ChangeHandler }, JQPbxOZrF: { title: "Link", type: ControlType4.Link }, vZZm_o9LA: { defaultValue: false, title: "Smooth Scroll", type: ControlType4.Boolean }, onvZZm_o9LAChange: { changes: "vZZm_o9LA", type: ControlType4.ChangeHandler }, CSyo3aTPk: { defaultValue: false, title: "New Tab", type: ControlType4.Boolean }, onCSyo3aTPkChange: { changes: "CSyo3aTPk", type: ControlType4.ChangeHandler }, WoiFDjxIJ: { defaultValue: 'var(--token-7e7f72de-b42b-44cb-b318-42bed5ea0287, rgb(15, 128, 84)) /* {"name":"Green"} */', title: "BG Fill", type: ControlType4.Color }, eKuI9CoCg: { defaultValue: 'var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255)) /* {"name":"White"} */', title: "Text Color", type: ControlType4.Color }, oTM8e0FLR: { defaultValue: "259px", title: "Radius", type: ControlType4.BorderRadius }, xeTdFG4YU: { defaultValue: true, title: "Rolling Text Visible", type: ControlType4.Boolean }, onxeTdFG4YUChange: { changes: "xeTdFG4YU", type: ControlType4.ChangeHandler }, O2hjEQwNf: { defaultValue: false, title: "Normal Text Visible", type: ControlType4.Boolean }, onO2hjEQwNfChange: { changes: "O2hjEQwNf", type: ControlType4.ChangeHandler } });
addFonts2(FramerZfRLUDToh, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...RollingTextFonts, ...getFontsFromSharedStyle2(fonts5), ...getFontsFromSharedStyle2(fonts4), ...getFontsFromSharedStyle2(fonts6)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/jEp5TVBLZMFrzL47FI9q/YprdYJlGvXp6NhEJMXwy/mYL5B2Z7j.js
var RichTextWithFX = withFX(RichText3);
var PrimaryButtonFonts = getFonts2(ZfRLUDToh_default);
var SmartComponentScopedContainerWithFX = withFX(SmartComponentScopedContainer2);
var TeamCardFonts = getFonts2(GU4P8Omjb_default);
var CurvedCarouselFonts = getFonts2(CurvedCarousel);
var serializationHash3 = "framer-CzOLk";
var variantClassNames3 = { DshqCUcLf: "framer-v-s68ffo" };
var transition13 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var animation = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 };
var transition2 = { bounce: 0.1, delay: 0.3, duration: 1.2, type: "spring" };
var transition3 = { bounce: 0.1, delay: 0.2, duration: 1.2, type: "spring" };
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var addImageAlt = (image, alt) => {
  if (!image || typeof image !== "object") {
    return;
  }
  return { ...image, alt };
};
var Transition3 = ({ value, children }) => {
  const config = React4.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx5(MotionConfigContext3.Provider, { value: contextValue, children });
};
var Variants3 = motion4.create(React4.Fragment);
var getProps3 = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React4.useId();
  const { activeLocale, setLocale } = useLocaleInfo3();
  const componentViewport = useComponentViewport3();
  const { style, className: className7, layoutId, variant, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ defaultVariant: "DshqCUcLf", ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx3(serializationHash3, ...sharedStyleClassNames);
  const router = useRouter();
  return /* @__PURE__ */ _jsx5(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx5(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx5(Transition3, { value: transition13, children: /* @__PURE__ */ _jsxs5(motion4.section, { ...restProps, ...gestureHandlers, className: cx3(scopingClassNames, "framer-s68ffo", className7, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "Team__DshqCUcLf", ref: refBinding, style: { backgroundColor: "var(--token-e0e21b2d-c287-48c6-b16f-fdbc795f05a4, rgb(0, 0, 0))", ...style }, children: [/* @__PURE__ */ _jsxs5(motion4.div, { className: "framer-qihkam", "data-framer-name": "Heading", layoutDependency, layoutId: "Team__IRJrwmCk2", children: [/* @__PURE__ */ _jsx5(RichTextWithFX, { __framer__animate: { transition: transition2 }, __framer__animateOnce: true, __framer__enter: animation, __framer__styleAppearEffectEnabled: true, __framer__threshold: 0, __fromCanvasComponent: true, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, children: /* @__PURE__ */ _jsx5(React4.Fragment, { children: /* @__PURE__ */ _jsx5(motion4.h1, { className: "framer-styles-preset-1tbvl3k", "data-styles-preset": "Bf3ONXiqf", dir: "auto", children: "Our Team." }) }), className: "framer-cvp2jg", fonts: ["Inter"], layoutDependency, layoutId: "Team__yvCMy3zbA", style: { "--framer-paragraph-spacing": "0px" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx5(ResolveLinks, { links: [{ href: { webPageId: "xZe_hsvJk" }, implicitPathVariables: void 0 }], children: (resolvedLinks) => /* @__PURE__ */ _jsx5(ComponentViewportProvider2, { height: 40, y: (componentViewport?.y || 0) + 100 + 0 + 0 + 118.4, children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainerWithFX, { __framer__animate: { transition: transition3 }, __framer__animateOnce: true, __framer__enter: animation, __framer__styleAppearEffectEnabled: true, __framer__threshold: 0.5, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: "framer-1tay0su-container", layoutDependency, layoutId: "Team__kQ66KWX2Z-container", nodeId: "kQ66KWX2Z", rendersWithMotion: true, scopeId: "mYL5B2Z7j", children: /* @__PURE__ */ _jsx5(ZfRLUDToh_default, { CSyo3aTPk: false, eKuI9CoCg: "var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255))", Gh9QOfeLM: "Join the team", height: "100%", id: "kQ66KWX2Z", JQPbxOZrF: resolvedLinks[0], layoutId: "Team__kQ66KWX2Z", O2hjEQwNf: false, oTM8e0FLR: "259px", variant: matchVariant("SfsVyg8AH"), vZZm_o9LA: false, width: "100%", WoiFDjxIJ: "var(--token-7e7f72de-b42b-44cb-b318-42bed5ea0287, rgb(15, 128, 84))", xeTdFG4YU: true }) }) }) })] }), /* @__PURE__ */ _jsx5(ComponentViewportProvider2, { children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer2, { className: "framer-1i1ba5q-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Team__I_e62fIwr-container", nodeId: "I_e62fIwr", rendersWithMotion: true, scopeId: "mYL5B2Z7j", children: /* @__PURE__ */ _jsx5(CurvedCarousel, { autoMove: "left", bend: 0.7, draggable: true, gap: 10, height: "100%", id: "I_e62fIwr", instances: [/* @__PURE__ */ _jsx5(ComponentViewportProvider2, { height: 416, width: "240px", children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer2, { className: "framer-8l0vyr-container", inComponentSlot: true, layoutDependency, layoutId: "Team__EtoDHj9B6-container", nodeId: "EtoDHj9B6", rendersWithMotion: true, scopeId: "mYL5B2Z7j", children: /* @__PURE__ */ _jsx5(GU4P8Omjb_default, { BBIx3Mhxu: "Matt Anderson", HdLliSbyQ: "Creative Director", height: "100%", id: "EtoDHj9B6", layoutId: "Team__EtoDHj9B6", Ns2sDMYPk: "Strategy", width: "100%" }) }) }), /* @__PURE__ */ _jsx5(ComponentViewportProvider2, { height: 416, width: "240px", children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer2, { className: "framer-nw6cfr-container", inComponentSlot: true, layoutDependency, layoutId: "Team__yRc4Yzwbl-container", nodeId: "yRc4Yzwbl", rendersWithMotion: true, scopeId: "mYL5B2Z7j", children: /* @__PURE__ */ _jsx5(GU4P8Omjb_default, { BBIx3Mhxu: "Sarah Chen ", HdLliSbyQ: "Lead Designer", height: "100%", id: "yRc4Yzwbl", layoutId: "Team__yRc4Yzwbl", NDdvw7UCa: addImageAlt({ pixelHeight: 1040, pixelWidth: 992, src: "https://framerusercontent.com/images/ZLTH2G0GBoYqh5btHPu1ZODOTSQ.jpg?width=992&height=1040", srcSet: "https://framerusercontent.com/images/ZLTH2G0GBoYqh5btHPu1ZODOTSQ.jpg?scale-down-to=1024&width=992&height=1040 976w,https://framerusercontent.com/images/ZLTH2G0GBoYqh5btHPu1ZODOTSQ.jpg?width=992&height=1040 992w" }, ""), Ns2sDMYPk: "Design", width: "100%" }) }) }), /* @__PURE__ */ _jsx5(ComponentViewportProvider2, { height: 416, width: "240px", children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer2, { className: "framer-yvozlu-container", inComponentSlot: true, layoutDependency, layoutId: "Team__EJWJ81sj6-container", nodeId: "EJWJ81sj6", rendersWithMotion: true, scopeId: "mYL5B2Z7j", children: /* @__PURE__ */ _jsx5(GU4P8Omjb_default, { BBIx3Mhxu: "James Whitfield", HdLliSbyQ: "Head of Development", height: "100%", id: "EJWJ81sj6", layoutId: "Team__EJWJ81sj6", NDdvw7UCa: addImageAlt({ pixelHeight: 1152, pixelWidth: 896, src: "https://framerusercontent.com/images/Lpn5TSuzH5IzSIKxcDDOp3Ubic.jpg?width=896&height=1152", srcSet: "https://framerusercontent.com/images/Lpn5TSuzH5IzSIKxcDDOp3Ubic.jpg?scale-down-to=1024&width=896&height=1152 796w,https://framerusercontent.com/images/Lpn5TSuzH5IzSIKxcDDOp3Ubic.jpg?width=896&height=1152 896w" }, ""), Ns2sDMYPk: "Development", width: "100%" }) }) }), /* @__PURE__ */ _jsx5(ComponentViewportProvider2, { height: 416, width: "240px", children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer2, { className: "framer-10hvqqn-container", inComponentSlot: true, layoutDependency, layoutId: "Team__vIiQWBuQU-container", nodeId: "vIiQWBuQU", rendersWithMotion: true, scopeId: "mYL5B2Z7j", children: /* @__PURE__ */ _jsx5(GU4P8Omjb_default, { BBIx3Mhxu: "Ethan Voss", HdLliSbyQ: "SEO & Growth Lead", height: "100%", id: "vIiQWBuQU", layoutId: "Team__vIiQWBuQU", NDdvw7UCa: addImageAlt({ pixelHeight: 1040, pixelWidth: 992, src: "https://framerusercontent.com/images/IgR4R6rz1mmTYCkra2W2bLF4pI.jpg?width=992&height=1040", srcSet: "https://framerusercontent.com/images/IgR4R6rz1mmTYCkra2W2bLF4pI.jpg?scale-down-to=1024&width=992&height=1040 976w,https://framerusercontent.com/images/IgR4R6rz1mmTYCkra2W2bLF4pI.jpg?width=992&height=1040 992w" }, ""), Ns2sDMYPk: "SEO", width: "100%" }) }) })], layoutId: "Team__I_e62fIwr", moveType: "discrete", overflow: "hidden", pauseDuration: 2e3, speed: 1, style: { width: "100%" }, width: "100%" }) }) })] }) }) }) });
});
var css9 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-CzOLk.framer-1ht8sup, .framer-CzOLk .framer-1ht8sup { display: block; }", ".framer-CzOLk.framer-s68ffo { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; padding: 100px 24px 100px 24px; position: relative; width: 100%; }", ".framer-CzOLk .framer-qihkam { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-CzOLk .framer-cvp2jg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-CzOLk .framer-1tay0su-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-CzOLk .framer-1i1ba5q-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-CzOLk .framer-8l0vyr-container, .framer-CzOLk .framer-nw6cfr-container, .framer-CzOLk .framer-yvozlu-container, .framer-CzOLk .framer-10hvqqn-container { height: auto; position: relative; width: auto; }", ...css];
var FramermYL5B2Z7j = withCSS3(Component3, css9, "framer-CzOLk");
var mYL5B2Z7j_default = FramermYL5B2Z7j;
FramermYL5B2Z7j.displayName = "Team";
FramermYL5B2Z7j.defaultProps = { height: 957.5, width: 1184 };
addFonts3(FramermYL5B2Z7j, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...PrimaryButtonFonts, ...TeamCardFonts, ...CurvedCarouselFonts, ...getFontsFromSharedStyle3(fonts)], { supportsExplicitInterCodegen: true });
FramermYL5B2Z7j.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader(ZfRLUDToh_default, {}, context), forwardLoader(GU4P8Omjb_default, {}, context)]);
} };
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramermYL5B2Z7j", "slots": [], "annotations": { "framerContractVersion": "1", "framerComponentViewportWidth": "true", "framerDisplayContentsDiv": "false", "framerImmutableVariables": "true", "framerIntrinsicWidth": "1184", "framerAutoSizeImages": "true", "framerIntrinsicHeight": "957.5", "framerColorSyntax": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}' } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  mYL5B2Z7j_default as default
};
