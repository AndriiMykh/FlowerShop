import { TestBed } from '@angular/core/testing';

import { FlowerCategoryService } from './flower-category.service';

describe('FlowerCategoryService', () => {
  let service: FlowerCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowerCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
