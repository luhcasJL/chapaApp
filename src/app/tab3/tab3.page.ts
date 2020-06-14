import { Component } from '@angular/core';
// import { CompaniesService } from './companies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public list_companies = new Array<any>();


  constructor(
    // private CompaniesService: CompaniesService
  ) {
    // this.CompaniesService.getCompanies().subscribe(
    //   data => {
    //     this.list_companies = data;
    //     console.log(this.list_companies);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // )
  }

}
