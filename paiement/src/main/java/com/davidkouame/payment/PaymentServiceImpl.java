package com.davidkouame.payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class PaymentServiceImpl implements IPaymentService{
    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private PaymentProductRepository paymentProductRepository;

    @Override
    public PaymentCreatedDto savePayment(PaymentSaveDto paymentSaveDto) throws Exception {

        // Created payment
        Payment payment = new Payment();
        payment.setAmount(paymentSaveDto.getTotal());
        payment.setTransaction(generateUniqueTransactionPayment());
        payment.setUserId(paymentSaveDto.getUserId());
        payment.setCreated_at(LocalDateTime.now());
        paymentRepository.save(payment);

        // Created payment product
        for(PaymentSaveDto.PaymentProduct py: paymentSaveDto.getPaymentProduct()){
            PaymentProduct paymentProduct = new PaymentProduct();
            paymentProduct.setPayment(payment);
            paymentProduct.setProductId(py.getProductId());
            paymentProduct.setProductPrice(py.getProductPrice());
            paymentProduct.setQuantity(py.getQuantity());
            paymentProduct.setProductName(py.getProductName());
            paymentProduct.setTotal(py.getTotal());
            paymentProductRepository.save(paymentProduct);
        }

        PaymentCreatedDto paymentCreatedDto = new PaymentCreatedDto();
        paymentCreatedDto.setId(payment.getId());
        paymentCreatedDto.setTotal(paymentSaveDto.getTotal());
        paymentCreatedDto.setPaymentProduct(paymentSaveDto.getPaymentProduct());
        paymentCreatedDto.setTransaction(payment.getTransaction());
        paymentCreatedDto.setCreated(payment.getCreated_at().toString());

        return paymentCreatedDto;
    }

    @Override
    public List<PaymentCreatedDto> findPayments() {
        List<PaymentCreatedDto> paymentCreatedDtos = paymentRepository.findAll().stream().map(payment -> {
            PaymentCreatedDto paymentCreatedDto = new PaymentCreatedDto();
            paymentCreatedDto.setTotal(payment.getAmount());

            List<PaymentSaveDto.PaymentProduct> paymentProducts = paymentProductRepository.findByPayment(payment).stream().map(pyd -> {
                PaymentSaveDto.PaymentProduct paymentProduct = new PaymentSaveDto.PaymentProduct();
                paymentProduct.setProductPrice(pyd.getProductPrice());
                paymentProduct.setTotal(pyd.getTotal());
                paymentProduct.setQuantity(pyd.getQuantity());
                paymentProduct.setProductName(pyd.getProductName());
                paymentProduct.setProductId(pyd.getProductId());
                return paymentProduct;
            }).collect(Collectors.toList());

            paymentCreatedDto.setId(payment.getId());
            paymentCreatedDto.setPaymentProduct(paymentProducts);
            paymentCreatedDto.setTransaction(payment.getTransaction());
            paymentCreatedDto.setCreated(payment.getCreated_at().toString());

            return paymentCreatedDto;
        }).collect(Collectors.toList());
        return paymentCreatedDtos;
    }

    @Override
    public List<PaymentCreatedDto> findPaymentsByUserId(Long userId) {
        List<PaymentCreatedDto> paymentCreatedDtos = paymentRepository.findByUserId(userId).stream().map(payment -> {
            PaymentCreatedDto paymentCreatedDto = new PaymentCreatedDto();
            paymentCreatedDto.setTotal(payment.getAmount());

            List<PaymentSaveDto.PaymentProduct> paymentProducts = paymentProductRepository.findByPayment(payment).stream().map(pyd -> {
                PaymentSaveDto.PaymentProduct paymentProduct = new PaymentSaveDto.PaymentProduct();
                paymentProduct.setProductPrice(pyd.getProductPrice());
                paymentProduct.setTotal(pyd.getTotal());
                paymentProduct.setQuantity(pyd.getQuantity());
                paymentProduct.setProductName(pyd.getProductName());
                paymentProduct.setProductId(pyd.getProductId());
                return paymentProduct;
            }).collect(Collectors.toList());

            paymentCreatedDto.setId(payment.getId());
            paymentCreatedDto.setPaymentProduct(paymentProducts);
            paymentCreatedDto.setTransaction(payment.getTransaction());
            paymentCreatedDto.setCreated(payment.getCreated_at().toString());

            return paymentCreatedDto;
        }).collect(Collectors.toList());
        return paymentCreatedDtos;
    }

    @Override
    public PaymentCreatedDto findPayment(Long paymentId) throws Exception{
        Payment payment = paymentRepository.findById(paymentId).orElse(null);

        if(payment == null)
            throw new Exception("Aucun payement trouvé !");

        PaymentCreatedDto paymentCreatedDto = new PaymentCreatedDto();
        paymentCreatedDto.setTotal(payment.getAmount());

        List<PaymentSaveDto.PaymentProduct> paymentProducts = paymentProductRepository.findByPayment(payment).stream().map(pyd -> {
            PaymentSaveDto.PaymentProduct paymentProduct = new PaymentSaveDto.PaymentProduct();
            paymentProduct.setProductPrice(pyd.getProductPrice());
            paymentProduct.setTotal(pyd.getTotal());
            paymentProduct.setProductName(pyd.getProductName());
            paymentProduct.setQuantity(pyd.getQuantity());
            paymentProduct.setProductId(pyd.getProductId());
            return paymentProduct;
        }).collect(Collectors.toList());

        paymentCreatedDto.setId(payment.getId());
        paymentCreatedDto.setPaymentProduct(paymentProducts);
        paymentCreatedDto.setTransaction(payment.getTransaction());
        paymentCreatedDto.setCreated(payment.getCreated_at().toString());

        return paymentCreatedDto;
    }

    private String generateUniqueTransactionPayment(){
        return UUID.randomUUID().toString();
    }
}
