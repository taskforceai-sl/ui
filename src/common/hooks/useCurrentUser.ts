/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { User } from '$app/common/interfaces/user';
import { RootState } from '$app/common/stores/store';
import { useSelector } from 'react-redux';

export function useCurrentUser() {
  return useSelector((state: RootState) => state.user.user) as User | undefined;
}
