/**
 * @swagger
 * /api/shelters/{sid}:
 *   patch:
 *     tags:
 *       - Shelters
 *     summary: Update a specific shelter by ID
 *     parameters:
 *       - in: path
 *         name: sid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the shelter to update
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
 *               buildings:
 *                 type: object
 *                 properties:
 *                   houses:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       level:
 *                         type: integer
 *                   farm:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       level:
 *                         type: integer
 *                   school:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       level:
 *                         type: integer
 *                   hospital:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       level:
 *                         type: integer
 *                   refinery:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       level:
 *                         type: integer
 *                   workshop:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       level:
 *                         type: integer
 *                   watchTower:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       level:
 *                         type: integer
 *                   palisade:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       level:
 *                         type: integer
 *                   traps:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       level:
 *                         type: integer
 *               resources:
 *                 type: object
 *                 properties:
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
 *     responses:
 *       200:
 *         description: The updated shelter object
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
 *
 */
