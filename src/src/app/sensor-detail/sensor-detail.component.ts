import { Component, OnInit, Input } from '@angular/core';
import { Sensor } from '../sensor';

@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.sass']
})
export class SensorDetailComponent implements OnInit {

  @Input() sensor: Sensor;
  constructor() { }

  ngOnInit() {
  }

}
