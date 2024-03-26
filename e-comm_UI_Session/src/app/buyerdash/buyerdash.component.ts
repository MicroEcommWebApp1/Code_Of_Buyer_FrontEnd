import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { ViewChild } from '@angular/core';
import { CartService } from '../Services/cart.service';



@Component({
  selector: 'app-buyerdash',
  templateUrl: './buyerdash.component.html',
  styleUrls: ['./buyerdash.component.css']
})
export class BuyerdashComponent {
  
  @ViewChild('filtersSidebar') filtersSidebar!: ElementRef;
  @ViewChild('applyButton') applyButton!: ElementRef;
 
  products = [
    {id:1, name: 'AllenSolly Jeans', price: 900, image: 'assets/jeans.jpg',category: 'Men', subcategory: 'jeans'  },
    {id:2, name: 'Levis Shirt', price: 1800, image: 'assets/shirt.jpg',category: 'Men', subcategory: 'Shirt'  },
    {id:3, name: 'Avaasa Kurti', price: 700, image: 'assets/kurthi.jpg' ,category: 'Women', subcategory: 'Kurtis'},
    {id:4, name: 'Soch Saree', price: 1300, image: 'assets/saree.jpg' ,category: 'Women', subcategory: 'saree'},
    {id:5,name: 'Iphone 15 Pro Max', price: 110000, image: 'assets/mobile.jpg' ,category: 'Electronics', subcategory: 'mobile'},
    {id:6,name: 'Asus VivoBook S15', price: 130000, image: 'assets/laptop.jpg' ,category: 'Electronics', subcategory: 'Laptop'}
  ];
  filteredProducts: any[] = [];
  categories: string[] = ['Men', 'Women', 'Electronics']; // Example categories
  subcategories: string[] = ['jeans', 'shirt', 'kurtis','saree','mobile','Laptop']; // Example subcategories
  selectedCategory: string = '';
  selectedSubcategory: string = '';
  filtersApplied: boolean = false;
 
  constructor(private cartService: CartService,private renderer: Renderer2) {
   
  }
  ngAfterViewInit() {
    this.moveApplyButton();
  }
  moveApplyButton() {
    const filtersSidebarRect = this.filtersSidebar.nativeElement.getBoundingClientRect();
    const applyButtonElement = this.applyButton.nativeElement;
    const applyButtonRect = applyButtonElement.getBoundingClientRect();
 
    if (applyButtonRect.top < filtersSidebarRect.bottom) {
      const topPosition = filtersSidebarRect.bottom + window.pageYOffset;
      this.renderer.setStyle(applyButtonElement, 'top', `${topPosition}px`);
    }
  }
 
  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log('Product added to cart:', product);
    // alert('Item added to cart');
    document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
      e.preventDefault();
     
      if(!button.classList.contains('loading')) {
   
          button.classList.add('loading');
   
          setTimeout(() => button.classList.remove('loading'), 1700);
   
      }
     
  }));
  }
  ngOnInit() {
    // Initially, show all products
    this.filteredProducts = this.products;
  }
 
  increaseQuantity(index: number) {
    this.cartService.increaseQuantity(index);
  }
 
  decreaseQuantity(index: number) {
    this.cartService.decreaseQuantity(index);
  }
  filterProducts() {
    if (this.filtersApplied)
      this.filteredProducts = this.products.filter(product => {
        const selectedCategoryLower = this.selectedCategory.toLowerCase();
        const productCategoryLower = product.category.toLowerCase();
        const selectedSubcategoryLower = this.selectedSubcategory.toLowerCase();
        const productSubcategoryLower = product.subcategory.toLowerCase();
 
        if (selectedCategoryLower && selectedCategoryLower !== '' && productCategoryLower !== selectedCategoryLower) {
          return false;
        }
        if (selectedSubcategoryLower && selectedSubcategoryLower !== '' && productSubcategoryLower !== selectedSubcategoryLower) {
          return false;
        }
        return true;
      });
    }
 
  applyFilters() {
    this.filtersApplied = true;
    this.filterProducts();
  }
 
 
}