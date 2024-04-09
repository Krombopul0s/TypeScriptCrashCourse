import { Coach } from './Coach';

export class GolfCoach implements Coach {
    getDailyWorkout(): string {
        return "Hit 1000 golf balls.";
    }
}