import { Component, OnInit } from '@angular/core';
import { Sensor } from '../sensor';
import { SENSORS } from '../mock-sensors';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.sass']
})
export class SensorsComponent implements OnInit {

  sensors = SENSORS;
  selectedSensor: Sensor;
  constructor() { }

  ngOnInit() {
  }
onSelect(sensor: Sensor): void {
  this.selectedSensor = sensor;
}
}

