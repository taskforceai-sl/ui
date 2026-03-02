/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useUpdateCompanyUser } from '$app/pages/settings/user/common/hooks/useUpdateCompanyUser';
import { cloneDeep, set } from 'lodash';
import { useHandleCurrentUserChangeProperty } from './useHandleCurrentUserChange';
import { useInjectUserChanges } from './useInjectUserChanges';

export function useHandleDarkLightMode() {
  const userChanges = useInjectUserChanges();

  const updateCompanyUser = useUpdateCompanyUser();
  const handleUserChange = useHandleCurrentUserChangeProperty();

  return (value: boolean) => {
    handleUserChange('company_user.react_settings.dark_mode', value);

    if (userChanges) {
      const updatedUserChanges = cloneDeep(userChanges);

      set(updatedUserChanges, 'company_user.react_settings.dark_mode', value);

      updateCompanyUser(updatedUserChanges);
    }
  };
}
