import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class NutyService {
  constructor(private http: HttpClient) { }

  post(value: any) {
    return this.http.post('http://localhost:5000/Nuty', value);
  }
}
