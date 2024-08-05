import React, { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { Button } from '@/components/atoms';
import { InputField } from '@/components/molecules';
import { Layout } from '@/components/page';
import { AuthMutations } from '@/libs/features/auth';
import { ISignUpParams } from '@/libs/features/auth/types';
import IconClose from '@/static/icons/system/IconClose';
import { ROUTER } from '@/constants/router';

export default function SignUpPage() {
  const { mutate } = AuthMutations.useSignup();

  const router = useRouter();
  const { register, handleSubmit,
    getValues,
    setError,
  } = useForm<ISignUpParams>({ mode: 'onBlur' });
  const onSubmit = useCallback((data: ISignUpParams) => {
    mutate(data);
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
      <Button ref={closeButton} onClick={() => router.push(ROUTER.HOME)}><IconClose /></Button>
      <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingTop: '60px' }}>
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
              <InputField
                isRequired
                type="password"
                label="Password Confirm"
                id="card-password-confirm-field"
                placeholder="Enter your confirm password"
                {...register('confirmPassword', {
                  required: '비밀번호를 입력해주세요.',
                  minLength: {
                    value: 8,
                    message:
                  '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
                  },
                  onBlur: (e) => {
                    if (e.target.value !== getValues('password')) {
                      setError('confirmPassword', {
                        message: '비밀번호가 일치하지 않습니다.',
                      });
                    }
                  },
                })}
              />
            </div>

            <div>
              <Button type="submit">Sign up</Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
