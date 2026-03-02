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
import { store } from '$app/common/stores/store';

export function proPlan() {
  if (isSelfHosted()) {
    return true;
  }

  return Boolean(
    store.getState().companyUsers.api?.[
      store.getState().companyUsers.currentIndex
    ]?.account.plan === 'pro'
  );
}
