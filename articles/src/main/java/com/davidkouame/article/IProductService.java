package com.davidkouame.article;

import java.util.List;

public interface IProductService {
    ProductCreatedDto saveProduct(ProductSaveDto productSaveDto) throws Exception;
    List<ProductCreatedDto> findProducts();
    List<ProductCreatedDto> findProductsByUserId(Long userId);
    ProductCreatedDto findProductById(Long productId);
}
