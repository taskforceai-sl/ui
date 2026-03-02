/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface PaymentTerm {
  id: string;
  num_days: number;
  name: string;
  is_deleted: boolean;
  created_at: number;
  updated_at: number;
  archived_at: number;
}
