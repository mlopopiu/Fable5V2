var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/wIcPKW1JERfWnA848MhQ/ss9WmVexevwzhDHOx605/WE_K1oHLc.js
import { jsx as _jsx4, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts2, ComponentViewportProvider as ComponentViewportProvider2, cx as cx2, forwardLoader, getFonts as getFonts2, getFontsFromSharedStyle as getFontsFromSharedStyle2, ResolveLinks, RichText as RichText2, SmartComponentScopedContainer as SmartComponentScopedContainer2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useRouter, useVariantState as useVariantState2, withCSS as withCSS2, withFX, withOptimizedAppearEffect } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion3, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React4 from "react";
import { useRef as useRef5 } from "react";

// http-url:https://framerusercontent.com/modules/lRDHiNWNVWmE0lqtoVHP/Sn64gjTwaJh0TFAuaV07/Video.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType as ControlType4, useIsInCurrentNavigationTarget as useIsInCurrentNavigationTarget2, RenderTarget as RenderTarget3 } from "./_framer-runtime.js";
import { isMotionValue as isMotionValue2, useInView } from "framer-motion";

// http-url:https://framerusercontent.com/modules/VTUDdizacRHpwbkOamr7/AykinQJbgwl92LvMGZwu/constants.js
import { ControlType } from "./_framer-runtime.js";
var containerStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var emptyStateStyle = {
  ...containerStyles,
  borderRadius: 6,
  background: "rgba(136, 85, 255, 0.3)",
  color: "#85F",
  border: "1px dashed #85F",
  flexDirection: "column"
};
var defaultEvents = {
  onClick: {
    type: ControlType.EventHandler
  },
  onMouseEnter: {
    type: ControlType.EventHandler
  },
  onMouseLeave: {
    type: ControlType.EventHandler
  }
};
var fontSizeOptions = {
  type: ControlType.Number,
  title: "Font Size",
  min: 2,
  max: 200,
  step: 1,
  displayStepper: true
};
var fontControls = {
  font: {
    type: ControlType.Boolean,
    title: "Font",
    defaultValue: false,
    disabledTitle: "Default",
    enabledTitle: "Custom"
  },
  fontFamily: {
    type: ControlType.String,
    title: "Family",
    placeholder: "Inter",
    hidden: ({ font }) => !font
  },
  fontWeight: {
    type: ControlType.Enum,
    title: "Weight",
    options: [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    optionTitles: [
      "Thin",
      "Extra-light",
      "Light",
      "Regular",
      "Medium",
      "Semi-bold",
      "Bold",
      "Extra-bold",
      "Black"
    ],
    hidden: ({ font }) => !font
  }
};

// http-url:https://framerusercontent.com/modules/D4TWeLfcxT6Tysr2BlYg/iZjmqdxVx1EOiM3k1FaW/useOnNavigationTargetChange.js
import { useIsInCurrentNavigationTarget } from "./_framer-runtime.js";
import { useEffect } from "react";
function useOnEnter(onEnter, enabled) {
  return useOnSpecificTargetChange(true, onEnter, enabled);
}
function useOnExit(onExit, enabled) {
  return useOnSpecificTargetChange(false, onExit, enabled);
}
function useOnSpecificTargetChange(goal, callback, enabled = true) {
  const isInTarget = useIsInCurrentNavigationTarget();
  useEffect(() => {
    if (enabled && isInTarget === goal)
      callback();
  }, [
    isInTarget
  ]);
}

// http-url:https://framerusercontent.com/modules/ExNgrA7EJTKUPpH6vIlN/eiOrSJ2Ab5M9jPCvVwUz/useConstant.js
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/D2Lz5CmnNVPZFFiZXalt/QaCzPbriZBfXWZIIycFI/colorFromToken.js
import { Color } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/3mKFSGQqKHV82uOV1eBc/5fbRLvOpxZC0JOXugvwm/isMotionValue.js
import { MotionValue } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/xDiQsqBGXzmMsv7AlEVy/uhunpMiNsbXxzjlXsg1y/useUniqueClassName.js
import * as React from "react";

// http-url:https://framerusercontent.com/modules/ETACN5BJyFTSo0VVDJfu/NHRqowOiXkF9UwOzczF7/variantUtils.js
import { ControlType as ControlType2 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/eMBrwoqQK7h6mEeGQUH8/GuplvPJVjmxpk9zqOTcb/isBrowser.js
import { useMemo } from "react";
var isBrowserSafari = () => {
  if (typeof __dai_navigator !== `undefined`) {
    const userAgent = __dai_navigator.userAgent.toLowerCase();
    const isSafari = (userAgent.indexOf("safari") > -1 || userAgent.indexOf("framermobile") > -1 || userAgent.indexOf("framerx") > -1) && userAgent.indexOf("chrome") < 0;
    return isSafari;
  } else
    return false;
};
var useIsBrowserSafari = () => useMemo(
  () => isBrowserSafari(),
  []
);

// http-url:https://framerusercontent.com/modules/v9AWX2URmiYsHf7GbctE/XxKAZ9KlhWqf5x1JMyyF/useOnChange.js
import { useEffect as useEffect3 } from "react";

// http-url:https://framerusercontent.com/modules/kNDwabfjDEb3vUxkQlZS/fSIr3AOAYbGlfSPgXpYu/useAutoMotionValue.js
import { useCallback, useEffect as useEffect4, useRef as useRef2 } from "react";
import { motionValue, animate, RenderTarget } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/cuQH4dmpDnV8YK1mSgQX/KqRXqunFjE6ufhpc7ZRu/useFontControls.js
import { fontStore } from "./_framer-runtime.js";
import { useEffect as useEffect5 } from "react";

// http-url:https://framerusercontent.com/modules/afBE9Yx1W6bY5q32qPxe/m3q7puE2tbo1S2C0s0CT/useRenderTarget.js
import { useMemo as useMemo2 } from "react";
import { RenderTarget as RenderTarget2 } from "./_framer-runtime.js";
function useRenderTarget() {
  const currentRenderTarget = useMemo2(
    () => RenderTarget2.current(),
    []
  );
  return currentRenderTarget;
}
function useIsOnCanvas() {
  const onCanvas = useMemo2(
    () => RenderTarget2.current() === RenderTarget2.canvas,
    []
  );
  return onCanvas;
}

// http-url:https://framerusercontent.com/modules/zGkoP8tPDCkoBzMdt5uq/0zFSjxIYliHxrQQnryFX/useControlledState.js
import * as React2 from "react";

// http-url:https://framerusercontent.com/modules/5SM58HxZHxjjv7aLMOgQ/WXz9i6mVki0bBCrKdqB3/propUtils.js
import { useMemo as useMemo3 } from "react";
import { ControlType as ControlType3 } from "./_framer-runtime.js";
function useRadius(props) {
  const { borderRadius, isMixedBorderRadius, topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius } = props;
  const radiusValue = useMemo3(
    () => isMixedBorderRadius ? `${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px` : `${borderRadius}px`,
    [
      borderRadius,
      isMixedBorderRadius,
      topLeftRadius,
      topRightRadius,
      bottomRightRadius,
      bottomLeftRadius
    ]
  );
  return radiusValue;
}
var borderRadiusControl = {
  borderRadius: {
    title: "Radius",
    type: ControlType3.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: [
      "Radius",
      "Radius per corner"
    ],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius"
    ],
    valueLabels: [
      "TL",
      "TR",
      "BR",
      "BL"
    ],
    min: 0
  }
};
var paddingControl = {
  padding: {
    type: ControlType3.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: [
      "Padding",
      "Padding per side"
    ],
    valueKeys: [
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft"
    ],
    valueLabels: [
      "T",
      "R",
      "B",
      "L"
    ],
    min: 0,
    title: "Padding"
  }
};

// http-url:https://framerusercontent.com/modules/lRDHiNWNVWmE0lqtoVHP/Sn64gjTwaJh0TFAuaV07/Video.js
import { memo, useCallback as useCallback2, useEffect as useEffect7, useMemo as useMemo4, useRef as useRef3, useState as useState3 } from "react";
var ObjectFitType;
(function(ObjectFitType2) {
  ObjectFitType2["Fill"] = "fill";
  ObjectFitType2["Contain"] = "contain";
  ObjectFitType2["Cover"] = "cover";
  ObjectFitType2["None"] = "none";
  ObjectFitType2["ScaleDown"] = "scale-down";
})(ObjectFitType || (ObjectFitType = {}));
var SrcType;
(function(SrcType2) {
  SrcType2["Video"] = "Upload";
  SrcType2["Url"] = "URL";
})(SrcType || (SrcType = {}));
var defaultVideo = "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4";
function getProps(props) {
  const { width, height, topLeft, topRight, bottomRight, bottomLeft, id, children, ...rest } = props;
  return rest;
}
function Video(props) {
  const newProps = getProps(props);
  return /* @__PURE__ */ _jsx(VideoMemo, { ...newProps });
}
function usePlaybackControls(videoRef) {
  const isInCurrentNavigationTarget = useIsInCurrentNavigationTarget2();
  const requestingPlay = useRef3(false);
  const isPlayingRef = useRef3(false);
  const setProgress = useCallback2((rawProgress) => {
    if (!videoRef.current)
      return;
    const newProgress = (rawProgress === 1 ? 0.999 : rawProgress) * videoRef.current.duration;
    const isAlreadySet = Math.abs(videoRef.current.currentTime - newProgress) < 0.1;
    if (videoRef.current.duration > 0 && !isAlreadySet) {
      videoRef.current.currentTime = newProgress;
    }
  }, []);
  const play = useCallback2(() => {
    const video = videoRef.current;
    if (!video)
      return;
    video.preload = "auto";
    const isPlaying = video.currentTime > 0 && video.onplaying && !video.paused && !video.ended && video.readyState >= video.HAVE_CURRENT_DATA;
    if (!isPlaying && video && !requestingPlay.current && isInCurrentNavigationTarget) {
      requestingPlay.current = true;
      isPlayingRef.current = true;
      video.play().catch((e) => {
      }).finally(() => requestingPlay.current = false);
    }
  }, []);
  const pause = useCallback2(() => {
    if (!videoRef.current || requestingPlay.current)
      return;
    videoRef.current.pause();
    isPlayingRef.current = false;
  }, []);
  return { play, pause, setProgress, isPlaying: isPlayingRef };
}
function useAutoplayBehavior({ playingProp, muted, loop, playsinline, controls }) {
  const [initialPlayingProp] = useState3(playingProp);
  const [hasPlayingPropChanged, setHasPlayingPropChanged] = useState3(false);
  if (playingProp !== initialPlayingProp && !hasPlayingPropChanged) {
    setHasPlayingPropChanged(true);
  }
  const behavesAsGif = (
    // passing `playing === true` on mount indicates that the video should
    // autoplay, like a GIF
    initialPlayingProp && muted && loop && playsinline && !controls && // Some users of the <Video> component use it by wrapping it with
    // another smart component and adding their own controls on top. (The
    // controls use transitions to control the video: e.g., when clicking
    // the play button, the smart component will transition to a state with
    // <Video playing={true} />.) In this case, we don't want the video to
    // behave as a gif, as it will be weird if the video suddenly started
    // acting as such (and auto-pausing when leaving the viewport) as soon
    // as the site visitor mutes it and clicks “Play”.
    !hasPlayingPropChanged
  );
  let autoplay;
  if (behavesAsGif)
    autoplay = "on-viewport";
  else if (initialPlayingProp)
    autoplay = "on-mount";
  else
    autoplay = "no-autoplay";
  return autoplay;
}
var VideoMemo = /* @__PURE__ */ memo(function VideoInner(props) {
  const {
    // default props
    srcType = "URL",
    srcUrl,
    srcFile = "",
    posterEnabled = false,
    controls = false,
    playing = true,
    loop = true,
    muted = true,
    playsinline = true,
    restartOnEnter = false,
    objectFit = "cover",
    backgroundColor = "rgba(0,0,0,0)",
    radius = 0,
    volume = 25,
    startTime: startTimeProp = 0,
    poster,
    playing: playingProp,
    progress,
    onSeeked,
    onPause,
    onPlay,
    onEnd,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp
  } = props;
  const videoRef = useRef3();
  const isSafari = useIsBrowserSafari();
  const wasPausedOnLeave = useRef3(null);
  const wasEndedOnLeave = useRef3(null);
  const isOnCanvas = useIsOnCanvas();
  const renderTarget = useRenderTarget();
  const isStaticRenderer = isOnCanvas || renderTarget === RenderTarget3.export;
  const borderRadius = useRadius(props);
  const autoplayBehavior = isStaticRenderer ? "no-autoplay" : useAutoplayBehavior({ playingProp, muted, loop, playsinline, controls });
  const isInViewport = isStaticRenderer ? true : useInView(videoRef);
  const isCloseToViewport = isStaticRenderer ? false : useInView(videoRef, { margin: "10%", once: true });
  const startTime = startTimeProp === 100 ? 99.9 : startTimeProp;
  const { play, pause, setProgress, isPlaying } = usePlaybackControls(videoRef);
  useEffect7(() => {
    if (isStaticRenderer)
      return;
    if (autoplayBehavior === "on-viewport")
      return;
    if (playingProp)
      play();
    else
      pause();
  }, [autoplayBehavior, playingProp]);
  useEffect7(() => {
    if (isStaticRenderer)
      return;
    if (isInViewport && playingProp && autoplayBehavior !== "no-autoplay")
      play();
    if (autoplayBehavior !== "on-viewport")
      return;
    pause();
  }, [autoplayBehavior, isInViewport, playingProp]);
  useEffect7(() => {
    if (!isOnCanvas || poster || posterEnabled || startTime || !videoRef.current)
      return;
    videoRef.current.currentTime = 0.01;
  }, [posterEnabled, poster, startTime]);
  const isMountedAndReadyForProgressChanges = useRef3(false);
  useEffect7(() => {
    if (!isMountedAndReadyForProgressChanges.current) {
      isMountedAndReadyForProgressChanges.current = true;
      return;
    }
    const rawProgressValue = isMotionValue2(progress) ? progress.get() : (progress ?? 0) * 0.01;
    setProgress(
      // When the progress value exists (e.g. <Video startTime={10}
      // progress={50} />), we respect the `progress` value over
      // `startTime`, even if `startTime` changes. That’s because
      // `startTime` == start == changing it shouldn’t affect the current
      // progress
      (rawProgressValue ?? 0) || // Then why fall back to `startTime` when `progress` doesn’t exist,
      // you might ask? Now, that’s for
      // - canvas UX: we want the video progress to change when the user
      //   is scrobbling the “Start Time” in component settings.
      // - backwards compatibility: maybe some users *are* scrobbling
      //   using `startTime` instead of `progress`? We don’t know, and it
      //   always supported it, so let’s not break it
      (startTime ?? 0) / 100
    );
  }, [startTime, srcFile, srcUrl, progress]);
  useEffect7(() => {
    if (!isMotionValue2(progress))
      return;
    return progress.on("change", (value) => setProgress(value));
  }, [progress]);
  useOnEnter(() => {
    if (wasPausedOnLeave.current === null)
      return;
    if (videoRef.current) {
      if (!wasEndedOnLeave && loop || !wasPausedOnLeave.current)
        play();
    }
  });
  useOnExit(() => {
    if (videoRef.current) {
      wasEndedOnLeave.current = videoRef.current.ended;
      wasPausedOnLeave.current = videoRef.current.paused;
      pause();
    }
  });
  const src = useMemo4(() => {
    let fragment = "";
    if (srcType === "URL")
      return srcUrl + fragment;
    if (srcType === "Upload")
      return srcFile + fragment;
  }, [srcType, srcFile, srcUrl, startTime]);
  useEffect7(() => {
    if (isSafari && videoRef.current && autoplayBehavior === "on-mount") {
      setTimeout(() => play(), 50);
    }
  }, []);
  useEffect7(() => {
    if (videoRef.current && !muted)
      videoRef.current.volume = (volume ?? 0) / 100;
  }, [volume]);
  const handleReady = () => {
    const video = videoRef.current;
    if (!video)
      return;
    if (video.currentTime < 0.3 && startTime > 0)
      setProgress((startTime ?? 0) * 0.01);
    if (
      // when the component updates (e.g. only srcFile/url changes), and the video was already playing, keep playing
      isPlaying.current || autoplayBehavior === "on-mount" || playingProp && autoplayBehavior === "on-viewport" && isInViewport
    )
      play();
  };
  return /* @__PURE__ */ _jsx("video", { onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, src, loop, ref: videoRef, onSeeked: (e) => onSeeked?.(e), onPause: (e) => onPause?.(e), onPlay: (e) => onPlay?.(e), onEnded: (e) => onEnd?.(e), autoPlay: isPlaying.current || autoplayBehavior === "on-mount" || playingProp && autoplayBehavior === "on-viewport" && isInViewport, preload: isPlaying.current ? "auto" : isStaticRenderer && !poster ? "metadata" : autoplayBehavior !== "on-mount" && !isCloseToViewport ? "none" : (
    // `autoplay` overrides this too
    "metadata"
  ), poster: posterEnabled && !srcFile && srcUrl === defaultVideo ? "https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg" : posterEnabled && poster ? poster : void 0, onLoadedData: handleReady, controls, muted: isStaticRenderer ? true : muted, playsInline: playsinline, style: { cursor: !!onClick ? "pointer" : "auto", width: "100%", height: "100%", borderRadius, display: "block", objectFit, backgroundColor, objectPosition: "50% 50%" } });
});
Video.displayName = "Video";
function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
function titleCase(value) {
  const groups = value.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || [];
  return groups.map(capitalizeFirstLetter).join(" ");
}
var objectFitOptions = ["cover", "fill", "contain", "scale-down", "none"];
addPropertyControls(Video, {
  srcType: { type: ControlType4.Enum, displaySegmentedControl: true, title: "Source", options: ["URL", "Upload"] },
  srcUrl: { type: ControlType4.String, title: "URL", defaultValue: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4", hidden(props) {
    return props.srcType === "Upload";
  } },
  srcFile: { type: ControlType4.File, title: "File", allowedFileTypes: ["mp4", "webm"], description: "Only MP4 and WebM", hidden(props) {
    return props.srcType === "URL";
  } },
  playing: { type: ControlType4.Boolean, title: "Playing", enabledTitle: "Yes", disabledTitle: "No" },
  ...borderRadiusControl,
  posterEnabled: { type: ControlType4.Boolean, title: "Poster", enabledTitle: "Yes", disabledTitle: "No" },
  poster: { type: ControlType4.Image, title: "Image", hidden: ({ posterEnabled }) => !posterEnabled, description: "We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/)." },
  backgroundColor: { type: ControlType4.Color, title: "Background", defaultValue: "rgba(0,0,0,0)" },
  startTime: { title: "Start Time", type: ControlType4.Number, min: 0, max: 100, step: 0.1, unit: "%" },
  loop: { type: ControlType4.Boolean, title: "Loop", enabledTitle: "Yes", disabledTitle: "No" },
  objectFit: { type: ControlType4.Enum, title: "Fit", options: objectFitOptions, optionTitles: objectFitOptions.map(titleCase) },
  // restartOnEnter: {
  //     type: ControlType.Boolean,
  //     title: "On ReEnter",
  //     enabledTitle: "Restart",
  //     disabledTitle: "Resume",
  // },
  controls: { type: ControlType4.Boolean, title: "Controls", enabledTitle: "Show", disabledTitle: "Hide", defaultValue: false },
  muted: { type: ControlType4.Boolean, title: "Muted", enabledTitle: "Yes", disabledTitle: "No" },
  volume: { type: ControlType4.Number, max: 100, min: 0, unit: "%", hidden: ({ muted }) => muted, defaultValue: 25 },
  onEnd: { type: ControlType4.EventHandler },
  onSeeked: { type: ControlType4.EventHandler },
  onPause: { type: ControlType4.EventHandler },
  onPlay: { type: ControlType4.EventHandler },
  ...defaultEvents
});

// http-url:https://framerusercontent.com/modules/t3H3z6hbrXR6LHc3iWjf/WXUM10Kemw3eCoHgF9fA/q80fvYmPn.js
import { fontStore as fontStore2 } from "./_framer-runtime.js";
fontStore2.loadFonts(["Inter-SemiBold", "Inter-Bold", "Inter-BoldItalic", "Inter-SemiBoldItalic"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/vxBnBhH8768IFAXAb4Qf6wQHKs.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/zSsEuoJdh8mcFVk976C05ZfQr8.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/b8ezwLrN7h2AUoPEENcsTMVJ0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/mvNEIBLyHbscgHtwfsByjXUz3XY.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/6FI2EneKzM3qBy5foOZXey7coCA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/fuyXZpVvOjq8NesCOfgirHCWyg.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/NHHeAKJVP0ZWHk5YZnQQChIsBM.woff2", weight: "600" }] }];
var css = ['.framer-hwE0q .framer-styles-preset-r5r4wb:not(.rich-text-wrapper), .framer-hwE0q .framer-styles-preset-r5r4wb.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-hwE0q .framer-styles-preset-r5r4wb:not(.rich-text-wrapper), .framer-hwE0q .framer-styles-preset-r5r4wb.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-hwE0q .framer-styles-preset-r5r4wb:not(.rich-text-wrapper), .framer-hwE0q .framer-styles-preset-r5r4wb.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 19px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }'];
var className = "framer-hwE0q";

// http-url:https://framerusercontent.com/modules/B0kjxHiHxaFxnRLblNyb/7jhnYjkV4xAEej9co0uP/ZfRLUDToh.js
import { jsx as _jsx3, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls3, ComponentViewportProvider, ControlType as ControlType6, cx, getFonts, getFontsFromSharedStyle, Link, RichText, SmartComponentScopedContainer, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "framer-motion";
import * as React3 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/FiiQ0BKlVUNzxXjo8hFs/wP5ls8Ui6wqb7IsgWCbt/RollingTextHover_Prod.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { useState as useState4, useId } from "react";
import { addPropertyControls as addPropertyControls2, ControlType as ControlType5 } from "./_framer-runtime.js";
import { motion } from "framer-motion";
function RollingText({ text, transition, stagger, reverse, font, color, textTransform, tag, padding }) {
  const [isHovered, setIsHovered] = useState4(false);
  const reactId = useId();
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
  return /* @__PURE__ */ _jsxs("div", { style: wrapperStyle, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [/* @__PURE__ */ _jsx2(Tag, { className: innerClassName, children: [...text].map((str, index) => {
    const charIndex = reverse ? text.length - 1 - index : index;
    const delay = text.length > 0 ? baseDuration / text.length * charIndex * staggerFactor : 0;
    const motionSpanStyle = { display: "block", ...font };
    return /* @__PURE__ */ _jsx2(motion.span, { variants: spanVariants, initial: "initial", animate: isHovered ? "hover" : "initial", transition: { ...transition, delay }, style: motionSpanStyle, children: str === " " ? "\xA0" : str }, index);
  }) }), /* @__PURE__ */ _jsx2("style", { children: styles })] });
}
RollingText.displayName = "Rolling Text";
var defaultFont = { fontFamily: "Inter", fontWeight: "400", fontSize: "16px", fontStyle: "normal", letterSpacing: "0px", lineHeight: 1.2 };
var defaultTransition = { type: "spring", duration: 0.4, bounce: 0 };
addPropertyControls2(RollingText, {
  text: { type: ControlType5.String, title: "Text", defaultValue: "Rolling Text" },
  font: { type: ControlType5.Font, title: "Font", controls: "extended", defaultValue: defaultFont },
  color: { type: ControlType5.Color, title: "Color", defaultValue: "#808080" },
  transition: { type: ControlType5.Transition, title: "Transition", defaultValue: defaultTransition },
  // Added Stagger control
  stagger: { title: "Stagger", type: ControlType5.Number, min: 0, max: 100, step: 1, defaultValue: 35, unit: "%" },
  padding: { title: "Padding", type: ControlType5.Padding, defaultValue: "0px" },
  reverse: { type: ControlType5.Boolean, title: "Reverse", defaultValue: false, enabledTitle: "Yes", disabledTitle: "No" },
  textTransform: { title: "Transform", type: ControlType5.Enum, defaultValue: "none", options: ["none", "uppercase", "lowercase", "capitalize"], optionTitles: ["None", "Uppercase", "Lowercase", "Capitalize"] },
  tag: { type: ControlType5.Enum, title: "Tag", options: ["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"], optionTitles: ["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"], defaultValue: "p", description: "More components at [Framer University](https://frameruni.link/cc)." }
});

// http-url:https://framerusercontent.com/modules/x81aPXn2GfpCoPgEFXtJ/AFrmVGbXzkVN62qp6pHo/KQTQTeOy9.js
import { fontStore as fontStore3 } from "./_framer-runtime.js";
fontStore3.loadFonts(["Inter-SemiBold", "Inter-Bold", "Inter-BoldItalic", "Inter-SemiBoldItalic"]);
var fonts2 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/vxBnBhH8768IFAXAb4Qf6wQHKs.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/zSsEuoJdh8mcFVk976C05ZfQr8.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/b8ezwLrN7h2AUoPEENcsTMVJ0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/mvNEIBLyHbscgHtwfsByjXUz3XY.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/6FI2EneKzM3qBy5foOZXey7coCA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/fuyXZpVvOjq8NesCOfgirHCWyg.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/NHHeAKJVP0ZWHk5YZnQQChIsBM.woff2", weight: "600" }] }];
var css2 = [`.framer-uh5xN .framer-styles-preset-9jmi73:not(.rich-text-wrapper), .framer-uh5xN .framer-styles-preset-9jmi73.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.04px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className2 = "framer-uh5xN";

// http-url:https://framerusercontent.com/modules/b0DQhwVpgF61SO5yz5vI/n4lfvlKqorWsWwilNae6/Kst9xRM8v.js
import { fontStore as fontStore4 } from "./_framer-runtime.js";
fontStore4.loadFonts(["Inter-Bold", "Inter-Black", "Inter-BlackItalic", "Inter-Italic"]);
var fonts3 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/rZ5DdENNqIdFTIyQQiP5isO7M.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/3ZmXbBKToJifDV9gwcifVd1tEY.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/gcnfba68tfm7qAyrWRCf9r34jg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css3 = ['.framer-0LoBs .framer-styles-preset-cbutxb:not(.rich-text-wrapper), .framer-0LoBs .framer-styles-preset-cbutxb.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-0LoBs .framer-styles-preset-cbutxb:not(.rich-text-wrapper), .framer-0LoBs .framer-styles-preset-cbutxb.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-0LoBs .framer-styles-preset-cbutxb:not(.rich-text-wrapper), .framer-0LoBs .framer-styles-preset-cbutxb.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 19px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className3 = "framer-0LoBs";

// http-url:https://framerusercontent.com/modules/ISZuzsUT9Xdd5ePLXb7x/We0E0j0wDeFfdxz3rfhJ/pVdNGAxZO.js
import { fontStore as fontStore5 } from "./_framer-runtime.js";
fontStore5.loadFonts(["Inter-Bold", "Inter-Black", "Inter-BlackItalic", "Inter-Italic"]);
var fonts4 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/rZ5DdENNqIdFTIyQQiP5isO7M.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/3ZmXbBKToJifDV9gwcifVd1tEY.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/gcnfba68tfm7qAyrWRCf9r34jg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css4 = [`.framer-Bew3a .framer-styles-preset-1q6zu6t:not(.rich-text-wrapper), .framer-Bew3a .framer-styles-preset-1q6zu6t.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04px; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className4 = "framer-Bew3a";

// http-url:https://framerusercontent.com/modules/B0kjxHiHxaFxnRLblNyb/7jhnYjkV4xAEej9co0uP/ZfRLUDToh.js
var RollingTextFonts = getFonts(RollingText);
var cycleOrder = ["bWvFCpGqZ", "dXoH4aW9S", "SfsVyg8AH"];
var serializationHash = "framer-1Vmdk";
var variantClassNames = { bWvFCpGqZ: "framer-v-68f7ea", dXoH4aW9S: "framer-v-j4wlk6", SfsVyg8AH: "framer-v-ktx50s" };
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
var transition1 = { damping: 40, delay: 0, mass: 1, stiffness: 350, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React3.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { " tertiary": "SfsVyg8AH", "Secondary ": "dXoH4aW9S", Primary: "bWvFCpGqZ" };
var Variants = motion2.create(React3.Fragment);
var getProps2 = ({ bGFill, height, id, link, newTab, normalTextVisible, radius, rollingTextVisible, smoothScroll, textColor, title, width, ...props }) => {
  return { ...props, CSyo3aTPk: newTab ?? props.CSyo3aTPk, eKuI9CoCg: textColor ?? props.eKuI9CoCg ?? "var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255))", Gh9QOfeLM: title ?? props.Gh9QOfeLM ?? "Text", JQPbxOZrF: link ?? props.JQPbxOZrF, O2hjEQwNf: normalTextVisible ?? props.O2hjEQwNf, oTM8e0FLR: radius ?? props.oTM8e0FLR ?? "259px", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "bWvFCpGqZ", vZZm_o9LA: smoothScroll ?? props.vZZm_o9LA, WoiFDjxIJ: bGFill ?? props.WoiFDjxIJ ?? "var(--token-7e7f72de-b42b-44cb-b318-42bed5ea0287, rgb(15, 128, 84))", xeTdFG4YU: rollingTextVisible ?? props.xeTdFG4YU ?? true };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className5, layoutId, variant, Gh9QOfeLM, JQPbxOZrF, vZZm_o9LA, CSyo3aTPk, WoiFDjxIJ, eKuI9CoCg, oTM8e0FLR, xeTdFG4YU, O2hjEQwNf, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "bWvFCpGqZ", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className3, className2, className4];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx3(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition, { value: transition1, children: /* @__PURE__ */ _jsx3(Link, { href: JQPbxOZrF, motionChild: true, nodeId: "bWvFCpGqZ", openInNewTab: CSyo3aTPk, scopeId: "ZfRLUDToh", smoothScroll: vZZm_o9LA, children: /* @__PURE__ */ _jsxs2(motion2.a, { ...restProps, ...gestureHandlers, className: `${cx(scopingClassNames, "framer-68f7ea", className5, classNames)} framer-igryma`, "data-framer-name": "Primary", layoutDependency, layoutId: "Hero__bWvFCpGqZ", ref: refBinding, style: { backgroundColor: WoiFDjxIJ, borderBottomLeftRadius: radiusForCorner(oTM8e0FLR, 3), borderBottomRightRadius: radiusForCorner(oTM8e0FLR, 2), borderTopLeftRadius: radiusForCorner(oTM8e0FLR, 0), borderTopRightRadius: radiusForCorner(oTM8e0FLR, 1), ...style }, ...addPropertyOverrides({ dXoH4aW9S: { "data-framer-name": "Secondary " }, SfsVyg8AH: { "data-framer-name": " tertiary" } }, baseVariant, gestureVariant), children: [xeTdFG4YU !== false && /* @__PURE__ */ _jsx3(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx3(SmartComponentScopedContainer, { className: "framer-16bqd1p-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Hero__kQPiP8BvJ-container", nodeId: "kQPiP8BvJ", rendersWithMotion: true, scopeId: "ZfRLUDToh", children: /* @__PURE__ */ _jsx3(RollingText, { color: eKuI9CoCg, font: { fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontSize: "20px", fontStyle: "normal", fontWeight: 700, letterSpacing: "-0.3px", lineHeight: "1em" }, height: "100%", id: "kQPiP8BvJ", layoutId: "Hero__kQPiP8BvJ", padding: "0px", reverse: false, stagger: 55, style: { width: "100%" }, tag: "p", text: Gh9QOfeLM, textTransform: "none", transition: { delay: 0, duration: 0.4, ease: [0.82, 0.08, 0.29, 1], type: "tween" }, width: "100%", ...addPropertyOverrides({ dXoH4aW9S: { font: { fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontSize: "16px", fontStyle: "normal", fontWeight: 600, letterSpacing: "-0.3px", lineHeight: "16px" } }, SfsVyg8AH: { font: { fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontSize: "16px", fontStyle: "normal", fontWeight: 700, letterSpacing: "-0.3px", lineHeight: "18px" } } }, baseVariant, gestureVariant) }) }) }), O2hjEQwNf !== false && /* @__PURE__ */ _jsx3(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx3(React3.Fragment, { children: /* @__PURE__ */ _jsx3(motion2.p, { className: "framer-styles-preset-cbutxb", "data-styles-preset": "Kst9xRM8v", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-eKuI9CoCg-ZfRLUDToh))" }, children: "Text" }) }), className: "framer-lnwosa", fonts: ["Inter"], layoutDependency, layoutId: "Hero__mDX2NZxsX", style: { "--extracted-r6o4lv": "var(--variable-reference-eKuI9CoCg-ZfRLUDToh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-eKuI9CoCg-ZfRLUDToh": eKuI9CoCg }, text: Gh9QOfeLM, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ dXoH4aW9S: { children: /* @__PURE__ */ _jsx3(React3.Fragment, { children: /* @__PURE__ */ _jsx3(motion2.p, { className: "framer-styles-preset-9jmi73", "data-styles-preset": "KQTQTeOy9", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-eKuI9CoCg-ZfRLUDToh))" }, children: "Text" }) }) }, SfsVyg8AH: { children: /* @__PURE__ */ _jsx3(React3.Fragment, { children: /* @__PURE__ */ _jsx3(motion2.p, { className: "framer-styles-preset-1q6zu6t", "data-styles-preset": "pVdNGAxZO", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-eKuI9CoCg-ZfRLUDToh))" }, children: "Text" }) }) } }, baseVariant, gestureVariant) })] }) }) }) }) });
});
var css5 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-1Vmdk.framer-igryma, .framer-1Vmdk .framer-igryma { display: block; }", ".framer-1Vmdk.framer-68f7ea { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px; position: relative; text-decoration: none; width: 200px; will-change: var(--framer-will-change-override, transform); }", ".framer-1Vmdk .framer-16bqd1p-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-1Vmdk .framer-lnwosa { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-1Vmdk.framer-v-j4wlk6.framer-68f7ea, .framer-1Vmdk.framer-v-ktx50s.framer-68f7ea { padding: 8px; width: min-content; }", ".framer-1Vmdk.framer-v-j4wlk6 .framer-16bqd1p-container, .framer-1Vmdk.framer-v-ktx50s .framer-16bqd1p-container { flex: none; width: auto; }", ...css3, ...css2, ...css4];
var FramerZfRLUDToh = withCSS(Component, css5, "framer-1Vmdk");
var ZfRLUDToh_default = FramerZfRLUDToh;
FramerZfRLUDToh.displayName = "Primary Button";
FramerZfRLUDToh.defaultProps = { height: 40, width: 200 };
addPropertyControls3(FramerZfRLUDToh, { variant: { options: ["bWvFCpGqZ", "dXoH4aW9S", "SfsVyg8AH"], optionTitles: ["Primary", "Secondary ", " tertiary"], title: "Variant", type: ControlType6.Enum }, Gh9QOfeLM: { defaultValue: "Text", displayTextArea: false, title: "Title", type: ControlType6.String }, onGh9QOfeLMChange: { changes: "Gh9QOfeLM", type: ControlType6.ChangeHandler }, JQPbxOZrF: { title: "Link", type: ControlType6.Link }, vZZm_o9LA: { defaultValue: false, title: "Smooth Scroll", type: ControlType6.Boolean }, onvZZm_o9LAChange: { changes: "vZZm_o9LA", type: ControlType6.ChangeHandler }, CSyo3aTPk: { defaultValue: false, title: "New Tab", type: ControlType6.Boolean }, onCSyo3aTPkChange: { changes: "CSyo3aTPk", type: ControlType6.ChangeHandler }, WoiFDjxIJ: { defaultValue: 'var(--token-7e7f72de-b42b-44cb-b318-42bed5ea0287, rgb(15, 128, 84)) /* {"name":"Green"} */', title: "BG Fill", type: ControlType6.Color }, eKuI9CoCg: { defaultValue: 'var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255)) /* {"name":"White"} */', title: "Text Color", type: ControlType6.Color }, oTM8e0FLR: { defaultValue: "259px", title: "Radius", type: ControlType6.BorderRadius }, xeTdFG4YU: { defaultValue: true, title: "Rolling Text Visible", type: ControlType6.Boolean }, onxeTdFG4YUChange: { changes: "xeTdFG4YU", type: ControlType6.ChangeHandler }, O2hjEQwNf: { defaultValue: false, title: "Normal Text Visible", type: ControlType6.Boolean }, onO2hjEQwNfChange: { changes: "O2hjEQwNf", type: ControlType6.ChangeHandler } });
addFonts(FramerZfRLUDToh, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...RollingTextFonts, ...getFontsFromSharedStyle(fonts3), ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts4)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/wIcPKW1JERfWnA848MhQ/ss9WmVexevwzhDHOx605/WE_K1oHLc.js
var VideoFonts = getFonts2(Video);
var MotionDivWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(motion3.div));
var RichTextWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(RichText2));
var PrimaryButtonFonts = getFonts2(ZfRLUDToh_default);
var SmartComponentScopedContainerWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(SmartComponentScopedContainer2));
var serializationHash2 = "framer-zjHbG";
var variantClassNames2 = { EvDk860jA: "framer-v-3pbbyo" };
var transition12 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var transition2 = { bounce: 0, delay: 0, duration: 1.5, type: "spring" };
var animation = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition2, x: 0, y: 0 };
var animation1 = { opacity: 1e-3, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.2, skewX: 0, skewY: 0, x: 0, y: 0 };
var transition3 = { damping: 27, delay: 0.2, mass: 0.3, stiffness: 121, type: "spring" };
var animation2 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition3, x: 0, y: 0 };
var animation3 = { opacity: 1e-3, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 170 };
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var transition4 = { damping: 27, delay: 0.4, mass: 0.3, stiffness: 121, type: "spring" };
var animation4 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition4, x: 0, y: 0 };
var Transition2 = ({ value, children }) => {
  const config = React4.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion3.create(React4.Fragment);
var getProps3 = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  const fallbackRef = useRef5(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React4.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className: className5, layoutId, variant, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ defaultVariant: "EvDk860jA", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  const router = useRouter();
  return /* @__PURE__ */ _jsx4(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition2, { value: transition12, children: /* @__PURE__ */ _jsxs3(motion3.section, { ...restProps, ...gestureHandlers, className: cx2(scopingClassNames, "framer-3pbbyo", className5, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "Hero__EvDk860jA", ref: refBinding, style: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12, ...style }, children: [/* @__PURE__ */ _jsxs3(MotionDivWithFXWithOptimizedAppearEffect, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation, className: "framer-aaq5v9", "data-framer-appear-id": "aaq5v9", "data-framer-name": "BG Item", initial: animation1, layoutDependency, layoutId: "Hero__vQCd5fpnx", optimized: true, children: [/* @__PURE__ */ _jsx4(motion3.div, { className: "framer-k3nuyc", "data-framer-name": "Overlay", layoutDependency, layoutId: "Hero__ZSI10VZK_", style: { background: "linear-gradient(180deg, rgb(5, 8, 12) 0%, rgba(0, 0, 0, 0) 100%)", rotate: 180 } }), /* @__PURE__ */ _jsx4(ComponentViewportProvider2, { children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer2, { className: "framer-1nk67dy-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Hero__aG1vB2H2Q-container", nodeId: "aG1vB2H2Q", rendersWithMotion: true, scopeId: "WE_K1oHLc", children: /* @__PURE__ */ _jsx4(Video, { backgroundColor: "rgba(0, 0, 0, 0)", borderRadius: 0, bottomLeftRadius: 0, bottomRightRadius: 0, controls: false, height: "100%", id: "aG1vB2H2Q", isMixedBorderRadius: false, layoutId: "Hero__aG1vB2H2Q", loop: true, muted: true, objectFit: "cover", playing: true, posterEnabled: true, srcFile: "https://framerusercontent.com/assets/Uzb3oh7gX02N5A04DHfyZH6UZGc.mp4", srcType: "Upload", srcUrl: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4", startTime: 0, style: { height: "100%", width: "100%" }, topLeftRadius: 0, topRightRadius: 0, volume: 25, width: "100%" }) }) })] }), /* @__PURE__ */ _jsx4(motion3.div, { className: "framer-1iccv6p", "data-framer-name": "Container", layoutDependency, layoutId: "Hero__bVVWKtUSN", children: /* @__PURE__ */ _jsxs3(motion3.div, { className: "framer-1gxuz4c", "data-framer-name": "Heading ", layoutDependency, layoutId: "Hero__l_M4grxf1", children: [/* @__PURE__ */ _jsxs3(motion3.div, { className: "framer-hpytok", layoutDependency, layoutId: "Hero__D8UHCFtp5", children: [/* @__PURE__ */ _jsx4(RichTextWithFXWithOptimizedAppearEffect, { __fromCanvasComponent: true, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation2, children: /* @__PURE__ */ _jsx4(React4.Fragment, { children: /* @__PURE__ */ _jsx4(motion3.p, { className: "framer-styles-preset-r5r4wb", "data-styles-preset": "q80fvYmPn", dir: "auto", children: "A digital design practice crafting brands with substance. We merge interactive physics with strategic identity to build websites that feel real." }) }), className: "framer-1800k3c", "data-framer-appear-id": "1800k3c", fonts: ["Inter"], initial: animation3, layoutDependency, layoutId: "Hero__pgiRove0o", optimized: true, style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx4(ResolveLinks, { links: [{ href: { webPageId: "xZe_hsvJk" }, implicitPathVariables: void 0 }], children: (resolvedLinks) => /* @__PURE__ */ _jsx4(ComponentViewportProvider2, { height: 40, children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainerWithFXWithOptimizedAppearEffect, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation2, className: "framer-aphg8z-container", "data-framer-appear-id": "aphg8z", initial: animation3, layoutDependency, layoutId: "Hero__lWeIs5DSk-container", nodeId: "lWeIs5DSk", optimized: true, rendersWithMotion: true, scopeId: "WE_K1oHLc", children: /* @__PURE__ */ _jsx4(ZfRLUDToh_default, { CSyo3aTPk: false, eKuI9CoCg: "var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255))", Gh9QOfeLM: "Start Your Project", height: "100%", id: "lWeIs5DSk", JQPbxOZrF: resolvedLinks[0], layoutId: "Hero__lWeIs5DSk", O2hjEQwNf: false, oTM8e0FLR: "259px", variant: matchVariant("bWvFCpGqZ"), vZZm_o9LA: false, width: "100%", WoiFDjxIJ: "var(--token-7e7f72de-b42b-44cb-b318-42bed5ea0287, rgb(15, 128, 84))", xeTdFG4YU: true }) }) }) })] }), /* @__PURE__ */ _jsx4(motion3.div, { className: "framer-r1exs3", "data-framer-name": "Fit Text", layoutDependency, layoutId: "Hero__uNPHic1Tf", children: /* @__PURE__ */ _jsx4(RichTextWithFXWithOptimizedAppearEffect, { __fromCanvasComponent: true, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation4, children: /* @__PURE__ */ _jsx4(React4.Fragment, { children: /* @__PURE__ */ _jsx4(motion3.p, { dir: "auto", style: { "--font-selector": "SW50ZXItQmxhY2s=", "--framer-font-family": '"Inter", sans-serif', "--framer-font-size": "216.9262612905565px", "--framer-font-weight": "900", "--framer-letter-spacing": "-0.06em", "--framer-line-height": "0.9em", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255)))" }, children: "MATTTER\xAE" }) }), className: "framer-7cq0g5", "data-framer-appear-id": "7cq0g5", fonts: ["Inter-Black"], initial: animation3, layoutDependency, layoutId: "Hero__HGVmyjnlJ", optimized: true, style: { "--extracted-r6o4lv": "var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", mask: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 51%, rgb(0, 0, 0) 144%) add", WebkitMask: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 51%, rgb(0, 0, 0) 144%) add" }, verticalAlignment: "top", viewBox: "0 0 1136 195", withExternalLayout: true }) })] }) })] }) }) }) });
});
var css6 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-zjHbG.framer-q8wd08, .framer-zjHbG .framer-q8wd08 { display: block; }", ".framer-zjHbG.framer-3pbbyo { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-end; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-zjHbG .framer-aaq5v9 { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 102%; justify-content: center; left: calc(50.00000000000002% - 102% / 2); overflow: hidden; padding: 0px; position: absolute; top: calc(50.00000000000002% - 102% / 2); user-select: none; width: 102%; z-index: 0; }", ".framer-zjHbG .framer-k3nuyc { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.049261083743865% - 99.80295566502463% / 2); width: 100%; z-index: 1; }", ".framer-zjHbG .framer-1nk67dy-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }", ".framer-zjHbG .framer-1iccv6p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-zjHbG .framer-1gxuz4c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-zjHbG .framer-hpytok { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 400px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-zjHbG .framer-1800k3c { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }", ".framer-zjHbG .framer-aphg8z-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-zjHbG .framer-r1exs3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-zjHbG .framer-7cq0g5 { flex: none; height: auto; mix-blend-mode: soft-light; position: relative; white-space: pre; width: 100%; }", ...css];
var FramerWE_K1oHLc = withCSS2(Component2, css6, "framer-zjHbG");
var WE_K1oHLc_default = FramerWE_K1oHLc;
FramerWE_K1oHLc.displayName = "Hero";
FramerWE_K1oHLc.defaultProps = { height: 800, width: 1184 };
addFonts2(FramerWE_K1oHLc, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/rZ5DdENNqIdFTIyQQiP5isO7M.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2", weight: "900" }] }, ...VideoFonts, ...PrimaryButtonFonts, ...getFontsFromSharedStyle2(fonts)], { supportsExplicitInterCodegen: true });
FramerWE_K1oHLc.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader(ZfRLUDToh_default, {}, context)]);
} };
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FramerWE_K1oHLc", "slots": [], "annotations": { "framerColorSyntax": "true", "framerIntrinsicHeight": "800", "framerDisplayContentsDiv": "false", "framerImmutableVariables": "true", "framerIntrinsicWidth": "1184", "framerComponentViewportWidth": "true", "framerContractVersion": "1", "framerAutoSizeImages": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}' } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  WE_K1oHLc_default as default
};
