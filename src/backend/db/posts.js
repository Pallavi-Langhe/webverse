import { v4 as uuid } from "uuid";
import { formatDate, formatTime } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    name: "Pallavi Langhe",
    userPhoto:
      "https://res.cloudinary.com/dv8400fc2/image/upload/v1688923386/YC%20dental%20clg/social-media-app/4_fuoqhe.jpg",
    postPic:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    content: "Captivated from life, showing it here.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "pallavi17",
    comments: [],
    time: formatTime(),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Prakash Langhe",
    userPhoto:
      "https://res.cloudinary.com/dv8400fc2/image/upload/v1688923386/YC%20dental%20clg/social-media-app/3_nqgdtd.jpg",
    postPic:
      "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

    content: "Study nature, love nature, stay close to nature.",
    likes: {
      likeCount: 52123,
      likedBy: [],
      dislikedBy: [],
    },
    username: "hellioncoder",
    comments: [],
    time: formatTime(),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Amita Langhe",
    userPhoto:
      "https://res.cloudinary.com/dv8400fc2/image/upload/v1688923935/YC%20dental%20clg/social-media-app/6_bmbr6d.jpg",
    postPic:
      "https://images.unsplash.com/photo-1553530979-7ee52a2670c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=751&q=80",
    content:
      "Clean water, the essence of life and a birthright for everyone, must become available to all people now.",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    username: "amita_R",
    comments: [],
    time: formatTime(),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Abhijit Langhe",
    userPhoto:
      "https://res.cloudinary.com/dv8400fc2/image/upload/v1688923386/YC%20dental%20clg/social-media-app/2_izsxcv.jpg",
    postPic:
      "https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1161&q=80",
    content: "If you truly love nature, you will find beauty everywhere.",
    likes: {
      likeCount: 22,
      likedBy: [],
      dislikedBy: [],
    },
    username: "abhijit_11",
    comments: [],
    time: formatTime(),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Pushpa Langhe",
    userPhoto:
      "https://res.cloudinary.com/dv8400fc2/image/upload/v1688923386/YC%20dental%20clg/social-media-app/1_e5clci.jpg",
    postPic:
      "https://res.cloudinary.com/dv8400fc2/image/upload/v1688924208/YC%20dental%20clg/social-media-app/post_5_k2h3e9.jpg",
    content: "She turned her can't into can and her dreams into plans.",
    likes: {
      likeCount: 52,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shruti_25",
    comments: [],
    time: formatTime(),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
