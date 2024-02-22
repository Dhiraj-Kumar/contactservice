import Contact from "../models/Contact.js";
import { v4 as uuid } from "uuid";
async function AddContact(req, res) {
  try {
    await Contact.create({ ...req.body, _id: uuid() });
    res
      .status(201)
      .send({ status: 201, message: "Contact created successfully" });
  } catch (err) {
    res.status(500).send({ status: 500, message: err.message });
  }
}

async function GetContacts(req, res) {
  try {
    let result = await Contact.find({});
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ status: 500, message: err.message });
  }
}

async function GetContact(req, res) {
  try {
    let result = await Contact.findById(req.params.id);
    if (result == null) {
      res.status(404).send({
        status: 404,
        message: `Contact with id: ${req.params.id} does not exists`,
      });
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    res.status(500).send({ status: 500, message: err.message });
  }
}

async function UpdateContact(req, res) {
  try {
    let result = await Contact.findById(req.params.id);
    if (result == null) {
      res.status(404).send({
        status: 404,
        message: `Contact with id: ${req.params.id} does not exists`,
      });
    } else {
      await Contact.updateOne({ _id: req.params.id }, req.body);
      res
        .status(200)
        .send({ status: 200, message: "Contact updated successfully" });
    }
  } catch (err) {
    res.status(500).send({ status: 500, message: err.message });
  }
}

async function DeleteContact(req, res) {
  try {
    let result = await Contact.findById(req.params.id);
    if (result == null) {
      res.status(404).send({
        status: 404,
        message: `Contact with id: ${req.params.id} does not exists`,
      });
    } else {
      await Contact.deleteOne({ _id: req.params.id });
      res
        .status(200)
        .send({ status: 200, message: "Contact deleted successfully" });
    }
  } catch (err) {
    res.status(500).send({ status: 500, message: err.message });
  }
}

export { AddContact, GetContacts, GetContact, UpdateContact, DeleteContact };
