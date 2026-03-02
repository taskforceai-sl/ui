/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useCountries } from '$app/common/hooks/useCountries';
import { SelectField } from './forms';

export interface GenericSelectorProps<T = string> {
  value: T;
  label?: string | null;
  onChange?: (id: string) => unknown;
  errorMessage?: string | string[];
  dismissable?: boolean;
  disabled?: boolean;
  withBlank?: boolean;
  readOnly?: boolean;
}

export function CountrySelector(props: GenericSelectorProps) {
  const countries = useCountries();

  return (
    <SelectField
      onValueChange={props.onChange}
      value={props.value}
      label={props.label}
      errorMessage={props.errorMessage}
      dismissable={props.dismissable}
      disabled={props.disabled}
      withBlank={props.withBlank}
      customSelector
      readOnly={props.readOnly}
    >
      {countries.map((country, index) => (
        <option key={index} value={country.id}>
          {country.name} ({country.iso_3166_3})
        </option>
      ))}
    </SelectField>
  );
}
