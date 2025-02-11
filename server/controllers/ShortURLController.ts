import express, { Request, Response } from "express";
import ShortURLModel from "../models/ShortURL";

export const createURL = async (req: Request, res: Response) => {
  console.log("The original URL is: " + req.body.originalURL);
  const { originalURL } = req.body;

  try {
    const urlFound = await ShortURLModel.findOne({ originalURL });
    if (urlFound) {
      res.status(409).send({ urlFound });
    } else {
      const shortURL = await ShortURLModel.create({ originalURL });
      res.status(201).send({ shortURL });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export const getAllURL = async (req: Request, res: Response) => {
  try {
    const shortURLs = await ShortURLModel.find();
    if (shortURLs) {
      res.status(200).send(shortURLs);
    } else {
      res.status(404).send({ message: "No URLs found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export const getURLById = async (req: Request, res: Response) => {
  try {
    const shortURL = await ShortURLModel.findOne({ shortURL: req.params.id });
    if (shortURL) {
      shortURL.clicks += 1;
      await shortURL.save();
      res.redirect(`${shortURL.originalURL}`);
      //   res.status(200).send({ shortURL });
    } else {
      res.status(404).send({ message: "URL not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export const deleteURL = async (req: Request, res: Response) => {
  try {
    const shortURL = await ShortURLModel.findByIdAndDelete({
      _id: req.params.id,
    });
    if (shortURL) {
      res.status(200).send({ message: "URL deleted successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};
