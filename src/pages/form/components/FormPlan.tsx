import { useContext, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormPageContext } from '..';
import InputText from '../../../components/common/InputText';
import { WorkOrder } from '../model';

function FormPlan() {
  console.log('form plan');
  const {
    control,
    reset,
    formState: { defaultValues },
  } = useFormContext<WorkOrder>();
  const { setHandleSuccess } = useContext(FormPageContext);

  useEffect(() => {
    setHandleSuccess(() => (data: WorkOrder) => {
      reset({
        ...defaultValues,
        title: data.title,
        plan: data.plan,
      });
    });
  }, [defaultValues]);

  return (
    <div>
      <div>
        <Controller
          control={control}
          name="id"
          render={({ field }) => <InputText label="id" {...field} readOnly />}
        />
      </div>
      <div>
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <InputText label="title" {...field} readOnly />
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name="plan.planDate"
          render={({ field }) => <InputText label="plandate" {...field} />}
        />
      </div>
    </div>
  );
}

export default FormPlan;
