FROM nginx:alpine

COPY ./dist/math-calcul /usr/share/nginx/html

EXPOSE 80