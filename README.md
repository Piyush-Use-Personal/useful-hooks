# Useful hooks
A pack of some useful hooks which include several utility hooks. Feel free to generate a PR in case you want to increase the methodology

## AXIOS Hooks
Currently this package has 2 hooks for axios which are `useAxios` and `useActionAxios`

### useAxios - GET APIs Only
to use the useAxios hook you can pass `url` and `refetch`
following is the sample of how you can use it
```
  const {
    error,
    isLoading,
    result,
    isSuccess,
  } = useAxios(API_URL, config, refetch); // refetch can be a state variable and increment or decrement it if you want to refetch from the API
```

### useActionAxios - GET APIs Only

```
  const {
    error,
    isLoading,
    result,
    isSuccess,
    dispatch: dispatcher,
  } = useActionAxios(API_URL, config); // call dispatcher whenever you want to make API call like button click etc
```
Thanks.