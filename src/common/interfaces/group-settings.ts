/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface GroupSettings {
  id: string;
  name: string;
  settings: Record<string, any>;
  created_at: number;
  updated_at: number;
  archived_at: number;
  is_deleted: boolean;
  documents: any[];
}
