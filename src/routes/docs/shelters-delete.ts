/**
 * @swagger
 * /api/shelters/{sid}:
 *   delete:
 *     tags:
 *       - Shelters
 *     summary: Delete a specific shelter by ID
 *     parameters:
 *       - in: path
 *         name: sid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the shelter to delete

 *     responses:
 *       200:
 *         description: Confirmation message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
