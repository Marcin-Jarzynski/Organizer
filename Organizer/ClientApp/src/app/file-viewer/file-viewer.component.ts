import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';


@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.css']
})
export class FileViewerComponent implements OnInit {

  constructor(private photoService: PhotoService) { }
  fileNames: any;
  displayFile: any;
  show: any;
  display: boolean = false;



  ngOnInit() {
    this.photoService.getFileList().subscribe(data => { this.fileNames = data })
  }

  selectImage(imageName: any) {
    this.displayFile = imageName
  }
  changeVisibility() {
    this.display = true;
  }
  closeDialog() {
    this.display = false;
    this.photoService.getFileList().subscribe(data => { this.fileNames = data })
  }
  }


