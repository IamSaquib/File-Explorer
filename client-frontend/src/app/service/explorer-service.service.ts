import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExplorerServiceService {
  // public url = 'http://localhost:8080';
  public currentDir = null;
  public bread = new BehaviorSubject<string>('Root');
  public isDir = new BehaviorSubject<string>('none');
  public breadCrumb = this.bread.asObservable();
  public url = window.location.protocol + '//' + window.location.host;
  constructor(private http: HttpClient) { }

  getDir(dir): Observable<any> {
    this.currentDir = dir;
    return this.http.get(this.url + '/list_dir', {params: {path: dir}});
  }
  getFile(dir): Observable<any> {
    this.currentDir = dir;
    return this.http.get(this.url + '/get_file', {params: {path: dir}});
  }
  setBread(crumb: string){
    this.bread.next(crumb);
  }
  setDir(dir: string){
    this.isDir.next(dir);
  }
  getAttachment(content): Observable<any> {
    return this.http.get(content);
  }
}
