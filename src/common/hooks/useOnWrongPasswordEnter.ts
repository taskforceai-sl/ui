/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useSetAtom } from 'jotai';

import { isPasswordRequiredAtom } from '$app/common/atoms/password-confirmation';
import { toast } from '../helpers/toast/toast';

export function useOnWrongPasswordEnter() {
  const setIsPasswordRequired = useSetAtom(isPasswordRequiredAtom);

  return (passwordIsRequired: boolean) => {
    if (passwordIsRequired) {
      toast.error('password_error_incorrect');
    } else {
      toast.dismiss();
    }

    setIsPasswordRequired(true);
  };
}
