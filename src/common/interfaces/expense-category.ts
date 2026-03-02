/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface ExpenseCategory {
  id: string;
  name: string;
  color: string;
  user_id: string;
  archived_at: number;
  is_deleted: boolean;
  created_at: number;
  updated_at: number;
}
