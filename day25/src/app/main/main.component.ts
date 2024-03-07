import { Component, OnInit } from '@angular/core';
import { Post } from '../services/postsInterface';
import { PostsService } from '../services/posts.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  
  lst : Post[] = [];

  constructor(private postService: PostsService){}
  
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() : void {
    this.postService.getPosts()
    .subscribe(lst => this.lst = lst);
  }

}
