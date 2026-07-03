/**
 * Props for Blog component
 *
 * This component is CMS-backed — it has no caller-supplied props.
 * Its content comes from `__FRAMER_CMS_DATA__` (see the
 * "CMS-backed component" entry in "Known Runtime Limitations &
 * Workarounds"). Mount it with `<Blog />` and populate
 * the stub at the top of the bundle.
 */
export interface BlogProps {
  [key: string]: unknown;
}

declare const BlogComponent: import("react").ComponentType<BlogProps>;
export default BlogComponent;
