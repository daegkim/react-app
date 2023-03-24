import { PropsWithChildren, useEffect } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { WorkOrder } from '../model';
import { formService } from '../service';

function FormFetcher({ children }: PropsWithChildren) {
  const { reset } = useFormContext<WorkOrder>();

  useEffect(() => {
    formService.getFormData().then((res) => {
      if (res.isSuccess) {
        reset(res.data);
      }
    });
  }, []);

  return <>{children}</>;
}

export default FormFetcher;
