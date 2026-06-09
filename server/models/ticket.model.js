import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    ticketNumber: {
      type: String,
      unique: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    priority: {
      type: String,
      default: "Low",
    },

    status: {
      type: String,
      default: "Open",
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },

    assignedTo: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
      },

      name: {
        type: String,
        default: "",
      },
    },

    comments: [
      {
        text: {
          type: String,
          required: true,
        },

        createdBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },

        createdByName: {
          type: String,
          required: true,
        },

        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;
