import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  display: boolean

  constructor(private songService: SongService, private router: Router) { }
  songs: any;
  

  getSongList() {
    this.songService.getSongList().subscribe(data => { this.songs = data });
  }
  ngOnInit() {
    this.getSongList();
  }

  songForm = new FormGroup({
    name: new FormControl(),
  });

  onSubmit() {
    this.songService.post(this.songForm.value).subscribe(() => {
      this.getSongList();
      this.songForm.reset();
    }
    );
   
  }

  selectSong(id) {
    this.router.navigate(['/song/' + id])
    console.log(this.router.getCurrentNavigation());
  }

  showPopup() {
    this.display = true;

  }

}
