/**
 * @swagger
 * /api/shelters:
 *   get:
 *     tags:
 *       - Shelters
 *     summary: Retrieve a list of shelters
 *     responses:
 *       200:
 *         description: A list of shelters
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   owner:
 *                     type: string
 *                   name:
 *                     type: string
 *                   location:
 *                     type: object
 *                     properties:
 *                       lat:
 *                         type: integer
 *                       lng:
 *                         type: integer
 *                   buildings:
 *                     type: object
 *                     properties:
 *                       houses:
 *                         type: integer
 *                       farm:
 *                         type: integer
 *                       school:
 *                         type: integer
 *                       hospital:
 *                         type: integer
 *                       refinery:
 *                         type: integer
 *                       workshop:
 *                         type: integer
 *                       watchTower:
 *                         type: integer
 *                       fence:
 *                         type: integer
 *                       palisade:
 *                         type: integer
 *                       traps:
 *                         type: integer
 *                   resources:
 *                     type: object
 *                     properties:
 *                       wood:
 *                         type: integer
 *                       food:
 *                         type: integer
 *                       water:
 *                         type: integer
 *                       medicalSupplies:
 *                         type: integer
 *                       fuel:
 *                         type: integer
 *                       population:
 *                         type: integer
 */

/**
 * @swagger
 * /api/shelters/user/{uid}:
 *   get:
 *     tags:
 *       - Shelters
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to retrieve his shelters
 *     summary: Retrieve a list of shelters of a specific user
 *     responses:
 *       200:
 *         description: A list of shelters of a specific user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   owner:
 *                     type: string
 *                   name:
 *                     type: string
 *                   location:
 *                     type: object
 *                     properties:
 *                       lat:
 *                         type: integer
 *                       lng:
 *                         type: integer
 *                   buildings:
 *                     type: object
 *                     properties:
 *                       houses:
 *                         type: integer
 *                       farm:
 *                         type: integer
 *                       school:
 *                         type: integer
 *                       hospital:
 *                         type: integer
 *                       refinery:
 *                         type: integer
 *                       workshop:
 *                         type: integer
 *                       watchTower:
 *                         type: integer
 *                       fence:
 *                         type: integer
 *                       palisade:
 *                         type: integer
 *                       traps:
 *                         type: integer
 *                   resources:
 *                     type: object
 *                     properties:
 *                       wood:
 *                         type: integer
 *                       food:
 *                         type: integer
 *                       water:
 *                         type: integer
 *                       medicalSupplies:
 *                         type: integer
 *                       fuel:
 *                         type: integer
 *                       population:
 *                         type: integer
 */

/**
 * @swagger
 * /api/shelters/{sid}:
 *   get:
 *     tags:
 *       - Shelters
 *     parameters:
 *       - in: path
 *         name: sid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the shelter to retrieve
 *     summary: Retrieve a specific shelter by ID
 *     responses:
 *       200:
 *         description: A specific shelter
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 owner:
 *                   type: string
 *                 name:
 *                   type: string
 *                 location:
 *                   type: object
 *                   properties:
 *                     lat:
 *                       type: integer
 *                     lng:
 *                       type: integer
 *                 buildings:
 *                   type: object
 *                   properties:
 *                     houses:
 *                       type: integer
 *                     farm:
 *                       type: integer
 *                     school:
 *                       type: integer
 *                     hospital:
 *                       type: integer
 *                     refinery:
 *                       type: integer
 *                     workshop:
 *                       type: integer
 *                     watchTower:
 *                       type: integer
 *                     fence:
 *                         type: integer
 *                     palisade:
 *                       type: integer
 *                     traps:
 *                       type: integer
 *                 resources:
 *                   type: object
 *                   properties:
 *                     wood:
 *                       type: integer
 *                     food:
 *                       type: integer
 *                     water:
 *                       type: integer
 *                     medicalSupplies:
 *                       type: integer
 *                     fuel:
 *                       type: integer
 *                     population:
 *                       type: integer
 */
