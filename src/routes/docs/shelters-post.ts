/**
 * @swagger
 * /api/shelters:
 *   post:
 *     tags:
 *       - Shelters
 *     summary: Create a new shelter and respond with the created shelter object
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               owner:
 *                 type: string
 *               name:
 *                 type: string
 *               location:
 *                 type: object
 *                 properties:
 *                   lat:
 *                     type: integer
 *                   lng:
 *                     type: integer
 *     responses:
 *       201:
 *         description: The created shelter object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
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
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         description:
 *                           type: string
 *                         level:
 *                           type: integer
 *                     farm:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         description:
 *                           type: string
 *                         level:
 *                           type: integer
 *                     school:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         description:
 *                           type: string
 *                         level:
 *                           type: integer
 *                     hospital:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         description:
 *                           type: string
 *                         level:
 *                           type: integer
 *                     refinery:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         description:
 *                           type: string
 *                         level:
 *                           type: integer
 *                     workshop:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         description:
 *                           type: string
 *                         level:
 *                           type: integer
 *                     watchTower:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         description:
 *                           type: string
 *                         level:
 *                           type: integer
 *                     palisade:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         description:
 *                           type: string
 *                         level:
 *                           type: integer
 *                     traps:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         description:
 *                           type: string
 *                         level:
 *                           type: integer
 *                 resources:
 *                   wood:
 *                     type: integer
 *                   food:
 *                     type: integer
 *                   water:
 *                     type: integer
 *                   medicalSupplies:
 *                     type: integer
 *                   fuel:
 *                     type: integer
 *                   population:
 *                     type: integer
 */
