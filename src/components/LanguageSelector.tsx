/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useLanguages } from '$app/common/hooks/useLanguages';
import { GenericSelectorProps } from './CountrySelector';
import { SelectField } from './forms';

export function LanguageSelector(props: GenericSelectorProps) {
  const languages = useLanguages();

  return (
    <SelectField
      value={props.value}
      onValueChange={props.onChange}
      label={props.label}
      errorMessage={props.errorMessage}
      dismissable={props.dismissable}
      withBlank={props.withBlank}
      customSelector
      readOnly={props.readOnly}
    >
      {languages.map((language, index) => (
        <option key={index} value={language.id}>
          {language.name}
        </option>
      ))}
    </SelectField>
  );
}
