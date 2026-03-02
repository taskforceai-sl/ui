/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useQuery } from 'react-query';
import { Params } from '../common/params.interface';
import { request } from '$app/common/helpers/request';
import { docuNinjaEndpoint } from '$app/common/helpers';
import { GenericSingleResourceResponse } from '$app/common/interfaces/generic-api-response';
import { Client } from '$app/common/interfaces/docuninja/api';

export function useClientsQuery(params: Params) {
  return useQuery(
    ['/api/clients/docuninja', params],
    () =>
      request(
        'GET',
        docuNinjaEndpoint(
          '/api/clients?per_page=:per_page&page=:page&filter=:filter',
          {
            per_page: params.perPage ?? '100',
            page: params.currentPage ?? '1',
            filter: params.filter ?? '',
          }
        ),
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              'X-DOCU-NINJA-TOKEN'
            )}`,
          },
        }
      ),
    { staleTime: Infinity }
  );
}

interface ClientParams {
  id: string | undefined;
}

export function useClientQuery(params: ClientParams) {
  return useQuery(
    ['/api/clients/docuninja', params],
    () =>
      request(
        'GET',
        docuNinjaEndpoint('/api/clients/:id', {
          id: params.id,
        }),
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              'X-DOCU-NINJA-TOKEN'
            )}`,
          },
        }
      ).then(
        (response: GenericSingleResourceResponse<Client>) => response.data.data
      ),
    { staleTime: Infinity, enabled: Boolean(params.id) }
  );
}

export function useBlankClientQuery() {
  return useQuery(
    '/api/clients/docuninja/create',
    () =>
      request(
        'GET',
        docuNinjaEndpoint('/api/clients/create'),
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              'X-DOCU-NINJA-TOKEN'
            )}`,
          },
        }
      ).then((response) => response.data.data),
    { staleTime: Infinity }
  );
}
