import { PropsWithChildren } from 'react';
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
} & PropsWithChildren;

const FormProvider = ({ children, onSubmit, methods }: Props) => (
  <Form {...methods}>
    <form onSubmit={onSubmit}>{children}</form>
  </Form>
);

export default FormProvider;
