/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

interface Event {
  date: string;
  delivery_message: string;
  recipient: string;
  server: string;
  server_ip: string;
  status: string;
  bounce_id: string;
}

export interface EmailRecord {
  entity: 'invoice';
  entity_id: string;
  events: Event[];
  recipients: string;
  subject: string;
}
