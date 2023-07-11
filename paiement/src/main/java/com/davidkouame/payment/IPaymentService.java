package com.davidkouame.payment;

import java.util.List;

public interface IPaymentService {
    PaymentCreatedDto savePayment(PaymentSaveDto paymentSaveDto) throws Exception;
    List<PaymentCreatedDto> findPayments();
    List<PaymentCreatedDto> findPaymentsByUserId(Long userId);

    PaymentCreatedDto findPayment(Long paymentId) throws Exception;
}
