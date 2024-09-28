import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Tariff {
  tariffName: string;
  downloadSpeed: number;
  uploadSpeed: number;
  price: number;
  tarifBenefits: string[];
}

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor() { }
  private tariffs: Tariff[] = [
    {
      downloadSpeed: 100,
      uploadSpeed: 50,
      price: 29.99,
      tariffName: 'Tarif 1',
      tarifBenefits: ['Unlimited data', 'Free router', '24/7 customer support']
    },
    {
      downloadSpeed: 200,
      uploadSpeed: 100,
      price: 49.99,
      tariffName: 'Tarif 2',
      tarifBenefits: ['Priority support', 'No throttling', 'Free installation']
    },
    {
      downloadSpeed: 50,
      uploadSpeed: 25, price: 19.99,
      tariffName: 'Tarif 3',

      tarifBenefits: ['Basic support', 'Free router']
    },
    {
      downloadSpeed: 150,
      uploadSpeed: 20,
      price: 79.99,
      tariffName: 'Tarif 4',
      tarifBenefits: ['Unlimited data', 'Free router', '24/7 customer support']
    },
    {
      downloadSpeed: 250,
      uploadSpeed: 50,
      price: 149.99,
      tariffName: 'Tarif 5',
      tarifBenefits: ['Unlimited data', 'Free router', '24/7 customer support']
    },
    {
      downloadSpeed: 350,
      uploadSpeed: 125,
      price: 49.99,
      tariffName: 'Tarif 6',
      tarifBenefits: ['Basic support', 'Free router']
    },
  ];

  getTariffs(): Observable<Tariff[]> {
    return of(this.tariffs);
  }
}
