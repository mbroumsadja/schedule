// models/message.js
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./user.js";

const Message = sequelize.define("Message", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sentAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: true,
});

// Association : un utilisateur a plusieurs messages
Message.belongsTo(User, { foreignKey: "userId", as: "user" });

export default Message;
