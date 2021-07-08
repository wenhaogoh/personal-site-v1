import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db/index";

interface MessageAttributes {
  id: number;
  name: string;
  email: string;
  content: string;
}

interface MessageCreationAttributes extends Optional<MessageAttributes, "id"> {}

class Message
  extends Model<MessageAttributes, MessageCreationAttributes>
  implements MessageAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public content!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {};
}

Message.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  },
  { sequelize }
);

export default Message;
