import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Pallavi",
    lastName: "Langhe",
    email: "pallavi17@gmail.com",
    username: "pallavi17",
    password: "123",
    userPhoto:
      "https://res.cloudinary.com/dv8400fc2/image/upload/v1688923386/YC%20dental%20clg/social-media-app/4_fuoqhe.jpg",
    bio: "Frontend Developer",
    link: "https://pallavi-langhe.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Amita",
    lastName: "Langhe",
    email: "amita@gmail.com",
    username: "amita_R",
    password: "123",
    userPhoto:
      "https://res.cloudinary.com/dv8400fc2/image/upload/v1688923935/YC%20dental%20clg/social-media-app/6_bmbr6d.jpg",
    bio: "Aspiring Full stack Developer",
    link: "https://pallavilanghe.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Abhijit",
    lastName: "Langhe",
    email: "abhijit@gmail.com",
    username: "abhijit_11",
    password: "123",
    userPhoto:
      "https://res.cloudinary.com/dv8400fc2/image/upload/v1688923386/YC%20dental%20clg/social-media-app/2_izsxcv.jpg",
    bio: "Aspiring Product Developer",
    link: "https://github.com/Pallavi-Langhe/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Pushpa",
    lastName: "Langhe",
    email: "pushpa@gmail.com",
    username: "shruti_25",
    password: "123",
    userPhoto:
      "https://res.cloudinary.com/dv8400fc2/image/upload/v1688923386/YC%20dental%20clg/social-media-app/1_e5clci.jpg",
    bio: "Creating a life, I love.",
    link: "https://twitter.com/pallavilanghe17",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Prakash",
    lastName: "Langhe",
    email: "prakash@gmail.com",
    username: "hellioncoder",
    password: "123",
    userPhoto:
      "https://res.cloudinary.com/dv8400fc2/image/upload/v1688923386/YC%20dental%20clg/social-media-app/3_nqgdtd.jpg",
    bio: "We have tomorrows for reason.",
    link: "https://www.linkedin.com/in/pallavilanghe/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
