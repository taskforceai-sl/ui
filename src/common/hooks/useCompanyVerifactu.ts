/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useCurrentCompany } from './useCurrentCompany';

export function useCompanyVerifactu() {
  const company = useCurrentCompany();

  return Boolean(company?.settings.e_invoice_type === 'VERIFACTU');
}
