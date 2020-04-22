FROM node as builder
WORKDIR /opt/jovica

COPY . .

RUN npm install

RUN BUILD_CMD="npm run build" \
    && echo "Build command: ${BUILD_CMD}" \
    && eval "${BUILD_CMD}"

FROM nginx

COPY --from=builder /opt/jovica/build /app
COPY nginx.conf /etc/nginx/nginx.conf
