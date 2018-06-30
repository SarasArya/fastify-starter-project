**Fastify Starter Kit**

Backend written in Javascript with ♥️.  
Powered by Fastify for Minimal Overhead and Max Performance 🚀  
DB Powered by MongoDb 🍃 and ORM is Mongoose 🐻

A minimal project written to showcase concepts of fastify. Plugins, Models, Controllers, all essentials you will need to write a sufficiently complex backend.

**To Start**

1.  Make sure you have yarn installed. After that just do `yarn` or `npm install`.
2.  Make sure you have mongodb server running. If you are like me you have everything dockerized. In case you dont.  
    a. In case you dont have docker installed. Head [here](https://docs.docker.com/install/)  
    b. Check if you have docker daemon running using docker -v.  
    c. If no, google error, If yes run docker pull mongo:3.4.0.  
    d. docker run --name rylah-mongo -d -p 27017:27017 mongo:3.4.0  
    e. And you have a mongo server running.

3.  If developing run `yarn dev:start`.
4.  If running in to develop frontend `yarn start`.
5.  Voila you have your new shiny fastify ⚡️ project running. You should be listening at port 3000.
