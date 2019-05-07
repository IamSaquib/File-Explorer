import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExplorerServiceService } from 'src/app/service/explorer-service.service';
import { iif } from 'rxjs';

@Component({
  selector: 'app-list-dir',
  templateUrl: './list-dir.component.html',
  styleUrls: ['./list-dir.component.css']
})
export class ListDirComponent implements OnInit {
  public files;
  public isDir;
  public dir = '/';
  public breadcrumb;
  public content;
  constructor(
    private http: HttpClient,
    private explorer: ExplorerServiceService
    ) {
      // this.explorer.setBread().push('Root');
      this.explorer.setDir('dir');
      this.explorer.breadCrumb.subscribe(data=> {
        this.breadcrumb = data.split('/'); 
      });
      this.explorer.getDir(this.dir).subscribe(data => {
        this.files = data;
        if(data.type === 'isFile') {
          this.explorer.setDir('file');
        } else {
          this.explorer.setDir('dir');
        }
        this.explorer.isDir.subscribe(dir=> {
          this.isDir = dir;
          if (dir === 'file') {
            this.explorer.getFile(this.dir).subscribe(content=> {
              this.content = content;
            })
        }
        })
      });
     }
  ngOnInit() {
  }
  onItemClick(file) {
    if(file.name.length=== 1) {
      this.dir = file.name;
    } else if(this.dir.length === 1) {
      this.dir = '/' + file.name;
    } else{
      this.dir += '/' + file.name;
    }
    this.explorer.setBread('Root' +this.dir);
    this.explorer.getDir(this.dir).subscribe(data => {
      this.files = data;
      if (data.type) {
        this.explorer.setDir(data.type);
        this.isDir = data.type;
      } else {
        this.explorer.setDir('dir');
        this.isDir = 'dir';
      }
      if (this.isDir === 'mp3' || this.isDir === 'mp4' || this.isDir === 'png' || this.isDir === 'jpg' || this.isDir === 'jpeg') {
        this.content = 'http://localhost:8080/get_file?path=' + this.dir;
      } else if(this.isDir ==='txt' || this.isDir=== 'cpp' ){
        this.explorer.setDir('txt');
        this.explorer.getFile(this.dir).subscribe( content => {
          this.content = content.body;
        });
      } else if(this.isDir !== 'dir') {
        this.explorer.setDir('other');
        const content = 'http://localhost:8080/get_file?path=' + this.dir;
        this.explorer.getAttachment(content).subscribe(download => {
          window.open(content, '_blank');
        });
      }
    });
    this.explorer.isDir.subscribe(dir => {
      this.isDir = dir;
    });
  }
  onCrumbClick(crumb) {
    let newCrumb = '';
    const breadcrumb = this.breadcrumb.splice(1, this.breadcrumb.length);
    if(crumb === 'Root'){
      const file = {
        name: '/'
      }
      this.onItemClick(file); 
    } else {
      for(let i of breadcrumb) {
        if (i === crumb) {
          newCrumb += '/'+i;
          break;
        } else {
          newCrumb +=  '/' + i;
        }
      }
      const name = newCrumb.split('/');
      const file = {
        name: name[name.length-1]
      }
      this.breadcrumb = newCrumb.split('/');
      this.breadcrumb =this.breadcrumb.splice(1,this.breadcrumb.length-2);
      this.breadcrumb.unshift('Root');
      this.dir=newCrumb.substr(0,newCrumb.lastIndexOf('/'));
      this.onItemClick(file);
    }
  }
}
