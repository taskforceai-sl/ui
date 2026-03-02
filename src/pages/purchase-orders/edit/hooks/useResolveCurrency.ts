/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useVendorResolver } from '$app/common/hooks/vendors/useVendorResolver';
import { useResolveCurrency as useResolveCurrencyHook } from '$app/common/hooks/useResolveCurrency';
import { useCurrentCompany } from '$app/common/hooks/useCurrentCompany';

export function useResolveCurrency() {
  const vendorResolver = useVendorResolver();
  const currencyResolver = useResolveCurrencyHook();
  const company = useCurrentCompany();

  return async (vendorId: string) => {
    const vendor = await vendorResolver.find(vendorId);

    const currency = currencyResolver(
      vendor.currency_id || company.settings.currency_id
    );

    return currency;
  };
}
