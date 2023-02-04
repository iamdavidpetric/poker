const apiMiddleware = () => {
  return next => action => {
    const { type, actions = {}, promise, ...rest } = action;

    if (type !== Api.API_CALL) {
      return next(action);
    }

    const { success, fail } = actions;

    return promise
      .then(payload => {
        if (success && success.type) {
          const { type, ...successRest } = success;
          if (payload.data !== '' && payload.data.data) {
            next({ ...rest, ...successRest, payload: payload, type });
          } else {
            next({
              ...rest,
              ...successRest,
              payload: payload.data,
              type,
            });
          }
        }
      })
      .catch(error => {
        if (fail && fail.type) {
          next({
            ...rest,
            type: failType,
            error: {
              ...error,
              responseType: Api.NETWORK_ERROR,
            },
            ...failExtraPayload,
          });
        }
      });
  };
};

export default apiMiddleware;
