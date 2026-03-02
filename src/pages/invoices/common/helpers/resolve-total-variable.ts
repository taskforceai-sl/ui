/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://opensource.org/licenses/AAL
 */

export function resolveTotalVariable(variable: string) {
  const [dollar, property] = variable.split('$');

  // This is right place to do aliasing as well.

  return { dollar, property };
}
