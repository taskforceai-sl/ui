/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export function useCleanDescriptionText() {
  return (descriptionText: string) => {
    if (descriptionText.includes('\\n ')) {
      return descriptionText.replace('\\n', '');
    }

    if (descriptionText.includes('\\n')) {
      return descriptionText.replace('\\n', ' ');
    }

    return descriptionText;
  };
}
