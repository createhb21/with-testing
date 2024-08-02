import React, { useCallback, useEffect, useRef } from 'react';
import { Box, Button, Card, Flex, Heading, Text, TextField } from '@radix-ui/themes';
import { type UseFormReturn, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { FullScreen, ThemeToggle, PanelBackgroundImage } from '@/components/atoms';

interface ISignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
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
    <Card size="4" style={{ width: 400, position: 'relative' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex width="100%" align="center" justify="between" mb="5">
          <Heading as="h3" size="6" trim="start">
            Sign up
          </Heading>
          <ThemeToggle style={{ position: 'relative', top: '-1.5px' }} />
        </Flex>

        <Box mb="5">
          <label>
            <Text as="div" size="2" weight="medium" mb="1">
              Email
            </Text>
            <TextField.Root
              placeholder="Enter your email address"
              {...register('email', {
                required: true,
              })}
            />
          </label>
        </Box>

        <Box mb="5" position="relative">
          <Flex align="baseline" justify="between" mb="1">
            <Text as="label" size="2" weight="medium" htmlFor="card-password-field">
              Password
            </Text>
          </Flex>
          <TextField.Root
            id="card-password-field"
            placeholder="Enter your password"
            {...register('password', {
              required: true,
            })}
          />
        </Box>

        <Box mb="5" position="relative">
          <Flex align="baseline" justify="between" mb="1">
            <Text as="label" size="2" weight="medium" htmlFor="card-password-field">
              Confirm Password
            </Text>
          </Flex>
          <TextField.Root
            id="card-confirm-password-field"
            placeholder="Enter your confirm password"
            {...register('confirmPassword', {
              required: true,
            })}
          />
        </Box>

        <Flex mt="6" justify="end" gap="3">
          <Button type="submit">Sign up</Button>
        </Flex>
      </form>
    </Card>
  );
}

export default function SignUp() {
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
          }}
        />
      </Flex>
    </FullScreen>
  );
}
