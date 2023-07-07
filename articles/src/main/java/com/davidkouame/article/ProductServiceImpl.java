package com.davidkouame.article;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements IProductService{

    @Autowired
    private ProductRepository productRepository;

    @Override
    public ProductCreatedDto saveProduct(ProductSaveDto productSaveDto) {
        Product product = productRepository.save(productSaveDto.build());
        return productSaveDto.build(product);
    }

    @Override
    public List<ProductCreatedDto> findProducts() {
        return productRepository.findAll().stream().map(product -> {
            ProductCreatedDto productCreatedDto = new ProductCreatedDto();
            productCreatedDto = productCreatedDto.build(product);
            return productCreatedDto;
        }).collect(Collectors.toList());
    }

    @Override
    public List<ProductCreatedDto> findProductsByUserId(Long userId) {
        return null;
    }
}
