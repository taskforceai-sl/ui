/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface TaskStatus {
  id: string;
  name: string;
  color: string;
  sort_order: number;
  status_order: number;
  is_deleted: boolean;
  archived_at: number;
  created_at: number;
  updated_at: number;
}
