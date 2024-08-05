import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { type UseFormReturn, useForm } from 'react-hook-form';

import { Button } from '@/components/atoms';
import { InputField } from '@/components/molecules';
import { Layout } from '@/components/page';
import { ROUTER } from '@/constants/router';
import { AuthMutations } from '@/libs/features/auth';
import { ISignInParams } from '@/libs/features/auth/types';

export default function SignInPage() {
  const { mutate } = AuthMutations.useSignin();

  const methods = useForm<ISignInParams>({ mode: 'onBlur' });
  const onSubmit = useCallback((data: ISignInParams) => {
    mutate(data);
  }, []);

  const router = useRouter();
  const goSignUpPage = useCallback(() => router.push(ROUTER.AUTH.SIGNUP), []);

  return (
    <Layout>
      <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingTop: '60px' }}>
        <FormCard
          {...{
            methods,
            onSubmit,
            goSignUpPage,
          }}
        />
      </div>
    </Layout>
  );
}

function FormCard({
  methods,
  onSubmit,
  goSignUpPage,
}: {
  methods: UseFormReturn<ISignInParams>;
  onSubmit: (data: ISignInParams) => void;
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
              required: '이메일을 올바르게 입력해주세요.',
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: '이메일을 올바르게 입력해주세요.',
              },
            })}
          />
        </div>

        <div>
          <InputField
            isRequired
            type="password"
            label="Password"
            id="card-password-field"
            placeholder="Enter your password"
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message:
                  '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
              },
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
