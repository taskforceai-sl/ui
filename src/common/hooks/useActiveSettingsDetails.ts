/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useSelector } from 'react-redux';
import { RootState } from '../stores/store';

export function useActiveSettingsDetails() {
  const activeSettings = useSelector(
    (state: RootState) => state.settings.activeSettings
  );

  return {
    name: activeSettings.name,
    level: activeSettings.level,
  };
}
