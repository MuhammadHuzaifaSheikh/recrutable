import {Card, CardContent, Typography, useMediaQuery} from "@material-ui/core";
import {useStyles} from "./style";
export default function InfoContainer({active,title,number,onClick}) {
    const classes = useStyles();
    return(
            <div style={{position:"relative",cursor:'pointer'}}>
                <Card onClick={onClick} style={active?{background:'#ED2147',height:150}:{height:150}}>
                    <CardContent>
                        <Typography className={active?classes.infoBoxNumberActive:classes.infoBoxNumber}>
                            {number}
                        </Typography>
                        <Typography className={active?classes.infoBox_textActive:classes.infoBox_text}>
                            {title}
                        </Typography>
                    </CardContent>


                </Card>
                {active&& <div className={classes.active_sign}/>}
            </div>
        )

}