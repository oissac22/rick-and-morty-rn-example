import { IRequestServices } from '../interfaces/IRequestServices';
import { GqlRequestServices } from './GqlRequestServices';
import { TServiceGqlPCSListResult } from '../interfaces/TServiceGqlPCSListResult';
import { IRequest } from '../interfaces/IRequest';

export type TServiceGqlPCSListFilter = {
    name?: string
}

export class ServiceGqlPCSList implements IRequestServices {
    page:number = 0;
    filter:TServiceGqlPCSListFilter = {}

    constructor(
        private readonly request: IRequest
    ){}

    async result(): Promise<TServiceGqlPCSListResult> {
        const gql = new GqlRequestServices(`
            query pcs {
                characters(page:${this.page}, filter: ${JSON.stringify(this.filter)}) {
                    info {
                        count
                        pages
                        next
                        prev
                    }
                    results {
                        id
                        name
                        image
                    }
                }
            }
        `, this.request)
        const result = await gql.result();
        return result.data.characters;
    }

}
