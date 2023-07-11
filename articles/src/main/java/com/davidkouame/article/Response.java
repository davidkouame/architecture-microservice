package com.davidkouame.article;

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
        response.setMessage("Votre produit a été enregistré avec succès !");
        return response;
    }

    static Response success(Object data, int status){
        Response response = new Response();
        response.setData(data);
        response.setStatus(status);
        response.setMessage("Votre produit a été enregistré avec succès !");
        return response;
    }

    static Response success(Object data, int status, String msg){
        Response response = new Response();
        response.setData(data);
        response.setStatus(status);
        response.setMessage(msg);
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
