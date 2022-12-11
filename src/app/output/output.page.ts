import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.page.html',
  styleUrls: ['./output.page.scss'],
})
export class OutputPage implements OnInit {
  datamap!: any;
  actual_date!: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.datamap = this.activatedRoute.snapshot.paramMap;
    this.actual_date = this.datamap.params.birth_date.split('T')[0];
  }

  ngOnInit() {}
}
