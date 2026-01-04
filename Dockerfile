# Étape 1 : Construction de l'app React
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Serveur Nginx pour servir les fichiers statiques
FROM nginx:stable-alpine
# On copie le build de l'étape 1 vers le dossier Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# On copie une config Nginx personnalisée (voir étape suivante)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]