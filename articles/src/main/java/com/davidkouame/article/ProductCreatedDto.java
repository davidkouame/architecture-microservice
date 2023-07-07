package com.davidkouame.article;

import lombok.Data;
import lombok.Setter;

@Data
@Setter
public class ProductCreatedDto {

    private Long id;
    private String label;
    private Double price;
    private String description;
    private String image;

    ProductCreatedDto build(Product product){
        ProductCreatedDto productCreatedDto = new ProductCreatedDto();
        productCreatedDto.id = product.getId();
        productCreatedDto.label = product.getLabel();
        productCreatedDto.price = product.getPrice();
        productCreatedDto.description = product.getDescription();
        productCreatedDto.image = product.getImage();
        return productCreatedDto;
    }
}
