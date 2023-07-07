package com.davidkouame.article;

import java.util.List;

public interface IProductService {
    ProductCreatedDto saveProduct(ProductSaveDto productSaveDto);
    List<ProductCreatedDto> findProducts();
    List<ProductCreatedDto> findProductsByUserId(Long userId);
}
