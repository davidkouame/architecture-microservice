package com.davidkouame.article;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class ProductControllerImpl{

    @Autowired
    private IProductService productService;

    @PostMapping(value = "/product", consumes = "application/json", produces = "application/json")
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

    @GetMapping(value = "/products/{productId}", produces = "application/json")
    public ResponseEntity<?> findProductById(@PathVariable Long productId) {
        try{
            return ResponseEntity.status(200).body(
                    Response.success(
                            productService.findProductById(productId),
                            200,
                            "Votre produit a été chargé avec succès !")
            );
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(500).body(
                    Response.error(e.getMessage())
            );
        }
    }

}
