#!/bin/bash
docker build -t portfolio-frontend . && \
docker rm -f portfolio-frontend-container 2>/dev/null || true && \
existing_container=$(docker ps -q --filter "publish=3000") && \
if [ -n "$existing_container" ]; then docker rm -f $existing_container; fi && \
docker run -d --name portfolio-frontend-container -p 3000:80 portfolio-frontend