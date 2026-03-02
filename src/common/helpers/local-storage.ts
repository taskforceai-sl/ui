/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export function clearLocalStorage() {
  const displayChromeExtensionBanner = localStorage.getItem(
    'displayChromeExtensionBanner'
  );

  localStorage.clear();

  if (displayChromeExtensionBanner) {
    localStorage.setItem(
      'displayChromeExtensionBanner',
      displayChromeExtensionBanner
    );
  }
}
