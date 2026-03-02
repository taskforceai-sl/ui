/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface VendorContact {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  send_email: boolean;
  created_at: number;
  updated_at: number;
  archived_at: number;
  is_primary: boolean;
  phone: string;
  custom_value1: string;
  custom_value2: string;
  custom_value3: string;
  custom_value4: string;
  link: string;
  last_login: number;
  can_sign: boolean;
}
