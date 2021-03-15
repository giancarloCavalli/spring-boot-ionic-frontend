import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { API_CONFIG } from "../config/api.config"

@Injectable()
export class AuthService {

    constructor(public http : HttpClient) {
    }

    authenticate(creds : CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe: 'response',
                //necessario esse response type pq o endpoint de login retorna uma resposta de corpo vazio. Se nao for assim,
                // o framework tentara fazer um parse de Json e irah ocorrer um erro
                responseType: 'text'
            });
    }
}