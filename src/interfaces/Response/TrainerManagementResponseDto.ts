export type TrainerManagementStatus = 'Active';

export interface TrainerManagementResponseDto {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    dob: string;
    status: TrainerManagementStatus;
}
