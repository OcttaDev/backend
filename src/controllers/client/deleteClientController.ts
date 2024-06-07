import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function deleteClientController(
  req: Request,
  res: Response
) {
  const { id } = req.params;

  if (!id || isNaN(parseInt(id))) {
    return res.status(400).json({ error: "ID inválido." });
  }

  try {
    await prisma.cliente.delete({
      where: {
        id: parseInt(id),
      },
    });

    return res.status(200).json({ message: "Cliente excluído com sucesso." });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
