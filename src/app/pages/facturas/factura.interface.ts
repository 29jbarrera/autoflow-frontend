export interface Factura {
  id: number;
  usuario_id: number;
  cliente_id: number;
  fecha_emision: string | Date;
  importe: number;
  estado: boolean;
  numero: string;
  descripcion: string;
  archivo?: File | null;
  archivo_url: string;
}

export interface FacturasResponse {
  facturas: Factura[];
  total: number;
}

export interface CreateFacturaRequest {
  cliente_id: number;
  fecha_emision: string | Date;
  importe: number | null;
  estado: boolean;
  numero: string;
  descripcion: string;
  archivo?: File | null;
}
