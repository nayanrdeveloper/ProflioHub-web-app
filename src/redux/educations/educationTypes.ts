export interface Education {
    id: number;
    name: string;
    degree: string;
}

export interface EducationState {
    educations: Education[];
    loading: boolean;
    error: string | null;
}
