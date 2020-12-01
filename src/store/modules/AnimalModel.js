import AppointmentModel from "./AppointmentModel";
import uuidv4 from "uuid/v4";

export default class AnimalModel {
  constructor({
    name,
    species,
    age,
    dateVetoAppointment,
    typeLastVetoAppointment,
  }) {
    this.id = uuidv4().substr(0, 8);
    this.name = name;
    this.species = species;
    this.age = age;
    this.lastAppointment = new AppointmentModel({
      date: dateVetoAppointment,
      typeOfAppointment: typeLastVetoAppointment,
    });
  }
}
