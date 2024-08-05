import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { type UseFormReturn, useForm } from 'react-hook-form';

import { InputField } from '@/components/molecules';
import { FullScreen, PanelBackgroundImage, Button } from '@/components/atoms';
import { ROUTER } from '@/constants/router';

interface ISignInForm {
  email: string;
  password: string;
}

export default function SignInPage() {
  const methods = useForm<ISignInForm>();
  const onSubmit = useCallback((data: ISignInForm) => {
    console.log('data:', data);
  }, []);

  const router = useRouter();
  const goSignUpPage = useCallback(() => router.push(ROUTER.AUTH.SIGNUP), []);

  return (
    <FullScreen as="main">
      <div>
        <div style={{ overflow: 'hidden', position: 'absolute', width: '100%', height: '100%', inset: '0' }}>
          <PanelBackgroundImage id="1" />
        </div>

        <FormCard
          {...{
            methods,
            onSubmit,
            goSignUpPage,
          }}
        />
      </div>
    </FullScreen>
  );
}

function FormCard({
  methods,
  onSubmit,
  goSignUpPage,
}: {
  methods: UseFormReturn<ISignInForm>;
  onSubmit: (data: ISignInForm) => void;
  goSignUpPage: VoidFunction;
}) {
  const { register, handleSubmit, formState } = methods;

  const { errors } = formState;

  console.log('errors:', errors);

  return (
    <div style={{ width: 400, position: 'relative' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            Sign in
          </div>
        </div>

        <div>
          <InputField
            isRequired
            label="Email"
            placeholder="Enter your email address"
            {...register('email', {
              required: true,
            })}
          />
        </div>

        <div>
          <InputField
            isRequired
            label="Password"
            id="card-password-field"
            placeholder="Enter your password"
            {...register('password', {
              required: true,
            })}
          />
        </div>

        <div>
          <Button type="button" variant="solid" onClick={goSignUpPage}>
            Create an account
          </Button>
          <Button type="submit">Sign in</Button>
        </div>
      </form>
    </div>
  );
}
