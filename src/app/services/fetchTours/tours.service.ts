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


  // Sending Query
  postHomeQuery(data:any){
    const collRef = collection(this.firestore, "homeQuery");
    return addDoc(collRef, data);
  }

  postTourQuery(data:any){
    const collRef = collection(this.firestore, "tourQuery");
    return addDoc(collRef, data);
  }


  // For Admin
  getAdminDetail(){
    const collRef = doc(this.firestore, `admin/bM6uuAzBGGWhQ5pKGp3K`);
    return docData(collRef, {idField: 'id'}) as Observable<Tours[]>;
  }

  updateQueryStatus(status:any, id:any){
    const collRef = doc(this.firestore, `homeQuery/${id}`);
    return updateDoc(collRef, {status: status});
  }

  deleteAdminHomeQuery(id:any){
    const collRef = doc(this.firestore, `homeQuery/${id}`);
    return deleteDoc(collRef);
  }

  deleteAdminTourQuery(id:any){
    const collRef = doc(this.firestore, `tourQuery/${id}`);
    return deleteDoc(collRef);
  }

  getAdminHomeQuery(){
    const collRef = collection(this.firestore, 'homeQuery');
    return collectionData(collRef, {idField: 'id'});
  }

  getAdminTourQuery(){
    const collRef = collection(this.firestore, 'tourQuery');
    return collectionData(collRef, {idField: 'id'}) as Observable<Tours[]>;
  }

  updateAdminDomesticTour(active:boolean, id:string){
    const collRef = doc(this.firestore, `domesticTours/${id}`)
    return updateDoc(collRef, {active: active});
  }

  deleteAdminDomesticTour(id:string){
    const collRef = doc(this.firestore, `domesticTours/${id}`);
    return deleteDoc(collRef)
  }

  postAdminDomesticTour(tour:any){
    const collRef = collection(this.firestore, "domesticTours");
    return addDoc(collRef, tour)
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
}
