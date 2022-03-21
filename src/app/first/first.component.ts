import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private title: Title,private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('First Page');
    this.meta.updateTag({name: 'description',content: '1 bla bla'});
  }

}
