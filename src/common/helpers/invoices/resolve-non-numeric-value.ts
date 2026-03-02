/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { ChangeEvent } from 'react';

export function isNonNumericValue(event: ChangeEvent<HTMLInputElement>) {
  if (isNaN(Number(event.target.value)) || event.target.value == '') {
    event.target.value = '0';

    return true;
  }

  return false;
}
