import { TestBed, inject } from '@angular/core/testing';

import { PlantService } from './plant-service.service';

describe('PlantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantService]
    });
  });

  it('should be created', inject([PlantService], (service: PlantService) => {
    expect(service).toBeTruthy();
  }));
});
