/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { CompanyGateway } from '$app/common/interfaces/company-gateway';

export function useResolveConfigValue(companyGateway: CompanyGateway) {
  const config = JSON.parse(companyGateway.config);

  return (field: string) => {
    return config[field] || '';
  };
}
