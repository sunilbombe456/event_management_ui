

export interface Venue {

    id: string,
    name: string,
    address?: {
        state: string,
        district: string,
        taluka: string,
        localAddress: string
    },
    imagesFile?: Array<any>,
    rate?: string,
    rId?: string,
    eventType: Array<string>,
    peopleCapacity: string

}

export interface Decoration {

    id: string,
    name: string,
    description: string,
    decorationSize: string,
    price: number,
    eventType: Array<any>,
    imagesFile?: Array<any>,
    rId: string
}

export interface Food {
    id: string,
    name: string,
    price: number,
    foodType: Array<string>,
    imagesFile?: Array<string>,
    rid: String
}