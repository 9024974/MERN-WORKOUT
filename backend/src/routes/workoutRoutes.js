import express from 'express';

import {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout
} from '../controllers/workoutController.js';

const router = express.Router();

// GET alle workouts
router.get('/', getAllWorkouts);

// GET één workout
router.get('/:id', getWorkoutById);

// POST nieuwe workout
router.post('/', createWorkout);

// PATCH workout
router.patch('/:id', updateWorkout);

// DELETE workout
router.delete('/:id', deleteWorkout);

export default router;

// workoutRoutes.js - 35+ regels voor 3 routes!
router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// ... nog meer routes

// workoutRoutes.js - 10 regels, super duidelijk!
import { getAllWorkouts } from '../controllers/workoutController.js';

router.get('/', getAllWorkouts);