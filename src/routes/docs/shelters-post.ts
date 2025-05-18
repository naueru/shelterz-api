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
 *             required: [owner, name, location]
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
 *                       type: integer
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
