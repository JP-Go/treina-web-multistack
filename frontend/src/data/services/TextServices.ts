export const TextServices = {
	limitarTexto(text:string, maxSize:number){
		return `${text.slice(0,maxSize +1)}${(text.length > maxSize) ? '...' : ''}` 
	},
	mostrarEmMoeda(value:number, currency:string){
		return `${currency} ${value.toFixed(2)}`
	}
}
