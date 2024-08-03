import React, { useCallback, useEffect, useRef } from 'react';
import { type UseFormReturn, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { InputField } from '@/components/molecules';
import { FullScreen, PanelBackgroundImage, Button } from '@/components/atoms';

interface ISignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  // const { resolvedTheme } = useTheme();

  const router = useRouter();
  const methods = useForm<ISignUpForm>();
  const onSubmit = useCallback((data: ISignUpForm) => {
    console.log('data:', data);
    router.back();
  }, []);

  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (closeButton.current) {
      closeButton.current.focus();
    }
  }, []);

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
          }}
        />
      </div>
    </FullScreen>
  );
}

function FormCard({
  methods,
  onSubmit,
}: {
  methods: UseFormReturn<ISignUpForm>;
  onSubmit: (data: ISignUpForm) => void;
}) {
  const { register, handleSubmit, formState } = methods;
  const { errors } = formState;

  console.log('errors:', errors);

  return (
    <div style={{ width: 400, position: 'relative' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            Sign up
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
          <InputField
            isRequired
            label="Password Confirm"
            id="card-password-confirm-field"
            placeholder="Enter your confirm password"
            {...register('confirmPassword', {
              required: true,
            })}
          />
        </div>

        <div>
          <Button type="submit">Sign up</Button>
        </div>
      </form>
    </div>
  );
}
