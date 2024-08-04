import { ROUTER } from '@/constants/router';
import { useRouter } from 'next/router';
import { DefaultTheme } from 'styled-components';

export function Welcome() {
  const router = useRouter();

  return (
    <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingTop: '60px' }}>
      <p css={{ fontFamily: 'Adobe Text Pro', fontSize: '4.8rem', marginBottom: '16px' }}>Welcome</p>
      <pre css={{ fontFamily: 'Adobe Text Pro', fontSize: '3.6rem', textAlign: 'center', marginBottom: '16px' }}>{'As a user of the worker team,\nyou have permission to access this site.'}</pre>
      <br />
      <button css={({ theme }: { theme: DefaultTheme }) => ({ fontSize: '1.8rem', color: theme.colors.ruby9 })} onClick={() => router.push(ROUTER.AUTH.SIGNIN)}>Sign In</button>
    </div>
  );
}
