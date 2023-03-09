import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export const useBackListener = (callback) => {
  const location = useLocation();
  const action = useNavigationType();

  useEffect(() => {
    if (action === "POP") {
      //   if (someCondition === true) callback();
      //   else {
      //     doSomethingElse();
      //   }
      callback();
    }
  }, [location, action]);
};
