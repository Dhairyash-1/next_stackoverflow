/* eslint-disable no-unused-vars */
"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";
import Tag from "@/database/tag.model";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();
    const { userId, limit = 3 } = params;

    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    // find the interaction for the user and group of tags

    return [
      { _id: "1", name: "Next.js" },
      { _id: "2", name: "Typescript" },
      { _id: "3", name: "AWS" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDatabase();
    const { page = 1, pageSize = 20, filter, searchQuery } = params;

    const tags = await Tag.find({});

    if (!tags) throw new Error("no tags found");

    return { tags };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
