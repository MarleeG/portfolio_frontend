# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

# Install deps (use lockfile if you have one)
COPY package*.json ./
RUN npm ci

# Build
COPY . .
RUN npm run build

# --- Serve with Nginx ---
FROM nginx:alpine

# Copy a custom nginx config for SPA routing & caching
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Vite output is /dist; CRA output is /build
# --- CRA build output ---
COPY --from=build /app/build /usr/share/nginx/html
# --- Vite (if you use Vite, comment the line above and uncomment this):
# COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]