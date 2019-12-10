import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddProductsComponent } from "./add-products/add-products.component";
import { GooglemapComponent } from "./googlemap/googlemap.component";

const routes: Routes = [
  { path: "add-products", component: AddProductsComponent },
  { path: "find-latitude-longitude", component: GooglemapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
