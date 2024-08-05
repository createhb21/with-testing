import { useEffect } from 'react';
import { toast } from 'sonner';

function WelcomeToast() {
  useEffect(() => {
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes('welcome-toast=2')) {
      toast('🛍️ Welcome!', {
        id: 'welcome-toast',
        duration: Infinity,
        onDismiss: () => {
          document.cookie = 'welcome-toast=2; max-age=31536000; path=/';
        },
        description: (
          <>
            This is a high-performance, fashion store.{' '}
            <a href="https://square.a-bly.com/" target="_blank" rel="noreferrer">
              Sell your own
            </a>
            .
          </>
        ),
      });
    }
  }, []);

  return null;
}

export * from 'sonner';
export { WelcomeToast };
