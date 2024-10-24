import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ApiService{

    BASEURL ='http://localhost:8080/';

    constructor(private http:HttpClient){
        
    }
    getData(loginObj:Login):Observable<any>{
        console.log(loginObj);
        return this.http.post(`${this.BASEURL}generateToken`,loginObj,{ responseType: 'text' });
    }
    getAdmindata(){
        return this.http.get(`${this.BASEURL}notMuchConfidential`,{responseType:'text'})
    }
}

export class Login{
     userName='';
     password='';

}