export interface SmoothscrollprodProps {
  /**
   * Intensity
   * Range: min: 0
   * @default 10
   */
  intensity?: number;
  /** Additional properties */
  [key: string]: unknown;
}

declare const SmoothscrollProdComponent: import("react").ComponentType<SmoothscrollprodProps>;
export default SmoothscrollProdComponent;
