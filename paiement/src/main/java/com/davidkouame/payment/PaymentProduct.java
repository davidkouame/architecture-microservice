package com.davidkouame.payment;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class PaymentProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private long productId;
    private String productName;
    @ManyToOne
    @JoinColumn(name="payment_id", nullable=false)
    private Payment payment;
    private double productPrice;
    private double quantity;
    private double total;
}
