import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./infoBox.css";

// icons
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    let init_url="https://images.unsplash.com/photo-166945'3343304-ced8306f87fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1931";

    let cold_url="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600";
    let hot_url="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600";
    let rain_url="https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600";

  // let info = {
  //   city:"Delhi",
  //   temp: 27,
  //   temp_min: 21,
  //   temp_max: 29,
  //   humidity: 56,
  //   feel_like: 12,
  //   weather: "HAZE",
  // };
  return (
    <div className="InfoBox">
      {/* <h1>{info.weather}</h1> */}
      <div className='infoContainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity>70?rain_url: info.temperature>15 ? hot_url:cold_url}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity>70?<ThunderstormIcon/>: info.temperature>15 ? <SunnyIcon/>:<AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
            <p>TEMPERATURE: {info.temp}&deg;C</p>
            <p>HUMIDITY: {info.humidity}&deg;C</p>
            <p>MIN_TEMP: {info.temp_min}</p>
            <p>MAX_TEMP: {info.temp_max}</p>
            <p>The Wheather can be described as <b>{info.weather}</b>  and feels like {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
