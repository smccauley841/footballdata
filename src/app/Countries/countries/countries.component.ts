import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/_services/countries.service';
import { Countries } from 'src/app/_models/Countrys/countries';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: Countries = {
    api: {
      results: 0,
      countries: []
    }
  };

  constructor(private countryService: CountriesService) { }

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.countryService.getCountries().subscribe((countries: any) => {
      this.countries = countries;
    })
  }

}
