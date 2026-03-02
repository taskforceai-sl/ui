/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { RecurringExpense } from '$app/common/interfaces/recurring-expense';
import { atom } from 'jotai';

export const recurringExpenseAtom = atom<RecurringExpense | undefined>(
  undefined
);
