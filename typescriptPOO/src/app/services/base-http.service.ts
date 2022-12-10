export class baseHttpService<TypeClass>{
     data: TypeClass[] = []
}

const service = new baseHttpService<string>();
service.data

