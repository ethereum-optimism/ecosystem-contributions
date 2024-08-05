// Each of the key have a unique properties depends on event

// src/app/component/routeListener.tsx
const PAGE_VIEW = 'Page View'

// src/app/component/navbar/Navbar.tsx
const NAV_RETROPGF_CLICK = 'RetroPGF Click'
const NAV_BRIDGE_CLICK = 'Bridge Click'
const NAV_AIRDROP_CLICK = 'Airdrop Click'
const NAV_BUILDER_CLICK = 'Builder Click'

// src/app/(navbar)/(home)/component/Tab.tsx
const BUILDER_IDEA_CLICK = 'Builder Ideas Click'
const BUILDER_IDEA_CLICK_PROPERTY = 'tab'

//  src/app/(navbar)/issue/[id]/Cpage.tsx
const CLAIMS_IDEA_CLICK = 'Claims Idea Click'
const JOIN_DISCUSSION_CLICK = 'Join Discussion Click'
const PROJECTNAME_PROPERTY = 'Project name'

// use the mapping to the event name instead
// all of below filter will have a properties call "selected" type of boolean
// "selected" = true (user have been checked that option to be in filter)
// "selected" = false (user have been unchecked that option to be in filter)
// src/app/(navbar)/(home)/Cpage.tsx
const DEVELOPER_TOOLING_CLICK = 'Developer Tooling Click'
const DEVELOPER_ONBOARDING_CLICK = 'Developer Onboarding Click'
const DEVELOPER_EXPERIMENTATION_CLICK = 'Developer Experimentation Click'
const PROTOCOL_INFRASTRUCTURE_CLICK = 'Protocol Infrastructure Click'
const DAPP_IDEA_CLICK = 'Dapp Idea Click'

// Properties key name for filter
const LABEL_PROPERTY_KEY = 'labelKey'
const EXECUTION_PROPERTY_KEY = 'executionStatusKey'
const EFFORT_PROPERTY_KEY = 'effortKey'
const SKILLSET_PROPERTY_KEY = 'skillSetKey'

const LABEL_FILTER_SELECT = 'Label Filter Select'
const EXECUTION_STATUS_FILTER_SELECT = 'Execution Status Filter Select'
const EFFORT_FILTER_SELECT = 'Effort Filter Select'
const SKILL_SET_FILTER_SELECT = 'Skill Set Filter Select'

export type CategoryKey =
  | 'dev-tooling'
  | 'dev-onboarding'
  | 'dev-experiment'
  | 'protocol-infra'
  | 'dapp-idea'
export type EffortKey = 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Extra Large'
export type SkillSetKey =
  | 'Front End Development'
  | 'Back End Development'
  | 'Full Stack Development'
  | 'Smart Contract Development'
  | 'Protocol Development'
  | 'Education'
  | 'Content Creation'
export type ExecutionStatusKey =
  | 'not-started'
  | 'in-discussion'
  | 'in-progress-open'
  | 'in-progress-closed'
  | 'completed'
  | 'abandoned'
export type LabelKey =
  | 'OP Stack'
  | 'Chain Infrastructure'
  | 'Consumer dApps'
  | 'Smart Contracts'
  | 'Developer Tooling'
  | 'Documentation'
  | 'Attestations'
  | 'DeFi'
  | 'Gaming'
  | 'Governance'
  | 'NFTs'
  | 'Protocol'
  | 'DeSocial'
  | 'Wallets'
export type FilterKey =
  | CategoryKey
  | EffortKey
  | ExecutionStatusKey
  | LabelKey
  | SkillSetKey

const categoryEventMapping: Record<CategoryKey, string> = {
  'dev-tooling': DEVELOPER_TOOLING_CLICK,
  'dev-onboarding': DEVELOPER_ONBOARDING_CLICK,
  'dev-experiment': DEVELOPER_EXPERIMENTATION_CLICK,
  'protocol-infra': PROTOCOL_INFRASTRUCTURE_CLICK,
  'dapp-idea': DAPP_IDEA_CLICK,
}

const effortEventMapping: Record<EffortKey, string> = {
  Tiny: EFFORT_FILTER_SELECT,
  Small: EFFORT_FILTER_SELECT,
  Medium: EFFORT_FILTER_SELECT,
  Large: EFFORT_FILTER_SELECT,
  'Extra Large': EFFORT_FILTER_SELECT,
}

const skillSetEventMapping: Record<SkillSetKey, string> = {
  'Front End Development': SKILL_SET_FILTER_SELECT,
  'Back End Development': SKILL_SET_FILTER_SELECT,
  'Full Stack Development': SKILL_SET_FILTER_SELECT,
  'Smart Contract Development': SKILL_SET_FILTER_SELECT,
  'Protocol Development': SKILL_SET_FILTER_SELECT,
  Education: SKILL_SET_FILTER_SELECT,
  'Content Creation': SKILL_SET_FILTER_SELECT,
}

const executionStatusEventMapping: Record<ExecutionStatusKey, string> = {
  'not-started': EXECUTION_STATUS_FILTER_SELECT,
  'in-discussion': EXECUTION_STATUS_FILTER_SELECT,
  'in-progress-open': EXECUTION_STATUS_FILTER_SELECT,
  'in-progress-closed': EXECUTION_STATUS_FILTER_SELECT,
  completed: EXECUTION_STATUS_FILTER_SELECT,
  abandoned: EXECUTION_STATUS_FILTER_SELECT,
}

const labelEventMapping: Record<LabelKey, string> = {
  'OP Stack': LABEL_FILTER_SELECT,
  'Chain Infrastructure': LABEL_FILTER_SELECT,
  'Consumer dApps': LABEL_FILTER_SELECT,
  'Smart Contracts': LABEL_FILTER_SELECT,
  'Developer Tooling': LABEL_FILTER_SELECT,
  Documentation: LABEL_FILTER_SELECT,
  Attestations: LABEL_FILTER_SELECT,
  DeFi: LABEL_FILTER_SELECT,
  Gaming: LABEL_FILTER_SELECT,
  Governance: LABEL_FILTER_SELECT,
  NFTs: LABEL_FILTER_SELECT,
  Protocol: LABEL_FILTER_SELECT,
  DeSocial: LABEL_FILTER_SELECT,
  Wallets: LABEL_FILTER_SELECT,
}

export {
  BUILDER_IDEA_CLICK,
  PAGE_VIEW,
  CLAIMS_IDEA_CLICK,
  JOIN_DISCUSSION_CLICK,
  DEVELOPER_TOOLING_CLICK,
  DEVELOPER_ONBOARDING_CLICK,
  DEVELOPER_EXPERIMENTATION_CLICK,
  PROTOCOL_INFRASTRUCTURE_CLICK,
  DAPP_IDEA_CLICK,
  LABEL_FILTER_SELECT,
  EXECUTION_STATUS_FILTER_SELECT,
  EFFORT_FILTER_SELECT,
  SKILL_SET_FILTER_SELECT,
  NAV_RETROPGF_CLICK,
  NAV_BRIDGE_CLICK,
  NAV_AIRDROP_CLICK,
  NAV_BUILDER_CLICK,
  categoryEventMapping,
  effortEventMapping,
  skillSetEventMapping,
  executionStatusEventMapping,
  labelEventMapping,
  LABEL_PROPERTY_KEY,
  EXECUTION_PROPERTY_KEY,
  EFFORT_PROPERTY_KEY,
  SKILLSET_PROPERTY_KEY,
  BUILDER_IDEA_CLICK_PROPERTY,
  PROJECTNAME_PROPERTY,
}
