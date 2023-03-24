import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../../components/common/Button';
import Tab, { TabContent } from '../../components/common/Tab';
import FormCreate from './components/FormCreate';
import FormFetcher from './components/FormFetcher';
import FormPlan from './components/FormPlan';
import { WorkOrder } from './model';

interface FormPageContextState {
  setHandleSuccess: Dispatch<SetStateAction<(data: WorkOrder) => void>>;
}

export const FormPageContext = createContext<FormPageContextState>({
  setHandleSuccess: () => {},
});

function FormPage() {
  const methods = useForm<WorkOrder>({
    defaultValues: {
      id: 0,
      title: '',
      create: {
        description: '',
      },
    },
  });
  const {
    reset,
    handleSubmit,
    formState: { isDirty, dirtyFields },
  } = methods;

  const [handleSuccess, setHandleSuccess] = useState(
    () => (data: WorkOrder) => {
      console.log('hello world');
    }
  );

  const formPageContextData = useMemo(
    () => ({
      setHandleSuccess,
    }),
    [setHandleSuccess]
  );

  const tabs: TabContent[] = [
    { id: 0, name: 'create', children: <FormCreate /> },
    { id: 1, name: 'plan', children: <FormPlan /> },
  ];

  const handleTabChange = () => {
    if (isDirty) {
      const result = confirm('변경사항이 존재합니다. 그래도 변경하시겠습니까?');
      if (result) {
        reset();
      }
      return !result;
    }
  };

  const onValid = (data: WorkOrder) => {
    if (!isDirty) {
      alert('변경사항이 없습니다.');
      return;
    }
    setTimeout(() => {
      alert('저장이 완료되었습니다.');
      handleSuccess(data);
    }, 500);
  };

  return (
    <div className="p-4">
      <div>
        <Button text="submit" onClick={handleSubmit(onValid)} />
      </div>
      <div>
        <FormProvider {...methods}>
          <FormPageContext.Provider value={formPageContextData}>
            <FormFetcher>
              <Tab tabs={tabs} onChangeTab={handleTabChange} />
            </FormFetcher>
          </FormPageContext.Provider>
        </FormProvider>
      </div>
    </div>
  );
}

export default FormPage;
