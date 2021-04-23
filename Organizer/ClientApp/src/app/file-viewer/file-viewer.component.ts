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



  ngOnInit() {
    this.photoService.getFileList().subscribe(data => { this.fileNames = data })
  }

}
