import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { IClientData } from "./types/client-data";

const prisma = new PrismaClient();

export default async function updateClientController(
  req: Request,
  res: Response
) {
  const { name, email }: IClientData = req.body;
  const { id } = req.params;

  if (!id || isNaN(parseInt(id))) {
    return res.status(400).json({ error: "ID inválido." });
  }
  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "Nome inválido." });
  }
  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Email inválido." });
  }

  try {
    const user = await prisma.cliente.update({
      data: {
        nome: name,
        email: email,
      },
      where: {
        id: parseInt(id),
      },
    });

    return res.status(200).json({ name, email, user });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
