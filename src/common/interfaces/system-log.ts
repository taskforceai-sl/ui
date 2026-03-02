/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface SystemLogRecord {
  id?: string;
  user_id?: string;
  company_id?: string;
  client_id?: string;
  event_id?: number;
  category_id?: number;
  type_id?: number;
  log: string;
  created_at: number;
}
