export interface Dogs{
    id:number;
    name:string;
    details:string;
    raza: string;
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
    picture:string;
    
    name_human:string;
    number:string;
}