import { DataTypes, ModelOptions, Sequelize } from "sequelize";
type Schema = {
  [key: string]: any;
};
DataTypes.DATE.prototype._stringify = function _stringify(
  date: any,
  options: any
) {
  date = this._applyTimezone(date, options);
  return date.format("YYYY-MM-DD HH:mm:ss.SSS");
};
export const Types = DataTypes;
export default function model(
  db: Sequelize,
  name: string,
  schema: Schema,
  options: ModelOptions
) {
  if (!db.models[name]) {
    db.define(name, schema, {
      tableName: options.tableName,
      timestamps: options.timestamps,
    });
  }
  const definedModel = db.models[name];
  return definedModel;
}
