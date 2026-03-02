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

export function admin(): Guard {
  return ({ companyUser }) => Promise.resolve(Boolean(companyUser?.is_admin));
}

export function owner(): Guard {
  return ({ companyUser }) => Promise.resolve(Boolean(companyUser?.is_owner));
}
