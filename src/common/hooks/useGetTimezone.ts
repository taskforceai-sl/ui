/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Timezone } from '../interfaces/statics';
import { useStaticsQuery } from '../queries/statics';

export function useGetTimezone() {
  const { data: statics } = useStaticsQuery();

  return (timeZoneId: string | undefined) => {
    if (statics?.timezones && timeZoneId) {
      const result = statics.timezones.find(
        (currentTimezone: Timezone) => currentTimezone.id === timeZoneId
      );

      if (result) {
        return {
          timeZoneId: result.id,
          timeZone: result.name,
        };
      }
    }

    return {
      timeZoneId: '32',
      timeZone: 'Europe/Lisbon',
    };
  };
}
