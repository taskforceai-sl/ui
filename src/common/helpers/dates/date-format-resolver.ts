/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useStaticsQuery } from '../../queries/statics';

export function useResolveDateFormat() {
  const statics = useStaticsQuery();

  return (id: string) => {
    if (statics) {
      return statics.data?.date_formats.find(
        (dateFormat) => dateFormat.id === id
      );
    }

    return undefined;
  };
}
