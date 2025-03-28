
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import school1 from '../../assets/school1.jpeg'
import bg from '../../assets/bg.webp'
function StudentAdm() {
  const theme = useTheme();
  return (
    <>

      <section>
        <div className="container" style={{backgroundColor:'white',borderRadius:'20px'}}>
          <div className="row">
          <div className="col-md-4">
            <div>
              <h1>Hello, <em>Admin</em> 👋</h1>
              <p>Kunnamangalam HSS</p>

              <br />
              <p>Oversee school operations, track student and teacher activities, and ensure smooth management. 🏫</p>
              
            </div>

            <div>
              <h3>Profile</h3>
              <div 
  style={{
    width: '100%', 
    height: '150px', 
    borderRadius: '20px', 
    objectFit: 'cover', 
    backgroundImage: `url(${bg})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
                {/* <div className="container">
                  <div className="col-md-5">

                  </div>
                </div> */}
              </div>
            </div>

            <div>
              <h3>Events</h3>
              <br />
              <div style={{height:'100px',width:'420px',border:'2px solid black',borderRadius:'10px',backgroundColor:'lightgrey'}}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-2">
                      <div style={{height:'80px',width:'80px',border:'2px solid black',borderRadius:'10px',backgroundColor:'black',marginTop:'10px',color:'white'}}>
                        <h2 className='d-flex justify-content-center'>12</h2>
                        <p className='d-flex justify-content-center'>Wed</p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <div className="mt-2">
                      <h5 className='d-flex justify-content-center text-center'>Dance Competion</h5>
                      <p className='d-flex justify-content-center'>Auditorium</p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <button className='mt-4' style={{color:'white',backgroundColor:'darkblue',height:'40px',width:'100px',borderRadius:'10px'}}>
                        view
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-md-8">
            <div style={{paddingTop:'20px'}}>
            <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <div className="row">
            <div className="col-md-4">
            <Typography component="div" variant="h5">
            No.of Students in Institute
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            150
          </Typography>
            </div>


            <div className="col-md-4">
            <Typography component="div" variant="h5">
            No.of Teachers in Institute
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            20
          </Typography>
            </div>




            <div className="col-md-4">
            <Typography component="div" variant="h5">
            No.of current Classes
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            12
          </Typography>
            </div>
          </div>
        </CardContent>
       
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={school1}
        alt="Live from space album cover"
      />
    </Card>
            </div>





<div className="row" style={{paddingTop:'20px'}}>
  <div className="col-md-6">
    chart- classes
  </div>

  <div className="col-md-6">
    chart- Subjects
  </div>
</div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StudentAdm