/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useLanguages } from './useLanguages';

export function useResolveLanguage() {
  const langauges = useLanguages();

  return (id: string | number) => {
    return langauges.find(
      (language) => language.id.toString() === id.toString()
    );
  };
}
