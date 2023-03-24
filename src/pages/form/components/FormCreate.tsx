import { useContext, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormPageContext } from '..';
import InputText from '../../../components/common/InputText';
import { WorkOrder } from '../model';

function FormCreate() {
  console.log('form create');
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
        create: data.create,
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
          render={({ field }) => <InputText label="title" {...field} />}
        />
      </div>
      <div>
        <Controller
          control={control}
          name="create.description"
          render={({ field }) => <InputText label="description" {...field} />}
        />
      </div>
    </div>
  );
}

export default FormCreate;
