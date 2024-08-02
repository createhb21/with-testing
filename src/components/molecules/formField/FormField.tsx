import { Flex, Text } from '@radix-ui/themes';

import type { FormFieldProps } from './FormField.types';

export function FormField(props: FormFieldProps) {
  const {
    label,
    // isRequired,
    children,
    ...rest
  } = props;

  return (
    <label {...rest}>
      <Flex direction="column">
        <Text as="div" size="2" weight="medium" mb="1">
          {label}
          {/* {isRequired && <span>*</span>} */}
        </Text>
        {children}
      </Flex>
    </label>
  );
}
