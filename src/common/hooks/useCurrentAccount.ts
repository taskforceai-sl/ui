/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { RootState } from '$app/common/stores/store';
import { useSelector } from 'react-redux';

export function useCurrentAccount() {
  const companyUserState = useSelector(
    (state: RootState) => state.companyUsers
  );

  return companyUserState.api[companyUserState.currentIndex]?.account;
}
