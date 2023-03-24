import { PropsWithChildren, ReactNode, useMemo, useState } from 'react';
import Button from './Button';

export interface TabContent {
  id: number;
  name: string;
  children?: ReactNode;
}

interface TabProps {
  tabs: TabContent[];
  defaultTab?: number;
  onChangeTab?: () => boolean | void;
}

function Tab({ tabs, defaultTab = 0, onChangeTab }: TabProps) {
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  return (
    <div>
      <div className="flex">
        {tabs.map((tab, index) => (
          <Button
            key={tab.id}
            text={tab.name}
            onClick={() => {
              if (selectedTab !== index && onChangeTab?.()) {
                return;
              }
              setSelectedTab(index);
            }}
          />
        ))}
      </div>
      <div>{tabs[selectedTab].children}</div>
    </div>
  );
}

export default Tab;
