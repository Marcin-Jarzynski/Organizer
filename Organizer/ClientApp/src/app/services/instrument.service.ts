import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class InstrumentService {
  constructor(private http: HttpClient) { }

  /*post(value: any) {
    return this.http.post('http://localhost:5000/api/Song', value);
  }*/
  getInstrumentList() {
    return this.http.get('http://localhost:5000/api/Instrument');
  }
}
