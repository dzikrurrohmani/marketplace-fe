FROM node:lts-alpine as build-step
RUN apk add --no-cache git
WORKDIR /app
RUN git clone https://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@github.com/dzikrurrohmani/tb-bima-fe.git
WORKDIR /app/tb-bima-fe
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build-step /app/tb-bima-fe/dist /usr/share/nginx/html
EXPOSE 80