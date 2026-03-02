/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useDispatch } from 'react-redux';
import { updateChanges } from '$app/common/stores/slices/user';

export function useHandleCurrentUserChangeProperty() {
  const dispatch = useDispatch();

  return (property: string, value: string | number | boolean) => {
    dispatch(
      updateChanges({
        property,
        value,
      })
    );
  };
}
