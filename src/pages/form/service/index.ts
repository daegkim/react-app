import type { ServiceResult } from '../../../services/model';
import type { WorkOrder } from '../model';

class FormService {
  getFormData() {
    return new Promise<ServiceResult<WorkOrder>>((resolve) => {
      setTimeout(() => {
        resolve({
          isSuccess: true,
          data: {
            id: 10,
            title: '작업오더 테스트',
            create: {
              description: '작업오더 테스트 입니다.',
            },
            plan: {
              planDate: '2023-12-32',
              planPeople: [{ id: 0, name: 'ferde' }],
            },
          },
        });
      }, 2000);
    });
  }
}

export const formService = new FormService();
