import { IRequestServices } from '../interfaces/IRequestServices';
import { GqlRequestServices } from './GqlRequestServices';
import { TServiceGqlPCDetailByIdResult } from '../interfaces/TServiceGqlPCDetailByIdResult';
import { IRequest } from '../interfaces/IRequest';

export class ServiceGqlPCDetailById implements IRequestServices {
    constructor(
        private readonly request: IRequest
    ){}

    async result(id:string): Promise<TServiceGqlPCDetailByIdResult> {
        const gql = new GqlRequestServices(`
            query pc {
                character (id:${id}) {
                    id
                    name
                    status
                    species
                    type
                    gender
                    origin {
                        id
                        name
                        type
                        dimension
                        created
                    }
                    location {
                        id
                        name
                        type
                        dimension
                        created
                    }
                    image
                    episode {
                        id
                        name
                        air_date
                        episode
                        created
                    }
                    created
                }
            }
        `, this.request)
        const result = await gql.result();
        return result.data.character;
    }

}
