import { ROUTER } from '@/constants/router';
import { useRouter } from 'next/router';
import { DefaultTheme } from 'styled-components';

export function Welcome() {
  const router = useRouter();

  return (
    <div css={{ width: 'max-content', margin: '120px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <p css={{ fontFamily: 'Adobe Text Pro', fontSize: '4.8rem' }}>Welcome</p>
      <br />
      <button css={({ theme }: { theme: DefaultTheme }) => ({ fontSize: '1.8rem', color: theme.colors.blue9 })} onClick={() => router.push(ROUTER.AUTH.SIGNIN)}>go sign in</button>
    </div>
  );
}
