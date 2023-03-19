import { useRef } from 'react';
import Button from '../../components/common/Button';
import InputText from '../../components/common/InputText';

function ComponentPage() {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <InputText ref={ref} autoFocus />
      <Button text="검색" icon="search" />
      <button onClick={() => ref.current?.focus()}>
        <div>hello world</div>
      </button>
    </div>
  );
}

export default ComponentPage;
