package com.davidkouame.article;

import lombok.Data;
import lombok.Setter;

@Data
@Setter
public class ProductSaveDto {

    private String label;
    private Double price;
    private String description;
    private String image;

    Product build(){
        Product product = new Product();
        product.setLabel(label);
        product.setPrice(price);
        product.setDescription(description);
        product.setImage(image != null ? image.getBytes() : null);
        return product;
    }

    ProductCreatedDto build(Product product){
        ProductCreatedDto productCreatedDto = new ProductCreatedDto();
        productCreatedDto.setId(product.getId());
        productCreatedDto.setLabel(product.getLabel());
        productCreatedDto.setPrice(product.getPrice());
        productCreatedDto.setDescription(product.getDescription());
        productCreatedDto.setImage(new String(product.getImage()));
        return productCreatedDto;
    }
}
