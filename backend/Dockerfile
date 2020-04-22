FROM openjdk:14-jdk-slim

COPY target/*.jar /opt/jovica/backend.jar
COPY entrypoint.sh /

ENV JAVA_OPTS="-XX:MaxRAMPercentage=80"

RUN groupadd -r jovica \
    && useradd -ms /bin/bash jovica -g jovica \
    && chown -R jovica:jovica /opt/jovica

USER jovica

ENTRYPOINT ["/entrypoint.sh"]
