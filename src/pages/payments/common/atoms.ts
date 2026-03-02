/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { atom } from 'jotai';
import { PaymentOnCreation } from '../create/Create';

export const paymentAtom = atom<PaymentOnCreation | undefined>(undefined);
