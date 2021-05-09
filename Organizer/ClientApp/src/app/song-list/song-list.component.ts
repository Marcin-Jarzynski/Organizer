import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  constructor(private songService: SongService) { }

  ngOnInit() {
  }

  songForm = new FormGroup({
    name: new FormControl(),
  });

  onSubmit() {
    this.songService.post(this.songForm.value).subscribe();
  }

}