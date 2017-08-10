import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
  constructor(private http: Http) {

  }

  getBooks(): Observable<any> {
    let url = "http://grovenue.co:8080/grovenue/ws/rest/resourceService/getResourceEntityBasedByUponSearchCriteria/token/898c3067-d97b-4937-9dc9-af7ef58cb91d?userId=anonymous&searchEntity=book&searchType=generic&keyword=test";
    return this.http.get(url).map((response) => {
      console.log(response);
      return response.json();
    })
  }


}
