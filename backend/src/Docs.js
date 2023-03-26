
// User routes documentation >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const swaggerJSDoc = require("swagger-jsdoc");


/**
 * @swagger
 * title: Get Request routes
 * description: get Request routes of the  API
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
 * 
 * /admin/review/all:
 *      get:
 *          summary: get every review posted by users
 *          description: get all review data
 *          tags:
 *              - review
 *          responses:
 *              200:
 *                  description: sucess message
 *              204:
 *                  description: sucess message
 *              400:
 *                  description: failure message
 * 
 * /admin/review/{userid}:
 *      get:
 *          summary: get review of single user
 *          description: get reviews of a single user
 *          tags:
 *              - review
 *          parameters:
 *              - name: userId
 *                in: path    
 *                description: id of the user 
 *                required: true  
 *                schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: sucess message
 *              204:
 *                  description: failure message
 *              400:
 *                  description: failure message
 * 
 * /user/review/{userid}:
 *      get:
 *          summary: get review of single user
 *          description: get reviews of a single user
 *          tags:
 *              - review
 *          parameters:
 *              - name: userId
 *                in: path    
 *                description: id of the user 
 *                required: true  
 *                schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: sucess message
 *              204:
 *                  description: failure message
 *              400:
 *                  description: failure message
 */

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
 * @swagger
 * title: Post Request routes
 * description: Post Request routes of the  API
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
 *            - firstname
 *            - lastname
 *            - username
 *            - password
 *            - email
 *            - phonenumber
 *          properties:
 *              firstname:
 *                  type: string
 *              lastname:
 *                  type: string
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
 */

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
 *            - email
 *            - password
 *          properties:
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *     responses:
 *      200:
 *         description: Sucess message
 *      400:    
 *          description: failure message 
 *  */


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

/**
 * @swagger
 * 
 * /user/review:
 *  post:
 *     summary: give a review
 *     description: record a user review    
 *     tags: 
 *         - review
 *     consumes:
 *      - application/json
 *     parameters:
 *      - in: body
 *        name: user
 *        description : user to create
 *        schema:
 *          type: object
 *          required:
 *            - userId
 *            - username
 *            - rating
 *            - review
 *          properties:
 *              userId:
 *                  type: string
 *              username:
 *                  type: string
 *              rating:
 *                  type: string
 *              review:
 *                  type: string
 *     responses:
 *      201:
 *         description: Sucess message
 *      401:    
 *          description: failure message 
 *      400:    
 *          description: failure message 
 *      
 */

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
 * @swagger
 * title: Put Request routes
 * description: Put Request routes of the  API
 */
/**
 * @swagger
 * 
 * paths:
 *  /user/update/{id}:
 *      put:
 *          summary: delete sigle user 
 *          description: delete a user data
 *          tags:
 *              - user
 *          parameters:
 *              - name: id
 *                in: path    
 *                description: id of the user 
 *                required: true  
 *                schema:
 *                  type: string
 *              - in: body
 *                name: user
 *                description : user to update
 *                schema:
 *                  type: object
 *                  properties:
 *                      username:
 *                          type: string
 *                      email:
 *                          type: string        
 *                      password:
 *                          type: string
 *          responses:
 *              200:
 *                  description: sucess message
 *              401:
 *                  description: failure message
 *              404:
 *                  description: failure message
 * 
 *  /user/review/{id}:
 *      put:
 *          summary: update user review 
 *          description: update user review
 *          tags:
 *              - review
 *          parameters:
 *              - name: id
 *                in: path    
 *                description: id of the review 
 *                required: true  
 *                schema:
 *                  type: string
 *              - in: body
 *                name: review
 *                description : review to update
 *                schema:
 *                  type: object
 *                  properties:
 *                      rating:
 *                          type: string
 *                      review:
 *                          type: string        
 *          responses:
 *              200:
 *                  description: sucess message
 *              400:
 *                  description: failure message
 *              404:
 *                  description: failure message
 * 
 *  /user/updtepassword/{id}:
 *      put:
 *          summary: Update user password
 *          description: Update user password
 *          tags:
 *              - user
 *          parameters:
 *              - name: id
 *                in: path    
 *                description: id of the user 
 *                required: true  
 *                schema:
 *                  type: string
 *              - in: body
 *                name: user
 *                description : userpassword to update
 *                schema:
 *                  type: object
 *                  properties:
 *                      oldpassword:
 *                          type: string
 *                      password:
 *                          type: string          
 *          responses:
 *              200:
 *                  description: sucess message
 *              401:
 *                  description: failure message
 *              404:
 *                  description: failure message
 * 
 * 
 *  /admin/vehicle/update/{id}:
 *      put:
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
 *              - in: body
 *                name: user
 *                description : user to update
 *                schema:
 *                  type: object
 *                  properties:
 *                      name:
 *                          type: string
 *                      model:
 *                          type: string        
 *                      licenseplate:
 *                          type: string    
 *                      type:
 *                          type: string      
 *          responses:
 *              200:
 *                  description: sucess message
 *              404:
 *                  description: failure message
 */


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
 * @swagger
 * title: Delete Request routes
 * description: Delete Request routes of the  API
 */

/**
 * @swagger
 * 
 * paths:
 *  /user/delete/{id}:
 *      delete:
 *          summary: delete sigle user 
 *          description: delete a user data
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
 *              401:
 *                  description: failure message
 *              404:
 *                  description: failure message
 * 
 *  /admin/vehicle/delete/{id}:
 *      delete:
 *          summary: delete vehicle data  
 *          description: delete a vehicle data
 *          tags:
 *              - vehicle
 *          parameters:
 *              - name: id
 *                in: path    
 *                description: id of the vehicle 
 *                required: true  
 *                schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: sucess message
 *              404:
 *                  description: failure message
 * 
 *  /user/review/{id}:
 *      delete:
 *          summary: delete single review of a user
 *          description: delete a review data
 *          tags:
 *              - review
 *          parameters:
 *              - name: id
 *                in: path    
 *                description: review id
 *                required: true  
 *                schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: sucess message
 *              401:
 *                  description: failure message
 *              404:
 *                  description: failure message
 * 
 *  /admin/review/{id}:
 *      delete:
 *          summary: delete single review
 *          description: delete a review data
 *          tags:
 *              - review
 *          parameters:
 *              - name: id
 *                in: path    
 *                description: review id
 *                required: true  
 *                schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: sucess message
 *              401:
 *                  description: failure message
 *              404:
 *                  description: failure message
 */



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

