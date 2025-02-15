import { type PropsWithChildren, useState } from 'react';
import { createPortal } from 'react-dom';

import { useDidMount } from '@/hooks/lifeCycle';

export function Portal({ children }: PropsWithChildren) {
  const [container, setContainer] = useState<Element | null>(null);

  useDidMount(() => {
    if (document) {
      setContainer(document.body);
    }
  });

  if (!container) return null;

  return createPortal(children, container);
}
