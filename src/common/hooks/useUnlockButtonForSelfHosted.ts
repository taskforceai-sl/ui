/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { isSelfHosted } from '$app/common/helpers';
import { useAdmin } from './permissions/useHasPermission';
import { useCurrentAccount } from './useCurrentAccount';

export function useUnlockButtonForSelfHosted() {
  const account = useCurrentAccount();
  const { isAdmin, isOwner } = useAdmin();

  const isPlanExpired = new Date(account?.plan_expires) < new Date();

  return (
    isSelfHosted() &&
    ((account?.plan && isPlanExpired) || !account?.plan) &&
    (isAdmin || isOwner)
  );
}
