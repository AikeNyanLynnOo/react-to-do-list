import { createStore, combineReducers, applyMiddleware } from "redux";
import { Tasks } from "./reducers/tasks";
import { Comments } from "./reducers/comments";
import { Labels } from "./reducers/labels";
import { Projects } from "./reducers/projects";
import { Auth } from "./reducers/auth";

import thunk from "redux-thunk";
import logger from "redux-logger";

const ConfigureStore = () => {
  return createStore(
    combineReducers({
      tasks: Tasks,
      comments: Comments,
      labels: Labels,
      projects: Projects,
      auth: Auth,
    }),
    applyMiddleware(thunk, logger)
  );
};

export const store = ConfigureStore();
