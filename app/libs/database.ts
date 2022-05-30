import { Sequelize, Op } from "sequelize";

if (!process.env.DB_URL) {
  throw "Cannot find database setting in environtment";
}

const DB = new Sequelize(
  process.env.DB_DATABASE as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD,
  {
    dialect: "mssql",
    host: process.env.DB_URL,
    logging: false,
    timezone: "Asia/Bangkok",
    dialectOptions: {
      options: {
        encrypt: false,
        enableArithAbort: false,
        instanceName: process.env.DB_INSTANCE || "HRS_UAT",
      },
    },
  }
);

export const empDB = new Sequelize(
  process.env.DB_EMP_DATABASE as string,
  process.env.DB_EMP_USER as string,
  process.env.DB_EMP_PASSWORD,
  {
    dialect: "mssql",
    host: process.env.DB_EMP_URL,
    timezone: "Asia/Bangkok",
    logging: false,
    dialectOptions: {
      options: {
        encrypt: false,
        enableArithAbort: false,
        instanceName: process.env.DB_INSTANCE || "HRS_UAT",
      },
    },
  }
);

export default DB;

export const Operators: { [key: string]: symbol } = {
  ...Op,
};

export function createWhereQuery(data: { [key: string]: any }) {
  const where: { [key: string]: any } = {};
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const element = data[key];
      if (element) {
        const test = element.split("@");
        if (test.length > 1) {
          const operand = Operators[test[0]];
          if (operand)
            where[key] = { [operand]: test[1] === "NULL" ? null : test[1] };
          else throw "Invalid Operator";
        } else {
          where[key] = element;
        }
      }
    }
  }
  return where;
}

export type SaveResults = {
  error?: any;
  data?: any;
};
