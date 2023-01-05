import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import nepal from "../images/card/nepal.png";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 300, justifyContent: "center", borderRadius: "20px"}} style={{bgColor:"#D0DDFC"}} style={{background: "D0DDFC"}}>

            <CardContent justifyContent="center" display="flex" >
                <Typography alignContent="center" justifyContent="center" display="flex" color="text.secondary">
                    Domenstic Flights
                </Typography>

                <img src={nepal} width="100%" />
                <Typography variant="body2" fontSize="13px" fontWeight="bold" color="black" pt={2} alignContent="center" justifyContent="center" display="flex">
                    INSIDE: Big Discounts on Flights, Hotels, Holidays
                </Typography>
                <Typography variant="body2" fontSize="9px" color="text.secondary" alignContent="center" justifyContent="center" display="flex">
                    Grab now and enjoy big savings on your dream trip.
                </Typography>
                <Button variant="contained" disableElevation justifyContent="center" display="block">
                    submit
                </Button>
            </CardContent>
        </Card>
    );
}