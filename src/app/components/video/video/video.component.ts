import { Component, OnInit } from '@angular/core';
import { Video } from '../../../models/video';
import { VideoService } from '../../../services/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  videos!: Array<Video>;

  constructor(private videoService: VideoService) {
    this.getVideo();
  }

  ngOnInit() {}

  public getVideo() {
    this.videoService.searchVideo('charly').subscribe((result) => {
      console.log(result);
      this.videos = new Array<Video>();
      this.videos = result;
      console.log(this.videos);
    });
  }
}
