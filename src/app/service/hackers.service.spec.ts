import { TestBed } from '@angular/core/testing';

import { HackersService } from './hackers.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('HackersService', () => {
  let service: HackersService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HackersService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should the newest stories', ()=>{
    expect(service.getNewestStories).toBeTruthy();
  });
});
