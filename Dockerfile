# Install dependencies only when needed
FROM node:20.12.0-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package*.json ./

RUN npm install

# Rebuild the source code only when needed
FROM deps AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM deps AS runtime

WORKDIR /app

COPY --from=builder /app/.next ./.next

EXPOSE 3000

CMD ["npm", "start"]