# Motinder — Integrated Full Stack

The `root`, `data`, and `public` folders are intentionally kept at the top level.

## Structure
- `root/` — Node/Express backend, TypeScript source, environment configuration and Docker Compose.
- `data/` — Prisma schema/seed and persistent photo-upload directory.
- `public/` — integrated Motinder web app and admin dashboard, served by the backend.

## Run locally
1. Copy `root/.env.example` to `root/.env` and set real secrets.
2. Start PostgreSQL/PostGIS with `docker compose -f root/docker-compose.yml up -d`.
3. From `root/`: `npm install`.
4. From `root/`: `npm run prisma:generate`.
5. From `root/`: `npm run prisma:migrate`.
6. From `root/`: `npm run seed`.
7. From `root/`: `npm run dev`.
8. Open `http://localhost:4000`.
9. Admin dashboard: `http://localhost:4000/admin`.

## Real integrations
- PostgreSQL/PostGIS database
- Email verification through SMTP
- Phone verification through Twilio Verify
- IntaSend subscriptions, checkout, webhooks and refunds
- Firebase Cloud Messaging adapter
- Socket.IO real-time messaging
- Photo upload + moderation queue
- Location-based discovery

The frontend uses the same origin as the API, so authentication, discovery, swipes, matches, chat, photos and subscription checkout are wired to the backend instead of demo-only data.

## Production requirements
Configure strong JWT secrets, HTTPS, SMTP, Twilio, Firebase, IntaSend production credentials/plans, a production Postgres database, object storage/CDN, image-safety moderation, backups, monitoring, rate-limit tuning and legal/compliance review before launch.
