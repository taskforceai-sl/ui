/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface Params {
  perPage?: number | string;
  currentPage?: number | string;
  filter?: string;
  status?: string[];
  sort?: string;
  companyDocuments?: 'true' | 'false';
  ninjaCompanyKey?: string;
  ninjaAccountKey?: string;
  search?: string;
}
