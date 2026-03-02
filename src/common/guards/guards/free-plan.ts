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

export function freePlan() {
  if (isSelfHosted()) {
    return true;
  }

  const plans = ['pro', 'enterprise', 'white_label'];

  return !plans.includes(
    store.getState().companyUsers.api?.[
      store.getState().companyUsers.currentIndex
    ]?.account.plan
  );
}
