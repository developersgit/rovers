export class Camera {
    id: number;
    full_name: string;
    name: string;
    rover_id: number;

    constructor( id: number, fullName: string, name: string, roverId: number) {
        this.id = id;
        this.full_name = fullName;
        this.name = name;
        this.rover_id = roverId;
    }
}