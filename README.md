# Croissant Dashboard 🥐

A home made dashboard (juste like our beloved pastry !) to display who in Polytech' DO need to bring croissant 🥐 -or other pastries- to the others because they forgot to lock their session before going away from it !

⚖️ Under MIT license, which mean you can reuse, fork and even commercialize this dashboard as long as you keep the same license !

## ⚡️ Quick start
Ensure that you have installed [docker](https://www.docker.com/) anyway you want, but you will need docker compose v2.  
Clone this repo or download the [latest release](https://github.com/remi-espie/croissant_dashboard/releases/latest) on a known folder.  
Rename `.env.example` to `.env` and edit it to replace secret values.  
Launch the project with `docker compose up` !

### 🍿 ANYONE can report WHO forgot to lock their session with the relevant informations, through a simple API link or through a responsive and light web page

#### 👨‍🎓 Each student can create an account (which they can access with their mail for their 1st time), and: 
  - they can choose their favorite pastries (from the ones available at CROUS)
  - they can create new quotes which will be displayed randomnly on dashboard
  - they can upload their birthday date to get a custom message on the dashboard
#### 👩‍🎓 Each promotion willing to participate can create and references themselves:
  - upload a link to a promotion picture to display on dashboard
  - upload a link to their schedule to be dynamically displayed on dashboard

---
#### 🚀 Future possible implementation:
- Multiple pictures by promotions with theme (random, halloween, christmas, ...)
- CDN (like [MinIO](https://min.io/)) to upload more pictures and stuff
- Discord and/or Mattermost webhook to ping all class
- Quotes with an author displayed on dashboard displayed near the author's head

---
### 👩‍💻 Technical stuff for geeks and nerds : 👨‍💻

[NestJS](https://nestjs.com/)+[Fastify](https://www.fastify.io/) backend with [Prisma ORM](https://www.prisma.io/) and [PostgreSQL](https://www.postgresql.org/) to deal with database !

[VueJS 3](https://vuejs.org/)+[ViteJS](https://vitejs.dev/) frontend, with [Bulma](https://bulma.io/) for CSS !

[Traefik](https://traefik.io/) middleware to redirect request to the related service !

All in a single docker container for ease of use ! Just launch `docker compose up` on any machine and it *should* work (i.e. not working on arm32. Yes, I'm talking about you Raspberry Pi OS 32).

REST compliant, scalable and responsive design !

Should be secure *enough*
