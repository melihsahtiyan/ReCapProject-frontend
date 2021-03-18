import { Component, OnInit } from '@angular/core';
import { Rent } from 'src/app/models/rent';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent implements OnInit {
  rents: Rent[] = [];
  dataLoaded = false;

  constructor(private rentService: RentService) {}

  ngOnInit(): void {
    this.getRents();
  }

  getRents() {
    this.rentService.getRents().subscribe((response) => {
      this.rents = response.data;
      this.dataLoaded = true;
    });
  }
}
