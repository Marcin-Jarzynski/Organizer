import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  ngOnInit() {
    this.formData = new FormData();
    this.form = this.formBuilder.group({
      id: '',
      piosenkaId: new FormControl(''),
      instrumentId: new FormControl(''),
      zdjecie: new FormControl(null)
    })
  }
  onSubmit(){
    this.formData.append('piosenkaId', this.form.get('piosenkaId').value);
    this.formData.append('instrumentId', this.form.get('instrumentId').value);
    this.nutyService.post(this.formData).subscribe( () => console.log('git'))
  }
  fileChange(event){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        this.formData.append('zdjecie', file, file.name);
    }
  }
}
