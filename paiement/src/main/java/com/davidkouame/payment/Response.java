package com.davidkouame.payment;

import lombok.Data;

@Data
public class Response {

    private String message;
    private int status;
    private Object data;

    static Response success(Object data){
        Response response = new Response();
        response.setData(data);
        response.setStatus(201);
        response.setMessage("Votre paiement a été enregistré avec succès !");
        return response;
    }

    static Response success(Object data, int status){
        Response response = new Response();
        response.setData(data);
        response.setStatus(status);
        response.setMessage("Votre paiement a été enregistré avec succès !");
        return response;
    }

    static Response successLoad(Object data, int status){
        Response response = new Response();
        response.setData(data);
        response.setStatus(status);
        response.setMessage("Les paiements ont été chargés avec succès !");
        return response;
    }

    static Response successLoad(Object data, int status, String message){
        Response response = new Response();
        response.setData(data);
        response.setStatus(status);
        response.setMessage(message);
        return response;
    }

    static Response error(String error){
        Response response = new Response();
        response.setData(null);
        response.setStatus(500);
        response.setMessage(error);
        return response;
    }
}
