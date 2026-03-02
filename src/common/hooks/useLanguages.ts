/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Language } from '$app/common/interfaces/language';
import { useStaticsQuery } from '$app/common/queries/statics';
import { useEffect, useState } from 'react';

export function useLanguages(): Language[] {
  const { data: statics } = useStaticsQuery();
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    if (statics?.languages) {
      setLanguages(statics.languages);
    }
  }, [statics]);

  return languages;
}
