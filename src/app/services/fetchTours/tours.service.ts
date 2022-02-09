import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, docData, updateDoc, deleteDoc, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Tours {
  id?: string,
  packageName: string,
  description: [],
  active: boolean
}


@Injectable({
  providedIn: 'root'
})
export class ToursService {

  domesticUrl:string = "https://readygotravels-default-rtdb.firebaseio.com/domesticTours.json";
  foreignUrl:string = "https://readygotravels-default-rtdb.firebaseio.com/foreignTours.json";
  constructor(private firestore:Firestore, private http:HttpClient) {}

  // For Domestic Tours
  getDomesticTour(){
    // return this.http.get(this.domesticUrl);
    const coll = collection(this.firestore, 'domesticTours')
    return collectionData(coll, {idField: 'id'}) as Observable<Tours[]>;
  }

  getSingleDomesticTour(id:string){
    const collRef = doc(this.firestore, `domesticTours/${id}`);
    return docData(collRef, {idField: 'id'}) as Observable<Tours>;
  }

  updateDomesticTour(active:boolean, id:string){
    const collRef = doc(this.firestore, `domesticTours/${id}`)
    return updateDoc(collRef, {active: active});
  }

  deleteDomesticTour(id:string){
    const collRef = doc(this.firestore, `domesticTours/${id}`);
    return deleteDoc(collRef)
  }

  postDomesticTour(tour:any){
    const collRef = collection(this.firestore, "domesticTours");
    return addDoc(collRef, tour)
  }


  // For Foreign Tours
  getForeignTour(){
    // return this.http.get(this.foreignUrl)
    const coll = collection(this.firestore, 'foreignTours')
    return collectionData(coll, {idField: 'id'}) as Observable<Tours[]>;
  }

  getSingleForeignTour(id:string){
    const collRef = doc(this.firestore, `foreignTours/${id}`);
    return docData(collRef, {idField: 'id'}) as Observable<Tours>;
  }

  updateForeignTour(active:boolean, id:string){
    const collRef = doc(this.firestore, `foreignTours/${id}`)
    return updateDoc(collRef, {active: active});
  }

  deleteForeignTour(id:string){
    const collRef = doc(this.firestore, `foreignTours/${id}`);
    return deleteDoc(collRef)
  }

  postForeignTour(tour:any){
    const collRef = collection(this.firestore, "foreignTours");
    return addDoc(collRef, tour)
  }


  // Sending Query
  postQuery(data:any){
    const collRef = collection(this.firestore, "queries");
    return addDoc(collRef, data);
  }
}
