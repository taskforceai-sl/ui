/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { SettingsLevel } from '$app/common/enums/settings';
import { Guard } from '../Guard';

export function companySettings(): Guard {
  return ({ settingsLevel }) =>
    Promise.resolve(Boolean(settingsLevel === SettingsLevel.Company));
}
