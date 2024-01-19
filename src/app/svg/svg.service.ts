import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {Observable, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SvgService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getSvg(path: string): Observable<any> {
    return this.httpClient.get(`assets/img/${path}.svg`, { responseType: 'text' });
  }

}
