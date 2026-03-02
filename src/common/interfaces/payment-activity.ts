/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface PaymentActivity {
  user: Client;
  contact: Client;
  client: Client;
  invoice: Client;
  payment: Client;
  activity_type_id: number;
  id: string;
  hashed_id: string;
  notes: string;
  created_at: number;
  ip: string;
  payment_amount?: Client;
  adjustment?: Client;
}

interface Client {
  label: string;
  hashed_id: string;
}
