/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useCountries } from './useCountries';

export function useResolveCountry() {
  const countries = useCountries();

  return (id: number | string) => {
    return countries.find((country) => country.id == id);
  };
}
