import { ICompilationAction } from "./reducer";

export const onCompiling = (): ICompilationAction => {
    return { 
        type: 'compiling' 
    };
}

export const onSuccess = (program: any): ICompilationAction => {
    return {
        type: 'success',
        payload: program
    }
}

export const onError = (error: any): ICompilationAction => {
    console.log(error);
    return {
        type: 'error',
        payload: error.toString()
    }
}