import cars from '../../public/api/cars.json'

export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { cars: { id: string; modelName: string; bodyType: string; modelType: string; imageUrl: string }[] }): void; new(): any } } }) {
    res.status(200).json({cars} )
}
