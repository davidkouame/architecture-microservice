package com.davidkouame.payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class ProductControllerImpl{

    @Autowired
    private IProductService productService;

    @PostMapping(value = "/paiement", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> addProduct(@RequestBody ProductSaveDto productSaveDto){
        try{
            return ResponseEntity.status(201).body(
                    Response.success(productService.saveProduct(productSaveDto))
            );
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(500).body(
                    Response.error(e.getMessage())
            );
        }
    }

    @GetMapping(value = "/products", produces = "application/json")
    public ResponseEntity<?> findAllProducts() {
        try{
            return ResponseEntity.status(201).body(
                    Response.success(productService.findProducts(), 200)
            );
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(500).body(
                    Response.error(e.getMessage())
            );
        }
    }

}
