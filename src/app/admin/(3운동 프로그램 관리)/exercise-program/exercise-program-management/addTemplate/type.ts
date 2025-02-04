export interface ExerciseSet {
    id: number
    reps: string
    rpe: string
    weight: string
    rest: string
  }
  
  export interface Exercise {
    name: string
    sets: ExerciseSet[]
  }
  
  