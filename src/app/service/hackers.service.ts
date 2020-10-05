import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HackersService {
  private baseUrl = "https://hacker-news.firebaseio.com/v0/";
  constructor(private http: HttpClient) {

  }
  getTopStories(){
    return this.http.get(`${this.baseUrl}beststories.json`);
  }

  getNewestStories(){
    return this.http.get(`${this.baseUrl}newstories.json`);
  }

  getStory(id: Number){
    return this.http.get(`${this.baseUrl}item/${id}.json`);
  }
}
