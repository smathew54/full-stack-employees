import db from "#db/client";

/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  // TODO
  const sql = `
  INSERT INTO employees (name, birthday, salary)
  VALUES ($1, $2, $3) RETURNING *`;

  const {
    rows: [employee],
  } = await db.query(sql, [name, birthday, salary]);
  return employee}




// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  // TODO
  const sql = `
  SELECT * FROM employees`;

  const {rows}  = await db.query(sql);
  return rows;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
  const sql = `
  SELECT * FROM employees
  WHERE id = $1`;

  const {rows}  = await db.query(sql, [id]);
  return rows[0];
}


/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
  const SQL = `
        UPDATE employees
        SET
          name = $2,
          birthday = $3,
          salary = $4
        WHERE id = $1
        RETURNING *
    `;
  const { rows } = await db.query(SQL, [id, name, birthday, salary]);
  return rows[0];
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
  const SQL = `
  DELETE FROM employees
  where id = $1
  RETURNING *
  `;
  const { rows} = await db.query(SQL, [id]);
  return rows[0]
}
