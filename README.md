# croissant_dashboard :croissant:

A home made dashboard (juste like our beloved pastry !) to display who in polytech' DO need to bring croissant :croissant: (or other pastries) to the others because they forgot to lock their session before going away from it !

### ANYONE can report WHO forgot to lock their session with the relevant informations, through a simple API link or through a responsive and light web page

#### Each student have an account by default (which they can access through their mail for their 1st time), 
  - they can choose their favorite pastries (from the ones available at CROUS)
  - they can create new quotes which will be displayed randomnly on dashboard
  - they can upload their birthday date to get a custom message on the dashboard
#### Each promotion willing to participate can create and references themselves
  - upload a promotion picture to display on dashboard
  - upload a link to their schedule to be dynamically displayed on dashboard

---
#### Future possible implementation:
- multiple pictures by promotions
- discord and/or mattermost webhook to ping all class
- quotes with an author displayed on dashboard will be displayed near the author's head

---
### Technical stuff for geeks and nerds :

NestJS+fastify backend with Prisma and PostgreSQL to deal with database, all in a docker container !

VueJS frontend in another docker container !

REST compliant, scalable and resoponsive design !

Should be secured *enough*
