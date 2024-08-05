import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function useNavLinkTabs(): {
  current: HTMLButtonElement | undefined;
  addRefs: (refLink: HTMLButtonElement | null, to: string) => void;
} {
  const { pathname } = useRouter();
  const [refLinks] = useState<Record<string, HTMLButtonElement>>({});
  const [current, setCurrent] = useState<HTMLButtonElement | undefined>(undefined);

  const addRefs = (refLink: HTMLButtonElement | null, to: string) => {
    if (!refLink) {
      return;
    }

    refLinks[to.replace('/', '')] = refLink;
  };

  useEffect(() => {
    const key = pathname.split('/')?.[1] || '';
    setCurrent(refLinks[key]);
  }, [pathname]);

  return {
    current,
    addRefs,
  };
}

export default useNavLinkTabs;
