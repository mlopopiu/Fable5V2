export interface TeamcardProps {
  /**
   * Image — pass as `NDdvw7UCa` not `image`.
   */
  NDdvw7UCa?: string;
  /**
   * Name — pass as `BBIx3Mhxu` not `name`.
   * @default "Matt Anderson"
   */
  BBIx3Mhxu?: string;
  onBBIx3MhxuChange?: string;
  /**
   * Roll — pass as `HdLliSbyQ` not `roll`.
   * @default "Creative Director"
   */
  HdLliSbyQ?: string;
  onHdLliSbyQChange?: string;
  /**
   * Tag — pass as `Ns2sDMYPk` not `tag`.
   * @default "Strategy"
   */
  Ns2sDMYPk?: string;
  onNs2sDMYPkChange?: string;
  /** Additional properties */
  [key: string]: unknown;
}

declare const TeamCardComponent: import("react").ComponentType<TeamcardProps>;
export default TeamCardComponent;
