export interface Producto{
    _id: string;
    nombre: string;
    descripcion: string;
    categoria: string[];
    imageUrl: string[];
    precio_vente: number;
    precio_regular: number;
    created_at: string;
    slug?: Date;
    update_at?: Date;
}