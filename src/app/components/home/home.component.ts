import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ApiServices } from 'src/app/services/api.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-products',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: string[] = [];
  allProducts: Product[] = [];
  selectedCategory: string = '';
  isLoading: boolean = false;
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(private apiServices: ApiServices, private searchService: SearchService,private router:Router) {}

  ngOnInit(): void {
    this.loadCategories();
    this.searchService.currentSearchTerm.subscribe(term => {
      this.searchTerm = term;
      this.filterProducts();
    });
  }

  // Getting the categories 
  loadCategories(): void {
    this.isLoading = true;
    this.apiServices.getCategories().subscribe(categories => {
      this.categories = categories;
      if (categories.length > 0) {
        this.selectedCategory = categories[0];
        this.loadProducts();
      }
      this.isLoading = false;
    }, error => {
      console.error(error);
      this.isLoading = false;
    });
  }

  // Getting all the products
  loadProducts(): void {
    this.isLoading = true;
    this.apiServices.getAllProducts()
      .subscribe(products => {
        this.allProducts = products;
        this.filterProducts();
        this.isLoading = false;
      }, error => {
        console.error(error);
        this.isLoading = false;
      });
  }

  // Assigning the selected category 
  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.filterProducts();
  }

  // Filtering products based on search term and selected category
  filterProducts(): void {
    let filtered = this.allProducts;    
    if (this.searchTerm) {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    else if (this.selectedCategory) {
      filtered = filtered.filter(product => product.category === this.selectedCategory);
    }

    this.filteredProducts = filtered;
  }
  //navigating to the product page
  goToProduct(id:number):void{
    this.router.navigate(['/products',id])
  }
}
