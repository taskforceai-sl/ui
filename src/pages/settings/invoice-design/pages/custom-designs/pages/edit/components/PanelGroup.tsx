/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { ReactNode } from 'react';
import { PanelGroup as PanelGroupBase } from 'react-resizable-panels';
import { useMediaQuery } from 'react-responsive';

interface Props {
  children: ReactNode;
}
export function PanelGroup(props: Props) {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  const { children } = props;

  return isLargeScreen ? (
    <PanelGroupBase direction="horizontal" className="gap-4 mt-4">
      {children}
    </PanelGroupBase>
  ) : (
    <div className="flex flex-col gap-4">{children}</div>
  );
}
