/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export function resolveKey(key: string, delimiter = '.') {
  const [resource, property] = key.split(delimiter);

  return { resource, property };
}
