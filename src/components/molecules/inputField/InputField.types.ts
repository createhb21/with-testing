import type { InputProps } from '@/components/atoms/input';
import type { FormFieldProps } from '@/components/molecules/formField';

export type InputFieldProps = Pick<FormFieldProps, 'label'> & InputProps;
