import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Card, Flex, Heading } from '@radix-ui/themes';
import { type UseFormReturn, useForm } from 'react-hook-form';

import { InputField } from '@/components/molecules';
import { FullScreen, ThemeToggle, PanelBackgroundImage } from '@/components/atoms';
import { ROUTER } from '@/constants/router';

interface ISignInForm {
  email: string;
  password: string;
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
    <Card size="4" style={{ width: 400, position: 'relative' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex width="100%" align="center" justify="between" mb="5">
          <Heading as="h3" size="6" trim="start">
            Sign in
          </Heading>
          <ThemeToggle style={{ position: 'relative', top: '-1.5px' }} />
        </Flex>

        <Box mb="5">
          <InputField
            isRequired
            label="Email"
            placeholder="Enter your email address"
            {...register('email', {
              required: true,
            })}
          />
        </Box>

        <Box mb="5" position="relative">
          <InputField
            isRequired
            label="Password"
            id="card-password-field"
            placeholder="Enter your password"
            {...register('password', {
              required: true,
            })}
          />
        </Box>

        <Flex mt="6" justify="end" gap="3">
          <Button type="button" variant="soft" onClick={goSignUpPage}>
            Create an account
          </Button>
          <Button type="submit">Sign in</Button>
        </Flex>
      </form>
    </Card>
  );
}

export default function SignIn() {
  const methods = useForm<ISignInForm>();
  const onSubmit = useCallback((data: ISignInForm) => {
    console.log('data:', data);
  }, []);

  const router = useRouter();
  const goSignUpPage = useCallback(() => router.push(ROUTER.AUTH.SIGNUP), []);

  return (
    <FullScreen as="main">
      <Flex
        width="100%"
        height="100%"
        align="center"
        justify="center"
        position="relative"
        py={{ initial: '7', xs: '9', sm: '100px' }}
      >
        <Flex overflow="hidden" position="absolute" width="100%" height="100%" inset="0">
          <PanelBackgroundImage id="1" />
        </Flex>

        <FormCard
          {...{
            methods,
            onSubmit,
            goSignUpPage,
          }}
        />
      </Flex>
    </FullScreen>
  );
}
