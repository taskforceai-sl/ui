/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import {
  TransactionStatus,
  TransactionType,
} from '$app/common/enums/transactions';

export const transactionTypes = {
  [TransactionType.Deposit]: 'deposit',
  [TransactionType.Withdrawal]: 'withdrawal',
};

export const transactionStatuses = {
  [TransactionStatus.Unmatched]: 'unmatched',
  [TransactionStatus.Matched]: 'matched',
  [TransactionStatus.Converted]: 'converted',
};
