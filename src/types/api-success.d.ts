type ApiSuccess<T> = {
    message: string,
    status: string,
    statusCode: number,
    totalData: number,
    data:T
}
export {ApiSuccess}