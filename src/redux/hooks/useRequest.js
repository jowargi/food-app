import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRequest, selectStatus } from "../slices/requests/slice";

export const useRequest = ({ thunk, payload, abortAfterMs }) => {
  const [request, setRequest] = useState(null);

  const dispatch = useDispatch();

  const requestStatus = useSelector((state) =>
    selectStatus(state, request?.requestId),
  );

  useEffect(() => {
    const request = dispatch(thunk(payload));

    setRequest(request);

    let timeout;

    if (abortAfterMs ?? false) {
      timeout = setTimeout(() => request.abort(), abortAfterMs);
    }

    return () => {
      request.abort();

      setRequest(null);

      dispatch(deleteRequest(request.requestId));

      if (timeout ?? false) {
        clearTimeout(timeout);
      }
    };
  }, [thunk, payload, dispatch, abortAfterMs]);

  return requestStatus;
};
