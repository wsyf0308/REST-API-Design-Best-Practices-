import DB from "./DB.json" assert { type : 'json' };
import { saveToDatabase } from './utils.js'

const getRecordForWorkout = (workoutId) => {
    try {
        const record = DB.records.filter((record) => record.workout === workoutId);
        if (!record) {
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`,
            };
        }
        return record;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

export default {
    getRecordForWorkout
}