
export type TServiceGqlPCSListResultInfo = {
    count: number;
    pages: number;
    next?: number;
    prev?: number;
}

export type TServiceGqlPCSListResultResults = {
    id: string;
    name: string;
    image: string;
}

export type TServiceGqlPCSListResult = {
    info: TServiceGqlPCSListResultInfo;
    results: TServiceGqlPCSListResultResults[];
};
