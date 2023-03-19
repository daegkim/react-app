import { useRef } from 'react';
import Button from '../../components/common/Button';
import InputText from '../../components/common/InputText';
import Accordion from '../../components/layout/Accordion';

function ComponentPage() {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <InputText ref={ref} autoFocus />
      <Button text="검색" icon="search" />
      <button onClick={() => ref.current?.focus()}>
        <div>hello world</div>
      </button>
      <Accordion title="long" className="w-40">
        hello
      </Accordion>
    </div>
  );
}

export default ComponentPage;
