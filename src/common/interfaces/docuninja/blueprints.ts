/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */
import { Document } from '$app/common/interfaces/docuninja/api';

export interface Blueprint {
  id: string;
  name: string;
  description: string;
  design_hash: string;
  created_at: string;
  updated_at: string;
  archived_at: string;
  is_deleted: boolean;
  is_template: boolean;
  template?: string;
  document?: Document;
  grapesjs?: string;
}

