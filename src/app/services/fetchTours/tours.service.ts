import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, docData, updateDoc, deleteDoc, addDoc } from '@angular/fire/firestore';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { map, Observable, take } from 'rxjs';
import { where } from 'firebase/firestore';

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
  constructor(private firestore:Firestore, private http:HttpClient, private adb:AngularFirestore) {}

  // For Domestic Tours
  getDomesticTour(){
    // const coll = collection(this.firestore, 'domesticTours')
    // return collectionData(coll, {idField: 'id'}) as Observable<Tours[]>;
    return this.adb.collection('domesticTours').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data:object|any = a.payload.doc.data()
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  getSingleDomesticTour(name:string){
    // const collRef = doc(this.firestore, `domesticTours/${id}`);
    // return docData(collRef, {idField: 'id'}) as Observable<Tours>;
    return this.adb.collection('domesticTours', ref => ref.where('name', '==', name)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data:object|any = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
  }


  // For Foreign Tours
  getForeignTour(){
    // const coll = collection(this.firestore, 'foreignTours')
    // return collectionData(coll, {idField: 'id'}) as Observable<Tours[]>;
    return this.adb.collection('foreignTours').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data:object|any = a.payload.doc.data()
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
  }

  getSingleForeignTour(name:string){
    // const collRef = doc(this.firestore, `foreignTours/${id}`);
    // return docData(collRef, {idField: 'id'}) as Observable<Tours>;
    return this.adb.collection('foreignTours', ref => ref.where('name', '==', name)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data:object|any = a.payload.doc.data()
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
    
  }


  // Sending Query
  postQuery(data:any){
    // const collRef = collection(this.firestore, "customersQuery");
    // return addDoc(collRef, data);
      return this.adb.collection('customersQuery').add(data);
  }


  // For Admin
  getAdminDetail(){
    // const collRef = doc(this.firestore, `admin/bM6uuAzBGGWhQ5pKGp3K`);
    // return docData(collRef, {idField: 'id'}) as Observable<Tours[]>;
    return this.adb.collection('admin').snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data()))
    );
  }

  updateQueryStatus(data:any){
    // const collRef = doc(this.firestore, `customersQuery/${id}`);
    // return updateDoc(collRef, {status: status});
    return this.adb.collection('customersQuery').doc(data.id).update({status: data.status})
  }

  deleteAdminQuery(id:any){
    // const collRef = doc(this.firestore, `customersQuery/${id}`);
    // return deleteDoc(collRef);
    return this.adb.collection('customersQuery').doc(id).delete()
  }

  getNewQuery(){
    // const collRef = collection(this.firestore, 'customersQuery');
    // return collectionData(collRef, {idField: 'id'});
    return this.adb.collection('customersQuery', ref => ref.where('status', '==', 'new')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data:object|any = a.payload.doc.data()
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
  }

  getRepliedQuery(){
    return this.adb.collection('customersQuery', ref => ref.where('status', '==', 'replied')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data:object|any = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...data}
      }))
    )
  }

  getConvertedQuery(){
    return this.adb.collection('customersQuery', ref => ref.where('status', '==', 'converted')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data:object|any = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...data}
      }))
    )
  }

  getClosedQuery(){
    return this.adb.collection('customersQuery', ref => ref.where('status', '==', 'closed')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data:object|any = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...data}
      }))
    )
  }

  updateAdminDomesticTour(active:boolean, id:string){
    // const collRef = doc(this.firestore, `domesticTours/${id}`)
    // return updateDoc(collRef, {active: active});
    return this.adb.collection('domesticTours').doc(id).update({is_active: active});
  }

  deleteAdminDomesticTour(id:string){
    // const collRef = doc(this.firestore, `domesticTours/${id}`);
    // return deleteDoc(collRef)
    return this.adb.collection('domesticTours').doc(id).delete();
  }

  postAdminDomesticTour(tour:any){
    // const collRef = collection(this.firestore, "domesticTours");
    // return addDoc(collRef, tour)
    return this.adb.collection('domesticTours').add(tour);
  }

  updateForeignTour(active:boolean, id:string){
    // const collRef = doc(this.firestore, `foreignTours/${id}`)
    // return updateDoc(collRef, {active: active});
    return this.adb.collection('foreignTours').doc(id).update({is_active: active});
  }

  deleteForeignTour(id:string){
    // const collRef = doc(this.firestore, `foreignTours/${id}`);
    // return deleteDoc(collRef)
    return this.adb.collection('foreignTours').doc(id).delete();
  }

  postAdminForeignTour(tour:any){
    // const collRef = collection(this.firestore, "foreignTours");
    // return addDoc(collRef, tour)
    return this.adb.collection('foreignTours').add(tour);
  }
}
