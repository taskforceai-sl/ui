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
import { Field } from './useResolveInputField';

export function useHandleCredentialsChange(
  setCompanyGateway: React.Dispatch<
    React.SetStateAction<CompanyGateway | undefined>
  >
) {
  return (field: keyof Field, value: string | number | boolean) => {
    setCompanyGateway(
      (companyGateway) =>
        companyGateway && {
          ...companyGateway,
          config: JSON.stringify({
            ...JSON.parse(companyGateway.config),
            [field]: value,
          }),
        }
    );
  };
}
