export interface WorkOrder {
  id: number;
  title: string;
  create?: {
    description: string;
  };
  plan?: {
    planDate: string;
    planPeople: PlanPerson[];
  };
}

interface PlanPerson {
  id: number;
  name: string;
}
