import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private nutyService: PhotoService
    ) { }

  public form: FormGroup;
  private formData: FormData;

  @Output() photoAdded = new EventEmitter();


  ngOnInit() {
    this.formData = new FormData();
    this.form = this.formBuilder.group({
      zdjecie: new FormControl(null)
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
}
