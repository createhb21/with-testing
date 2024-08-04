import React, { useCallback, useEffect, useRef } from 'react';
import { type UseFormReturn, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { Button } from '@/components/atoms';
import { InputField } from '@/components/molecules';
import { Layout } from '@/components/page';

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
    <Layout>
      <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingTop: '60px' }}>
        <FormCard
          {...{
            methods,
            onSubmit,
          }}
        />
      </div>
    </Layout>
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
