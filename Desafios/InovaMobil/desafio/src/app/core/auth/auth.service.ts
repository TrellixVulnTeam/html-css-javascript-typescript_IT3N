import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInModel } from '../../home/signin/model/signin.model';
import { ProductModel } from '../../products/products.model';

const API_URL = 'https://rodrigo.reader.homologacao.inovamobil.com.br';

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    constructor(public http: HttpClient){}

    

    authenticateUser(iD: string, chaveAcesso: string): Observable<SignInModel>{       
        return this.http
        .post<SignInModel>(API_URL + '/api/login',
         {iD, chaveAcesso})
         
    }

     authenticateProduct(codigoBarras: string, nome: string, preco: number, base64: string): Observable<ProductModel> {
        return this.http
        .post<ProductModel>( API_URL + '/api/produtos',
        {codigoBarras, nome, preco, base64})
       
    }
}

