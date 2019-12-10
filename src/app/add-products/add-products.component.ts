import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-products",
  templateUrl: "./add-products.component.html",
  styleUrls: ["./add-products.component.scss"]
})
export class AddProductsComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      shortDescription: ["", Validators.required],
      sku: ["", Validators.required],
      weight: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      price: ["", Validators.required]
    });
  }
}
