/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface ValidationBag {
  message: string;
  errors: Record<string, string[]>;
}

export interface GenericValidationBag<T> {
  message: string;
  errors?: T;
}
