
export type TServiceGqlPCDetailByIdResultOrigin = {
    id: string,
    name: string,
    type: string,
    dimension: string,
    created: string,
}

export type TServiceGqlPCDetailByIdResultLocation = {
    id: string,
    name: string,
    type: string,
    dimension: string,
    created: string,
}

export type TServiceGqlPCDetailByIdResultEpisode = {
    id: string,
    name: string,
    air_date: string,
    episode: string,
    created: string,
}

export type TServiceGqlPCDetailByIdResult = {
    id: string,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: TServiceGqlPCDetailByIdResultOrigin;
    location: TServiceGqlPCDetailByIdResultLocation;
    image: string,
    episode: TServiceGqlPCDetailByIdResultEpisode[];
    created: string,
};
