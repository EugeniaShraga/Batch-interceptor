function batchInterceptor(instance) {
    instance.interceptors.request.use(request => {
        request.url = `${request.host}${request.url}?${request.params}`;
        return request;
    }, error => {Promise.reject(error)});

    instance.interceptors.response.use(response => {
        return response.data?.items;
        }, error => {Promise.reject(error)});
}
export default batchInterceptor;