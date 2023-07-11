package com.davidkouame.payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements IProductService{

    @Autowired
    private ProductRepository productRepository;

    @Override
    public ProductCreatedDto saveProduct(ProductSaveDto productSaveDto) throws Exception {
        try{
            if(productSaveDto.getLabel() == null || productSaveDto.getLabel().trim().length() == 0){
                throw new Exception("Vous devez ajouter un libellé au niveau du produit !");
            }
            Product product = productRepository.save(productSaveDto.build());
            return productSaveDto.build(product);
        }catch (Exception e){
            e.printStackTrace();
            throw e;
        }
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
