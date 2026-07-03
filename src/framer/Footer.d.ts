export interface FooterProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop" → G2eZn6JLy
   *   "Phone" → NGLHtpkQk
   *   "Tablet" → WGZWare1v
   */
  variant?: 'Desktop' | 'Phone' | 'Tablet' | 'G2eZn6JLy' | 'WGZWare1v' | 'NGLHtpkQk';
  /** Additional properties */
  [key: string]: unknown;
}

declare const FooterComponent: import("react").ComponentType<FooterProps>;
export default FooterComponent;
