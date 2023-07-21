FROM openjdk:8
VOLUME /tmp
ARG JAR_FILE
ADD ./target/article*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 8086