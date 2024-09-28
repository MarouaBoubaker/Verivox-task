import { Component, OnInit } from '@angular/core';
import { TariffService } from 'src/app/services/tariff.service';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.sass']
})
export class TariffListComponent implements OnInit {

  tariffs: any[] = [];
  filteredTariffs: any[] = [];
  sortKey: string = '';

  constructor(private tariffService: TariffService) { }

  ngOnInit() {
    this.tariffService.getTariffs().subscribe((data) => {
      this.tariffs = data;
      this.filteredTariffs = [...this.tariffs];
    });
  }

  sortTariffs(key: string): void {
    this.sortKey = key;
    this.filteredTariffs = [...this.tariffs].sort((a, b) => (a[key] > b[key] ? 1 : -1));
  }

}
