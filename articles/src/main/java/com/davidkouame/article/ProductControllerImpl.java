package com.davidkouame.article;

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

    @PostMapping(value = "/product", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> addProduct(@RequestBody ProductSaveDto productSaveDto) {
        return ResponseEntity.status(201).body(productService.saveProduct(productSaveDto));
    }

    @GetMapping(value = "/products", produces = "application/json")
    public ResponseEntity<?> findAllProducts() {
        return ResponseEntity.status(200).body(productService.findProducts());
    }

}
