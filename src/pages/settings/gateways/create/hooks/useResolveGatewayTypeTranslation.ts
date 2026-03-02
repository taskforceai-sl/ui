/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import gatewayType from '$app/common/constants/gateway-type';

export function useResolveGatewayTypeTranslation() {
  return (id: string) => {
    return gatewayType[id as keyof typeof gatewayType] || 'other';
  };
}
