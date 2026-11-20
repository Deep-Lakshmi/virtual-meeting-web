
import { randomUUID } from "node:crypto";
import Meeting from "../models/meeting.model.js";

// Create a new meeting
export const createMeeting = async (req, res) => {
  try {
    const meeting = await Meeting.create({
      meetingCode: randomUUID(),
    });

    return res.status(201).json({
      success: true,
      message: "Meeting created successfully",
      meetingId: meeting.meetingCode,
      meeting,
    });
  } catch (error) {
    console.error("Create meeting error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create meeting",
    });
  }
};

// Get all meetings
export const getMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find().sort({ date: -1 });

    return res.status(200).json({
      success: true,
      meetings,
    });
  } catch (error) {
    console.error("Get meetings error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch meetings",
    });
  }
};
