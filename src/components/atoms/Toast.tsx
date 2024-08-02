import { useEffect } from 'react';
import { toast } from 'sonner';

function WelcomeToast() {
  useEffect(() => {
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes('welcome-toast=2')) {
      toast('🛍️ Welcome to Ably!', {
        id: 'welcome-toast',
        duration: Infinity,
        onDismiss: () => {
          document.cookie = 'welcome-toast=2; max-age=31536000; path=/';
        },
        description: (
          <>
            This is a high-performance, fashion store powered by Ably.{' '}
            <a href="https://square.a-bly.com/" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
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
