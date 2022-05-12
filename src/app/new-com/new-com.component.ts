import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-com',
  templateUrl: './new-com.component.html',
  styleUrls: ['./new-com.component.scss']
})
export class NewComComponent implements OnInit {

  componentName = 'user'
  constructor() { }

  ngOnInit(): void {
  }

}
