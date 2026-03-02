/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useColorScheme } from '$app/common/colors';
import { useEffect, useRef, useState } from 'react';
import SignaturePad from 'signature_pad';

interface SignaturePadProps {
  onChange?: (signature: string) => void;
  defaultValue?: string;
}

export function DefaultSignature({
  onChange,
  defaultValue,
}: SignaturePadProps) {
  const colors = useColorScheme();

  const signature = useRef<SignaturePad | null>(null);
  const canvas = useRef<HTMLCanvasElement | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const [canvasWidth, setCanvasWidth] = useState(0);

  useEffect(() => {
    const element = canvas.current;
    if (!element) return;

    const pad = new SignaturePad(element);

    if (defaultValue) {
      pad.fromDataURL(defaultValue);
    }

    pad.addEventListener('endStroke', () => {
      onChange?.(pad.toDataURL());
    });

    signature.current = pad;

    return () => {
      pad.removeEventListener('endStroke', () => {
        onChange?.(pad.toDataURL());
      });
      signature.current = null;
    };
  }, []);

  useEffect(() => {
    const updateCanvasSize = () => {
      if (containerRef.current && canvas.current) {
        const containerWidth = containerRef.current.offsetWidth;

        setCanvasWidth(containerWidth);
      }
    };

    updateCanvasSize();

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', updateCanvasSize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <canvas
        ref={canvas}
        width={canvasWidth}
        height={200}
        className="border"
        style={{ borderColor: colors.$24 }}
      />

      <div className="flex justify-end mt-2" />
    </div>
  );
}
