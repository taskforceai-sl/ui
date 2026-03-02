/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface GenericSelectorProps<T> {
  inputLabel?: string | null;
  value?: string | undefined;
  defaultValue?: string | undefined;
  readonly?: boolean;
  clearButton?: boolean;
  onChange: (resource: T) => unknown;
  onClearButtonClick?: () => unknown;
  errorMessage?: string | string[];
}
