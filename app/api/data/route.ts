// import the 'pool' module and use it in your code
import { NextResponse } from 'next/server';
import pool  from "../../utils/postgres";
import express from 'express';




/**
 * Retrieves all notes from the database.
 * 
 * @param request - The request object.
 * @returns A JSON response containing the notes.
 * @throws An error response if there is an error fetching the notes.
 */
export async function GET(req: express.Request,res : express.Response ) {
  try {
    
      // Execute the SQL query to fetch all notes
      const result = await pool.query('SELECT * FROM notes ');
      console.log(result)
      // Extract the rows from the result
      // const notes = result.rows;
      // console.log(notes)

      res.status(200).json(result.rows);

      // Return the notes as a JSON response
      // return NextResponse.json({ notes }, { status: 200 });
    
  } catch (error) {
    console.error('Error fetching notes:', error);
    // Return an error response
    res.status(500).json({ error: 'Internal Server Error Slap Fsce AAhhhhhhh' })
    // return NextResponse.json({ error: 'Internal Server Error Slap Fsce AAhhhhhhh' }, { status: 500 });
  }
}