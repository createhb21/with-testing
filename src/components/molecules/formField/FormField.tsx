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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          {label}
          {/* {isRequired && <span>*</span>} */}
        </div>
        {children}
      </div>
    </label>
  );
}
