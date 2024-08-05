import React, { useCallback } from 'react';
import { type UseFormReturn, useForm } from 'react-hook-form';

import { Button } from '@/components/atoms';
import { InputField } from '@/components/molecules';
import { Dialog } from '../Dialog';
import { wrap } from './Login.styled';
import type { IDialogProps } from '../Dialog.types';

interface ISignInForm {
  email: string;
  password: string;
}

export function Login({ ...props }: IDialogProps) {
  const methods = useForm<ISignInForm>();
  const onSubmit = useCallback((data: ISignInForm) => {
    console.log('data:', data);
  }, []);

  return (
    <Dialog existFooter={false} opacity={0.5} {...props}>
      <div css={wrap}>
        <div>
          <p>로그인</p>
        </div>
        <FormCard
          {...{
            methods,
            onSubmit,
          }}
        />
      </div>
    </Dialog>
  );
}

function FormCard({
  methods,
  onSubmit,
}: {
  methods: UseFormReturn<ISignInForm>;
  onSubmit: (data: ISignInForm) => void;
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
          <Button type="submit">Sign in</Button>
        </div>
      </form>
    </div>
  );
}
