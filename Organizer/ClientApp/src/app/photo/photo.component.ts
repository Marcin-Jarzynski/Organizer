import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { InstrumentService } from '../services/instrument.service';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
 

  constructor(
    private formBuilder: FormBuilder,
    private nutyService: PhotoService,
    private instrumentService: InstrumentService,
    private songService: SongService

  ) { }
  instruments: any
  songs: any

  public form: FormGroup;
  private formData: FormData;

  @Output() photoAdded = new EventEmitter();


  ngOnInit() {
    this.getInstruments();
    this.getSongs();
    this.formData = new FormData();
    this.form = this.formBuilder.group({
      zdjecie: new FormControl(),
      instrument: new FormControl(),
      song: new FormControl()
    })
  }
  onSubmit(){
    this.nutyService.post(this.formData).subscribe(() => {
      this.photoAdded.emit();
      this.form.reset();
    }
    )
  }
  fileChange(event){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[fileList.length - 1];
      this.formData = new FormData();
      this.formData.append('zdjecie', file, file.name);
     
    }
   
  }

  getInstruments() {
    this.instrumentService.getInstrumentList().subscribe(data => { this.instruments = data });
  }
  getSongs() {
    this.songService.getSongList().subscribe(data => {this.songs = data})
  }
}
