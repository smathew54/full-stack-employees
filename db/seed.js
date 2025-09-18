import db from "#db/client";
import { faker } from "@faker-js/faker"
import { createEmployee } from "./queries/employees.js"


async function seedEmployees() {
  // TODO
  for (let i =0; i < 10; i++) {
    const name = faker.person.firstName();
    const birthday = faker.date.birthdate();
    const salary = faker.helpers.rangeToNumber({min:10000, max:200000});
  try {
    const response = await createEmployee({name, birthday, salary})
    console.log(response)
  }
  catch(error){
    console.error(error)
  }}
}

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");