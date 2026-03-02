/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Rule } from '$app/common/interfaces/transaction-rules';

export const defaultRule: Rule = {
  search_key: 'description',
  operator: 'contains',
  value: '',
};
