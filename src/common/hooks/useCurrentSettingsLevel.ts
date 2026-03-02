/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { SettingsLevel } from '../enums/settings';
import { useActiveSettingsDetails } from './useActiveSettingsDetails';

export function useCurrentSettingsLevel() {
  const activeSettingsDetails = useActiveSettingsDetails();

  const isCompanySettingsActive =
    SettingsLevel.Company === activeSettingsDetails.level;

  const isGroupSettingsActive =
    SettingsLevel.Group === activeSettingsDetails.level;

  const isClientSettingsActive =
    SettingsLevel.Client === activeSettingsDetails.level;

  return {
    isCompanySettingsActive,
    isGroupSettingsActive,
    isClientSettingsActive,
  };
}
