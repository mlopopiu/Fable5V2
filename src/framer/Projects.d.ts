/**
 * Props for Projects component
 *
 * This component is CMS-backed — it has no caller-supplied props.
 * Its content comes from `__FRAMER_CMS_DATA__` (see the
 * "CMS-backed component" entry in "Known Runtime Limitations &
 * Workarounds"). Mount it with `<Projects />` and populate
 * the stub at the top of the bundle.
 */
export interface ProjectsProps {
  [key: string]: unknown;
}

declare const ProjectsComponent: import("react").ComponentType<ProjectsProps>;
export default ProjectsComponent;
