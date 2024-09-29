import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class SearchService{
    // creating behaviour subject for the current searchterm 
    private searchTermSource  = new BehaviorSubject<string>('')
    // observable to show the current term to the subscribers 
    currentSearchTerm  = this.searchTermSource.asObservable()
    constructor(){}
    // method to update the search term
    updateSearchTerm(term:string):void{
        this.searchTermSource.next(term)
    }
}