/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { GenericSelectorProps } from './CountrySelector';
import { euCountries } from '$app/common/constants/eu-countries';
import { SelectField } from './forms';

export function EUCountrySelector(props: GenericSelectorProps) {
  return (
    <SelectField
      value={props.value}
      label={props.label}
      disabled={props.disabled}
      onValueChange={props.onChange}
      errorMessage={props.errorMessage}
      dismissable
      customSelector
    >
      {Object.entries(euCountries).map((state, index) => (
        <option key={index} value={state[0]}>
          {state[1]}
        </option>
      ))}
    </SelectField>
  );
}
