export const TextServices = {
	limitarTexto(text:string, maxSize:number){
		return `${text.slice(0,maxSize +1)}${(text.length > maxSize) ? '...' : ''}` 
	}

}
