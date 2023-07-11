package com.davidkouame.payment;

import lombok.Data;
import lombok.Setter;

import java.util.List;

@Data
@Setter
public class PaymentSaveDto {

    private double total;
    private List<PaymentProduct> paymentProduct;
    private Long userId;

    @Data
    static class PaymentProduct{
        private long productId;
        private String productName;
        private double productPrice;
        private double quantity;
        private double total;
    }
}
