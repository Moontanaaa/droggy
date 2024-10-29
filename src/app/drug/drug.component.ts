// drug.component.ts
import { Component } from '@angular/core';

interface Photo {
  src: string;
  alt: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent {
  
}



