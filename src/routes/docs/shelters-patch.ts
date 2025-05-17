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
 *                     type: integer
 *                   farm:
 *                     type: integer
 *                   school:
 *                     type: integer
 *                   hospital:
 *                     type: integer
 *                   refinery:
 *                     type: integer
 *                   workshop:
 *                     type: integer
 *                   watchTower:
 *                     type: integer
 *                   fence:
 *                     type: integer
 *                   palisade:
 *                     type: integer
 *                   traps:
 *                     type: integer
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
