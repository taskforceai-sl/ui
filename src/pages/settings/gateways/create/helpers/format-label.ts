/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

/**
 * Format the input field for the gateway.
 * Transfer from camel case to normal words & then uppercase.
 *
 * @param label string
 * @returns string
 */
export function formatLabel(label: string): string {
  return label
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/(^\w|\s\w)/g, (word) => word.toUpperCase());
}
