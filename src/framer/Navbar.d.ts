export interface NavbarProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Mobile Closed" → ZLOkMW0qS
   *   "Mobile Open" → KEbqQXDy5
   *   "Nav Closed" → FVf2onDyD
   *   "Nav Default" → o6WhTRvY1
   *   "Nav Open" → puyVmY8Uy
   */
  variant?: 'Mobile Closed' | 'Mobile Open' | 'Nav Closed' | 'Nav Default' | 'Nav Open' | 'o6WhTRvY1' | 'FVf2onDyD' | 'puyVmY8Uy' | 'ZLOkMW0qS' | 'KEbqQXDy5';
  /**
   * Contact Form — pass as `XorP3wUOx` not `contactForm`.
   */
  XorP3wUOx?: () => void;
  /**
   * Click — pass as `BJr0cBP_y` not `click`.
   */
  BJr0cBP_y?: () => void;
  /** Additional properties */
  [key: string]: unknown;
}

declare const NavbarComponent: import("react").ComponentType<NavbarProps>;
export default NavbarComponent;
