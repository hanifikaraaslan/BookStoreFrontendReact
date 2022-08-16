import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteOneCategory,
  getAllCategories,
} from "../../store/actions/categoryActions";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";

export default function HomeCategoryList() {
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.category);
  const categoryDispatch = useDispatch();
  useEffect(() => {
    categoryDispatch(getAllCategories());
  }, []);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Categories</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => {
              const { id, categoryName } = category;
              return (
                <TableRow key={id}>
                  <TableCell>{categoryName}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
