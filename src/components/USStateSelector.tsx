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
import { usStates } from '$app/common/constants/us-states';
import { SelectField } from './forms';

export function USStateSelector(props: GenericSelectorProps) {
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
      {Object.entries(usStates).map((state, index) => (
        <option key={index} value={state[0]}>
          {state[1]}
        </option>
      ))}
    </SelectField>
  );
}
