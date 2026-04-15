// src/config/component-registry.ts
// Minimal canonical registry projection to support the page-data layer.

export const componentRegistry = {
  shells: ['AppShell', 'MarketingShell', 'PageSection', 'ContentColumn', 'StickyActionBar'],
  navigation: ['TopBar', 'BottomNav', 'SideNav', 'TabSwitch'],
  domain: [
    'CheckInGrid',
    'StateSummaryCard',
    'NextBestMoveCard',
    'MakeItWorseCard',
    'QuickScriptCard',
    'ProtocolStepCard',
    'ChecklistCard',
    'ResetTimeline',
    'GuideSectionCard',
    'KnowledgeArticleCard',
    'ArticleSection',
    'ProductCard',
    'BundleCard',
    'LibraryItemCard',
  ],
} as const;

export const pageToComponents = {
  '/': ['MarketingShell', 'HeroBlock', 'FeatureGrid', 'HowItWorksSteps', 'CardGroup', 'ProductGrid', 'TrustStrip'],
  '/how-it-works': ['MarketingShell', 'HeroBlock', 'HowItWorksSteps', 'CardGroup'],
  '/start': ['MarketingShell', 'HeroBlock', 'CardGroup', 'TrustStrip'],
  '/pricing': ['MarketingShell', 'HeroBlock', 'ComparisonTable', 'ProductGrid'],
  '/safety': ['MarketingShell', 'HeroBlock', 'SafetyCardGrid'],
  '/today/check-in': ['AppShell', 'HeroBlock', 'CheckInGrid'],
  '/today/state': ['AppShell', 'HeroBlock', 'StateSummaryCard', 'NextBestMoveCard', 'CardGroup'],
  '/today': ['AppShell', 'HeroBlock', 'StateSummaryCard', 'NextBestMoveCard', 'CardGroup', 'MakeItWorseCard', 'QuickScriptRow', 'RecheckCard'],
  '/repair': ['AppShell', 'HeroBlock', 'SearchField', 'FilterChipRow', 'SuggestedModulesRail', 'RepairCategoryGrid', 'ProductGrid'],
  '/repair/[slug]': ['AppShell', 'RepairModuleHero', 'ExpandablePanelStack', 'ChecklistCard', 'ResetTimeline', 'CardGroup'],
  '/guides': ['AppShell', 'HeroBlock', 'GuideIndexGrid', 'CardGroup'],
  '/guides/[slug]': ['AppShell', 'HeroBlock', 'GuideSectionCards', 'CardGroup'],
  '/knowledge': ['AppShell', 'HeroBlock', 'SearchField', 'KnowledgeTopicGrid', 'CardGroup'],
  '/knowledge/[slug]': ['AppShell', 'HeroBlock', 'CardGroup', 'ArticleSection', 'ProductGrid'],
  '/progress': ['AppShell', 'HeroBlock', 'ProgressOverview', 'CardGroup'],
  '/store': ['MarketingShell', 'HeroBlock', 'FilterChipRow', 'ProductGrid', 'BundleGrid'],
  '/store/[category]': ['MarketingShell', 'ProductGrid'],
  '/store/[category]/[slug]': ['MarketingShell', 'HeroBlock', 'CardGroup', 'ProductGrid'],
  '/library': ['AppShell', 'HeroBlock', 'LibraryGrid'],
} as const;
