/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useResolveCurrency } from '$app/common/hooks/useResolveCurrency';

export function useResolveCurrencySeparator() {
  const resolveCurrency = useResolveCurrency();

  return (currencyId: string) => {
    const currency = resolveCurrency(currencyId);

    if (currency) {
      return {
        decimalSeparator: currency.decimal_separator,
        precision: currency.precision,
        thousandSeparator: currency.thousand_separator,
      };
    }

    return null;
  };
}
