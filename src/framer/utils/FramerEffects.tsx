/**
 * FramerEffects — auto-populated by the exporter
 *
 * The bundled Framer runtime's withFX HOC does NOT execute the
 * `__framer__*` animation props it receives. This file
 * reimplements those animations via WAAPI so the rendered
 * components actually animate.
 *
 *
 * Pre-populated targets:
 *
 * REVEALS (6):
 *   - .framer-n75vmk-container (1000ms cubic-bezier(0.44, 0, 0.34, 0.98))
 *   - .framer-5uskdi-container (1000ms cubic-bezier(0.44, 0, 0.34, 0.98))
 *   - .framer-t8crrj-container (1000ms cubic-bezier(0.44, 0, 0.34, 0.98))
 *   - .framer-18dks0h-container (1000ms cubic-bezier(0.44, 0, 0.34, 0.98))
 *   - .framer-1qfki0p-container (1000ms cubic-bezier(0.44, 0, 0.34, 0.98))
 *   - .framer-13vovp-container (1000ms cubic-bezier(0.44, 0, 0.34, 0.98))
 *
 * NOTE: 28 effect targets were detected but not auto-populated below.
 * You'll need to populate them manually following the discovery loop:
 *   - .framer-x6bow (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-1uok64v (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-1skasgo (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-1yp4k8m (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-sa7pd9 (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-163s15s (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-16a23y7-container (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-styles-preset-1tbvl3k (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-d2pnvk (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-1ump60u (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-styles-preset-14ok5w5 (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-ov9nis-container (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-8yf3r5-container (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-c6if0u-container (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-zbc86d (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-28a6lg (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-1xvgxng (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-1orylca (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-1c9ck87 (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-qihkam (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-1tay0su-container (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-rwbkp6 (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-1p4otx9 (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-ivz05m-container (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-sp8ce4-container (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-11c1aa-container (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-1mrjl5y-container (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)
 *   - .framer-rnpzrs-container (__framer__styleAppearEffectEnabled): transition is a spring — pre-sampling not auto-extracted (see Discovery Loop)

 * Mount this component once at the page root.
 */
"use client";
import { useEffect } from "react";

interface RevealSpec {
  selector: string;
  keyframes: Keyframe[];
  duration: number;
  easing?: string;
  threshold?: number;
  once?: boolean;
}

interface LoopSpec {
  selector: string;
  keyframes: Keyframe[];
  duration: number;
  easing?: string;
  pauseOffscreen?: boolean;
}

const REVEAL_SPECS: RevealSpec[] = [
  {
    "selector": ".framer-n75vmk-container",
    "keyframes": [
      {
        "opacity": 0
      },
      {
        "opacity": 1
      }
    ],
    "duration": 1000,
    "easing": "cubic-bezier(0.44, 0, 0.34, 0.98)",
    "threshold": 0,
    "once": true
  },
  {
    "selector": ".framer-5uskdi-container",
    "keyframes": [
      {
        "opacity": 0
      },
      {
        "opacity": 1
      }
    ],
    "duration": 1000,
    "easing": "cubic-bezier(0.44, 0, 0.34, 0.98)",
    "threshold": 0,
    "once": true
  },
  {
    "selector": ".framer-t8crrj-container",
    "keyframes": [
      {
        "opacity": 0
      },
      {
        "opacity": 1
      }
    ],
    "duration": 1000,
    "easing": "cubic-bezier(0.44, 0, 0.34, 0.98)",
    "threshold": 0,
    "once": true
  },
  {
    "selector": ".framer-18dks0h-container",
    "keyframes": [
      {
        "opacity": 0
      },
      {
        "opacity": 1
      }
    ],
    "duration": 1000,
    "easing": "cubic-bezier(0.44, 0, 0.34, 0.98)",
    "threshold": 0,
    "once": true
  },
  {
    "selector": ".framer-1qfki0p-container",
    "keyframes": [
      {
        "opacity": 0
      },
      {
        "opacity": 1
      }
    ],
    "duration": 1000,
    "easing": "cubic-bezier(0.44, 0, 0.34, 0.98)",
    "threshold": 0,
    "once": true
  },
  {
    "selector": ".framer-13vovp-container",
    "keyframes": [
      {
        "opacity": 0
      },
      {
        "opacity": 1
      }
    ],
    "duration": 1000,
    "easing": "cubic-bezier(0.44, 0, 0.34, 0.98)",
    "threshold": 0,
    "once": true
  }
];

const LOOP_SPECS: LoopSpec[] = [];

export default function FramerEffects() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const fired = new Set<Element>();

    for (const spec of REVEAL_SPECS) {
      const targets = document.querySelectorAll<HTMLElement>(spec.selector);
      if (targets.length === 0) continue;
      targets.forEach((el) => {
        const initial = el.animate(spec.keyframes.slice(0, 1) as Keyframe[], { duration: 1, fill: "forwards" });
        initial.pause();
      });
      const io = new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          if (spec.once !== false && fired.has(e.target)) continue;
          (e.target as HTMLElement).animate(spec.keyframes, {
            duration: spec.duration,
            easing: spec.easing,
            fill: "forwards",
          });
          if (spec.once !== false) fired.add(e.target);
        }
      }, { threshold: spec.threshold ?? 0, rootMargin: "0px" });
      targets.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    for (const spec of LOOP_SPECS) {
      const targets = document.querySelectorAll<HTMLElement>(spec.selector);
      const anims: Animation[] = [];
      targets.forEach((el) => {
        const anim = el.animate(spec.keyframes, {
          duration: spec.duration,
          easing: spec.easing,
          iterations: Infinity,
        });
        anims.push(anim);
      });
      if (spec.pauseOffscreen) {
        const io = new IntersectionObserver((entries) => {
          for (const e of entries) {
            const i = Array.from(targets).indexOf(e.target as HTMLElement);
            if (i < 0) continue;
            if (e.isIntersecting) anims[i]?.play();
            else anims[i]?.pause();
          }
        }, { threshold: 0 });
        targets.forEach((el) => io.observe(el));
        cleanups.push(() => io.disconnect());
      }
      cleanups.push(() => anims.forEach((a) => a.cancel()));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
