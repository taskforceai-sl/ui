/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { endpoint } from '$app/common/helpers';
import { request } from '$app/common/helpers/request';
import { toast } from '$app/common/helpers/toast/toast';
import { Quote } from '$app/common/interfaces/quote';
import { useQueryClient } from 'react-query';
import { useAtomValue } from 'jotai';
import { invalidationQueryAtom } from '$app/common/atoms/data-table';
import { $refetch } from '$app/common/hooks/useRefetch';

export function useApprove() {
  const queryClient = useQueryClient();
  const invalidateQueryValue = useAtomValue(invalidationQueryAtom);

  return (quote: Quote) => {
    toast.processing();

    request(
      'PUT',
      endpoint('/api/v1/quotes/:id?approve=true', { id: quote.id }),
      quote
    ).then(() => {
      toast.success('approved_quote');

      $refetch(['quotes']);

      invalidateQueryValue &&
        queryClient.invalidateQueries([invalidateQueryValue]);
    });
  };
}
