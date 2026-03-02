/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface RecurringInvoiceActivity {
  user: Client;
  recurring_invoice: Client;
  client: Client;
  activity_type_id: number;
  id: string;
  invoice: Client;
  hashed_id: string;
  notes: string;
  created_at: number;
  ip: string;
}

export interface Client {
  label: string;
  hashed_id: string;
}
