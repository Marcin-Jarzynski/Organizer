import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { SignalRService } from '../services/signal-r.service';


@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.css']
})
export class FileViewerComponent implements OnInit {

  constructor(private photoService: PhotoService, private signalRService: SignalRService) { }
  fileNames: any;
  displayFile: any;
  show: any;
  display: boolean = false;

  ngOnInit() {
    this.photoService.getFileList().subscribe(data => { this.fileNames = data });
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
  }

  selectImage(imageName: any) {
    this.displayFile = imageName
  }
  changeVisibility() {
    this.display = true;
  }
  closeDialog() {
    this.display = false;
    this.photoService.getFileList().subscribe(data => { this.fileNames = data; })
  }
}


