import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { IClientData } from "./types/client-data";

const prisma = new PrismaClient();

// @route POST /client
// @desc Create a new client
// @access Public

// @param {String} name - The name of the client
// @param {String} email - The email of the client
export default async function createClientController(
  req: Request,
  res: Response
) {
  const { name, email }: IClientData = req.body;

  try {
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }
    const user = await prisma.cliente.create({
      data: {
        nome: name,
        email: email,
      },
    });

    return res.status(201).json({ name, email, user });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
