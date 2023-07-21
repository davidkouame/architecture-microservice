FROM openjdk:8
VOLUME /tmp
ARG JAR_FILE
ADD ./target/paiement*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 8087