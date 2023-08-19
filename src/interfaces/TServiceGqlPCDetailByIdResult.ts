
export type TServiceGqlPCDetailByIdResult = {
    id: string,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        id: string,
        name: string,
        type: string,
        dimension: string,
        created: string,
    };
    location: {
        id: string,
        name: string,
        type: string,
        dimension: string,
        created: string,
    };
    image: string,
    episode: {
        id: string,
        name: string,
        air_date: string,
        episode: string,
        created: string,
    }[];
    created: string,
};
