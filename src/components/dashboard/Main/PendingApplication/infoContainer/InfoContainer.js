import {Card, CardContent, Typography, useMediaQuery} from "@material-ui/core";
import {useStyles} from "./style";
import {useTheme} from "@material-ui/core/styles";
export default function InfoContainer({active,title}) {
    const theme = useTheme();
    const classes = useStyles();

    const isXs = useMediaQuery(theme.breakpoints.down("xs"));

        return(
            <div style={{position:"relative",cursor:'pointer'}}>
                <Card style={active?{background:'#ED2147'}:{}} className="infoBox_main">
                    <CardContent>
                        <Typography className={active?classes.infoBoxNumberActive:classes.infoBoxNumber}>
                            10
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