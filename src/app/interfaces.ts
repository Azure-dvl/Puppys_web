export interface Dogs{
    id:number;
    name:string;
    details:string;
    raza: string;
    estado:boolean;
    picture:string;
}

export interface User{
    id: number;
    name: string;
    password:string;
}

export interface DogsAd{
    id:number;
    name:string;
    details:string;
    raza: string;
    estado:boolean;
    picture:string;
    name_human:string;
    numbre:string;
}