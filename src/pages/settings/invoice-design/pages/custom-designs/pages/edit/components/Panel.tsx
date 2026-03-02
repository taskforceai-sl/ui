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
import { Panel as PanelBase } from 'react-resizable-panels';
import { useMediaQuery } from 'react-responsive';

interface Props {
  children: ReactNode;
  renderBasePanel?: boolean;
}
export function Panel(props: Props) {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  const { children, renderBasePanel } = props;

  return isLargeScreen || Boolean(renderBasePanel) ? (
    <PanelBase defaultSize={50} minSize={25}>
      {children}
    </PanelBase>
  ) : (
    <>{children}</>
  );
}
