/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { sha256 } from 'js-sha256';

export function generate64CharHash() {
  const hash = sha256.create();
  hash.update(`${Date.now().toString()}${Math.random().toString()}`);

  return hash.hex();
}
