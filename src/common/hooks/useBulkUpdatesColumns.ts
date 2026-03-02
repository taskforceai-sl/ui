/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useEffect, useState } from 'react';
import { useStaticsQuery } from '../queries/statics';

export function useBulkUpdatesColumns() {
  const { data: statics } = useStaticsQuery();

  const [bulkUpdates, setBulkUpdates] = useState<Record<string, string[]>>();

  useEffect(() => {
    if (statics?.bulk_updates) {
      setBulkUpdates(statics.bulk_updates);
    }
  }, [statics]);

  return bulkUpdates;
}
