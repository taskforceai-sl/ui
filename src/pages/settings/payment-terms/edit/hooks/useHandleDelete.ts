/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { bulk } from '$app/common/queries/payment-terms';
import { toast } from '$app/common/helpers/toast/toast';
import { $refetch } from '$app/common/hooks/useRefetch';

export function useHandleDelete() {
  return (id: string) => {
    toast.processing();

    bulk([id], 'delete')
      .then(() => toast.success('deleted_payment_term'))
      .finally(() => $refetch(['payment_terms']));
  };
}
