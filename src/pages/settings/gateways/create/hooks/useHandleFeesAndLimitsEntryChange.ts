/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import {
  CompanyGateway,
  FeesAndLimitsEntry,
} from '$app/common/interfaces/company-gateway';

export function useHandleFeesAndLimitsEntryChange(
  setCompanyGateway: React.Dispatch<
    React.SetStateAction<CompanyGateway | undefined>
  >
) {
  return (
    gatewayTypeId: string,
    field: keyof FeesAndLimitsEntry,
    value: string | number | boolean
  ) => {
    setCompanyGateway &&
      setCompanyGateway(
        (current) =>
          current && {
            ...current,
            fees_and_limits: {
              ...current.fees_and_limits,
              [gatewayTypeId]: {
                ...current.fees_and_limits[gatewayTypeId],
                [field]: value,
              },
            },
          }
      );
  };
}
