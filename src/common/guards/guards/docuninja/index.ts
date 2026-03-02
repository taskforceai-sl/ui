/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

// Export only the used DocuNinja guards
export * from './permission';

// Re-export the main guard component and types
export { DocuNinjaGuard } from '../../DocuNinjaGuard';
export type { DocuNinjaGuard as DocuNinjaGuardType, DocuNinjaContext, DocuNinjaPermission } from '../../DocuNinjaGuard';
