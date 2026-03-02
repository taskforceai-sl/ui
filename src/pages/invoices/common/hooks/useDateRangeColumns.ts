/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { DateRangeColumn } from '$app/components/DataTable';

export function useDateRangeColumns() {
  const columns: DateRangeColumn[] = [
    { column: 'date', queryParameterKey: 'date_range' },
    { column: 'due_date', queryParameterKey: 'due_date_range' },
    { column: 'created_at', queryParameterKey: 'created_between' },
  ];

  return columns;
}
