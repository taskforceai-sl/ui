/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Link } from '../../../components/forms/Link';
import Logo from '../../../resources/images/invoiceninja-logo@dark.png';

export function Header() {
  return (
    <>
      <div className="flex justify-center py-8">
        <Link to="/">
          <img src={Logo} alt="Red Invoice Logo" className="h-12" />
        </Link>
      </div>
    </>
  );
}
