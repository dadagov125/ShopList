

export const WRITE_TEST='WRITE_TEST';


export const writeTest=(text)=>({
	type:WRITE_TEST,
	payload:text
});