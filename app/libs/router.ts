export interface Route {
  method: string;
  routePath: string | RegExp;
  classPath: string;
  functionName: string;
  authenticate: boolean;
  description?: string;
}

export const ApiRoutes: Route[] = [];
export const ViewRoutes: Route[] = [];

function applyFuntion(
  routePath: string | RegExp,
  method: string,
  functionPath: string,
  target: Route[],
  authenticate?: boolean,
  description?: string
) {
  const splitted = functionPath.split("@");
  const classPath = splitted[0];
  const functionName = splitted[1];
  const route: Route = {
    method,
    routePath,
    classPath,
    functionName,
    authenticate: authenticate === true,
    description,
  };
  target.push(route);
}

export const ViewRouter = {
  get(
    path: string | RegExp,
    functionPath: string,
    authenticate?: boolean,
    description?: string
  ) {
    applyFuntion(
      path,
      "get",
      functionPath,
      ViewRoutes,
      authenticate,
      description
    );
  },
  post(
    path: string | RegExp,
    functionPath: string,
    authenticate?: boolean,
    description?: string
  ) {
    applyFuntion(
      path,
      "post",
      functionPath,
      ViewRoutes,
      authenticate,
      description
    );
  },
  put(
    path: string | RegExp,
    functionPath: string,
    authenticate?: boolean,
    description?: string
  ) {
    applyFuntion(
      path,
      "put",
      functionPath,
      ViewRoutes,
      authenticate,
      description
    );
  },
  delete(
    path: string | RegExp,
    functionPath: string,
    authenticate?: boolean,
    description?: string
  ) {
    applyFuntion(
      path,
      "delete",
      functionPath,
      ViewRoutes,
      authenticate,
      description
    );
  },
  patch(
    path: string | RegExp,
    functionPath: string,
    authenticate?: boolean,
    description?: string
  ) {
    applyFuntion(
      path,
      "delete",
      functionPath,
      ViewRoutes,
      authenticate,
      description
    );
  },
  all(
    path: string | RegExp,
    functionPath: string,
    authenticate?: boolean,
    description?: string
  ) {
    applyFuntion(
      path,
      "all",
      functionPath,
      ViewRoutes,
      authenticate,
      description
    );
  },
};

export const ApiRouter = {
  get(
    path: string | RegExp,
    functionPath: string,
    authenticate?: boolean,
    description?: string
  ) {
    applyFuntion(
      path,
      "get",
      functionPath,
      ApiRoutes,
      authenticate,
      description
    );
  },
  post(
    path: string | RegExp,
    functionPath: string,
    authenticate?: boolean,
    description?: string
  ) {
    applyFuntion(
      path,
      "post",
      functionPath,
      ApiRoutes,
      authenticate,
      description
    );
  },
  put(
    path: string | RegExp,
    functionPath: string,
    authenticate?: boolean,
    description?: string
  ) {
    applyFuntion(
      path,
      "put",
      functionPath,
      ApiRoutes,
      authenticate,
      description
    );
  },
  delete(
    path: string | RegExp,
    functionPath: string,
    authenticate?: boolean,
    description?: string
  ) {
    applyFuntion(
      path,
      "delete",
      functionPath,
      ApiRoutes,
      authenticate,
      description
    );
  },
  patch(
    path: string | RegExp,
    functionPath: string,
    authenticate?: boolean,
    description?: string
  ) {
    applyFuntion(
      path,
      "delete",
      functionPath,
      ApiRoutes,
      authenticate,
      description
    );
  },
  all(
    path: string | RegExp,
    functionPath: string,
    authenticate?: boolean,
    description?: string
  ) {
    applyFuntion(
      path,
      "all",
      functionPath,
      ApiRoutes,
      authenticate,
      description
    );
  },
};
