/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Guard } from '../Guard';

export function or(...guards: Guard[]): Guard {
  return async (ctx) =>
    // eslint-disable-next-line no-async-promise-executor
    new Promise(async (resolve) => {
      for (const guard of guards) {
        const value = await guard(ctx);

        if (value === true) {
          resolve(true);

          break;
        }
      }

      resolve(false);
    });
}
