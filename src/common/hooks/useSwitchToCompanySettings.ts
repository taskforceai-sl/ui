/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useDispatch } from 'react-redux';
import { resetChanges } from '../stores/slices/company-users';
import { setActiveSettings } from '../stores/slices/settings';

export function useSwitchToCompanySettings() {
  const dispatch = useDispatch();

  return () => {
    dispatch(resetChanges('company'));

    dispatch(
      setActiveSettings({
        status: {
          name: '',
          level: 'company',
        },
      })
    );
  };
}
