package com.davidkouame.payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class PaymentControllerImpl {

    @Autowired
    private IPaymentService paymentService;

    @PostMapping(value = "/payment", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> addPayment(@RequestBody PaymentSaveDto paymentSaveDto){
        try{
            return ResponseEntity.status(201).body(
                    Response.success(paymentService.savePayment(paymentSaveDto))
            );
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(500).body(
                    Response.error(e.getMessage())
            );
        }
    }

    @GetMapping(value = "/payments", produces = "application/json")
    public ResponseEntity<?> findAllProducts() {
        try{
            return ResponseEntity.status(200).body(
                    Response.successLoad(paymentService.findPayments(), 200)
            );
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(500).body(
                    Response.error(e.getMessage())
            );
        }
    }

    @GetMapping(value = "/payments/find-by-user-id/{userId}", produces = "application/json")
    public ResponseEntity<?> findPaymentsByUserId(@PathVariable Long userId) {
        try{
            return ResponseEntity.status(200).body(
                    Response.successLoad(paymentService.findPaymentsByUserId(userId), 200)
            );
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(500).body(
                    Response.error(e.getMessage())
            );
        }
    }

    @GetMapping(value = "/payments/{paymentId}", produces = "application/json")
    public ResponseEntity<?> findPayment(@PathVariable Long paymentId) {
        try{
            return ResponseEntity.status(200).body(
                    Response.successLoad(
                            paymentService.findPayment(paymentId),
                            200,
                            "Le paiement a été effectué avec succès !")
            );
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(500).body(
                    Response.error(e.getMessage())
            );
        }
    }

}
