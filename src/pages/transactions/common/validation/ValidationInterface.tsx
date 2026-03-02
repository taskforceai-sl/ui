/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface TransactionValidation {
  base_type: string;
  date: string;
  amount: string;
  currency_id: string;
  bank_integration_id: string;
  description: string;
}
