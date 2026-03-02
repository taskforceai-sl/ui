/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { CompanyUser } from '$app/common/interfaces/company-user';
import { RootState } from '$app/common/stores/store';
import { useSelector } from 'react-redux';

export function useCompanyUsers(): CompanyUser[] {
  return useSelector((state: RootState) => state.companyUsers.api || []);
}
