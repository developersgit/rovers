export interface CameraInterface {
    id: number;
    full_name: string;
    name: string;
    rover_id: number;
}

export interface RoverResp {
    id: number;
    landing_date: string;
    launch_date: string;
    max_date: string;
    max_sol: number;
    name: string;
    status: string;
    total_photos: number;
    cameras: CameraInterface[];
}