/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { RecurringExpenseStatus } from '$app/common/enums/recurring-expense-status';

export default {
  [RecurringExpenseStatus.Active]: 'active',
  [RecurringExpenseStatus.Draft]: 'draft',
  [RecurringExpenseStatus.Paused]: 'paused',
  [RecurringExpenseStatus.Pending]: 'pending',
  [RecurringExpenseStatus.Completed]: 'completed',
};
