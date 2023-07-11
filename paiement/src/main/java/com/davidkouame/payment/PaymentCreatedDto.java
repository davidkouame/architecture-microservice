package com.davidkouame.payment;

import lombok.Data;
import lombok.Setter;

import java.util.List;

@Data
@Setter
public class PaymentCreatedDto {

    private Long id;

    private double total;
    private List<PaymentSaveDto.PaymentProduct> paymentProduct;

    private String transaction;
    private String created;
}
