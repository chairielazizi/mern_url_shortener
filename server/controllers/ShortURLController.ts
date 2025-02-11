import express, { Request, Response } from "express";
import ShortURL from "../models/ShortURL";

export const createURL = async (req: Request, res: Response) => {
  const { originalURL } = req.body;
  console.log("The original URL is: " + { originalURL });

  try {
    const urlFound = await ShortURL.findOne({ originalURL });
    if (urlFound) {
      res.status(409).send({ urlFound });
    } else {
      const shortURL = await ShortURL.create({ originalURL });
      res.status(201).send({ shortURL });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export const getAllURL = async (req: Request, res: Response) => {
  const shortURLs = await ShortURL.find();
  try {
    if (shortURLs) {
      res
        .status(200)
        // .json({ shortURLs })
        .send({ message: "Short URLs not found!" });
    } else {
      res.status(404).send({ message: "No URLs found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export const getURLById = async (req: Request, res: Response) => {
  const { originalURL } = req.body;
};
export const deleteURL = async (req: Request, res: Response) => {
  const { originalURL } = req.body;
};
