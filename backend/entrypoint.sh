#!/bin/bash
set -e

echo "===================================================================================="
echo "Using JAVA_OPTS=${JAVA_OPTS}"
echo "===================================================================================="
echo ""
exec java -jar ${JAVA_OPTS} -Djava.security.egd=file:/dev/./urandom -jar /opt/jovica/backend.jar
