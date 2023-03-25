
// User routes documentation >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const swaggerJSDoc = require("swagger-jsdoc");

/**
 * @swagger
 * title: User Routes
 * description: User Routes of the application
 */

/**
 * @swagger
 * /signup:
 *  post:
 *     summary: User account creation
 *     description: Use to create a new user
 *     tags: 
 *         - user
 *     consumes:
 *      - application/json
 *     parameters:
 *      - in: body
 *        name: user
 *        description : user to create
 *        schema:
 *          type: object
 *          required:
 *            - username
 *            - password
 *            - email
 *            - phonenumber
 *          properties:
 *              username:
 *                  type: string
 *              password:
 *                  type: string
 *              email:
 *                  type: string
 *              phonenuber:
 *                  type: string
 *              
 *     responses:
 *      201:
 *         description: Sucess message
 *      400:
 *          description: failure message 
 *     
 *  */


/**
 * @swagger
 * /signin:
 *  post:
 *     summary: user Login
 *     description: Use to create a new user
 *     tags: 
 *         - user
 *     consumes:
 *      - application/json
 *     parameters:
 *      - in: body
 *        name: user
 *        description : user to create
 *        schema:
 *          type: object
 *          required:
 *            - username
 *            - password
 *          properties:
 *              username:
 *                  type: string
 *              password:
 *                  type: string
 *     responses:
 *      200:
 *         description: Sucess message
 *      400:    
 *          description: failure message 
 *     
 *  */

// admin routes documentation >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
 * @swagger
 * title: Admin Routes
 * description: Admin Routes of the application
 */

/*
 * @swagger
 * paths:
 *  /admin/user/find/{id}:
 *      get:
 *          summary: get a sigle user data
 *          description: get a sigle user data
 *          tags:
 *              - user
 *          parameters:
 *              - name: id
 *                in: path    
 *                description: id of the user 
 *                required: true  
 *                schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: sucess message
 *              404:
 *                  description: failure message
 */

/**
 * @swagger
 * paths:
 *  /admin/user/all:
 *      get:
 *          summary: get every user data
 *          description: get all user data    
 *          tags: 
 *              - user
 *          responses:
 *              200:
 *                  description: sucess message
 *              400:
 *                  description: failure message
 *  
 * /admin/vehicle/all:
 *  get:
 *      summary: get every vehicle data
 *      description: get all vehicle data
 *      tags: 
 *          - vehicle
 *      responses:
 *          200:
 *              description: sucess message
 *          400:
 *              description: failure message
 * 
 * /admin/vehicle/update/{id}:
 *      get:
 *          summary: Update vehicle data
 *          description: Update vehicle data
 *          tags:
 *              - vehicle
 *          parameters:
 *              - name: id
 *                in: path    
 *                description: id of the user 
 *                required: true  
 *                schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: sucess message
 *              404:
 *                  description: failure message
 * 
 * /admin/user/find/{id}:
 *      get:
 *          summary: get a sigle user data
 *          description: get a sigle user data
 *          tags:
 *              - user
 *          parameters:
 *              - name: id
 *                in: path    
 *                description: id of the user 
 *                required: true  
 *                schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: sucess message
 *              404:
 *                  description: failure message
 */


/**
 * @swagger
 * /admin/vehicle/add:
 *  post:
 *     summary: add vehicle data
 *     description: Use to create a vehicle entry    
 *     tags: 
 *         - vehicle
 *     consumes:
 *      - application/json
 *     parameters:
 *      - in: body
 *        name: user
 *        description : user to create
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - model
 *            - licenseplate
 *            - type
 *          properties:
 *              name:
 *                  type: string
 *              model:
 *                  type: string
 *              licenseplate:
 *                  type: string
 *              type:
 *                  type: string
 *     responses:
 *      201:
 *         description: Sucess message
 *      400:    
 *          description: failure message 
 *     
 *  */


// review routes documentation >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
 * @swagger
 * title: Review Routes
 * description: Review Routes of the application
 */

             

/**
 * @swagger
 * paths:
 *  /admin/review/all:
 *      get:
 *          summary: get every review posted by users
 *          description: get all review data
 *          tags:
 *              - review
 *          responses:
 *              200:
 *                  description: sucess message
 *              400:
 *                  description: failure message
 */