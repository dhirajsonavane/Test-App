import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    padding: 10
  }
});

const UserList = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    async function fetchData() {
      let url = "https://localhost:5001/api/Monitoring";
      const res = await fetch(url, {
        method: 'GET',
        headers: new Headers({
          'x-api-key': 'eyJhbGciOiPJSzI1NiIsInR5cCI6IkpXVCJ1.eyJzdWIiOiJlY2IzMzBjNi0xYjNhLTRmNDYtYWUzMC01MoP',
          'Content-Type': 'application/json'
        })
      });

      res
        .json()
        .then((res) => {
          setPlanets(res)
          console.log(res);
        })
        .catch((err) => setErrors(err));
    }
    fetchData();
  }, []);

  const classes = useStyles();

  return !planets.length ? (
    <h1>Loading...</h1>
  ) : (
      <Container className={classes.container}>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Image ID</TableCell>
                <TableCell>Vehicle ID</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Vehicle Type</TableCell>
                <TableCell>Latitude</TableCell>
                <TableCell>Longitude</TableCell>
                <TableCell>Speed</TableCell>
                <TableCell>Acceleration</TableCell>
                <TableCell>X Coordinate (image)</TableCell>
                <TableCell>Y Coordinate (image)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                planets.map((planet) => (
                  <TableRow key={planet.imageId}>
                    <TableCell component="th" scope="row">
                      {planet.imageId}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {planet.vehicleId}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {planet.time}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {planet.vehicleType}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {planet.latitude}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {planet.longitude}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {planet.speed}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {planet.acceleration}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {planet.x_Coordinate}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {planet.y_Coordinate}
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
};

export default UserList;
