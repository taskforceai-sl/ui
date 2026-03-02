/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface SearchResponse {
  client_contacts: SearchRecord[];
  clients: SearchRecord[];
  invoices: SearchRecord[];
  projects: SearchRecord[];
  settings: SearchRecord[];
  tasks: SearchRecord[];
  products: SearchRecord[];
  expenses: SearchRecord[];
  payments: SearchRecord[];
  quotes: SearchRecord[];
  credits: SearchRecord[];
  recurrings: SearchRecord[];
  vendors: SearchRecord[];
  vendor_contacts: SearchRecord[];
}

export interface SearchRecord {
  name: string;
  type: string;
  id: string;
  path: string;
  heading: string;
}
