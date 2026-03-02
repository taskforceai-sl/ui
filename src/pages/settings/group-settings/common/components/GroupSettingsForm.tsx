/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { GroupSettings } from '$app/common/interfaces/group-settings';
import { ValidationBag } from '$app/common/interfaces/validation-bag';
import { Element } from '$app/components/cards';
import { InputField } from '$app/components/forms';
import { useTranslation } from 'react-i18next';

interface Props {
  groupSettings: GroupSettings;
  handleChange: (
    property: keyof GroupSettings,
    value: GroupSettings[keyof GroupSettings]
  ) => void;
  errors: ValidationBag | undefined;
}

export function GroupSettingsForm(props: Props) {
  const [t] = useTranslation();

  const { groupSettings, handleChange, errors } = props;

  return (
    <Element leftSide={t('name')}>
      <InputField
        value={groupSettings.name}
        onValueChange={(value) => handleChange('name', value)}
        errorMessage={errors?.errors.name}
        cypressRef="groupSettingsNameField"
      />
    </Element>
  );
}
