/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Settings } from '../interfaces/company.interface';
import { useCompanyChanges } from './useCompanyChanges';
import { useCurrentSettingsLevel } from './useCurrentSettingsLevel';

export function useDisableSettingsField() {
  const companyChanges = useCompanyChanges();

  const { isCompanySettingsActive } = useCurrentSettingsLevel();

  return (propertyKey: keyof Settings) => {
    return (
      companyChanges &&
      Boolean(typeof companyChanges.settings[propertyKey] === 'undefined') &&
      !isCompanySettingsActive
    );
  };
}
