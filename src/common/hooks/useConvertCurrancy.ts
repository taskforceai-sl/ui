/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { usePaymentQuery } from '$app/common/queries/payments';
import { useEffect, useState } from 'react';

export function useConvertCurrencyToggle(params: {
  id: string | undefined;
}): any[] {
  const { data: payment } = usePaymentQuery({ id: params.id });
  const [changeCurrency, setchangeCurrency] = useState(false);
  useEffect(() => {
    setchangeCurrency(Boolean(payment?.exchange_currency_id));
  }, [payment]);

  return [changeCurrency, setchangeCurrency];
}
